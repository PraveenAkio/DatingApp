import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms"; // Need to Import FormsModule in every SubModules.
import { CommonModule } from '@angular/common'; // Need to use AsyncPipe in Nav Component.
import { Router, RouterModule } from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

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
