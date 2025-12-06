import axios from "axios";

export const makePaymentRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337",
});