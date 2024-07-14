import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import CollectionCard from "./CollectionCard";
import LoaderCard from "./LoaderCard";

const TopGamingCollections = () => {
  const { data: orcsCollection, isLoading: loadingOrcs } = useQuery(
    "orcsCollection",
    () => apiClient.getIndividualCollection("the-orcs")
  );

  const { data: photoCollection, isLoading: loadingPhoto } = useQuery(
    "photoCollection",
    () => apiClient.getIndividualCollection("photo-finish-live")
  );

  const { data: puppyCollection, isLoading: loadingPuppy } = useQuery(
    "puppyCollection",
    () => apiClient.getIndividualCollection("solana-puppy-pound")
  );

  return (
    <div className="flex mb-10 flex-col">
      <h1 className="text-2xl font-semibold text-white mb-2">
        Top 3 Gaming Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {loadingOrcs ? (
          <LoaderCard />
        ) : (
          <CollectionCard data={orcsCollection} />
        )}
        {loadingPhoto ? (
          <LoaderCard />
        ) : (
          <CollectionCard data={photoCollection} />
        )}
        {loadingPuppy ? (
          <LoaderCard />
        ) : (
          <CollectionCard data={puppyCollection} />
        )}
      </div>
    </div>
  );
};

export default TopGamingCollections;
