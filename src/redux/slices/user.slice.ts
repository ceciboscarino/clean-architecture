
import { createSlice } from '@reduxjs/toolkit';
import { User, UserEmptyState } from '@/models';
import { clearLocalStorage, persistLocalStorage } from '@/Utilities';

export const keyUser = 'user';




export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : UserEmptyState,



    reducers: {
        createUser: (state, action) => {
            persistLocalStorage<User>(keyUser, action.payload);
            return action.payload;

        },
        modifyUser: (state, action) => {
            const formattedData = { ...state, ...action.payload };
            persistLocalStorage<User>(keyUser, formattedData);
            return formattedData;

        },
        resetUser: () => {
            clearLocalStorage(keyUser);
            return UserEmptyState;
        }
    }
})

export const { createUser, modifyUser, resetUser } = userSlice.actions

export default userSlice.reducer;

