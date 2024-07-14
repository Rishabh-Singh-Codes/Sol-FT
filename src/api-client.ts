import axios from "axios";
import { Collection } from "./utils/types";

const openseaAPIKey = import.meta.env.VITE_OPENSEA_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": openseaAPIKey,
  },
};

export const getCollections = async (
  cursor?: string
): Promise<{
  collections: Collection[];
  next: string;
}> => {
  const url = cursor
    ? `https://api.opensea.io/api/v2/collections?chain=solana&limit=9&next=${cursor}`
    : "https://api.opensea.io/api/v2/collections?chain=solana&limit=9";

  const res = await axios.request({ ...options, url });

  return res.data;
};

export const getIndividualCollection = async (collectionName: string) => {
  const url = `https://api.opensea.io/api/v2/collections/${collectionName}`;

  const res = await axios.request({ ...options, url });

  return res.data;
};

export const getNFTsByCollection = async (collection: string) => {
  const url = `https://api.opensea.io/api/v2/collection/${collection}/nfts?limit=48`;

  const res = await axios.request({ ...options, url });

  return res.data;
};

export const getNFTData = async (address: string, identifier: string) => {
  const url = `https://api.opensea.io/api/v2/chain/solana/contract/${address}/nfts/${identifier}`;

  const res = await axios.request({ ...options, url });

  return res.data;
};
