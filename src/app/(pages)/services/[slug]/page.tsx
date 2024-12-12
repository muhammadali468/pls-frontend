import { fetchSingleServiceDetail } from "@/fetch";
import ServiceDetailComponent from "../../service-details/components/ServiceDetail";

interface SingleServicePageProps {
  params: { slug: string };
}

export default async function SingleServicePage({ params }: SingleServicePageProps) {
  const { slug } = params; // Correctly destructure `params`

  try {
    const res = (await fetchSingleServiceDetail(slug)) as ISINGLESERVICE; // Fetch the service detail
    return (
      <>
        <ServiceDetailComponent singleServiceDetail={res as ISINGLESERVICE} />
      </>
    );
  } catch (err) {
    console.log(err);
    return <p>No service detail</p>;
  }
}
