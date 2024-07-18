import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { MemberCardComponent } from '../member-card/member-card.component';
import { MembersService } from '../../_services/members.service';
import { Member } from '../../_models/member';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent, AsyncPipe],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
    members$: Observable<Member[]> | undefined;

    constructor(private memberService: MembersService) {}

    ngOnInit(): void {
        this.members$ = this.memberService.getMembers();
    }
}
