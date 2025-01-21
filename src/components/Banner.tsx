import React from "react";
import { BannerData } from "../../types";
import { getBannersData } from "@/lib/getData";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Banner = async () => {
  const banners: BannerData[] = await getBannersData();
  const singleBanner = banners[0];

  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center px-6 md:px-12">
      <div className="text-center md:text-left md:flex md:items-center md:justify-between w-full max-w-7xl">
        
        <div className="md:w-1/2 space-y-4">
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm mt-4">
            
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 relative mt-8 md:mt-0">
          
          <div className="relative">
            
            {singleBanner?.image && (
              <Image
                width={1920}
                height={1080}
                src={urlFor(singleBanner?.image)?.url()}
                alt={singleBanner?.title}
                className="object-cover w-full h-full"
                priority
              />
            )}
          </div>
         
          <div className="absolute top-0 right-4 w-6 h-6 bg-black rotate-45 transform"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-black rotate-45 transform"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
