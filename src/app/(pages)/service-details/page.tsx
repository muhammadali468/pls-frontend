import { fetchAllServices } from "@/fetch";
import ServiceDetailComponent from "./components/ServiceDetail";

const ServiceDetail = async () => {
  let res: ISINGLESERVICE | null = null;

  try {
    res = (await fetchAllServices()) as ISINGLESERVICE;
    console.log("Response:", res);
  } catch (err) {
    console.log("Error fetching services:", err);
    return <p>Error loading service details.</p>;
  }

  if (!res || !res.data) {
    return <p>No service details available.</p>;
  }

  return (
    <>
      <ServiceDetailComponent singleServiceDetail={res as ISINGLESERVICE} />
    </>
  );
};

export default ServiceDetail;
