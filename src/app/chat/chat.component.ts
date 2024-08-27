import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from './chat.service'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessageText: string = '';

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.loadMessages()
  }

  loadMessages(): void {
    this.chatService.getMessages().subscribe(messages => {
      this.messages = messages
    })
  }

  sendMessage(): void {
    
    const newMessage: Message = {
      user: {
        id: 123,
        username: localStorage.getItem('username') || 'Гость'
      },
      content: this.newMessageText,
      createdAt: new Date()
    }

    this.chatService.sendMessage(newMessage).subscribe(message => {
      this.messages.push(message)
      this.newMessageText = ''
    },
    error => {  
      console.error('Ошибка при отправке сообщения', error);  
    })
  }
}
