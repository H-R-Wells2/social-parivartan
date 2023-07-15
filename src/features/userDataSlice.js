import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("getUser", async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");

    try {
        const result = await responce.json();
        return result;

    } catch (error) {
        console.log(error);
        return error;
    }
});

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export default userDetail.reducer;  