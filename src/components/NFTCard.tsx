import { Link } from "react-router-dom";
import { Collection } from "../utils/types";
import { forwardRef } from "react";
import { MdVerified } from "react-icons/md";

type Props = {
  data: Collection;
};

const NFTCard = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {

  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl">
      <img
        src={
          data.image_url.length > 0
            ? data.image_url
            : "https://static-00.iconduck.com/assets.00/image-not-found-01-icon-2048x2048-95wsi7vg.png"
        }
        className="w-full h-80 object-cover rounded-2xl hover:scale-110 transition-all ease-in-out"
      />
      <Link
        to={`/collection/${data.collection}`}
        className="absolute cursor-pointer group bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-2xl hover:h-full hover:bg-opacity-60 transition-colors ease-in-out flex flex-col"
      >
        <span className="text-white font-bold tracking-tight text-3xl block flex-1 group-hover:hidden">
          {data.name.length > 15 ? data.name.slice(0, 15) + " ..." : data.name}
          {data.safelist_status === "verified" && (
            <MdVerified className="inline ml-2 text-lg text-blue-300" />
          )}
        </span>
        <span className="text-white font-bold tracking-tight text-3xl hidden flex-1 group-hover:block">
          {data.name}
          {data.safelist_status === "verified" && (
            <MdVerified className="inline ml-2 text-lg text-blue-300" />
          )}
        </span>
        {data.total_supply && (
          <span className="text-white font-bold tracking-tight text-lg hidden group-hover:block">
            Items: {data.total_supply}
          </span>
        )}
        {data.created_date && (
          <span className="text-white font-bold tracking-tight text-lg hidden group-hover:block">
            Created: {new Date(data.created_date || "").toLocaleDateString()}
          </span>
        )}
        <span className="text-white font-bold tracking-tight text-base hidden group-hover:block mt-4">
          {data.description.length > 100
            ? data.description.slice(0, 100) + " ..."
            : data.description}
        </span>
      </Link>
    </div>
  );
});

export default NFTCard;
