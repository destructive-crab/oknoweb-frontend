import { Observable, map } from "rxjs"
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SubmitInfo, SubmitPayload, TagCategoryInfo, TagInfo } from "../models/submit.model";

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  constructor(private http: HttpClient) {}

  apiUrl: string = "/api";

  submitNew(payload: SubmitPayload): Observable<SubmitInfo>
  {
    return this.http.post<SubmitInfo>(this.apiUrl + '/submissions', payload);
  }

  getSubmissions(): Observable<SubmitInfo[]>
  {
    return this.http.get<SubmitInfo[]>(this.apiUrl + "/submissions");
  }

  getSubmissionsCount(): Observable<number>
  {
    return this.http.get<number>(this.apiUrl + "/submissions/verified/count");
  }

  getSubmission(id: string): Observable<SubmitInfo>
  {
    return this.http.get<SubmitInfo>(this.apiUrl + "/submissions/" + id);
  }

  getCategories(): Observable<TagCategoryInfo[]>
  {
    return this.http.get<TagCategoryInfo[]>(this.apiUrl + "/tags/categories");
  }

  getCategoriesNotPanelOnly(): Observable<TagCategoryInfo[]>
  {
    return this.http.get<TagCategoryInfo[]>(this.apiUrl + "/tags/categories/notPanelOnly");
  }

  getTags(): Observable<TagInfo[]>
  {
    return this.http.get<TagInfo[]>(this.apiUrl + "/tags");
  }

  getTagsInCategory(category:string): Observable<string[]>
  {
    return this.http.get<string[]>(this.apiUrl + "/tags/categories/" + category)
  }

  getSubmissionRating(id: string): Observable<number>
  {
    return this.getSubmission(id).pipe(map(submission => submission.rating));
  }
}
