import { BACKEND_URI } from "@/config";

export const fetchSingleServiceDetail = async (slug: string) => {
  try {
    const res = await fetch(`${BACKEND_URI}/navigationPages/fetchSingleServiceDetail/${slug}`, {
      method: "GET", // Specify the HTTP method
      headers: {
        "Content-Type": "application/json" // Set headers
      }
    });

    if (!res.ok) {
      // Handle HTTP errors
      return "Something went wrong";
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
    const res = await fetch(`${BACKEND_URI}/navigationPages/fetchAllServices`, {
      cache: "no-store"
    });
    if (!res.ok) {
      // Handle HTTP errors
      // throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json(); // Parse the JSON response
    console.log("data", data);
    return data as ISERVICE;
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
export const fetchAllCategories = async () => {
  try {
    const res = await fetch(`${BACKEND_URI}/navigationPages/fetchAllCategory`, {
      cache: "no-store"
    });
    if (!res.ok) {
      // Handle HTTP errors
      // throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json(); // Parse the JSON response
    return data as ISERVICECATEGORY;
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
