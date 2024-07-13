import { useEffect, useState } from "react";
import { getCollections } from "./api-client";

type Collection = {
  opensea_url: string;
  image_url: string;
}

function App() {
  const [collections, setCollections] = useState<Collection[]>([]);

  const getSolanaCollections = async () => {
    const res = await getCollections();
    console.log("res", res);
    setCollections(res.data.collections);
  };

  useEffect(() => {
    getSolanaCollections();
  }, []);

  return (
    <div className="container">
      <h1 className="font-bold text-3xl text-center">Sol-FT</h1>
      <h2 className="font-bold text-xl text-center mb-10">Home of NFTs on Solana</h2>

      {collections.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map(collection => (
            <div className="flex flex-col items-center" key={collection.opensea_url}>
              <img src={collection.image_url} className="w-full h-80 object-cover rounded-2xl" />
            </div>
          ))}
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}

export default App;
