import os
import json
import requests
from datetime import datetime
from functools import wraps
from flask import Flask, render_template, abort, send_file, request, redirect, url_for, session
from itertools import groupby
from operator import itemgetter

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'default-dev-key')


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('admin_logged_in'):
            return redirect(url_for('admin_login'))
        return f(*args, **kwargs)
    return decorated_function


def load_versions():
    return json.loads(requests.get('https://oknoweb.ru/api/versions/').content)


def get_version(version_id):
    versions = load_versions()
    return next((v for v in versions if v.get('id') == version_id), None)


def parse_date(date_str):
    date_str = date_str[0:10]
    return datetime.strptime(date_str, "%m/%d/%Y")


@app.route('/')
def main_page():
    return render_template('mainpage.html')


@app.route('/archive')
def archive_page():
    versions = load_versions()
    if not versions:
        return "Failed to load versions from JSON", 500

    # Sort by date descending
    for v in versions:
        v['_parsed_date'] = parse_date(v.get('releaseDate'))
    
    # Group by tag
    grouped = {}
    sorted_for_group = sorted(versions, key=itemgetter('tag'))
    for tag, items in groupby(sorted_for_group, key=itemgetter('tag')):
        items_list = list(items)
        items_list.sort(key=lambda x: x['_parsed_date'], reverse=True)
        grouped[tag] = items_list

    return render_template('archive.html', grouped_versions=grouped)


@app.route('/archive/<version_id>')
def version_page(version_id):
    version = get_version(version_id)
    if not version:
        abort(404)
    windows_file = version.get('downloadWindowsURL')
    linux_file = version.get('downloadLinuxURL')
    return render_template(
        'version.html',
        version=version,
        has_windows=bool(windows_file) and windows_file != "none",
        has_linux=bool(linux_file) and linux_file != "none",
    )


@app.route('/versions/<version_id>/windows')
def download_windows(version_id):
    version = get_version(version_id)
    if not version:
        abort(404)
    file_path = version.get('downloadWindowsURL')
    if file_path and file_path != "none":
        return send_file(file_path, as_attachment=True)
    abort(404)


@app.route('/versions/<version_id>/linux')
def download_linux(version_id):
    version = get_version(version_id)
    if not version:
        abort(404)
    file_path = version.get('downloadLinuxURL')
    if file_path and file_path != "none":
        return send_file(file_path, as_attachment=True)
    abort(404)


@app.route('/submit', methods=['GET', 'POST'])
def submit_game():
    if request.method == 'POST':
        # title = request.form.get('title')
        # contacts = request.form.get('contacts')
        # link = request.form.get('link')
        # info = request.form.get('additional_info')
        
        return render_template('submit.html', success=True)
    return render_template('submit.html', success=False)


@app.route('/games')
def view_games():
    # test data
    reviewed_games = [
        {"title": "game1", "link": "https://example.com/game1", "info": "Some beautiful game n1."},
        {"title": "game2", "link": "https://example.com/game2", "info": "Some beautiful game n2."}
    ]
    pending_games = [
        {"title": "game3", "info": "Some beautiful game n3."}
    ]
    
    return render_template('games.html', reviewed_games=reviewed_games, pending_games=pending_games)


@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        is_valid = (username == 'admin' and password == '12345') #test func

        if is_valid:
            session['admin_logged_in'] = True
            return redirect(url_for('admin_submit'))
        else:
            return render_template('admin_login.html', error=True)
    return render_template('admin_login.html', error=False)


@app.route('/admin/logout')
def admin_logout():
    session.pop('admin_logged_in', None)
    return redirect(url_for('admin_login'))


@app.route('/admin/submit')
@login_required
def admin_submit():
    # test data
    pending_games = [
        {"id": 1, "title": "game3", "contacts": "@tg_dev", "link": "https://example.com/game3", "info": "Some beautiful game n3."},
        {"id": 2, "title": "game4", "contacts": "email@example.com", "link": "https://example.com/game4", "info": "VERY LONG DESCRIPTION OF THE GAME, WITH LOTS OF DETAILS AND INFORMATION. THIS IS JUST A TEST TO SEE HOW IT LOOKS IN THE ADMIN PANEL."}
    ]
    return render_template('admin_submit.html', pending_games=pending_games)


@app.route('/admin/approve/<int:game_id>', methods=['POST'])
@login_required
def admin_approve(game_id):
    # approve game in db
    return redirect(url_for('admin_submit'))


@app.route('/admin/reject/<int:game_id>', methods=['POST'])
@login_required
def admin_reject(game_id):
    # reject game in db
    return redirect(url_for('admin_submit'))


if __name__ == '__main__':
    from waitress import serve
    serve(app, host="localhost", port=8080)
