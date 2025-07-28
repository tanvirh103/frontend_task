import { request } from "@/config/request";

export const getDetails = async (param?:string) => {
  const res = await request(
    { url: `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${param? `${param}`:`en`}`, method: "get", tags: ["data"] },
  );
  return res;
};
