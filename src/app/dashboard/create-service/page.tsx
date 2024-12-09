"use client";
import { axios } from "@/axios";
import DefaultLayout from "@/components/dashboard/Layouts/DefaultLayout";
import { useAppContext } from "@/context/AppContext";
import React, { useState, ChangeEvent } from "react";
// interface SubService {
//     name: string;
//     description: string;
// }

// interface FormData {
//     name: string;
//     description: string;
//     subServices: SubService;
// }
const CreateService = () => {
  // const [data, setData] = useState([]);
  const { detail } = useAppContext();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    subServiceName: "",
    subServiceDescription: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  };

  const createServicePage = async () => {
    try {
      const temp = await axios.post(
        "/navigationPages/createNavigationPage",
        {
          name: formData.name,
          subServiceTitle: formData.subServiceName,
          subServiceDescription: formData.subServiceDescription
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(temp.data);
      return temp;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        return error.message;
      } else {
        return error;
      }
    }
  };

  return (
    <DefaultLayout>
      <div className="flex">
        <form className="mx-auto p-6 bg-white shadow-lg rounded-md space-y-6">
          <div className="space-y-4 border-b pb-6">
            <h3 className="text-lg font-semibold text-gray-700">Service</h3>
            <div className="space-y-2">
              <label className="block">
                <span className="text-gray-600">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <label className="block">
                <span className="text-gray-600">Description:</span>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
            </div>
            <h4 className="text-md font-medium text-gray-600 mt-4">Sub-Services:</h4>
            <div className="space-y-2 pl-4 border-l-2 border-blue-500">
              <label className="block">
                <span className="text-gray-600">Sub-Service Name:</span>
                <input
                  type="text"
                  name="subServiceName"
                  value={formData.subServiceName}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <label className="block">
                <span className="text-gray-600">Sub-Service Description:</span>
                <textarea
                  name="subServiceDescription"
                  value={formData.subServiceDescription}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
            </div>

            <button
              type="button"
              // onClick={() => addSubService(serviceIndex)}
              className="mt-4 text-sm px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
              Add Sub-Service
            </button>
          </div>
          {/* ))} */}
          <button
            type="button"
            onClick={createServicePage}
            className="w-full text-sm px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600">
            Add Service
          </button>

          <br />
        </form>
        <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800 overflow-auto">
          {/* {JSON.stringify(data, null, 2)} */}
          {detail}
        </pre>
      </div>
    </DefaultLayout>
  );
};

export default CreateService;
