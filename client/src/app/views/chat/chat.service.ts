import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {}

  getAnswer(question: string) {
    console.log(question)
    return this.http.post('http://127.0.0.1:8080', {question}, { headers: { Accept: 'application/json' }});
  }
}
