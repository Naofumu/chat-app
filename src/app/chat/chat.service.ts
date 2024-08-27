import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

export interface Message {
  content: string;
  createdAt: Date;
  user: {  
    id: number;  
    username: string;  
  };
}

@Injectable({ providedIn: 'root' })
export class ChatService {
    private baseUrl = 'http://localhost:3000/message'

    constructor(private http: HttpClient, private authService: AuthService) {}

    private getHeaders(): HttpHeaders {
      const token = this.authService.getToken()
      return new HttpHeaders({
      'Content-Type': 'application/json',  
      Authorization: token ? `Bearer ${token}` : '', 
      })
    }

    getMessages(): Observable<Message[]> {
        return this.http.get<Message[]>(this.baseUrl, { headers: this.getHeaders()})
      }
    sendMessage(message: Message): Observable<Message> {
      return this.http.post<Message>(this.baseUrl, message, { headers: this.getHeaders()})
      }
}