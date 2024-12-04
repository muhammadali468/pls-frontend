"use client";
import Footer from "@/components/sections/Footer";
import LandingHeader from "@/components/ui/LandingHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial_list_slider } from "@/components/ui/sliderProps";
import Counter from "@/components/ui/Counter";

const AboutUs = () => {
  return (
    <>
      <LandingHeader />
      <section className="pt-40">
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
      </section>
      {/* <section className="py-40">
                <div className="container mx-auto">
                    <h1 className="text-center">About us</h1>
                </div>
            </section> */}
      {/* Start abouts area  */}
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
                          <i className="bi bi-arrow-right" />
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
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*=================================================*/}
      {/* START  feture-area Section */}
      {/*=================================================*/}
      {/* <div className="feature-area style-two">
        <div className="container mx-auto">
          <div className="row flex flex-col sm:flex-row p-4 sm:p-0">
            <div className="w-full lg:w-1/2">
              <div className="consen-section-title">
                <h5> Features </h5>
                <h2>
                  {" "}
                  We Are Global Stakeholder Over 2000+ <span> Companies </span>
                </h2>
                <p className="about-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather than high standards in platforms. Credibly orchestrate functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" /> <span> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" /> <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" /> <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap flex-col sm:flex-row testi-rotate items-center">
            <div className="lg:w-7/12 md:w-6/12 mb-6 md:mb-0">
              <div className="consen-section-title text-white pb-12">
                <h5 className="text-lg font-semibold">Testimonials</h5>
                <h2 className="text-3xl font-bold text-white">Prime Logic Solution Trusted Customers</h2>
                <h2 className="text-3xl font-bold text-white">
                  Awesome <span className="text-primary">Reviews</span>
                </h2>
              </div>
            </div>
            <div className="lg:w-5/12 md:w-6/12">
              <div className="flex">
                <div className="w-1/2">
                  <div className="testi-counter-box upper">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        <Counter end={250} />
                      </h3>
                      <span>+</span>
                      <p>Happy Customers</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        <Counter end={100} />
                      </h3>
                      <span>%</span>
                      <p>Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-shape-thumb1 rotateme">
              <img
                src="assets/images/resource/testimonial-map.png"
                alt="Testimonial Map"
              />
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonial_list_slider}
              className="testimonial_list owl-carousel">
              {[
                {
                  name: "Philip Anthorpy",
                  role: "UI Designer",
                  image: "assets/images/resource/testi1.png",
                  review: "Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media."
                },
                {
                  name: "Ryan Williams",
                  role: "CEO, Founder",
                  image: "assets/images/resource/testi3.png",
                  review: "Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media."
                },
                {
                  name: "David Alexon",
                  role: "MH Manager",
                  image: "assets/images/resource/testi2.png",
                  review: "Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media."
                },
                {
                  name: "Ryan Williams",
                  role: "CEO, Founder",
                  image: "assets/images/resource/testi3.png",
                  review: "Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media."
                }
              ].map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="pr-1">
                  <div className="testimonial-single-box">
                    <div className="testimonial-content1">
                      <div className="single-quote-icon flex items-center mb-4">
                        <div className="quote-thumb mr-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                        </div>
                        <div className="quote-title">
                          <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="em-testimonial-text mb-4">
                        <p>{testimonial.review}</p>
                      </div>
                      <div className="em-testi-start-icon">
                        {[...Array(4)].map((_, i) => (
                          <i
                            key={i}
                            className="bi bi-star-fill"
                          />
                        ))}
                        <i className="bi bi-star-half" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="owl-dots"></div>
            </Swiper>
            <div className="testi-shape">
              <div className="testi-shape-thumb">
                <img
                  src="assets/images/resource/all-shape5.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/*  Start  Counter Section */}
      {/*===================================================*/}
      {/* <div className="counter-section style-33 pt-30 pb-80">
        <div className="container mx-auto">
          <div className="counter-container">
            <div className="row hr pt-40 flex justify-between p-4 sm:p-0">
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={60} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Member</h4>
                        <h3>Professional</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={70} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Projects</h4>
                        <h3>Completed</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={90} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Client</h4>
                        <h3>Satisfactions</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      <div className="team_area style-two">
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
          <div className="row flex justify-center">
            <div className="col-lg-4 col-sm-6 px-4">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img
                    src="assets/images/resource/team-1.jpg"
                    alt="logo"
                  />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Silvia Garden</h4>
                    <span>Designer</span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 px-4">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img
                    src="assets/images/resource/team-2.jpg"
                    alt="image"
                  />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4> Monalisha Shen </h4>
                    <span> IT-Executive </span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 px-4">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img
                    src="assets/images/resource/team-3.jpg"
                    alt="image"
                  />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Bubli Khanam</h4>
                    <span>Developer</span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Team Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  FAQ Section */}
      {/*===================================================*/}
      {/* <div className="faq-sectiions p-4 sm:p-0">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title white pb-1 mb-1">
                <h5> process </h5>
                <h2>
                  {" "}
                  Frequently Asked <span> Question </span>
                </h2>
                <p className="study-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather than high standards in platforms. Credibly orchestrate functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" /> <span> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" /> <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" /> <span> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" /> <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                </ul>
              </div>
              <div className="why-choose-button">
                <Link
                  legacyBehavior
                  href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-0">
              
              <div className="tab_container pl-30 pt-20"></div>
              
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/*Start  Brand Section */}
      {/*===================================================*/}
      {/* <div className="brand-section">
        <div className="container">
          <div className="row">
            
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
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
