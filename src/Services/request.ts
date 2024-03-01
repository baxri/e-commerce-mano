import axios from "axios";
import ms from "ms";

import merge from "lodash/merge";

import { getItToken } from "Services/Store/session";

const request = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  // timeout: ms("5s"),
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.EXPO_PUBLIC_AUTHORIZATION,
    StoreID: process.env.EXPO_PUBLIC_STORE_ID,
    UserAddressID: process.env.EXPO_PUBLIC_USER_ADDRESS_ID,
  },
});

// const request = axios.create({
//   baseURL: "https://staging-api.manoapp.com/api/v1",
//   // timeout: ms("5s"),
//   headers: {
//     Authorization: null,
//     StoreID: process.env.EXPO_PUBLIC_STORE_ID,
//   },
// });

export default request;
