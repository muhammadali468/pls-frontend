"use client";
import { axios } from "@/axios";
import DefaultLayout from "@/components/dashboard/Layouts/DefaultLayout";
import { serviceDetailData } from "@/constants";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateServiceComponent = ({ res }: { res: ISERVICECATEGORY }) => {
  const router = useRouter();
  // const [data, setData] = useState<ISERVICECATEGORY | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>("");

  // useEffect(() => {
  //   if (res) setData(res);
  // }, [res]);

  // const [formData, setFormData] = useState({
  //     name: "",
  //     description: "",
  //     subServiceName: "",
  //     subServiceDescription: "",
  // });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event || !event.target) {
      return;
    }
    const selectedOption = event.target.selectedOptions[0];
    if (!selectedOption) {
      return;
    }
    const selectedId = selectedOption.getAttribute("data-id");
    setSelectedCategoryId(selectedId);
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    categoryName: "",
    serviceName: "",
    serviceDescription: "",
    serviceDetailPage: JSON.stringify(serviceDetailData)
  });

  const handleNext = () => {
    setSelectedCategoryId(selectedCategoryId);
    if (currentStep < 3) setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setSelectedCategoryId("");
    if (currentStep > 1) setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = () => {
  //   console.log("Form Submitted", formData);
  // };

  const handleSelectedCategoryName = () => {
    const name = res?.data?.allCategory?.find((category) => category.id === selectedCategoryId && selectedCategoryId);
    if (!name) {
      return "";
    }
    return name?.name as string;
  };
  const activeCategoryName = handleSelectedCategoryName();

  const handleCreateCategory = async () => {
    try {
      const res = await axios.post("/navigationPages/createCategory", {
        name: formData.categoryName as string
      });
      if (res.status === 200) {
        handleNext();
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateService = async () => {
    try {
      const res = await axios.post("/navigationPages/createService", {
        name: formData.serviceName as string,
        categoryId: selectedCategoryId && (selectedCategoryId as string),
        description: formData.serviceDescription,
        detailPage: formData.serviceDetailPage
      });
      if (res.status === 200) {
        router.push("/");
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <DefaultLayout>
      {/* <StepProgressBar
                submitBtnName="Next"
                startingStep={0}
                onSubmit={() => console.log("Form submitted")}
                steps={[
                    {
                        label: "Step 1",
                        subtitle: "10%",
                        name: "step 1",
                        content: (
                            <select onChange={handleSelectChange} name="categorySelect" id="categorySelect">
                                <option data-id="" value="new">New Category</option>
                                {res?.data?.allCategory?.map((category, i) => (
                                    <option key={i} data-id={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        ),
                    },
                    {
                        label: "Step 2",
                        subtitle: "50%",
                        name: "step 2",
                        content: <>
                            {
                                "id :" + selectedCategoryId
                            }
                        </>,
                    },
                    {
                        label: "Step 3",
                        subtitle: "100%",
                        name: "step 3",
                        content: <div>Step 3 Content</div>,
                        // Custom text for the submit button
                    },

                ]}
            /> */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Multi-Step Form</h2>

        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-6">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className="relative">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  currentStep >= step ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                }`}>
                {step}
              </div>
              <p className="text-sm text-gray-700 mt-2">
                {step === 1 && "Select Category"}
                {step === 2 && "Add Category"}
                {step === 3 && "Add Service"}
              </p>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div
          className="relative overflow-hidden transition-all duration-500"
          key={currentStep} // Ensures re-mounting for animations
        >
          {currentStep === 1 && (
            <div className="animate-slide-in">
              <h2>Select Category:</h2>
              <select
                className="outline-none w-full p-4 my-4"
                onChange={handleSelectChange}
                name="categorySelect"
                id="categorySelect">
                <option
                  data-id=""
                  value="new">
                  New Category
                </option>
                {res?.data?.allCategory?.map((category, i) => (
                  <option
                    key={i}
                    data-id={category.id}
                    value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Next
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-slide-in">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="serviceDescription"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Category Name:
                  </label>
                  <input
                    disabled={selectedCategoryId !== ""}
                    id="categoryName"
                    name="categoryName"
                    placeholder={"Enter the category name"}
                    value={activeCategoryName ? activeCategoryName : formData.categoryName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={!selectedCategoryId ? handleCreateCategory : handleNext}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Next
                  </button>
                </div>
              </form>
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-slide-in">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="serviceDescription"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Service Name:
                  </label>
                  <input
                    id="serviceName"
                    name="serviceName"
                    placeholder="Enter the service description"
                    value={formData.serviceName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="serviceDescription"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Service Description
                  </label>
                  <textarea
                    id="serviceDescription"
                    name="serviceDescription"
                    rows={4}
                    placeholder="Enter the service description"
                    value={formData.serviceDescription}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleCreateService}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CreateServiceComponent;
