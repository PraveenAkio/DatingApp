import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { NavComponent } from './nav/nav.component';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { HomeComponent } from "./home/home.component";
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        NavComponent,
        FormsModule,
        HomeComponent
        // CommonModule
        // BsDropdownModule
    ]
})

export class AppComponent implements OnInit {
    title = 'Client';

    constructor( private accountService: AccountService) { }

    ngOnInit(): void {
        this.setCurrentUser();
    }

    setCurrentUser() {
        const userString = localStorage.getItem('user');
        if (!userString) return;
        const user: User = JSON.parse(userString);
        this.accountService.setCurrentUser(user);
    }
}
