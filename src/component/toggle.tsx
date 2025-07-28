"use client";
import { useState } from "react";
import { DownArrow, UpperArrow } from "@/svg/toggle";

export default function ToggleSection({ data }: any) {
  const [showfor, setShowFor] = useState(true);
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  return (
    <>
      <div className="font-semibold text-3xl text-black pt-2">
        {data.data.sections
          .filter((s: any) => s.type === "about")
          .map((instructor: any) => (
            <div
              key={instructor.name}
              className="font-semibold text-xl md:text-2xl mt-4 mb-4"
            >
              {instructor.name}
            </div>
          ))}
      </div>
      <div className="rounded-xl border-border-color border px-6 py-6 mb-2">
        {data.data.sections
          .filter((s: any) => s.type === "about")
          .map((instructor: any) => (
            <div key={instructor.values[0]}>
              {instructor.values.map((value: any, index: number) => (
                <div key={index}>
                  <div className={`flex justify-between py-3`}>
                    <span
                      className="text-sm md:text-base font-normal"
                      dangerouslySetInnerHTML={{
                        __html: value.title,
                      }}
                    ></span>
                    <p className="flex justify-end">
                      {showfor && index == 0 ? (
                        <UpperArrow setShow={setShowFor} showValue={showfor} />
                      ) : !showfor && index == 0 ? (
                        <DownArrow setShow={setShowFor} showValue={showfor} />
                      ) : (
                        ""
                      )}
                      {showCourseDetails && index == 1 ? (
                        <UpperArrow
                          setShow={setShowCourseDetails}
                          showValue={showCourseDetails}
                        />
                      ) : !showCourseDetails && index == 1 ? (
                        <DownArrow
                          setShow={setShowCourseDetails}
                          showValue={showCourseDetails}
                        />
                      ) : (
                        ""
                      )}
                      {showHelp && index == 2 ? (
                        <UpperArrow
                          setShow={setShowHelp}
                          showValue={showHelp}
                        />
                      ) : !showHelp && index == 2 ? (
                        <DownArrow setShow={setShowHelp} showValue={showHelp} />
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <div className="text-text-sec">
                    {showfor && index == 0 && (
                      <div
                        className="list-disc px-4 py-2"
                        key={`list-${value.title}`}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: value.description,
                          }}
                        ></div>
                      </div>
                    )}
                    {showCourseDetails && index == 1 && (
                      <div
                        key={`list-${value.title}`}
                        className={`"${
                          index == 1 ? "" : "list-disc"
                        } px-4 py-2"`}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: value.description,
                          }}
                        ></div>
                      </div>
                    )}
                    {showHelp && index == 2 && (
                      <div
                        className="list-disc px-4 py-2"
                        key={`list-${value.title}`}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: value.description,
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                  <hr
                    className={`${
                      index < 2
                        ? "border-b border-border-color border-dashed"
                        : "hidden"
                    }`}
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}
