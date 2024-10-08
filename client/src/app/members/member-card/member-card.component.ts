import { Component, Input, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/members.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent implements OnInit{

    @Input() member: Member | undefined;

    constructor(private memberService: MembersService, private toastr: ToastrService) {}

    ngOnInit(): void {
    }

    addLike(member: Member) {
        this.memberService.addLike(member.userName).subscribe({
            next: () => this.toastr.success('You have liked ' + member.knownAs)
        })
    }
}
