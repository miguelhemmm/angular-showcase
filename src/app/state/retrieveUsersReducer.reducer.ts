import { addUser, retrievedUserList } from './stateActions.actions';
import { createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';
import { User } from '../Shared/models';


export interface State {
  users: Array<User>;
  user: User
}

export const initialState: Array<User> = [];


export const retrieveUsersReducer = createReducer(
  initialState,
  on(retrievedUserList, (state, { users }) => users)
);
