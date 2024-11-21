"use client";
import Footer from "@/components/sections/Footer";
import LandingHeader from "@/components/ui/LandingHeader";
import Link from "next/link";
import { useState } from "react";
const ServiceDetail = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    websiteCategory: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Quote request submitted successfully!");
  };
  return (
    <>
      <LandingHeader />
      <div className="service-detials-area">
        <div className="container mx-auto">
          <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8 pt-40">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="consen-service-details-box flex flex-col">
                    <div className="consen-service-thumb">
                      <img
                        src="assets/images/resource/srd1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="service-details-content">
                      <div className="service-page-title">
                        <h1> New Technology Services</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p>
                          Collaboratively provide access to an expanded array <span> 248 Engine </span>
                          via timely leadership. Enthusiastically evolve transparent <span>technologies </span> whereas timely functionalities.
                          Continually repurpose e-business information and prospective intellectual capital. Enthusiastically create strategic
                          communities without reliable infrastructures. Holisticly embrace professional technologies
                        </p>
                        <p className="pb-35">
                          Transparent technologies whereas timely functionalities. Continually repurpose e-business information and prospective
                          <span>intellectual</span> capital. Enthusiastically create strategic communities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2">
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box flex flex-col">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Proper Services </h4>
                      </div>
                      <div className="services-detials-desc">
                        <p>Functionalities continually to prospective intellec</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box flex flex-col">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Work Steps </h4>
                      </div>
                      <div className="services-detials-desc">
                        <p>Functionalities continually to prospective intellec</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box flex flex-col">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>Maintain Trends </h4>
                      </div>
                      <div className="services-detials-desc">
                        <p>Functionalities continually to prospective intellec</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box flex flex-col">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> 24/7 Services </h4>
                      </div>
                      <div className="services-detials-desc">
                        <p>Functionalities continually to prospective intellec</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="service-details-content">
                    <div className="service-page-title2">
                      <h1>Research Trend Market</h1>
                    </div>
                    <div className="serivce-details-desc">
                      <p className="pb-35">
                        Collaboratively provide access to an expanded array 248 Engine via timely leadership. Enthusiastically evolve transparent
                        technologies whereas timely functionalities. Continually repurpose e-business information and prospective intellectual
                        capital. Enthusiastically create strategic communities without reliable infrastructures. Holisticly embrace professional
                        technologies create professional Technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div className="service-details-thumb">
                    <img
                      src="assets/images/resource/srd2.jpg"
                      alt=""
                    />
                  </div>
                </div>

                {/* <div className="">
                  <div className="service-details-content pt-40">
                    <div className="service-page-title2">
                      <h1>Working Process</h1>
                    </div>
                    <div className="serivce-details-desc">
                      <p className="pb-35">
                        Prospective intellectual capital. Enthusiastically create strategic communities without reliable Holisticly embrace
                        professional technologies create professional{" "}
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="pb-32 mt-8">
                <div className="flex flex-col lg:flex-row justify-between lg:absolute gap-8">
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box p-4">
                      <div className="service-work-process-number">
                        <span>01</span>
                      </div>
                      <div className="service-work-process-title">
                        <h4> Plan Project </h4>
                      </div>
                      <div className="service-work-process-desc">
                        <p>Prospective services capitalize embrace technologie</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>
                      <div className="service-work-process-title">
                        <h4> Finished Work </h4>
                      </div>
                      <div className="service-work-process-desc">
                        <p>Prospective services capitalize embrace technologie</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>
                      <div className="service-work-process-title">
                        <h4> Deliver You </h4>
                      </div>
                      <div className="service-work-process-desc">
                        <p>Prospective services capitalize embrace technologie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              {/* widget search */}
              {/* <div className="widget_search mt-5 mt-lg-0">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="get">
                  <input
                    type="text"
                    name="s"
                    placeholder="Search Here"
                    title="Search for:"
                  />
                  <button
                    type="submit"
                    className="icons">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div> */}
              <div className="widget-categories-box">
                {/* categories title */}
                <div className="categories-title">
                  <h4> Service Name </h4>
                </div>
                {/* widget categories menu */}
                <div className="widget-categories-menu">
                  <ul>
                    <li className="active">
                      <Link
                        legacyBehavior
                        href="/service-details">
                        <a> New Technology Service </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="/service-details">
                        <a> Top Information Technology </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="/service-details">
                        <a> Website Development </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="/service-details">
                        <a> Networking System </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="/service-details">
                        <a> Product Development </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="/service-details">
                        <a> Content Marketing </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* categoreis thumb */}
              <div className="mx-auto shadow-md rounded-lg p-6 mt-10 form-blue-bg">
                <h2 className="text-2xl font-bold mb-4 text-white">Get a Quote</h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 ">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Contact Number</label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Enter your contact number"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Website Category</label>
                    <select
                      name="websiteCategory"
                      value={formData.websiteCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required>
                      <option
                        value=""
                        disabled>
                        Select a category
                      </option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="blog">Blog</option>
                      <option value="business">Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className=" bg-primary text-white py-2 px-6 w-40 rounded-md hover:border-primary hover:bg-white hover:text-primary border transition duration-300">
                    Get Quote
                  </button>
                </form>
              </div>
              <div className="col-lg-7 col-md-6 mt-8">
                <div className="service-details-icon-box">
                  <div className="service-page-title2">
                    <h1>What You Benifits</h1>
                  </div>
                  <div className="widget-service-details-icon">
                    <p>
                      <i className="bi bi-check-lg" /> <span> Efficiently reintermediate pandemic engine</span>
                    </p>
                    <p>
                      <i className="bi bi-check-lg" /> <span> Driven technologies enthusiastically carburetors </span>
                    </p>
                    <p>
                      <i className="bi bi-check-lg" /> <span> Authoritatively target exceptional heets</span>
                    </p>
                    <p>
                      <i className="bi bi-check-lg" /> <span> Covalent testing procedures </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ServiceDetail;
