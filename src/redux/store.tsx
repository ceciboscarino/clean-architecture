import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from './slices/user.slice'
import { User } from '../models';

export interface AppStore {
    user: User;

}

export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer,
    }
});

