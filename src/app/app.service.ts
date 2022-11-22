import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Article } from "./article";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) { }

    getArticleData() {
        return this.http.get<Article>(`https://${environment.nasaApiUrl}/planetary/apod?api_key=${environment.nasaApiKey}`)
            .pipe(
                catchError(errorRes => {
                    return throwError(errorRes.error.error.message);
                }));
    }
}