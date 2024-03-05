// import { createSlice } from '@reduxjs/toolkit';

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//     clearUser: state => {
//       state.user = null;
//     },
//   },
// });

// export const { setUser, clearUser } = authSlice.actions;
// export const authReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    userEmail: null,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = true;
      state.userEmail = action.payload;
    },
    clearAuthenticated: state => {
      state.isAuthenticated = false;
      state.userEmail = null;
    },
  },
});

export const { setAuthenticated, clearAuthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;
