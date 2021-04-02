import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Repo = {
    name: string
    full_name: string
    description: string
    html_url: string
    created_at: string
}

export type User = {
    avatar_url: string
    name: string
    login: string
    email: string
    bio: string
    twitter_username: string
    created_at: string
    html_url: string
    location: string
    repos: Repo[]
}

type SearchState = {
    value: string
    loading: boolean
    history: string[]
    user?: User
}

const initialState: SearchState = {
    value: '',
    history: [],
    loading: false
}

const search = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        updateLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload

            if(state.history.indexOf(state.value) < 0) {
                state.history.push(state.value)
            } 
        },
        updateUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    }
})


export const { updateValue, updateUser, updateLoading } = search.actions

export default search.reducer