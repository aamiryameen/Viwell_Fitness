// import { apiHeaderConfiguration } from '../utils/global';
// import { EMPTY, TOKEN } from '../utils/constants'
// import axiosInstance from './Interceptor';
// import axios from 'axios';
// import { BASE_URL } from '.';
// const Api = {
//     userLogin: async function (data) {
//         console.log(data);
//         // var requestOptions = {
//         //     method: 'POST',
//         //     body: data,
//         //     redirect: 'follow'
//         // };
//         return await axios.post(`${BASE_URL}auth/login`, data, { headers: { 'Content-Type': 'application/json' } })
//         // return fetch(`${BASE_URL}auth/login`,requestOptions)
//         // return axiosInstance.post('auth/login', data,{ headers: { 'Content-Type': 'application/json' } })
//     },
//     forgetPassword: async function (data) {
//         return await axios.post(`${BASE_URL}auth/forgotPassword`, data, { headers: { 'Content-Type': 'application/json' } })
//         // return axiosInstance.post('auth/forgotPassword', data, apiHeaderConfiguration(EMPTY, EMPTY))
//     },
//     refreshToken: async function (data) {
//         return await axios.post(`${BASE_URL}auth/refreshToken`, data, { headers: { 'Content-Type': 'application/json' } })
//     },
//     userLogout: function (token) {
//         return axiosInstance.delete(`person/logout?refreshToken=${token}`)
//     },
//     resetPassword: async function (data) {
//         return await axios.post(`${BASE_URL}auth/resetPassword`, data, { headers: { 'Content-Type': 'application/json' } })
//         // return axiosInstance.get('auth/resetPassword', apiHeaderConfiguration(token, TOKEN))
//     },
//     requestOTP: async function (data) {
//         console.log(data);
//         return await axios.post(`${BASE_URL}auth/requestOtp`, data, { headers: { 'Content-Type': 'application/json' } })
//     },
//     verifyOTP: async function (data) {
//         console.log(data);
//         return await axios.post(`${BASE_URL}auth/verifyOtp`, data, { headers: { 'Content-Type': 'application/json' } })
//     },
//     changePassword: function (token) {
//         return axiosInstance.get('auth/person', apiHeaderConfiguration(token, TOKEN))
//     },
//     logoutAllDevices: function () {
//         return axiosInstance.delete(`auth/person/logoutAllDevices`)
//     }
// };
// export default Api;
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '.';
import {getLocalData, LOCAL_STORAGE_KEYS} from '../utils/localstorage';
// It is used to define our endpoints and allow to create the API slice
export const AuthApi = createApi({
  // The unique key that defines where the Redux store will store our cache.
  reducerPath: 'AuthApi',
  // The base query to request data.
  // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  // The set of operations that we want to perform against the server.
  tagTypes: ['profile'],
  endpoints: builder => ({
    userLogin: builder.mutation({
      query: data => {
        console.log('Delete ID:', data);
        return {
          url: `auth/login`,
          method: 'POST',
          body: data,
        };
      },
    }),
    requestOtp: builder.mutation({
      query: data => {
        console.log('Delete ID:', data);
        return {
          url: `auth/requestOtp`,
          method: 'POST',
          body: data,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: data => {
        console.log('Delete ID:', data);
        return {
          url: `auth/resetPassword`,
          method: 'POST',
          body: data,
        };
      },
    }),
    forgetPassword: builder.mutation({
      query: data => {
        console.log('Delete ID:', data);
        return {
          url: `auth/forgetPassword`,
          method: 'POST',
          body: data,
        };
      },
    }),
    verifyOtp: builder.mutation({
      query: data => {
        console.log('Delete ID:', data);
        return {
          url: `auth/verifyOtp`,
          method: 'POST',
          body: data,
        };
      },
    }),
    changePassword: builder.mutation({
      query: (data, token) => {
        console.log('Delete ID:', data);
        return {
          url: `/auth/person/changePassword`,
          method: 'PATCH',
          body: data.changePassword,
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + data.token,
          },
        };
      },
    }),
    refreshToken: builder.mutation({
      query: data => {
        console.log('Delete ID:', data);
        return {
          url: `auth/refreshToken`,
          method: 'POST',
          body: data,
        };
      },
    }),
    logout: builder.mutation({
      query: token => {
        console.log('Delete ID:', token);
        return {
          url: `person/logout?refreshToken=${token}`,
          method: 'DELETE',
        };
      },
    }),
    logoutAllDevices: builder.mutation({
      query: token => {
        console.log('Delete ID:', token);
        return {
          url: `auth/person/logoutAllDevices`,
          method: 'DELETE',
        };
      },
    }),
    getProfile: builder.query({
      query: token => {
        console.log('token : ', token);
        return {
          url: `auth/person/profile`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        };
      },
    }),
    updateEmail: builder.mutation({
      query: data => {
        return {
          url: `auth/person/updateEmail?newEmail=${data.newEmail}`,
          method: 'PATCH',
          headers: {
            Authorization: 'Bearer ' + data.token,
          },
        };
      },
    }),
    updateEmployee: builder.mutation({
      query: data => {
        console.log('Data', data);
        return {
          url: 'auth/person/updateEmployee',
          method: 'PATCH',
          body: data.employeeInfo,
          headers: {
            Authorization: 'Bearer ' + data.token,
          },
        };
      },
    }),
  }),
 
});
// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useUserLoginMutation,
  useUpdateEmailMutation,
  useLogoutMutation,
  useLogoutAllDevicesMutation,
  useVerifyOtpMutation,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useRequestOtpMutation,
  useRefreshTokenMutation,
  useResetPasswordMutation,
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useUpdateEmployeeMutation,
} = AuthApi;









