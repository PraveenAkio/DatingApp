import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms"; // Need to Import FormsModule in every SubModules.
import { AccountService } from '../_services/account.service';
import { CommonModule } from '@angular/common'; // Need to use AsyncPipe in Nav Component.
import { Router, RouterModule } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
    model: any = {};

    constructor (public accountService: AccountService, private router: Router,
        private toastr: ToastrService) { }

    ngOnInit(): void {
    }

    login() {
        this.accountService.login(this.model).subscribe({
            next: _ => this.router.navigateByUrl('/members')
        })
    }

    logout() {
        this.accountService.logout();
        this.router.navigateByUrl('/');
    }

}
