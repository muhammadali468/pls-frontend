"use client";
import Footer from "@/components/sections/Footer";
import EditableContent from "@/components/ui/EditableContent";
import LandingHeader from "@/components/ui/LandingHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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


  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };
  return (
    <>
      <LandingHeader />
      <div className="service-detials-area">
        <div className="max-w-screen-2xl mx-auto">
          <button className="bg-primary text-white px-8 py-4 rounded-xl mt-40 mb-20" onClick={handleToggleEdit}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <Tabs className="row grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="consen-service-details-box flex flex-col">
                    <div className="consen-service-thumb relative w-[47rem] h-[27.5rem]">
                      <Image
                        src="/assets/images/resource/srd1.jpg"
                        alt=""
                        fill
                      />
                    </div>

                    <TabPanel className="service-details-content">
                      <div className="service-page-title">
                        <EditableContent
                          maxLength={87}
                          id={Number(Date.now())}
                          isEditing={isEditing}
                          description={"Innovative Web Application Services With Next-Gen Technologies, Tailored for Your Business Needs"}
                          className="text-4xl text-black font-bold"
                        />
                      </div>
                      <div className="serivce-details-desc">
                        <EditableContent
                          id={Number(Date.now())}
                          description={"Empowering businesses with powerful, future-ready technologies for web development, cloud, and CMS platforms. Driving digital success with a robust technology stack."}
                          isEditing={isEditing}
                          maxLength={187}
                        />
                        <ul className="mt-4">
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">
                              <EditableContent
                                id={Number(Date.now())}
                                description={"Web Technologies:"}
                                isEditing={isEditing}
                                className="whitespace-nowrap"


                              />&nbsp;
                            </span>{" "}
                            <span className="italic w-full">
                              <EditableContent
                                id={Number(Date.now())}
                                description={"React.js, Angular, Vue.js, Next.js, Nuxt.js, Svelte, and Solid.js"}
                                isEditing={isEditing}
                                className="inline"
                              />
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">
                              <EditableContent
                                id={Number(Date.now())}
                                description={"Backend Technologies:"}
                                isEditing={isEditing}
                              />&nbsp;
                            </span>

                            <span className="italic w-full">
                              <EditableContent
                                id={Number(Date.now())}
                                description={"Node.js, Laravel (PHP), Django (Python), ASP .Net Core (C#), Springboot (Java), and Rails (Ruby)"}
                                isEditing={isEditing}

                              />
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">
                              <EditableContent
                                id={Number(Date.now())}
                                description={"Cloud Platforms:"}
                                isEditing={isEditing}
                                className="whitespace-nowrap"

                              />
                              &nbsp;</span>
                            <span className="italic w-full">
                              <EditableContent
                                id={Number(Date.now())}
                                description={"Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)"}
                                isEditing={isEditing}
                              />
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">
                              <EditableContent
                                id={Number(Date.now())}
                                description={"CMS Platforms:"}
                                isEditing={isEditing}
                                className="whitespace-nowrap"
                              />
                              &nbsp;</span>
                            <span className="italic w-full">
                              <EditableContent
                                id={Number(Date.now())}
                                description={"WordPress, Drupal, Custom CMS Solutions"}
                                isEditing={isEditing}
                              />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </TabPanel>
                    <TabPanel className="service-details-content">
                      <div className="service-page-title">
                        <h1>
                          Innovative <span className="text-primary"> Cloud Based Services </span> With Next-Gen Technologies, Tailored for Your
                          Business Needs
                        </h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p>
                          Empowering businesses with powerful, future-ready technologies for web development, cloud, and CMS platforms. Driving
                          digital success with a <span className="font-bold !text-[#686868]">robust technology stack.</span>
                        </p>
                        <ul className="mt-4">
                          <li>
                            <span className="text-primary font-bold"> Web Technologies:</span>{" "}
                            <span className="italic"> React.js, Angular, Vue.js, Next.js, Nuxt.js, Svelte, and Solid.js</span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">Backend Technologies:&nbsp;</span>

                            <span className="italic">
                              Node.js, Laravel (PHP), Django (Python), ASP .Net Core (C#), Springboot (Java), and Rails (Ruby)
                            </span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">Cloud Platforms:&nbsp;</span>
                            <span className="italic">Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)</span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">CMS Platforms:&nbsp;</span>
                            <span className="italic">WordPress, Drupal, Custom CMS Solutions</span>
                          </li>
                        </ul>
                      </div>
                    </TabPanel>
                    <TabPanel className="service-details-content">
                      <div className="service-page-title">
                        <h1>
                          Innovative <span className="text-primary"> Cloud Based Services </span> With Next-Gen Technologies, Tailored for Your
                          Business Needs
                        </h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p>
                          Empowering businesses with powerful, future-ready technologies for web development, cloud, and CMS platforms. Driving
                          digital success with a <span className="font-bold !text-[#686868]">robust technology stack.</span>
                        </p>
                        <ul className="mt-4">
                          <li>
                            <span className="text-primary font-bold"> Web Technologies:</span>{" "}
                            <span className="italic"> React.js, Angular, Vue.js, Next.js, Nuxt.js, Svelte, and Solid.js</span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">Backend Technologies:&nbsp;</span>

                            <span className="italic">
                              Node.js, Laravel (PHP), Django (Python), ASP .Net Core (C#), Springboot (Java), and Rails (Ruby)
                            </span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">Cloud Platforms:&nbsp;</span>
                            <span className="italic">Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)</span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">CMS Platforms:&nbsp;</span>
                            <span className="italic">WordPress, Drupal, Custom CMS Solutions</span>
                          </li>
                        </ul>
                      </div>
                    </TabPanel>
                    <TabPanel className="service-details-content">
                      <div className="service-page-title">
                        <h1>
                          Innovative <span className="text-primary"> Cloud Based Services </span> With Next-Gen Technologies, Tailored for Your
                          Business Needs
                        </h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p>
                          Empowering businesses with powerful, future-ready technologies for web development, cloud, and CMS platforms. Driving
                          digital success with a <span className="font-bold !text-[#686868]">robust technology stack.</span>
                        </p>
                        <ul className="mt-4">
                          <li>
                            <span className="text-primary font-bold"> Web Technologies:</span>{" "}
                            <span className="italic"> React.js, Angular, Vue.js, Next.js, Nuxt.js, Svelte, and Solid.js</span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">Backend Technologies:&nbsp;</span>

                            <span className="italic">
                              Node.js, Laravel (PHP), Django (Python), ASP .Net Core (C#), Springboot (Java), and Rails (Ruby)
                            </span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">Cloud Platforms:&nbsp;</span>
                            <span className="italic">Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)</span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">CMS Platforms:&nbsp;</span>
                            <span className="italic">WordPress, Drupal, Custom CMS Solutions</span>
                          </li>
                        </ul>
                      </div>
                    </TabPanel>
                    <TabPanel className="service-details-content">
                      <div className="service-page-title">
                        <h1>
                          Innovative <span className="text-primary"> Cloud Based Services </span> With Next-Gen Technologies, Tailored for Your
                          Business Needs
                        </h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p>
                          Empowering businesses with powerful, future-ready technologies for web development, cloud, and CMS platforms. Driving
                          digital success with a <span className="font-bold !text-[#686868]">robust technology stack.</span>
                        </p>
                        <ul className="mt-4">
                          <li>
                            <span className="text-primary font-bold"> Web Technologies:</span>{" "}
                            <span className="italic"> React.js, Angular, Vue.js, Next.js, Nuxt.js, Svelte, and Solid.js</span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">Backend Technologies:&nbsp;</span>

                            <span className="italic">
                              Node.js, Laravel (PHP), Django (Python), ASP .Net Core (C#), Springboot (Java), and Rails (Ruby)
                            </span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">Cloud Platforms:&nbsp;</span>
                            <span className="italic">Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)</span>
                          </li>
                          <li>
                            <span className="text-primary font-bold">CMS Platforms:&nbsp;</span>
                            <span className="italic">WordPress, Drupal, Custom CMS Solutions</span>
                          </li>
                        </ul>
                      </div>
                    </TabPanel>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 mt-8 ">
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box flex flex-col">
                      <div className="service-details-icon relative h-20 w-20">
                        <Image
                          src="/assets/images/resource/details-icon1.jpg"
                          alt="detail icon"
                          fill
                        />
                      </div>
                      <div className="service-details-title mt-2">
                        <EditableContent
                          id={Number(Date.now())}
                          description={"Scalibility"}
                          isEditing={isEditing}
                          className="text-2xl text-black font-bold"
                        />
                      </div>
                      <div className="services-detials-desc">
                        <EditableContent
                          id={Number(Date.now())}
                          description={"Ensure your application scales seamlessly."}
                          isEditing={isEditing}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box flex flex-col">
                      <div className="service-details-icon relative h-20 w-20">
                        <Image
                          src="/assets/images/resource/details-icon2.jpg"
                          alt="detail icon"
                          fill
                        />
                      </div>
                      <div className="service-details-title mt-2">
                        <EditableContent
                          id={Number(Date.now())}
                          description={"Performance"}
                          isEditing={isEditing}
                          className="text-2xl text-black font-bold"
                        />
                      </div>
                      <div className="services-detials-desc">
                        <EditableContent
                          id={Number(Date.now())}
                          description={"Enable fast and responsive web applications."}
                          isEditing={isEditing}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box flex flex-col">
                      <div className="service-details-icon relative h-20 w-20">
                        <Image
                          src="/assets/images/resource/details-icon3.jpg"
                          alt="detail icon"
                          fill
                        />
                      </div>
                      <div className="service-details-title mt-2">
                        <EditableContent
                          id={Number(Date.now())}
                          description={"Security"}
                          isEditing={isEditing}
                          className="text-2xl text-black font-bold"
                        />
                      </div>
                      <div className="services-detials-desc">
                        <EditableContent
                          id={Number(Date.now())}
                          description={"Provide robust, secure and server-side solutions."}
                          isEditing={isEditing}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box flex flex-col">
                      <div className="service-details-icon relative h-20 w-20">
                        <Image
                          src="/assets/images/resource/details-icon4.jpg"
                          alt="detail icon"
                          fill
                        />
                      </div>
                      <div className="service-details-title mt-2">
                        <EditableContent
                          id={Number(Date.now())}
                          description={"Customization"}
                          isEditing={isEditing}
                          className="text-2xl text-black font-bold"
                        />
                      </div>
                      <div className="services-detials-desc">
                        <EditableContent
                          id={Number(Date.now())}
                          description={"Personalized user experiences and mobile-first design."}
                          isEditing={isEditing}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="service-details-content">
                    <div className="service-page-title2">
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Our Web Development Process."}
                        isEditing={isEditing}
                        className="text-4xl font-bold text-black"
                      />
                    </div>
                    <div className="serivce-details-desc mt-2">
                      <EditableContent
                        id={Number(Date.now())}
                        description={`At Prime Logic Solutions, we follow a strategic, streamlined process designed to ensure that your custom web development project is completed successfully, on time, and within your budget. Our dedicated team works closely with you at every stage, ensuring clear communication and collaboration throughout the entire development cycle. We focus on providing transparent, innovative solutions tailored to your unique business needs. From initial planning to final launch and ongoing support, our goal is to help you achieve long-term success with high-quality web applications.`}
                        isEditing={isEditing}
                        rows={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="widget-categories-box">
                <div className="categories-title">
                  <h4> Web Application </h4>
                </div>
                <div className="widget-categories-menu">
                  <TabList as="ul">
                    <Tab as="li">
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Custom Web Development"}
                        isEditing={isEditing}
                        maxLength={50}
                        className="bg-transparent"
                        rows={1}
                      />
                    </Tab>
                    <Tab as="li">
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Cloud-Based Web Application"}
                        isEditing={isEditing}
                        maxLength={50}
                        rows={1}
                        className="bg-transparent"


                      />
                    </Tab>
                    <Tab as="li">
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Enterprise Solutions"}
                        isEditing={isEditing}
                        maxLength={50}
                        rows={1}
                        className="bg-transparent"


                      />
                    </Tab>
                    <Tab as="li">
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Content Management Systems (CMS)"}
                        isEditing={isEditing}
                        maxLength={50}
                        rows={1}
                        className="bg-transparent"


                      />
                    </Tab>
                    <Tab as="li">
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Progressive Web Applications (PWA)"}
                        isEditing={isEditing}
                        maxLength={50}
                        rows={1}
                        className="bg-transparent"


                      />
                    </Tab>
                  </TabList>
                </div>
              </div>
              {/* categoreis thumb */}
              <div className="mx-auto shadow-md rounded-lg p-6 mt-10 form-blue-bg">
                <h2 className="text-2xl font-bold mb-4 text-white">Get a Quote</h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 ">
                  <div>
                    <label className="block text-white font-medium mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={isEditing}

                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={isEditing}

                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={isEditing}

                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-1">Contact Number</label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Enter your contact number"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={isEditing}

                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-1">Website Category</label>
                    <select
                      disabled={isEditing}
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
                    disabled={isEditing}
                    type="submit"
                    className=" bg-primary text-white py-2 px-6 w-40 rounded-md hover:border-primary hover:bg-white hover:text-primary disabled:bg-gray-400 disabled:text-white disabled:border-none border transition duration-300">
                    Get Quote
                  </button>
                </form>
              </div>
              <div className="col-lg-7 col-md-6 mt-8">
                <div className="service-details-icon-box">
                  <div className="service-page-title2">
                    <h2>
                      Why Choose <span className="text-primary"> PLS? </span>
                    </h2>
                  </div>
                  <div className="widget-service-details-icon mt-4">
                    <div className="flex gap-2">
                      <i className="bi bi-check-lg" />
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Content Management Systems (CMS)Complete control over design, features, and functionality of website."}
                        isEditing={isEditing}
                        maxLength={100}
                        className="w-full"
                      />

                    </div>
                    <div className="flex gap-2">
                      <i className="bi bi-check-lg" />

                      <EditableContent
                        id={Number(Date.now())}
                        description={"Websites built to scale and grow with your business."}
                        isEditing={isEditing}
                        maxLength={100}
                        className="w-full"


                      />

                    </div>
                    <div className="flex gap-2">
                      <i className="bi bi-check-lg" />
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Tailored experiences that align perfectly with your brand identity."}
                        isEditing={isEditing}
                        maxLength={100}
                        className="w-full"

                      />

                    </div>
                    <div className="flex gap-2">
                      <i className="bi bi-check-lg" />
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Applying top-tier security measures to protect your website users."}
                        isEditing={isEditing}
                        maxLength={100}
                        className="w-full"

                      />

                    </div>
                    <div className="flex gap-2">
                      <i className="bi bi-check-lg" />
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Built-in SEO features to improve search engine rankings."}
                        isEditing={isEditing}
                        maxLength={100}
                        className="w-full"

                      />

                    </div>
                    <div className="flex gap-2">
                      <i className="bi bi-check-lg" />
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Optimized websites for faster loading and better performance."}
                        isEditing={isEditing}
                        maxLength={100}
                        className="w-full"

                      />

                    </div>
                    <div className="flex gap-2">
                      <i className="bi bi-check-lg" />
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Websites built to adapt and evolve with changing technologies."}
                        isEditing={isEditing}
                        maxLength={100}
                        className="w-full"

                      />

                    </div>
                    <div className="flex gap-2">
                      <i className="bi bi-check-lg" />
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Ensuring seamless user experience across all mobile devices."}
                        isEditing={isEditing}
                        maxLength={100}
                        className="w-full"

                      />

                    </div>
                    <div className="flex gap-2">
                      <i className="bi bi-check-lg" />

                      <EditableContent
                        id={Number(Date.now())}
                        description={"Seamless integration with third-party tools and services."}
                        isEditing={isEditing}
                        maxLength={100}
                        className="w-full"

                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
        <div className="pb-16 mt-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
              <div className="col-lg-4 col-sm-6">
                <div className="service-work-process-box !px-4">
                  <div className="service-work-process-number">
                    <span>01</span>
                  </div>
                  <div className="service-work-process-title">
                    {/* <h4> Plan Project </h4> */}
                    <EditableContent
                      id={Number(Date.now())}
                      description={"Plan Project"}
                      isEditing={isEditing}
                      maxLength={100}
                      className="text-center text-2xl font-bold text-black pt-2 my-2"
                    />
                  </div>
                  <div className="service-work-process-desc">

                    <EditableContent
                      id={Number(Date.now())}
                      description={"We Begin with Understanding Your Business & Goals"}
                      isEditing={isEditing}
                      maxLength={100}
                      className="font-bold"
                    />
                    {/* <p>Actions:
                    In-depth consultation with stakeholders.
                    Research and analysis of business objectives.
                    Setting project milestones and timelines.

                    Outcome:
                    Clear project vision, defined goals, and a roadmap for success.</p> */}

                    <div className="!text-left">
                      <span className="font-bold"> Actions:</span>
                      <EditableContent
                        id={Number(Date.now())}
                        description={"In-depth consultation with stakeholders, business analysis, and defining project milestones, timelines, and objectives."}
                        isEditing={isEditing}
                        maxLength={100}

                      />
                    </div>
                    <div className="mt-2 !text-left">
                      <span className="font-bold">Outcome:&nbsp;</span>
                      <EditableContent
                        id={Number(Date.now())}
                        description={`Clear project vision, defined goals, and a comprehensive roadmap for success.`}
                        isEditing={isEditing}
                        maxLength={100}

                      />

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="service-work-process-box">
                  <div className="service-work-process-number">
                    <span>02</span>
                  </div>
                  <div className="service-work-process-title">
                    {/* <h4> Design & Dev </h4> */}
                    <EditableContent
                      id={Number(Date.now())}
                      description={"Design & Dev"}
                      isEditing={isEditing}
                      maxLength={100}
                      className="text-center text-2xl font-bold text-black pt-2 my-2"
                    />
                  </div>

                  <EditableContent
                    id={Number(Date.now())}
                    description={"Transforming Ideas into Functional, Stunning Designs"}
                    isEditing={isEditing}
                    maxLength={100}
                    className="font-bold"
                  />
                  <div className="service-work-process-desc">
                    <p className="!text-left">
                      <span className="font-bold">Actions:&nbsp;</span>
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Wireframing, UI/UX design, backend development, frontend interfaces, and regular client feedback loops."}
                        isEditing={isEditing}
                        maxLength={100}

                      />

                    </p>
                    <p className="!text-left mt-2">
                      <span className="font-bold ">Outcome:&nbsp;</span>
                      <EditableContent
                        id={Number(Date.now())}
                        description={"A fully functional web application, designed to meet business goals."}
                        isEditing={isEditing}
                        maxLength={100}

                      />

                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-sm-6">
                <div className="service-work-process-box">
                  <div className="service-work-process-number">
                    <span>03</span>
                  </div>
                  <div className="service-work-process-title">
                    {/* <h4> Design & Dev </h4> */}
                    <EditableContent
                      id={Number(Date.now())}
                      description={"Testing & Launch"}
                      isEditing={isEditing}
                      maxLength={100}
                      className="text-center text-2xl font-bold text-black pt-2 my-2"
                    />
                  </div>

                  <EditableContent
                    id={Number(Date.now())}
                    description={"Rigorous Testing to Ensure High-Quality Deliverables"}
                    isEditing={isEditing}
                    maxLength={100}
                    className="font-bold"
                  />
                  <div className="service-work-process-desc">
                    <p className="!text-left">
                      <span className="font-bold">Actions:&nbsp;</span>
                      <EditableContent
                        id={Number(Date.now())}
                        description={" Comprehensive testing (functional, usability, performance), bug fixing, refining features, and final deployment."}
                        isEditing={isEditing}
                        maxLength={100}

                      />

                    </p>
                    <p className="!text-left mt-2">
                      <span className="font-bold ">Outcome:&nbsp;</span>
                      <EditableContent
                        id={Number(Date.now())}
                        description={" A polished and live web application, ready for users."}
                        isEditing={isEditing}
                        maxLength={100}

                      />

                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="service-work-process-box">
                  <div className="service-work-process-number">
                    <span>04</span>
                  </div>
                  <div className="service-work-process-title">
                    {/* <h4> Design & Dev </h4> */}
                    <EditableContent
                      id={Number(Date.now())}
                      description={"Ongoing Support"}
                      isEditing={isEditing}
                      maxLength={100}
                      className="text-center text-2xl font-bold text-black pt-2 my-2"
                    />
                  </div>

                  <EditableContent
                    id={Number(Date.now())}
                    description={"Ensuring Continuous Success with Ongoing Support"}
                    isEditing={isEditing}
                    maxLength={100}
                    className="font-bold"
                  />
                  <div className="service-work-process-desc">
                    <p className="!text-left">
                      <span className="font-bold">Actions:&nbsp;</span>
                      <EditableContent
                        id={Number(Date.now())}
                        description={"Routine updates, security patches, new features from feedback, and website optimization for performance."}
                        isEditing={isEditing}
                        maxLength={100}

                      />

                    </p>
                    <p className="!text-left mt-2">
                      <span className="font-bold ">Outcome:&nbsp;</span>
                      <EditableContent
                        id={Number(Date.now())}
                        description={"A reliable, secure, and high-performing website."}
                        isEditing={isEditing}
                        maxLength={100}

                      />

                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className="container mx-auto">
              <h3 className="mt-32 text-primary text-right">Ready to Build Your Custom Web Application?</h3>
              <div className="flex justify-end gap-4 items-center mt-8">
                <Link
                  className="bg-primary text-white hover:bg-white hover:text-primary px-4 py-2 rounded-2xl border border-transparent hover:border-primary duration-300"
                  href="/service-details">
                  Start Your Project Today
                </Link>
                <Link
                  className="bg-white text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-2xl border border-primary hover:border-transparent duration-300"
                  href="/service-details">
                  Request a Free Consultation
                </Link>
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
