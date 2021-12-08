import { createAction, props } from '@ngrx/store';
import { User } from '../Shared/models';

export const addUser = createAction(
  '[User List] Add User',
  props<{ user: User }>()
);

export const removeUser = createAction(
  '[User List] Remove User',
  props<{ user: User }>()
);

export const retrievedUserList = createAction(
  '[UserList] Retrieve Users',
  props<{ users: Array<User> }>()
)
