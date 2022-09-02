import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserInfo } from 'src/models/user-info';

@Injectable({
    providedIn: 'root'
 })
export class UserInfoService {
    constructor(
        private http: HttpClient) { }

    saveUserInfo(payload: IUserInfo): Observable<void> {
        return this.http.post<void>(`https://localhost:5001/UserInfo`, payload);
    }
}
