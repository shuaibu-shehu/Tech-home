import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export const ListingCard = ({ listing }) => {
  return (
    <div className="bg-gray-300  shadow-lg rounded-lg w-full sm:w-[320px] flex flex-col gap-4 ">
      <Link
        className="flex overflow-hidden rounded-lg flex-col"
        to={`/listing/${listing._id}`}
      >
        <img
          className="hover:scale-105 transition-scale duration-300 h-[360px] sm:h-64 w-full  object-cover"
          src={listing.imageUrls[0]}
          alt="listing"
        />
        <div className="px-3 my-4 flex flex-col gap-2">
          <p className=" text-xl line-clamp-1 font-semibold truncate">{listing.name}</p>
          <p className="flex">
            <span className="my-[5px] text-green-900">
              <MdLocationOn />
            </span>{" "}
            {listing.address}
          </p>
          <p className=" line-clamp-1">{listing.description}</p>
          <p className="font-bold bg-emerald-900 min-w-[150px] text-center rounded-lg text-white text-lg">{listing.regularPrice}$ price</p>
          <p className="font-bold bg-red-600 min-w-[150px] text-center rounded-lg text-white text-lg">{listing.discountPrice}$ discount</p>
        </div>
      </Link>
    </div>
  );
};
