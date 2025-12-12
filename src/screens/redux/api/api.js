import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, TOKEN } from "./Constants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers) => {
      const token = localStorage.getItem(TOKEN);
      headers.set("Authorization", "Bearer " + token);
      // headers.set("Content-Type", "multipart/form-data");
      // headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
    },
  }),
  refetchOnMountOrArgChange: true,
  tagTypes: [],
  endpoints: (builder) => ({
    // LOGIN
    login: builder.mutation({
      query: (payload) => ({
        url: URL.LOGIN,
        body: payload,
        method: "POST",
      }),
    }),

    // LOGOUT
    logout: builder.query({
      query: () => URL.LOGOUT,
    }),

    
  }),
});

export const {
  useLoginMutation,
  useLazyLogoutQuery,
} = api;
