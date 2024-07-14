import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import CollectionCard from "./CollectionCard";
import LoaderCard from "./LoaderCard";

const TopCollections = () => {
  const { data: degodsCollection, isLoading: loadingDegods } = useQuery(
    "getDegodsCollection",
    () => apiClient.getIndividualCollection("degods-solana")
  );

  const { data: yootsCollection, isLoading: loadingYoots } = useQuery(
    "getYootsCollection",
    () => apiClient.getIndividualCollection("y00ts-solana")
  );

  const { data: bearsCollection, isLoading: loadingBears } = useQuery(
    "getBearsCollection",
    () => apiClient.getIndividualCollection("okay-bears")
  );

  return (
    <div className="flex mb-10 flex-col">
      <h1 className="text-2xl font-semibold text-white mb-2">
        Top 3 Overall Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {loadingDegods ? (
          <LoaderCard />
        ) : (
          <CollectionCard data={degodsCollection} />
        )}
        {loadingYoots ? (
          <LoaderCard />
        ) : (
          <CollectionCard data={yootsCollection} />
        )}
        {loadingBears ? (
          <LoaderCard />
        ) : (
          <CollectionCard data={bearsCollection} />
        )}
      </div>
    </div>
  );
};

export default TopCollections;
