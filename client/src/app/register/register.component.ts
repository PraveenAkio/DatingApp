import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
    @Output() cancelRegister = new EventEmitter();
    model: any = {}

    constructor(private accountService: AccountService, private toastr: ToastrService) {}

    ngOnInit(): void {}

    register() {
        this.accountService.register(this.model).subscribe({
            next: () => {
                this.cancel();
            },
            error: error => {
                this.toastr.error(error.error.errors.Password[0]);
                console.log(error);
            }
        })
    }

    cancel() {
        this.cancelRegister.emit(false);
    }
}
