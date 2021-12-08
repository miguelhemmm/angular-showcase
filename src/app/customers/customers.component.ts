import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../Shared/models';
import { UIService } from '../Shared/ui.service';
import { selectUser } from '../state/selectors';
import { retrievedUserList, addUser, removeUser } from '../state/stateActions.actions';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  users: User[] = [];
  users$: Observable<User[]> = this.store.select(selectUser);

  constructor(private uiService: UIService, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(users => {
      this.users = users;
    });

    if (!this.users.length) {
      this.uiService.getUsers().subscribe(user => {
        const users = [];
        users.push(user)
        this.store.dispatch(retrievedUserList({users}))
      })
    }

  }

  onAdd() {
    this.uiService.getUsers().subscribe(user => {
      console.log(user)
      this.store.dispatch(addUser({ user }))
    })
  }

  onRemove(user: any) {
    this.store.dispatch(removeUser({ user }))
  }

  signUp() {
    this.router.navigate(['/signup']);

  }

}
