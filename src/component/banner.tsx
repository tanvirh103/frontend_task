'use client';
import Image from "next/image";
import { useState } from "react";

export default function Banner(){
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;
return (
    <div className="w-full h-35 -mt-2 -mb-2 relative flex items-center">
      <button
        className="absolute top-2 right-2 z-10 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-full p-1"
        onClick={() => setIsVisible(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <Image
        id="banner-image-container"
        src={
          "https://cdn.10minuteschool.com/images/dasktop_banner_1753270611489.png"
        }
        //src={"https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"}
        alt={"banner School Logo"}
        fill
        className="object-contain"
      />
    </div>
  );
}
