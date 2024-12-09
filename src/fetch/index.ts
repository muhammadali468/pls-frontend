import { BACKEND_URI } from "@/config";

export const fetchSingleServiceDetail = async (id: string) => {
  try {
    const res = await fetch(`${BACKEND_URI}/navigationPages/getSingleService`, {
      method: "GET", // Specify the HTTP method
      headers: {
        "Content-Type": "application/json" // Set headers
      },
      body: JSON.stringify({ id }) // Serialize body as JSON
    });

    if (!res.ok) {
      // Handle HTTP errors
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json(); // Parse the JSON response
    console.log(data);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred");
    }
    throw err; // Re-throw the error for further handling
  }
};
export const fetchAllServices = async () => {
  try {
    const res = await fetch(`${BACKEND_URI}/navigationPages/getAllServices`);
    if (!res.ok) {
      // Handle HTTP errors
      // throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json(); // Parse the JSON response
    console.log(data);
    return data as ISERVICEDETAIL;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      return err;
    } else {
      console.error("An unknown error occurred");
      return err;
    }
    // throw err; // Re-throw the error for further handling
  }
};
