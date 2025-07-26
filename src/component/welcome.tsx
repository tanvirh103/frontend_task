export default function Welcome({ data }: { data: any }) {
  return (
    <div className="bg-gradient-to-t to-[#030117] via-[#06011f] from-[#07022a]">
      <div className="container mx-auto px-40 py-20">
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
        <p
          className="text-des-text text-sm md:text-base font-normal mt-2"
          dangerouslySetInnerHTML={{ __html: data.data.description }}
        ></p>
      </div>
    </div>
  );
}
