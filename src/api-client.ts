import axios from "axios";

const openseaAPIKey = import.meta.env.VITE_OPENSEA_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": openseaAPIKey,
  },
};

export const getCollections = async () => {
  const url = "https://api.opensea.io/api/v2/collections?chain=solana&limit=27";

  const res = axios.request({ ...options, url });

  return res;
};
