import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { Pagination } from '../_models/pagination';
import { MessageService } from '../_services/message.service';
import { FormsModule } from "@angular/forms";
import { TitleCasePipe } from '@angular/common';
import { TimeagoModule } from 'ngx-timeago';
import { ButtonsModule } from 'ngx-bootstrap/buttons'; // to use default cotainer for Button.
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from "@angular/router"; // to use Router link on html.

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule, TitleCasePipe, TimeagoModule, ButtonsModule, PaginationModule, RouterModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
    messages?: Message[];
    pagination?: Pagination;
    container = 'Unread';
    pageNumber = 1;
    pageSize = 5;
    loading = false;

    constructor(private messageService: MessageService) { }

    ngOnInit(): void {
        this.loadMessages();
    }

    loadMessages() {
        this.loading = true;
        this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe({
            next: response => {
                this.messages = response.result;
                this.pagination = response.pagination;
                this.loading = false;
            }
        })
    }

    deleteMessage(id: number) {
        this.messageService.deleteMessage(id).subscribe({
            next: () => this.messages?.splice(this.messages.findIndex(m => m.id === id), 1)
        })
    }

    pageChanged(event: any) {
        if (this.pageNumber !== event.page) {
            this.pageNumber = event.page;
            this.loadMessages();
        }
    }

}
