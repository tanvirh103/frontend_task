import Navbar from "@/component/navbar";
import Welcome from "@/component/welcome";
import { getDetails } from "@/resources/Api";


export default async function Home() {
   const data = await getDetails().catch((error) => {
    return console.log(error);
    
  });
  if (typeof data === "string") return console.log(data);

  return (
    <>
    <Navbar/>
    <Welcome data={data}/>
    </>
  );
}
