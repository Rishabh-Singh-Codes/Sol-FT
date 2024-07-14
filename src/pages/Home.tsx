import LoaderCard from "../components/LoaderCard";
import { BackgroundBeams } from "../components/ui/background-beams";
import solana from "../../public/solanaLogo.svg";
import TopCollections from "../components/TopCollections";
import TopArtCollections from "../components/TopArtCollections";
import TopGamingCollections from "../components/TopGamingCollections";
import LatestCollections from "../components/LatestCollections";

const Home = () => {

  const loaderCards = Array.from({ length: 9 }, (_, idx) => (
    <LoaderCard key={idx} />
  ));

  return (
    <div className="px-6 pb-6">
      <BackgroundBeams />
      <div className="flex justify-center">
        <h2 className="font-semibold text-sm md:text-2xl my-10 text-white flex items-center">
          Welcome to Sol-FT, home of NFTs on &nbsp;
          <img src={solana} className="h-5 items-center" />
        </h2>
      </div>

      <TopCollections />
      <TopArtCollections />
      <TopGamingCollections />
      <LatestCollections />

      <div className="grid md:grid-cols-3 gap-12 mt-4">{loaderCards}</div>
    </div>
  );
};

export default Home;
