"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AddServiceDetails = () => {
  const [image, setImage] = useState("/assets/images/resource/srd1.jpg");

  // Handle file selection
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // @ts-ignore
        setImage(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Read the image file as a data URL
    }
  };

  useEffect(() => {
    // Function to handle setting a character limit for editable elements
    const setMaxLengthForEditableElements = () => {
      const editableElements = document.querySelectorAll<HTMLElement>(".editable");

      editableElements.forEach((element) => {
        const maxLength = parseInt(element.getAttribute("data-maxlength") || "0", 10);

        // Function to handle keydown and prevent typing beyond the max length, except for backspace
        const handleKeyDown = (e: KeyboardEvent) => {
          const target = e.target as HTMLElement; // Type assertion for target

          // Check if the key is backspace or delete, which should always be allowed
          if (e.key !== "Backspace" && e.key !== "Delete" && target && target.innerText.length >= maxLength) {
            // Prevent further typing if the max length is reached
            e.preventDefault();
          }
        };

        element.addEventListener("keydown", handleKeyDown);

        // Cleanup event listener on component unmount
        return () => {
          element.removeEventListener("keydown", handleKeyDown);
        };
      });
    };

    // Initialize the function
    setMaxLengthForEditableElements();
  }, []);
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-screen-2xl service-detials-area !p-0">
          <Link
            href="/dashboard"
            className="font-bold text-black">
            <i className="bi bi-arrow-left mr-2"></i>
            Back To Dashboard
          </Link>
          <div className="mt-8">
            <Tabs className="row grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="consen-service-details-box flex flex-col">
                      <div className="consen-service-thumb">
                        <label htmlFor="file-input">
                          <div className="relative w-[47rem] h-[27.5rem]">
                            <Image
                              src={image}
                              alt="banner"
                              // width={752}
                              // height={440}
                              fill
                              className="object-cover rounded-xl"
                            />
                          </div>
                        </label>
                      </div>
                      <input
                        className="hidden"
                        id="file-input"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <TabPanel className="service-details-content">
                        <div className="service-page-title">
                          <h1
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={87}
                            className="line-clamp-3 overflow-hidden">
                            Innovative <span className="text-primary"> Web Application Services </span> With Next-Gen Technologies, Tailored for Your
                            Business Needs
                          </h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={187}>
                            Empowering businesses with powerful, future-ready technologies for web development, cloud, and CMS platforms. Driving
                            digital success with a <span className="font-bold !text-[#686868]">robust technology stack.</span>
                          </p>
                          <ul className="mt-4">
                            <li
                              className="editable"
                              contentEditable
                              suppressContentEditableWarning
                              data-maxlength={50}>
                              <span className="text-primary font-bold"> Web Technologies:</span>{" "}
                              <span className="italic"> React.js, Angular, Vue.js, Next.js, Nuxt.js, Svelte, and Solid.js</span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                Backend Technologies:&nbsp;
                              </span>

                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                Node.js, Laravel (PHP), Django (Python), ASP .Net Core (C#), Springboot (Java), and Rails (Ruby)
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                Cloud Platforms:&nbsp;
                              </span>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                CMS Platforms:&nbsp;
                              </span>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                WordPress, Drupal, Custom CMS Solutions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </TabPanel>
                      <TabPanel className="service-details-content">
                        <div className="service-page-title">
                          <h1
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Innovative <span className="text-primary"> Cloud Based Services </span> With Next-Gen Technologies, Tailored for Your
                            Business Needs
                          </h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Empowering businesses with powerful, future-ready technologies for web development, cloud, and CMS platforms. Driving
                            digital success with a <span className="font-bold !text-[#686868]">robust technology stack.</span>
                          </p>
                          <ul className="mt-4">
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                {" "}
                                Web Technologies:
                              </span>{" "}
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                {" "}
                                React.js, Angular, Vue.js, Next.js, Nuxt.js, Svelte, and Solid.js
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                Backend Technologies:&nbsp;
                              </span>

                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                Node.js, Laravel (PHP), Django (Python), ASP .Net Core (C#), Springboot (Java), and Rails (Ruby)
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                Cloud Platforms:&nbsp;
                              </span>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                CMS Platforms:&nbsp;
                              </span>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                WordPress, Drupal, Custom CMS Solutions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </TabPanel>
                      <TabPanel className="service-details-content">
                        <div className="service-page-title">
                          <h1
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Innovative <span className="text-primary"> Cloud Based Services </span> With Next-Gen Technologies, Tailored for Your
                            Business Needs
                          </h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Empowering businesses with powerful, future-ready technologies for web development, cloud, and CMS platforms. Driving
                            digital success with a <span className="font-bold !text-[#686868]">robust technology stack.</span>
                          </p>
                          <ul className="mt-4">
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                {" "}
                                Web Technologies:
                              </span>{" "}
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                {" "}
                                React.js, Angular, Vue.js, Next.js, Nuxt.js, Svelte, and Solid.js
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                Backend Technologies:&nbsp;
                              </span>

                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                Node.js, Laravel (PHP), Django (Python), ASP .Net Core (C#), Springboot (Java), and Rails (Ruby)
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                Cloud Platforms:&nbsp;
                              </span>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                CMS Platforms:&nbsp;
                              </span>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                WordPress, Drupal, Custom CMS Solutions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </TabPanel>
                      <TabPanel className="service-details-content">
                        <div className="service-page-title">
                          <h1
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Innovative <span className="text-primary"> Cloud Based Services </span> With Next-Gen Technologies, Tailored for Your
                            Business Needs
                          </h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Empowering businesses with powerful, future-ready technologies for web development, cloud, and CMS platforms. Driving
                            digital success with a <span className="font-bold !text-[#686868]">robust technology stack.</span>
                          </p>
                          <ul className="mt-4">
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                {" "}
                                Web Technologies:
                              </span>{" "}
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                {" "}
                                React.js, Angular, Vue.js, Next.js, Nuxt.js, Svelte, and Solid.js
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                Backend Technologies:&nbsp;
                              </span>

                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                Node.js, Laravel (PHP), Django (Python), ASP .Net Core (C#), Springboot (Java), and Rails (Ruby)
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                Cloud Platforms:&nbsp;
                              </span>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)
                              </span>
                            </li>
                            <li>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="text-primary font-bold">
                                CMS Platforms:&nbsp;
                              </span>
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                data-maxlength={50}
                                className="italic">
                                WordPress, Drupal, Custom CMS Solutions
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
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 mt-8 ">
                    <div className="col-lg-6 col-sm-6">
                      <div className="service-details-box flex flex-col">
                        <div className="service-details-icon">
                          <Image
                            src="/assets/images/resource/details-icon1.jpg"
                            alt="icon"
                            height={70}
                            width={70}
                          />
                        </div>
                        <div className="service-details-title mt-4">
                          <h4
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            {" "}
                            Scalibility{" "}
                          </h4>
                        </div>
                        <div className="services-detials-desc">
                          <p
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Ensure your application scales seamlessly.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="service-details-box flex flex-col">
                        <div className="service-details-icon">
                          <Image
                            src="/assets/images/resource/details-icon2.jpg"
                            alt=""
                            height={70}
                            width={70}
                          />
                        </div>
                        <div className="service-details-title mt-4">
                          <h4
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            {" "}
                            Performance{" "}
                          </h4>
                        </div>
                        <div className="services-detials-desc">
                          <p
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Enable fast and responsive web applications.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="service-details-box flex flex-col">
                        <div className="service-details-icon">
                          <Image
                            src="/assets/images/resource/details-icon3.jpg"
                            alt=""
                            height={70}
                            width={70}
                          />
                        </div>
                        <div className="service-details-title">
                          <h4
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Security
                          </h4>
                        </div>
                        <div className="services-detials-desc">
                          <p
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Provide robust, secure and server-side solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="service-details-box flex flex-col">
                        <div className="service-details-icon">
                          <Image
                            src="/assets/images/resource/details-icon4.jpg"
                            alt=""
                            height={70}
                            width={70}
                          />
                        </div>
                        <div className="service-details-title mt-4">
                          <h4
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            {" "}
                            Customization{" "}
                          </h4>
                        </div>
                        <div className="services-detials-desc">
                          <p
                            contentEditable
                            suppressContentEditableWarning
                            data-maxlength={50}>
                            Personalized user experiences and mobile-first design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <div className="service-page-title2">
                        <h2
                          contentEditable
                          suppressContentEditableWarning
                          data-maxlength={50}
                          className="text-4xl font-bold">
                          Our Web Development Process
                        </h2>
                      </div>
                      <div className="serivce-details-desc mt-2">
                        <p
                          contentEditable
                          suppressContentEditableWarning
                          className="mb-35 max-w-2xl">
                          At Prime Logic Solutions, we follow a strategic, streamlined process designed to ensure that your custom web development
                          project is completed successfully, on time, and within your budget. Our dedicated team works closely with you at every
                          stage, ensuring clear communication and collaboration throughout the entire development cycle. We focus on providing
                          transparent, innovative solutions tailored to your unique business needs. From initial planning to final launch and ongoing
                          support, our goal is to help you achieve long-term success with high-quality web applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="widget-categories-box">
                  {/* categories title */}
                  <div className="categories-title">
                    <h4> Web Application </h4>
                  </div>
                  {/* widget categories menu */}
                  <div className="widget-categories-menu">
                    <TabList as="ul">
                      <Tab as="li">
                        <p
                          contentEditable
                          suppressContentEditableWarning
                          data-maxlength={50}>
                          Custom Web Development
                        </p>
                      </Tab>
                      <Tab as="li">Cloud-Based Web Application</Tab>
                      <Tab as="li">Enterprise Solutions</Tab>
                      <Tab as="li">Content Management Systems (CMS)</Tab>
                      <Tab as="li">Progressive Web Applications (PWA)</Tab>
                    </TabList>
                  </div>
                </div>
                {/* categoreis thumb */}
                <div className="mx-auto shadow-md rounded-lg p-6 mt-10 form-blue-bg">
                  <h2 className="text-2xl font-bold mb-4 text-white">Get a Quote</h2>
                  <form
                    //   onSubmit={handleSubmit}

                    className="space-y-4 ">
                    <div>
                      <label className="block text-white font-medium mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        //   value={formData.firstName}
                        //   onChange={handleChange}
                        disabled
                        placeholder="Enter your first name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        // value={formData.lastName}
                        // onChange={handleChange}
                        disabled
                        placeholder="Enter your last name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                        disabled
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-1">Contact Number</label>
                      <input
                        type="tel"
                        name="contactNumber"
                        // value={formData.contactNumber}
                        // onChange={handleChange}
                        disabled
                        placeholder="Enter your contact number"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-1">Website Category</label>
                      <select
                        name="websiteCategory"
                        // value={formData.websiteCategory}
                        // onChange={handleChange}
                        disabled
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
                      disabled
                      className=" bg-primary text-white py-2 px-6 w-40 rounded-md hover:border-primary hover:bg-white hover:text-primary border transition duration-300">
                      Get Quote
                    </button>
                  </form>
                </div>
                <div className="col-lg-7 col-md-6 mt-8">
                  <div className="service-details-icon-box">
                    <div className="service-page-title2">
                      <h2
                        contentEditable
                        suppressContentEditableWarning
                        className="text-4xl font-bold">
                        Why Choose{" "}
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          className="text-primary">
                          {" "}
                          PLS?{" "}
                        </span>
                      </h2>
                    </div>
                    <div className="widget-service-details-icon mt-4">
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span
                          contentEditable
                          suppressContentEditableWarning>
                          {" "}
                          Complete control over design, features, and functionality of website.
                        </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span
                          contentEditable
                          suppressContentEditableWarning>
                          {" "}
                          Websites built to scale and grow with your business.
                        </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span
                          contentEditable
                          suppressContentEditableWarning>
                          {" "}
                          Tailored experiences that align perfectly with your brand identity.
                        </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span
                          contentEditable
                          suppressContentEditableWarning>
                          {" "}
                          Applying top-tier security measures to protect your website users.
                        </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span
                          contentEditable
                          suppressContentEditableWarning>
                          {" "}
                          Built-in SEO features to improve search engine rankings
                        </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span
                          contentEditable
                          suppressContentEditableWarning>
                          {" "}
                          Optimized websites for faster loading and better performance
                        </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span
                          contentEditable
                          suppressContentEditableWarning>
                          {" "}
                          Websites built to adapt and evolve with changing technologies.
                        </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span
                          contentEditable
                          suppressContentEditableWarning>
                          {" "}
                          Ensuring seamless user experience across all mobile devices.
                        </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span
                          contentEditable
                          suppressContentEditableWarning>
                          {" "}
                          Seamless integration with third-party tools and services.
                        </span>
                      </p>
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
                      <h4
                        contentEditable
                        suppressContentEditableWarning>
                        {" "}
                        Plan Project{" "}
                      </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="font-bold my-4">
                        We Begin with Understanding <br /> Your Business & Goals
                      </p>
                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="!text-left">
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          className="font-bold">
                          {" "}
                          Actions:
                        </span>
                        In-depth consultation with stakeholders, business analysis, and defining project milestones, timelines, and objectives.
                      </p>
                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="mt-2 !text-left">
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          className="font-bold">
                          Outcome:&nbsp;
                        </span>
                        Clear project vision, defined goals, and a comprehensive roadmap for success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span>02</span>
                    </div>
                    <div className="service-work-process-title">
                      <h4
                        contentEditable
                        suppressContentEditableWarning>
                        {" "}
                        Design & Dev{" "}
                      </h4>
                    </div>
                    <p
                      className="font-bold my-4 max-w-80"
                      contentEditable
                      suppressContentEditableWarning>
                      Transforming Ideas into Functional, Stunning Designs{" "}
                    </p>

                    <div className="service-work-process-desc">
                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="!text-left">
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          className="font-bold">
                          Actions:&nbsp;
                        </span>
                        Wireframing, UI/UX design, backend development, frontend interfaces, and regular client feedback loops.
                      </p>
                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="!text-left mt-2">
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          className="font-bold ">
                          Outcome:&nbsp;
                        </span>
                        A fully functional web application, designed to meet business goals.
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
                      <h4
                        contentEditable
                        suppressContentEditableWarning>
                        {" "}
                        Testing & Launch{" "}
                      </h4>
                    </div>
                    <div className="w-full flex justify-center">
                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="font-bold my-4 max-w-56 text-center">
                        Rigorous Testing to Ensure High-Quality Deliverables
                      </p>
                    </div>
                    <div className="service-work-process-desc">
                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="!text-left">
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          className="font-bold">
                          Actions:&nbsp;
                        </span>
                        Comprehensive testing (functional, usability, performance), bug fixing, refining features, and final deployment.
                      </p>
                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="!text-left mt-2">
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          className="font-bold ">
                          Outcome:&nbsp;
                        </span>
                        A polished and live web application, ready for users.
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
                      <h4
                        contentEditable
                        suppressContentEditableWarning>
                        {" "}
                        Ongoing Support{" "}
                      </h4>
                    </div>
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      className="font-bold my-4">
                      Ensuring Continuous Success with Ongoing Support
                    </p>

                    <div className="service-work-process-desc">
                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="!text-left">
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          className="font-bold">
                          Actions:&nbsp;
                        </span>
                        Routine updates, security patches, new features from feedback, and website optimization for performance.
                      </p>
                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="!text-left mt-2">
                        <span className="font-bold ">Outcome:&nbsp;</span>A reliable, secure, and high-performing website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mx-auto">
                <h3
                  className="mt-32 text-primary text-right"
                  contentEditable
                  suppressContentEditableWarning>
                  Ready to Build Your Custom Web Application?
                </h3>
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
      </section>
    </>
  );
};
export default AddServiceDetails;
