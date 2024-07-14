// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import * as apiClient from "../api-client";
// import { MdVerified } from "react-icons/md";
// import InfiniteScrollCards from "../components/InfiniteScrollCards";

// const Collection = () => {
//   const { collectionName } = useParams();

//   const { data: collection, isLoading } = useQuery("getCollectionData", () =>
//     apiClient.getIndividualCollection(collectionName || "")
//   );

//   console.log("collection", collection);

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="md:flex justify-center relative">
//         <img
//           src={collection?.banner_image_url}
//           className="w-full mx-auto -mt-20 object-cover min-h-96 max-h-96"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black w-1/6 -mt-20" />
//         <div className="absolute inset-0 bg-gradient-to-l from-black w-1/6 -mt-20 ml-auto" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black h-1/3 mt-auto" />
//       </div>

//       <div className="flex flex-col p-6 text-white -mt-20 z-10 mb-8">
//         <img
//           src={collection?.image_url}
//           className="h-20 w-20 rounded-xl object-cover mb-4"
//         />
//         <h1 className="font-semibold text-2xl mb-2">
//           {collection?.name}
//           {collection?.safelist_status === "verified" && (
//             <MdVerified className="inline ml-2 text-lg text-blue-300" />
//           )}
//         </h1>
//         {collection?.total_supply && collection?.created_date && (
//           <h2 className="text-sm mb-2">
//             Items: {collection.total_supply} | Created:{" "}
//             {collection.created_date}
//           </h2>
//         )}
//         <p>{collection?.description}</p>
//       </div>

//       {collection && <div className="px-6 w-full">
//         <InfiniteScrollCards title="NFTs" method={apiClient.getNFTsByCollection}/>
//       </div>}
//     </div>
//   );
// };

// export default Collection;
