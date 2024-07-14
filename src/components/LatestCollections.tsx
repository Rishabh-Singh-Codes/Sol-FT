import * as apiClient from "../api-client";
import CollectionCard from "../components/CollectionCard";
import { useInfiniteQuery } from "react-query";
import { Collection } from "../utils/types";
import { useCallback, useRef } from "react";

const LatestCollections = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      "getCollections",
      ({ pageParam = undefined }) => apiClient.getCollections(pageParam),
      {
        getNextPageParam: (lastpage) => lastpage.next || undefined,
      }
    );

  const observer = useRef<IntersectionObserver | null>();
  const lastCollectionObserver = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading || isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, isFetchingNextPage, fetchNextPage, hasNextPage]
  );
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold text-white">Latest Collections</h1>
      <div
        className={`grid md:grid-cols-3 gap-12 mb-12 ${
          data?.pages && data.pages.length > 0 ? "block" : "hidden"
        }`}
      >
        {data?.pages.map((page) =>
          page.collections.map((collection: Collection, index: number) => {
            if (page.collections.length === index + 1) {
              return (
                <CollectionCard
                  ref={lastCollectionObserver}
                  data={collection}
                  key={collection.opensea_url}
                />
              );
            } else {
              return (
                <CollectionCard
                  data={collection}
                  key={collection.opensea_url}
                />
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default LatestCollections;
