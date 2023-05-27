import Link from "next/link";
import React from "react";

const MyHome = () => {
  return (
    <div className="lg:flex-row flex flex-col items-center justify-center p-8 gap-5">
      <div>
        <img
          className="w-[500px] rounded"
          src={
            "https://realtor.vercel.app/_next/image?url=https%3A%2F%2Fbayut-production.s3.eu-central-1.amazonaws.com%2Fimage%2F145426814%2F33973352624c48628e41f2ec460faba4&w=640&q=75"
          }
          alt="Rent Home"
        />
      </div>

      <div className="w-[100%] flex flex-col justify-center sm:w-[500px]">
        <p className="text-gray-400 text-sm font-bold mb-1">RENT A HOME</p>
        <p className="text-4xl font-bold mb-3">Rental Homes for Everyone</p>
        <p className="text-xl font-light mb-3">
          Explore from Apartments, builder floors, villas and more
        </p>
        <Link
          className="py-2 px-3 rounded font-bold bg-gray-200 hover:bg-gray-300 w-fit"
          href="/search?purpose=for-rent"
        >
          Explore Renting
        </Link>
      </div>
    </div>
  );
};

export default MyHome;
