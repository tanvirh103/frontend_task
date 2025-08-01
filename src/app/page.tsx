import Banner from "@/component/banner";
import CourseInstructor from "@/component/courseDetails";
import Welcome from "@/component/welcome";
import { getDetails } from "@/resources/Api";

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang || 'en';
  const data = await getDetails(lang).catch((error) => {
    return console.log(error);
  });

  return (
    <>
      <Banner />
      <Welcome data={data} />
      <CourseInstructor  data={data}/>
    </>
  );
}
