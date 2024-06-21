import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms"; // Need to Import FormsModule in every SubModules.
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { CommonModule } from '@angular/common'; // Need to use AsyncPipe in Nav Component.

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
    model: any = {};

    constructor (public accountService: AccountService) { }

    ngOnInit(): void {
    }

    login() {
        this.accountService.login(this.model).subscribe({
            next: response => {
                console.log(response);
            },
            error: error => console.log(error)
        })
    }

    logout() {
        this.accountService.logout();
    }

}
