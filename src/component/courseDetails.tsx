import Image from "next/image";
import Link from "next/link";
import ToggleSection from "./toggle";
import { BlueTickIcon } from "@/svg/intro";

export default function CourseInstructor({ data }: { data: any }) {
  return (
    <div className="container mx-auto px-44 pb-16">
      <div className="max-w-[calc(100%_-_348px)] md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
        <div className="font-semibold text-3xl text-black">
          {data.data.sections
            .filter((s: any) => s.type === "instructors")
            .map((instructor: any) => (
              <div
                key={instructor.name}
                className="font-semibold text-xl md:text-2xl mt-4 mb-4"
              >
                {instructor.name}
              </div>
            ))}
        </div>
        <div className="border-border-color border rounded-lg px-4 py-4 mt-4">
          {data.data.sections
            .filter((s: any) => s.type === "instructors")
            .map((instructor: any) => (
              <div
                key={instructor.values[0]}
                className="flex gap-4 items-center"
              >
                <div className="w-[80px] h-[80px] relative">
                  <Image
                    src={instructor.values[0].image}
                    alt={"10 Minute School Logo"}
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
                <div className="items-center">
                  <p className="text-base md:text-lg font-normal hover:text-text-green">
                    {instructor.values[0].name}
                  </p>
                  <span
                    className="text-xs md:text-sm font-normal"
                    dangerouslySetInnerHTML={{
                      __html: instructor.values[0].description,
                    }}
                  ></span>
                </div>
              </div>
            ))}
        </div>
        <div className="font-semibold text-3xl text-black pt-4">
          {data.data.sections
            .filter((s: any) => s.type === "features")
            .map((instructor: any) => (
              <div
                key={instructor.name}
                className="font-semibold text-lg md:text-xl mt-4 mb-4"
              >
                {instructor.name}
              </div>
            ))}
        </div>
        {data.data.sections
          .filter((s: any) => s.type === "features")
          .map((instructor: any) => (
            <div
              key={instructor.values[0]}
              className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8"
            >
              {instructor.values.map((value: any) => (
                <div key={value.icon} className="flex gap-4 items-center">
                  <div className="w-[36px] h-[36px] relative">
                    <Image
                      src={value.icon}
                      alt={"10 Minute School Logo"}
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                  <div className="items-center">
                    <p className="text-base md:text-lg font-normal text-white">
                      {value.title}
                    </p>
                    <span
                      className="text-xs md:text-sm font-normal text-des-text"
                      dangerouslySetInnerHTML={{ __html: value.subtitle }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        <div className="bg-[url('https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png')] relative bg-cover p-6 rounded-xl mb-8 md:mb-12">
          {data.data.sections
            .filter((s: any) => s.type === "group_join_engagement")
            .map((instructor: any) => (
              <div
                key={instructor.values[0]}
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <div>
                  <div className="w-[150px] h-[60px] relative">
                    <Image
                      src={instructor.values[0].top_left_icon_img}
                      alt={"10 Minute School Logo"}
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-white text-lg md:text-xl font-semibold">
                      {" "}
                      {instructor.values[0].title}
                    </p>
                    <p
                      className="text-xs md:text-sm font-normal text-white mt-4 mb-6"
                      dangerouslySetInnerHTML={{
                        __html: instructor.values[0].description,
                      }}
                    ></p>
                    <p className="mb-4">
                      {" "}
                      <Link
                        href={instructor.values[0].cta.clicked_url}
                        className="px-4 py-4 bg-text-green rounded-lg hover:opacity-90 border-[#15803D] border-b-2 text-white text-base "
                      >
                        {instructor.values[0].cta.text}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="w-full h-full relative">
                  <Image
                    src={instructor.values[0].thumbnail}
                    alt={"10 Minute School Logo"}
                    fill
                    className="object-contain "
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="font-semibold text-3xl text-black">
          {data.data.sections
            .filter((s: any) => s.type === "pointers")
            .map((instructor: any) => (
              <div
                key={instructor.name}
                className="font-semibold text-xl md:text-2xl mt-4 mb-4"
              >
                {instructor.name}
              </div>
            ))}
        </div>
        {data.data.sections
          .filter((s: any) => s.type === "pointers")
          .map((instructor: any) => (
            <div
              key={instructor.values[0]}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 rounded-xl border-border-color border px-6 py-6 mb-2"
            >
              {instructor.values.map((value: any) => (
                <div key={value.text} className="flex gap-2">
                  <p>
                    <BlueTickIcon />
                  </p>
                  <div className="text-sm md:text-base font-normal">
                    {value.text}
                  </div>
                </div>
              ))}
            </div>
          ))}
        <div className="font-semibold text-3xl text-black pt-2">
          {data.data.sections
            .filter((s: any) => s.type === "feature_explanations")
            .map((instructor: any) => (
              <div
                key={instructor.name}
                className="font-semibold text-xl md:text-2xl mt-4 mb-4"
              >
                {instructor.name}
              </div>
            ))}
        </div>
        <div>
          {data.data.sections
            .filter((s: any) => s.type === "feature_explanations")
            .map((instructor: any, i: number = 1) => (
              <div
                key={instructor.values[0]}
                className="rounded-xl border-border-color border px-6 py-6 mb-2"
              >
                {instructor.values.map((value: any) => (
                  <div
                    key={value.id}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 "
                  >
                    <div>
                      <p className="text-base text-black font-normal">
                        {value.title}
                      </p>
                      <div className="text-[#4B5563] text-sm md:text-base font-normal mt-2">
                        {value.checklist.map((item: string, index: number) => (
                          <div key={index} className="mb-2 flex gap-2">
                            <p>
                              <BlueTickIcon />
                            </p>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full h-full relative">
                      <Image
                        src={value.file_url}
                        alt={"10 Minute School Logo"}
                        fill
                        className="object-contain "
                      />
                    </div>
                    {i === 0 && (
                      <>
                        <hr className="my-6 border-t border-gray-300 col-span-2" />
                        <p className="hidden">{(i = i + 1)}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>
        <ToggleSection data={data} />
      </div>
    </div>
  );
}
