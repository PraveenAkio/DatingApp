import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../../_services/message.service';
import { Message } from '../../_models/message';
import { TimeagoModule } from 'ngx-timeago';
import { NgForm } from '@angular/forms';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-member-messages',
  standalone: true,
  imports: [TimeagoModule, FormsModule],
  templateUrl: './member-messages.component.html',
  styleUrl: './member-messages.component.css'
})
export class MemberMessagesComponent implements OnInit{
    @ViewChild('messageForm') messageForm?: NgForm
    @Input() username?: string;
    @Input() messages: Message[] = [];
    messageContent = '';

    constructor(private messageService: MessageService) { }
    ngOnInit(): void {
    }

    sendMessage() {
        if (!this.username) return;
        this.messageService.sendMessage(this.username, this.messageContent).subscribe({
            next: message => {
                this.messages.push(message);
                this.messageForm?.reset();
            }
        })
    }
}
