"use client";
import { LangIcon, PhoneIcon, SearchIcon } from "@/svg/intro";
import Image from "next/image";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [showLang, setShowLang] = useState("বাং");
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", value);
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="w-full sticky top-0 bg-white px-4 py-2 border-border-color border-b z-100">
      <div className="container mx-auto flex justify-between px-20">
        <div className="flex gap-4 items-center">
          <div className="w-[100px] aspect-[6/3] relative flex items-center">
            <Image
              src={"https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"}
              alt={"10 Minute School Logo"}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative">
            <input
              type="text"
              className="rounded-full w-3xs h-11 border-border-color border pl-10 outline-none text-sm px-4"
              placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
            />
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <p
            onClick={() => {
              handleChange(showLang === "বাং" ? "bn" : "en");
              setShowLang(showLang === "বাং" ? "En" : "বাং");
            }}
            className="items-center text-center w-12 h-8 border-border-color border flex cursor-pointer"
          >
            <LangIcon />
            <span className="text-sm font-normal">{showLang}</span>
          </p>
          <p className="items-center text-text-green flex gap-1">
            <PhoneIcon />
            <span>16910</span>
          </p>
          <p className="px-6 py-1.5 bg-text-green text-white font-medium text-sm rounded-lg">
            লগ-ইন
          </p>
        </div>
      </div>
    </div>
  );
}
