import { Component, Input, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Member } from '../../_models/member';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent implements OnInit{

    @Input() member: Member | undefined;

    ngOnInit(): void {
    }
}
