import { CanDeactivate } from '@angular/router';
import { Injectable } from "@angular/core";
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
    providedIn: 'root'
})

export class preventUnsavedChangesGuard implements CanDeactivate<MemberEditComponent> {
    canDeactivate (component: MemberEditComponent): boolean {
        if (component.editForm?.dirty) {
            return confirm('Are you sure you want to Continue ? Any unsaved changes will be lost');
        }
        return true;
    }
}
