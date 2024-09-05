import { Component, OnInit } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from "@angular/forms";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Member } from '../_models/member';
import { MembersService } from '../_services/members.service';
import { MemberCardComponent } from "../members/member-card/member-card.component";
import { Pagination } from '../_models/pagination';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [ButtonsModule, FormsModule, MemberCardComponent, PaginationModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit{
    members: Member[] | undefined;
    predicate = 'liked';
    pageNumber = 1;
    pageSize = 5;
    pagination: Pagination | undefined;

    constructor(private memberService: MembersService) {}

    ngOnInit(): void {
        this.loadLikes();
    }

    loadLikes() {
        this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe({
            next: response => {
                this.members = response.result;
                this.pagination = response.pagination;
            }
        })
    }

    pageChanged(event: any) {
        if (this.pageNumber !== event.page) {
            this.pageNumber = event.page;
            this.loadLikes();
        }
    }
}
