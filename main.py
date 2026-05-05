import json
import requests
from datetime import datetime
from flask import Flask, render_template, abort, send_file
from itertools import groupby
from operator import itemgetter


app = Flask(__name__)



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



if __name__ == '__main__':
    app.run(debug=True)
