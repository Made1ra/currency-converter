export const BASE_URL = "https://api.exchangerate.host";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const ACCESS_KEY = `access_key=${API_KEY ?? ""}`;

export const ONE_MINUTE = 60 * 1000;
