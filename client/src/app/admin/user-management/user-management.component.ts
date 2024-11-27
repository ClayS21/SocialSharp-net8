import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { User } from '../../_models/user';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { RolesModalComponent } from '../../modals/roles-modal/roles-modal.component';
import { initialState } from 'ngx-bootstrap/timepicker/reducer/timepicker.reducer';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {
    private adminService = inject(AdminService);
    private modalService = inject(BsModalService);
    users: User[] = [];
    bsModalRef: BsModalRef<RolesModalComponent> = new BsModalRef<RolesModalComponent>();

    ngOnInit(): void {
        this.getUsersWithRoles();
    }

    openRolesModal() {
        const initialState: ModalOptions = {
            class: 'modal-lg',
            initialState: {
                title: 'User roles',
                lists: ['Admin', 'Moderator', 'Member']
            }
        }
        this.bsModalRef = this.modalService.show(RolesModalComponent, initialState);
    }

    getUsersWithRoles() {
        this.adminService.getUserWithRoles().subscribe({
            next: users => this.users = users
        })
    }
}