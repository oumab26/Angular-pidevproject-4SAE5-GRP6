import { Component, OnInit } from '@angular/core';
import { ChatMessageDto } from '../../models/chatMessageDto';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  user:string = 'user'
  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }


  sendMessage(sendForm){
    const chatMessageDto = new ChatMessageDto(this.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }

}
