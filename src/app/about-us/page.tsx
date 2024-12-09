"use client";
import Footer from "@/components/sections/Footer";
import LandingHeader from "@/components/ui/LandingHeader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

const AboutUs = () => {
  const missionStatements = [
    "Empowering businesses through innovative technology.",
    "Delivering solutions that drive success.",
    "Transforming ideas into digital realities.",
    "Connecting brands with their audience.",
    "Simplifying processes for sustainable growth.",
    "Advancing businesses with creative strategies.",
    "Building impactful digital marketing solutions.",
    "Innovating IT to empower enterprises."
  ];
  const visionStatements = [
    "To be a global leader.",
    "Driving change through technological advancements.",
    "Inspiring innovation across digital landscapes.",
    "Creating sustainable growth for businesses.",
    "Delivering excellence in every solution.",
    "Fostering trust with innovative strategies.",
    "Bridging gaps through digital innovation.",
    "Empowering businesses to reach potential."
  ];

  const coreValues = [
    "Integrity in all our dealings.",
    "Commitment to continuous improvement.",
    "Customer-first in every decision.",
    "Fostering creativity and innovation.",
    "Delivering measurable business value consistently.",
    "Embracing change and transformation.",
    "Collaboration for shared success.",
    "Excellence in every aspect."
  ];
  return (
    <>
      <LandingHeader />
      {/* <section className="pt-40">
        <div className="container mx-auto">
          <h2>Our Story</h2>
          <p className="mt-4">
            Prime Logic Solutions began as a vision to bridge the gap between technology and transformative business outcomes. Driven by an unwavering
            commitment to innovation and excellence, we have grown into a trusted partner for organizations seeking to stay ahead in a rapidly
            evolving digital world. From crafting custom software to leveraging emerging technologies, our journey is one of empowerment,
            collaboration, and a relentless pursuit of success. Today, Prime Logic Solutions stands as a symbol of possibility, turning complex
            challenges into impactful solutions that redefine industries.
          </p>
        </div>
      </section>
      <section className="pt-16">
        <div className="container mx-auto">
          <h2>Our Vision</h2>
          <p className="mt-4">
            To empower businesses with cutting-edge technology and sustainable solutions, enabling them to lead with innovation, agility, and purpose
            in a digitally connected future.
          </p>
        </div>
      </section>
      <section className="pt-16">
        <div className="container mx-auto">
          <h2>About Prime Logic Solutions</h2>
          <p className="mt-4">
            {`At Prime Logic Solutions, innovation is at the heart of everything we do. We are a technology-driven company committed to delivering
            bespoke solutions that drive growth, enhance efficiency, and unlock new opportunities. With expertise spanning software development, data
            analytics, cloud computing, and emerging technologies, we provide end-to-end services tailored to meet the dynamic needs of modern
            businesses.`}
          </p>
          <p className="mt-4">
            {`Our portfolio includes industry-leading capabilities in web development, mobile applications, SaaS platforms, and AI-driven
            personalization, empowering businesses to innovate and grow. Through blockchain solutions, IoT integration, and advanced cloud services
            like AWS and Azure, we ensure our clients are future-ready.`}
          </p>
          <p className="mt-4">
            {`Beyond technology, we champion creativity with graphic and CAD design and amplify our clients' presence through e-commerce, digital
            marketing, and media production services. Our commitment to sustainability drives us to integrate Green IT and future-oriented
            technologies, enabling a balance between innovation and environmental stewardship.`}
          </p>
          <p className="mt-4">
            {`As cybersecurity threats evolve, our robust cybersecurity solutions protect digital assets, while our quality control and IT support
            services ensure reliability and excellence in every deliverable. At Prime Logic Solutions, we are not just a service provider; we are your
            strategic partner in navigating the complexities of the digital age, building a sustainable and prosperous future. Together, we don’t just
            adapt to the future—we shape it.`}
          </p>
        </div>
      </section> */}
      {/* <section className="py-40">
                <div className="container mx-auto">
                    <h1 className="text-center">About us</h1>
                </div>
            </section> */}
      {/* Start abouts area  */}
      <div className="feature-area style-two !pt-80">
        <div className="px-32 mx-auto">
          <div className="row flex flex-col-reverse p-4 sm:p-0 gap-12">
            <div className="w-full px-48">
              <div className="consen-section-title">
                <h5> What Sets Us Apart: </h5>
                <h2 className="font-bold">
                  {" "}
                  Partnering Globally with
                  <br /> Over 2000+ <span> Clients </span>
                </h2>
                {/* <p className="about-text1">
                  {" "}
                  We pride ourselves on being a trusted partner for more than 2000 companies worldwide, driving innovation, growth, and impact. Our approach emphasizes delivering value through principle-centered innovation and cutting-edge solutions that elevate industry standards.
                </p> */}
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li className="flex gap-2 items-center">
                    <FiArrowRightCircle className="bg-primary rounded-full text-white text-2xl" />{" "}
                    <span>
                      {" "}
                      <strong> Streamlined Communication:</strong> Empowering businesses to scale sustainably.
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FiArrowRightCircle className="bg-primary rounded-full text-white text-2xl" />{" "}
                    <span>
                      {" "}
                      <strong> Innovation at Every Step:</strong> Advancing solutions for digital leadership.
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FiArrowRightCircle className="bg-primary rounded-full text-white text-2xl" />{" "}
                    <span>
                      {" "}
                      <strong> Strategic Growth:</strong> Building trust through transparent collaboration.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-32">
              <Tabs>
                <TabList className={"flex w-full p-4"}>
                  <Tab
                    selectedClassName="!bg-[#10102E]"
                    className={"duration-300 cursor-pointer bg-primary hover:bg-[#10102E] w-full text-center text-white px-4 py-2"}>
                    Mission
                  </Tab>
                  <Tab
                    selectedClassName="!bg-[#10102E]"
                    className={"duration-300 cursor-pointer bg-primary hover:bg-[#10102E] w-full text-center text-white px-4 py-2"}>
                    Vision
                  </Tab>
                  <Tab
                    selectedClassName="!bg-[#10102E]"
                    className={"duration-300 cursor-pointer bg-primary hover:bg-[#10102E] w-full text-center text-white px-4 py-2"}>
                    Core Values
                  </Tab>
                </TabList>
                <TabPanel>
                  <div className="p-4 flex gap-4">
                    <Image
                      src="/assets/images/about/content/img-1.png"
                      alt="tab image"
                      height={166}
                      width={210}
                      className="object-cover rounded-xl"
                    />
                    <ul>
                      {missionStatements.map((mission, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2">
                          <FaCheck />
                          <p>{mission}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="p-4 flex gap-4">
                    <Image
                      src="/assets/images/about/content/img-2.png"
                      alt="tab image"
                      height={166}
                      width={210}
                      className="object-cover rounded-xl"
                    />
                    <ul>
                      {visionStatements.map((vision, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2">
                          <FaCheck />
                          <p>{vision}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="p-4 flex gap-4">
                    <Image
                      src="/assets/images/about/content/img-3.png"
                      alt="tab image"
                      height={166}
                      width={210}
                      className="object-cover rounded-xl"
                    />
                    <ul>
                      {coreValues.map((corevalue, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2">
                          <FaCheck />
                          <p>{corevalue}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================================= */}
      {/* <div className="abouts_areas">
        <div className="container mx-auto pt-40">
          <div className="row flex justify-between flex-col sm:flex-row">
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img
                    src="assets/images/resource/abouts_1_new.png"
                    alt=""
                  />
                  <div className="about-inner-content">
                    <div className="abouts_titles">
                      <h3>All in one web solution for your digital business </h3>
                      <div className="abouts_icons">
                        <a href="#">
                          <SlArrowRightCircle />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img
                    src="assets/images/resource/abouts_2_new.png"
                    alt=""
                  />
                  <div className="abouts_titles upper">
                    <h3>The top best digital agency in new road market usa </h3>
                    <div className="abouts_icons">
                      <a href="#">
                        <SlArrowRightCircle />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Team section */}
      {/* <div
        className="team_area new"
        id="team">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center pb-60">
                <h5> Team Member </h5>
                <h2>
                  {" "}
                  Let’s Meet with Our <span> Experts </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="h-[300px] w-full relative">
                <Image
                  src="/assets/images/resource/team-1.jpg"
                  fill={true}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="bg-primary absolute py-2 bottom-0 w-full">
                <h4 className=" text-white text-center w-full">Ryan White</h4>
                <strong className="text-center text-white">Software Development Manager</strong>
                <p className="text-white text-center"> Oversees end-to-end development and project management.</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <div className="h-[400px] w-full relative">
                <Image
                  src="/assets/images/resource/team-2.jpg"
                  fill={true}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 w-full">
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">Silva Garden</h4>
                  <p className="text-white text-center">PMO</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <div className="h-[400px] w-full relative">
                <Image
                  src="/assets/images/resource/team-3.jpg"
                  fill={true}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 w-full">
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">Stacey White</h4>
                  <p className="text-white text-center">CFO</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <div className="h-[400px] w-full relative">
                <Image
                  src="/assets/images/resource/team-3.jpg"
                  fill={true}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 w-full">
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">Stacey White</h4>
                  <p className="text-white text-center">CFO</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <div className="h-[400px] w-full relative">
                <Image
                  src="/assets/images/resource/team-1.jpg"
                  fill={true}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="bg-primary absolute py-2 bottom-0 w-full">
                <h4 className=" text-white text-center w-full">Ryan White</h4>
                <p className="text-white text-center">CEO</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <div className="h-[400px] w-full relative">
                <Image
                  src="/assets/images/resource/team-2.jpg"
                  fill={true}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 w-full">
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">Silva Garden</h4>
                  <p className="text-white text-center">PMO</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <div className="h-[400px] w-full relative">
                <Image
                  src="/assets/images/resource/team-3.jpg"
                  fill={true}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 w-full">
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">Stacey White</h4>
                  <p className="text-white text-center">CFO</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <div className="h-[400px] w-full relative">
                <Image
                  src="/assets/images/resource/team-3.jpg"
                  fill={true}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 w-full">
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">Stacey White</h4>
                  <p className="text-white text-center">CFO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*=================================================*/}
      {/* START  feture-area Section */}
      {/*=================================================*/}

      <div className="subscribe-area style-two mt-5 mt-sm-0">
        <div className="container mx-auto">
          <div className="subscribe">
            <div className="row flex flex-col sm:flex-row items-center">
              <div className="col-lg-4 col-md-12">
                <div className="subscribe-title">
                  <h1>Get your Free Business Consolution</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 flex">
                <a
                  href="tel:+2085550112"
                  className="subscribe-icon">
                  <i className="bi bi-telephone-inbound" />
                </a>
                <div className="subscribe-title2">
                  <h1> +208-555-0112 </h1>
                  <p> example@gmail.com </p>
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
export default AboutUs;
