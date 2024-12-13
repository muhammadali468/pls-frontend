"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../sections/MobileMenu";
import BasicModal from "./BasicModal";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Image from "next/image";
//
const LandingHeader = ({ res }: { res: ISERVICECATEGORY }) => {
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const pathname = usePathname();

  if (pathname.includes("/dashboard")) {
    return null;
  }

  const aboutUsPages = [
    {
      name: "Mission Vision & Core Values",
      url: "/"
    },
    {
      name: "Leadership Team",
      url: "/about-us/leadership-team"
    },
    {
      name: "Awards and Recognition",
      url: "/about-us/awards-and-recognition"
    },
    {
      name: "Global Presence",
      url: "/about-us/global-presence"
    },
    {
      name: "Partners and Clients",
      url: "/about-us/partners-and-clients"
    },
  ];
  // const servicesData = [
  //   {
  //     name: "Web Development",
  //     subServices: ["Frontend", "Backend", "Full Stack"],
  //   },
  //   {
  //     name: "SEO",
  //     subServices: [],
  //   },
  //   {
  //     name: "Content Writing",
  //     subServices: ["Blog Writing", "Copywriting"],
  //   },
  // ];

  // const servicesData = [
  //   {
  //     category: "Software Development",
  //     services: [
  //       "Web Development",
  //       "Mobile Application",
  //       "SaaS Development",
  //       "API Development and Integration",
  //       "Web 3.0",
  //       "Salesforce Development",
  //       "CMS Development",
  //     ],
  //   },
  //   {
  //     category: "Data and Analytics",
  //     services: [
  //       "Data Analysis",
  //       "Big Data Analytics",
  //       "AI/ML → Computer Vision",
  //     ],
  //   },
  //   {
  //     category: "Cloud and DevOps",
  //     services: [
  //       "DevOps and Automation Services",
  //       "AWS and Azure",
  //       "Docker and Kubernetes",
  //     ],
  //   },
  //   {
  //     category: "Emerging Technologies",
  //     services: [
  //       "Blockchain Solutions",
  //       "Voice Technology Solutions",
  //       "IoT",
  //       "AI-Powered Personalization",
  //     ],
  //   },
  //   {
  //     category: "Creative and Design",
  //     services: [
  //       "Graphic Design",
  //       "CAD Design",
  //     ],
  //   },
  //   {
  //     category: "Digital Commerce and Marketing",
  //     services: [
  //       "E-commerce",
  //       "Digital Marketing",
  //       "Social Media Services",
  //       "Content Marketing",
  //       "PR Marketing",
  //     ],
  //   },
  //   {
  //     category: "Production and Media",
  //     services: [
  //       "Production Services",
  //       "Sound Engineering",
  //     ],
  //   },
  //   {
  //     category: "Cybersecurity",
  //     services: [
  //       "Cyber Security Services",
  //     ],
  //   },
  //   {
  //     category: "Sustainability and Future Tech",
  //     services: [
  //       "Green IT and Sustainability Solutions",
  //     ],
  //   },
  //   {
  //     category: "Quality Control and Testing",
  //     services: [
  //       "Quality Control/Testing",
  //     ],
  //   },
  //   {
  //     category: "Progress Technology Services",
  //     services: [
  //       "Progress Technology Service",
  //     ],
  //   },
  //   {
  //     category: "IT Support",
  //     services: [],
  //   },
  // ];

  const industryData = [
    "Information Technology (IT)",
    "Healthcare",
    "Finance & Banking",
    "Retail & E-commerce",
    "Tourism & Hospitaility",
    "Education",
    "Media & entertainment",
    "Construction",
    "Energy & Utility",
    "Logistics & Transport",
    "Legal & Compliance"
  ];
  const technologyData = [
    "Web Technology",
    "Mobile Technology",
    "Backend Technology",
    "Database",
    "Cloud Infrastructure",
    "Blockchain",
    "Cybersecurity",
    "E-Commerce"
  ];
  return (
    <>
      <BasicModal
        isOpen={isModalOpen}
        onClose={closeModal}>
        <div className="max-w-5xl grid grid-cols-2 py-16">
          <div>
            <Image
              width={400}
              height={200}
              className="h-full object-cover"
              src="/assets/images/resource/request-quote-modal.jpeg"
              alt="request quote"
            />
          </div>
          <div className="contact_from_box py-40">
            <div className="contact_title pb-4">
              <h3>Get In Touch</h3>
            </div>
            <form
              // onSubmit={(e) => e.preventDefault()}
              action="#"
              method="POST"
              id="dreamit-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form_box mb-30">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form_box mb-30">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form_box mb-30">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form_box mb-30">
                    <input
                      type="text"
                      name="web"
                      placeholder="Website"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form_box mb-30">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={10}
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="quote_button">
                    <button
                      className="btn"
                      type="submit">
                      {" "}
                      <IoSettingsOutline /> Free Consultant
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div id="status" />
          </div>
        </div>
      </BasicModal>
      <div className="header_top_menu flex items-center justify-between landing_header ">
        <div className="container mx-auto">
          <div className="row flex items-center justify-between">
            <div className="col-lg-8 col-sm-8">
              <div className="header_top_menu_address">
                <div className="header_top_menu_text">
                  <p>Welcome! to Prime Logic Solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 pr-0">
              <div className="header_top_menu_icon text-right">
                <div className="menu-title">
                  <h6>FOLLOW US</h6>
                </div>
                <div className="header_top_menu_icon_inner">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="bi bi-facebook" />
                      </Link>
                    </li>
                    <li className="menu-icon">
                      <Link href="#">
                        <i className="bi bi-dribbble" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-twitter" />
                      </Link>
                    </li>
                    <li className="menu-icon">
                      <Link href="#">
                        <i className="bi bi-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="stickpy-header"
        className="consen_nav_manu style-two header____">
        <div className="container mx-auto">
          <div className="row header-bg flex justify-between items-center">
            <div className="w-[8%]">
              <div className="logo">
                <Link
                  legacyBehavior
                  href="/">
                  <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    height={100}
                    width={100}
                    className="cursor-pointer"
                  />
                </Link>
                {/* <Link
                  legacyBehavior
                  href="/">
                  <Image
                    src="/assets/images/logo.png"
                    height={100}
                    width={100}
                    alt="logo"
                  />
                </Link> */}
              </div>
            </div>
            <div className="col-lg-9 pl-0 pr-0 flex items-center justify-around">
              <nav className="consen_menu">
                {/* <ul className="nav_scroll">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="relative group">
                    <Link href="/about-us">
                      About Us
                      <i className="bi bi-chevron-down pl-2"></i>
                    </Link>
                    <ul className="absolute bg-white w-64 shadow-lg rounded-lg !hidden group-hover:!block transition-opacity duration-300  ">
                      {aboutUsPages.map((page, i) => (
                        <li
                          key={i}
                          className={`flex gap-2 items-center px-4 py-2 text-primary hover:bg-primary hover:text-white duration-300 cursor-default border-gray-200`}>
                          {page}
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="relative group">
                    <Link href="/services" className="flex items-center px-4 py-2 text-primary">
                      Services <i className="bi bi-chevron-down ml-2"></i>
                    </Link>

                    <ul className="absolute left-0 top-full bg-white w-64 shadow-lg rounded-lg !hidden group-hover:!block">
                      {servicesData.map((service, index) => (
                        <li
                          key={index}
                        >
                          <div className="">
                            <div className="peer flex justify-between items-center px-4 py-2 text-primary hover:bg-primary hover:text-white duration-300 border-b border-gray-200 cursor-pointer">
                              {service.category}
                              {service.services && service.services.length > 0 && (
                                <i className="bi bi-chevron-right"></i>
                              )}
                            </div>

                            {service.services && service.services.length > 0 && (
                              <ul className="absolute left-full top-0 bg-white w-64 shadow-lg rounded-lg !hidden peer-hover:!block">
                                {service.services.map((subService, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="px-4 py-2 text-primary hover:bg-primary hover:text-white duration-300 border-b border-gray-200 cursor-pointer"
                                  >
                                    {subService}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                    

                  </li>



                  <li className="relative group">
                    <Link href="/industry">
                      Industry <i className="bi bi-chevron-down"></i>
                    </Link>
                    <ul className="absolute bg-white w-72 shadow-lg rounded-lg !hidden group-hover:!block transition-opacity duration-300  ">
                      {industryData.map((industry, i: any) => (
                        <li
                          key={i}
                          className={`flex gap-2 items-center px-4 py-2 text-primary hover:bg-primary hover:text-white duration-300 cursor-default ${i !== industry.length ? "border-b" : ""} border-gray-200`}>
                          {industry}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="relative group">
                    <Link href="/technology">
                      Technology <i className="bi bi-chevron-down"></i>
                    </Link>
                    <ul className="absolute bg-white w-64 shadow-lg rounded-lg !hidden group-hover:!block transition-opacity duration-300  ">
                      {technologyData.map((technology, i: any) => (
                        <li
                          key={i}
                          className={`flex gap-2 items-center px-4 py-2 text-primary hover:bg-primary hover:text-white duration-300 cursor-default ${i !== technology.length ? "border-b" : ""} border-gray-200`}>
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul> */}

                <ul className="menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="dropdown">
                    <Link href="/">About Us</Link>
                    <ul className="submenu bg-white shadow-lg text-primary">
                      {aboutUsPages.map((page, i) => (
                        <li key={i}>
                          <Link href={page.url}>{page.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link href="/services">Services</Link>
                    <ul className="submenu bg-white">
                      {/* {servicesData.map((service, i) => (
                        <li key={i} className="dropdown bg-white shadow-lg text-primary duration-300">
                          <Link  href="/" className="px-4 py-2 hover:bg-primary shadow-lg text-primary hover:text-white duration-300">{service.category}</Link>
                          <ul className="submenu bg-white shadow-lg text-primary">
                            {service.services.map((subService,i)=>(
                              <li key={i} className="px-4 py-2 bg-white hover:bg-primary text-primary hover:text-white duration-300 cursor-pointer">{subService}</li>
                            ))}
                          </ul>
                        </li>
                      ))} */}

                      {res.data.allCategory.map((category, i) => (
                        <li
                          key={i}
                          className="dropdown bg-white shadow-lg text-primary duration-300">
                          <Link
                            href="/"
                            className="px-4 py-2 hover:bg-primary shadow-lg text-primary hover:text-white duration-300">
                            {category.name}
                          </Link>
                          <ul className="submenu bg-white shadow-lg text-primary">
                            {category.subcategories.map((service, i) => (
                              <li
                                key={i}
                                className="px-4 py-2 bg-white hover:bg-primary text-primary hover:text-white duration-300 cursor-pointer">
                                <Link href={"/services/" + service.slug}>{service.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link href="/industry">Industry</Link>
                    <ul className="submenu">
                      {industryData.map((page, i) => (
                        <li
                          key={i}
                          className="bg-white hover:bg-primary shadow-lg text-primary hover:text-white duration-300">
                          <Link href="">{page}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link href="/technology">Technology</Link>
                    <ul className="submenu bg-white shadow-lg text-primary">
                      {technologyData.map((page, i) => (
                        <li key={i}>
                          <Link href="">{page}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li className="dropdown">
                    <Link href="/">Products</Link>
                    <ul className="submenu bg-white shadow-lg text-primary">
                      <li>
                        <Link href="">Dummy Product 1</Link>
                      </li>
                      <li>
                        <Link href="">Dummy Product 2</Link>
                      </li>
                      <li>
                        <Link href="">Dummy Product 3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>

                <div className="search-box-btn search-box-outer">
                  <div className="nav-btn navSidebar-button">
                    <a
                      className="c-pointer"
                      onClick={() => setToggle(true)}>
                      <i className="fas fa-align-left" />
                    </a>
                  </div>
                </div>
                <div className="header-button">
                  <button
                    onClick={openModal}
                    className="!bg-white !text-primary px-6 py-4 rounded-3xl hover:!bg-primary hover:!text-white hover:!border-white border duration-300">
                    Request a Quote
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className={`xs-sidebar-group info-group ${toggle ? "isActive" : ""}`}>
        <div
          className="xs-overlay xs-bg-black"
          onClick={() => setToggle(false)}
        />
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a
                href="#"
                className="close-side-widget"
                onClick={() => setToggle(false)}>
                <i className="far fa-times-circle" />
              </a>
            </div>
            <div className="sidebar-textwidget">
              {/* Sidebar Info Content */}
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="nav-logo">
                    <Link href="index.html">
                      <Image
                        height={50}
                        width={50}
                        src="/assets/images/logo.png"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="content-box">
                    <h2>About Us</h2>
                    <p className="text">
                      {
                        "The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you'll end up reviewing and negotiating the content itself and not the design."
                      }
                    </p>
                    <a
                      href="index"
                      className="theme-btn btn-style-two">
                      <span>Consultation</span> <i className="fas fa-heart" />
                    </a>
                  </div>
                  <div className="contact-info">
                    <h2>Contact Info</h2>
                    <ul className="list-style-one">
                      <li>
                        <span className="icon flaticon-email" />
                        4140 Parker. USA
                      </li>
                      <li>
                        <span>
                          {" "}
                          <i className="bi bi-telephone-inbound" />{" "}
                        </span>
                        +208-555-0112
                      </li>
                      <li>
                        <span>
                          <i className="bi bi-geo-alt" />
                        </span>
                        contact@primelogicsol.com
                      </li>
                      <li>
                        <span>
                          <i className="bi bi-clock" />
                        </span>
                        Week Days: 10.00 AM to 4.00 PM Sunday: Closed
                      </li>
                    </ul>
                  </div>
                  {/* Social Box */}
                  <ul className="social-box">
                    <li className="facebook">
                      <a
                        href="#"
                        className="fab fa-facebook-f"
                      />
                    </li>
                    <li className="twitter">
                      <a
                        href="#"
                        className="fab fa-instagram"
                      />
                    </li>
                    <li className="linkedin">
                      <a
                        href="#"
                        className="fab fa-twitter"
                      />
                    </li>
                    <li className="instagram">
                      <a
                        href="#"
                        className="fab fa-pinterest-p"
                      />
                    </li>
                    <li className="youtube">
                      <a
                        href="#"
                        className="fab fa-linkedin-in"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu />
    </>
  );
};
export default LandingHeader;
