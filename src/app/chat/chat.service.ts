import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as io from 'socket.io-client'

export interface Message {
  id: number;
  content: string;
  username: string;
  createdAt: Date;
}

interface Credentials {
    username: string;
    password: string;
  }

@Injectable({ providedIn: 'root' })
export class ChatService {
    private baseUrl = 'http://localhost:3000'

    constructor(private http: HttpClient) {}
    login(credentials: Credentials): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/login`, credentials)
    }

    register(user: Credentials): Observable<any> {
        return this.http.post(`${this.baseUrl}/user`, user);
    }

    getMessages(): Observable<Message[]> {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
        return this.http.get<Message[]>(`${this.baseUrl}/message`, { headers });
      }
    sendMessage(message: string): Observable<any> {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
        return this.http.post(`${this.baseUrl}/messages`,   
     { content: message }, { headers });
      }
}