import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import CollectionCard from "./CollectionCard";
import LoaderCard from "./LoaderCard";

const TopArtCollections = () => {
  const { data: chillchatCollection, isLoading: loadingChillhat } = useQuery(
    "chillchatCollection",
    () => apiClient.getIndividualCollection("chillchat")
  );

  const { data: foxDensCollection, isLoading: loadingFoxDens } = useQuery(
    "foxDensCollection",
    () => apiClient.getIndividualCollection("famous-fox-dens")
  );

  const { data: golemsCollection, isLoading: loadingGolems } = useQuery(
    "golemsCollection",
    () => apiClient.getIndividualCollection("rude-golems")
  );

  return (
    <div className="flex mb-10 flex-col">
      <h1 className="text-2xl font-semibold text-white mb-2">
        Top 3 Art Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {loadingChillhat ? (
          <LoaderCard />
        ) : (
          <CollectionCard data={chillchatCollection} />
        )}
        {loadingFoxDens ? (
          <LoaderCard />
        ) : (
          <CollectionCard data={foxDensCollection} />
        )}
        {loadingGolems ? (
          <LoaderCard />
        ) : (
          <CollectionCard data={golemsCollection} />
        )}
      </div>
    </div>
  );
};

export default TopArtCollections;
