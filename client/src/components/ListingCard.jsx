import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export const ListingCard = ({ listing }) => {

  return (
    <div className="bg-gray-300  shadow-lg rounded-lg w-full sm:w-[320px] flex flex-col gap-2 ">
      <Link
        className="flex overflow-hidden rounded-lg flex-col"
        to={`/listing/${listing._id}`}
      >
        <img
          className="hover:scale-105 transition-scale duration-300 h-[360px] sm:h-64 w-full  object-cover"
          src={listing.imageUrls[0]}
          alt="listing"
        />

        <p className=" line-clamp-1 m-3 font-semibold truncate">{listing.name}</p>
        <p className="  m-3 flex gap-1 items-center">
          <span className="text-green-900">
            <MdLocationOn />
          </span>{" "}
          {listing.address}
        </p>
        <p className="  m-3 line-clamp-1">{listing.description}</p>
      </Link>
    </div>
  );
};
