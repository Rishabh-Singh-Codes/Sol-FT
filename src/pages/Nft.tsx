/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import * as apiClient from "../api-client";
import { SiOpensea } from "react-icons/si";

const Nft = () => {
  const {
    state: { nft },
  } = useLocation();

  const { data } = useQuery("getNftData", () =>
    apiClient.getNFTData(nft.contract, nft.identifier)
  );

  return (
    <div className="flex min-h-svh px-6 text-white">
      <div className="h-5/6 flex flex-col md:flex-row mt-20 gap-12">
        <img
          src={data?.nft.display_image_url}
          className="my-auto min-h-[200px] border rounded-2xl"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">{data?.nft.name}</h1>
          <h3 className="text-lg font-semibold mb-4">
            Last Updated: {new Date(data?.nft.updated_at).toLocaleString()}
          </h3>
          <h3 className="text-lg font-semibold">Traits</h3>
          <div className="grid grid-cols-1 mb-4">
            {data?.nft.traits.map((trait: any, idx: number) => (
              <div key={idx}>
                <span>{trait.trait_type}: </span>
                <span>{trait.value}</span>
              </div>
            ))}
          </div>
          <a
            href={data?.nft.opensea_url}
            target="_blank"
            className="mt-auto mb-4 rounded-lg bg-gray-600 flex w-[200px] p-4 text-xl justify-between items-center cursor-pointer"
          >
            More Info
            <SiOpensea className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nft;
