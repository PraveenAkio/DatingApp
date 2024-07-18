import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgxSpinnerComponent } from "ngx-spinner";
import { HomeComponent } from "./home/home.component";
import { AccountService } from './_services/account.service';
import { NavComponent } from './nav/nav.component';
import { User } from './_models/user';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        NavComponent,
        FormsModule,
        HomeComponent,
        NgxSpinnerComponent
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
        // const user: User = JSON.parse(localStorage.getItem('user'));
        if (!userString) return;
        const user: User = JSON.parse(userString);
        this.accountService.setCurrentUser(user);
    }
}
