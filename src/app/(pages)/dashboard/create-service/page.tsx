import { fetchAllCategories } from "@/fetch";
import CreateServiceComponent from "./components/CreateServiceComponent";

export default async function CreateServicePage() {
  let res: ISERVICECATEGORY | null = null;
  try {
    res = (await fetchAllCategories()) as ISERVICECATEGORY;
    console.log(res.data.allCategory);
  } catch (err) {
    console.log("Error fetching services:", err);
    return <p>Error loading service details.</p>;
  }

  if (!res) {
    return <p>No services</p>;
  }
  return <CreateServiceComponent res={res as ISERVICECATEGORY} />;
}
