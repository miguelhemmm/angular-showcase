import { User } from '../Shared/models';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectUser = createFeatureSelector<Array<User>>('users');
