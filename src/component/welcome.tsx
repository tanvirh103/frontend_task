

export default function Welcome({ data }: { data: any }) {
  return (
    <div className="bg-gradient-to-t to-[#030117] via-[#06011f] from-[#07022a] relative">
      <div className="container mx-auto px-44 py-24">
        <div className="md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_248px)]">
          <h2 className="text-white text-xl md:text-4xl font-semibold">
          {data.data.title}
        </h2>
        <p className="mt-2 mb-2 flex gap-2">
          <img
            className="md:w-[130px] w-[100px]"
            src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
          ></img>
          <span className="text-white text-sm md:text-base font-normal ">
            (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </span>
        </p>
        <div
          className="text-des-text text-sm md:text-base font-normal mt-2 pr-56"
          dangerouslySetInnerHTML={{ __html: data.data.description }}
        ></div>
        </div>
      </div>
      {/* <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute translate-x-6/2 md:top-[50px] md:absolute">gggfgf</div>  */}
    </div>
  );
}
