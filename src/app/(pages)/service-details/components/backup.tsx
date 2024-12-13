// "use client";
// import { axios } from "@/axios";
// 
// import EditableContent from "@/components/ui/EditableContent";
//
// import { serviceDetailData } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// const ServiceDetailComponent = ({ data }: { data: ISERVICEDETAIL }) => {
//   const [serviceDetail, setServiceDetail] = useState(data)
//   // to-do move into comp
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     websiteCategory: ""
//   });

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     // console.log("Form Submitted:", formData);
//     alert("Quote request submitted successfully!");
//   };

//   const [isEditing, setIsEditing] = useState(false);

//   const handleToggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   // const handleDummyData = () => {
//   //   setDetailPage(JSON.stringify(serviceDetailData))
//   // }
//   // todo: Add check if detail is empty
//   const handleDetailUpdate = async () => {
//     try {
//       const res = await axios.patch(
//         "/navigationPages/updateNavigationPage",
//         {
//           id: 1,
//           serviceDetail: JSON.stringify(serviceDetailData)
//         },
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       );
//       // console.log("new data", res.data);
//       return res.data;
//     } catch (error) {
//       if (error instanceof Error) {
//         console.log(error);
//         return error.message;
//       } else {
//         return error;
//       }
//     }
//   };

//   return (
//     <>
//
//       <div className="container mx-auto">
//         <button
//           className="bg-primary text-white px-8 py-4 rounded-xl mt-40"
//           onClick={handleToggleEdit}>
//           {isEditing ? "Save" : "Edit"}
//         </button>
//         {/* <button onClick={handleDummyData}>load</button> */}
//         <button
//           onClick={handleDetailUpdate}
//           className="bg-primary px-4">
//           Update
//         </button>
//       </div>
//       {/* sent to be in JSON */}
//       <div className="service-detials-area">
//         <div className="max-w-screen-2xl mx-auto px-16">
//           <Tabs className="row grid grid-cols-1 lg:grid-cols-2 gap-8 ">
//             <div className="col-lg-8 col-md-12">
//               <div className="row">
//                 <div className="col-lg-12 col-sm-12">
//                   <div className="consen-service-details-box flex flex-col">
//                     <div className="consen-service-thumb relative w-[47rem] max-w-full h-[27.5rem]">
//                       <Image
//                         src="/assets/images/resource/srd1.jpg"
//                         alt=""
//                         fill
//                         className="object-cover rounded-xl mb-10"
//                       />
//                     </div>
//                     {serviceDetail.data.allServices.serviceDetail.map((service, i) => (
//                       <TabPanel
//                         key={i}
//                         className="service-details-content">
//                         <div className="service-page-title">
//                           <EditableContent
//                             maxLength={87}
//                             id={Number(Date.now())}
//                             isEditing={isEditing}
//                             description={JSON.parse(service.serviceDetail)}
//                             className="text-4xl text-black font-bold"
//                           />
//                         </div>
//                         <div className="serivce-details-desc">
//                           <EditableContent
//                             id={Number(Date.now())}
//                             description={tab.description}
//                             isEditing={isEditing}
//                             maxLength={187}
//                           />
//                           <ul className="mt-4">
//                             {tab.features.map((feature, i) => (
//                               <li
//                                 key={i}
//                                 className="flex gap-2">
//                                 <span className="text-primary font-bold">
//                                   <EditableContent
//                                     id={Number(Date.now())}
//                                     description={feature.title}
//                                     isEditing={isEditing}
//                                     className="whitespace-nowrap"
//                                   />
//                                   &nbsp;
//                                 </span>{" "}
//                                 <span className="italic w-full">
//                                   <EditableContent
//                                     id={Number(Date.now())}
//                                     description={feature.description}
//                                     isEditing={isEditing}
//                                     className="inline"
//                                   />
//                                 </span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </TabPanel>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="grid sm:grid-cols-2 mt-8 ">
//                   {serviceDetailData.keyFeatures.map((keyFeature, i) => (
//                     <div
//                       key={i}
//                       className="col-lg-6 col-sm-6">
//                       <div className="service-details-box flex flex-col">
//                         <div className="service-details-icon relative h-20 w-20">
//                           <Image
//                             src="/assets/images/resource/details-icon1.jpg"
//                             alt="detail icon"
//                             fill
//                           />
//                         </div>
//                         <div className="service-details-title mt-2">
//                           <EditableContent
//                             id={Number(Date.now())}
//                             description={keyFeature.title}
//                             isEditing={isEditing}
//                             className="text-2xl text-black font-bold"
//                           />
//                         </div>
//                         <div className="services-detials-desc">
//                           <EditableContent
//                             id={Number(Date.now())}
//                             description={keyFeature.description}
//                             isEditing={isEditing}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="col-lg-12">
//                   <div className="service-details-content">
//                     <div className="service-page-title2">
//                       <EditableContent
//                         id={Number(Date.now())}
//                         description={"Our Web Development Process."}
//                         isEditing={isEditing}
//                         className="text-4xl font-bold text-black"
//                       />
//                     </div>
//                     <div className="serivce-details-desc mt-2">
//                       <EditableContent
//                         id={Number(Date.now())}
//                         description={`At Prime Logic Solutions, we follow a strategic, streamlined process designed to ensure that your custom web development project is completed successfully, on time, and within your budget. Our dedicated team works closely with you at every stage, ensuring clear communication and collaboration throughout the entire development cycle. We focus on providing transparent, innovative solutions tailored to your unique business needs. From initial planning to final launch and ongoing support, our goal is to help you achieve long-term success with high-quality web applications.`}
//                         isEditing={isEditing}
//                         rows={7}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-12">
//               <div className="widget-categories-box">
//                 <div className="categories-title">
//                   <h4> Web Application </h4>
//                 </div>
//                 <div className="widget-categories-menu">
//                   <TabList as="ul">
//                     {serviceDetailData.tabs.map((tab, i) => (
//                       <Tab
//                         key={i}
//                         as="li">
//                         <EditableContent
//                           id={Number(Date.now())}
//                           description={tab.name}
//                           isEditing={isEditing}
//                           maxLength={50}
//                           className="bg-transparent"
//                           rows={1}
//                         />
//                       </Tab>
//                     ))}
//                   </TabList>
//                 </div>
//               </div>
//               {/* categoreis thumb */}
//               <div className="mx-auto shadow-md rounded-lg p-6 mt-10 form-blue-bg">
//                 <h2 className="text-2xl font-bold mb-4 text-white">Get a Quote</h2>
//                 <form
//                   onSubmit={handleSubmit}
//                   className="space-y-4 ">
//                   <div>
//                     <label className="block text-white font-medium mb-1">First Name</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       placeholder="Enter your first name"
//                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                       disabled={isEditing}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-white font-medium mb-1">Last Name</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       placeholder="Enter your last name"
//                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                       disabled={isEditing}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-white font-medium mb-1">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Enter your email"
//                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                       disabled={isEditing}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-white font-medium mb-1">Contact Number</label>
//                     <input
//                       type="tel"
//                       name="contactNumber"
//                       value={formData.contactNumber}
//                       onChange={handleChange}
//                       placeholder="Enter your contact number"
//                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                       disabled={isEditing}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-white font-medium mb-1">Website Category</label>
//                     <select
//                       disabled={isEditing}
//                       name="websiteCategory"
//                       value={formData.websiteCategory}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required>
//                       <option
//                         value=""
//                         disabled>
//                         Select a category
//                       </option>
//                       <option value="ecommerce">E-commerce</option>
//                       <option value="portfolio">Portfolio</option>
//                       <option value="blog">Blog</option>
//                       <option value="business">Business</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                   <button
//                     disabled={isEditing}
//                     type="submit"
//                     className=" bg-primary text-white py-2 px-6 w-40 rounded-md hover:border-primary hover:bg-white hover:text-primary disabled:bg-gray-400 disabled:text-white disabled:border-none border transition duration-300">
//                     Get Quote
//                   </button>
//                 </form>
//               </div>
//               <div className="col-lg-7 col-md-6 mt-8">
//                 <div className="service-details-icon-box">
//                   <div className="service-page-title2">
//                     <h2>
//                       Why Choose <span className="text-primary"> PLS? </span>
//                     </h2>
//                   </div>
//                   <div className="widget-service-details-icon mt-4">
//                     <div className="flex gap-2">
//                       <i className="bi bi-check-lg" />
//                       <EditableContent
//                         id={Number(Date.now())}
//                         description={"Content Management Systems (CMS)Complete control over design, features, and functionality of website."}
//                         isEditing={isEditing}
//                         maxLength={100}
//                         className="w-full"
//                       />
//                     </div>
//                     {serviceDetailData.whyChooseUs.map((item, i) => (
//                       <div
//                         key={i}
//                         className="flex gap-2">
//                         <i className="bi bi-check-lg" />
//                         <EditableContent
//                           id={Number(Date.now())}
//                           description={item}
//                           isEditing={isEditing}
//                           maxLength={100}
//                           className="w-full"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Tabs>
//         </div>
//         <div className="pb-16 mt-8">
//           <div className="max-w-screen-2xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
//               {serviceDetailData.processes.map((process, i) => (
//                 <div
//                   key={i}
//                   className="col-lg-4 col-sm-6">
//                   <div className="service-work-process-box !px-4">
//                     <div className="service-work-process-number">
//                       <span>01</span>
//                     </div>
//                     <div className="service-work-process-title">
//                       <EditableContent
//                         id={Number(Date.now())}
//                         description={process.title}
//                         isEditing={isEditing}
//                         maxLength={100}
//                         className="text-center text-2xl font-bold text-black pt-2 my-2"
//                       />
//                     </div>
//                     <div className="service-work-process-desc">
//                       <EditableContent
//                         id={Number(Date.now())}
//                         description={process.description}
//                         isEditing={isEditing}
//                         maxLength={100}
//                         className="font-bold"
//                       />

//                       <div className="!text-left">
//                         <span className="font-bold"> Actions:</span>
//                         <EditableContent
//                           id={Number(Date.now())}
//                           description={process.action}
//                           isEditing={isEditing}
//                           maxLength={100}
//                         />
//                       </div>
//                       <div className="mt-2 !text-left">
//                         <span className="font-bold">Outcome:&nbsp;</span>
//                         <EditableContent
//                           id={Number(Date.now())}
//                           description={process.outcome}
//                           isEditing={isEditing}
//                           maxLength={100}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="container mx-auto">
//               <h3 className="mt-32 text-primary text-right">Ready to Build Your Custom Web Application?</h3>
//               <div className="flex justify-end gap-4 items-center mt-8">
//                 <Link
//                   className="bg-primary text-white hover:bg-white hover:text-primary px-4 py-2 rounded-2xl border border-transparent hover:border-primary duration-300"
//                   href="/service-details">
//                   Start Your Project Today
//                 </Link>
//                 <Link
//                   className="bg-white text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-2xl border border-primary hover:border-transparent duration-300"
//                   href="/service-details">
//                   Request a Free Consultation
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       
//     </>
//   );
// };
// export default ServiceDetailComponent;
