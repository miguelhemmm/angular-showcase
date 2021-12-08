import { addUser, retrievedUserList, removeUser } from './stateActions.actions';
import { createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';
import { User } from '../Shared/models';


export interface State {
users: Array<User>;
}

export const initialState: Array<User> = [];


export const addRemoveReducer = createReducer(
  initialState,
  on(retrievedUserList, (state, { users }) => users),
  on(removeUser, (state, { user }) => state.filter(users => users.email !== user.email)),
  on(addUser, (state, { user }) => {
    const userMails = state.map(users => users.email);
    if (userMails.includes(user.email)) return state
    return [...state, user]
  })
);
