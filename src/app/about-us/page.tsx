"use client";
import Footer from "@/components/sections/Footer";
import LandingHeader from "@/components/ui/LandingHeader";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial_list_slider } from "@/components/ui/sliderProps";
import Counter from "@/components/ui/Counter";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <LandingHeader />
      {/* <section className="py-40">
                <div className="container mx-auto">
                    <h1 className="text-center">About us</h1>
                </div>
            </section> */}
      {/* Start abouts area  */}
      {/* ========================================================= */}
      <div className="abouts_areas">
        <div className="container mx-auto pt-40">
          <div className="row flex justify-between">
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
      </div>
      {/*=================================================*/}
      {/* START  feture-area Section */}
      {/*=================================================*/}
      <div className="feature-area style-two">
        <div className="container mx-auto">
          <div className="row flex">
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
            <div className="w-full lg:w-1/2">
              {/* Hero */}
              <Tab.Container defaultActiveKey={"t1"}>
                <div className="tab">
                  <Nav
                    as="ul"
                    className="tabs">
                    <li>
                      <Nav.Link
                        className="c-pointer"
                        as="a"
                        eventKey={"t1"}>
                        Full Satisfaction
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className="c-pointer"
                        as="a"
                        eventKey={"t2"}>
                        Expart Team
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className="c-pointer"
                        as="a"
                        eventKey={"t3"}>
                        Mission &amp; Vission
                      </Nav.Link>
                    </li>
                  </Nav>{" "}
                  {/* / tabs */}
                  <Tab.Content className="tab_content">
                    <Tab.Pane
                      eventKey={"t1"}
                      className="tabs_item">
                      <img
                        src="assets/images/resource/img-1.png"
                        alt="business image"
                      />
                      <ul className="tabs-inner-list">
                        <li>
                          <i className="fas fa-check" />
                          <span>Rather than unique Idea.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Entums estibulum dignissim posuere</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Quality users after Breed Applications.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Market Positioning Expertise.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Rather than unique Idea.</span>
                        </li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                    <Tab.Pane
                      eventKey={"t2"}
                      className="tabs_item">
                      <img
                        src="assets/images/resource/img-2.png"
                        alt="Image"
                      />
                      <ul className="tabs-inner-list">
                        <li>
                          <i className="fas fa-check" />
                          <span>Rather than unique Idea.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Entums estibulum dignissim posuere</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Quality users after Breed Applications.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Market Positioning Expertise.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Rather than unique Idea.</span>
                        </li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                    <Tab.Pane
                      eventKey={"t3"}
                      className="tabs_item">
                      <img
                        src="assets/images/resource/img-3.png"
                        alt="Image"
                      />
                      <ul className="tabs-inner-list">
                        <li>
                          <i className="fas fa-check" />
                          <span>Rather than unique Idea.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Entums estibulum dignissim posuere</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Quality users after Breed Applications.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Market Positioning Expertise.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Rather than unique Idea.</span>
                        </li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                  </Tab.Content>{" "}
                  {/* / tab_content */}
                </div>
              </Tab.Container>
              {/* / tab */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap testi-rotate items-center">
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
                  name: "Shilpa Shethy",
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
                  name: "Shilpa Shethy",
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
      <div className="counter-section style-33 pt-30 pb-80">
        <div className="container mx-auto">
          <div className="counter-container">
            <div className="row hr pt-40 flex justify-between">
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
      </div>
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
      <div className="faq-sectiions ">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title white pb-1 mb-1">
                <h5> process </h5>
                <h2>
                  {" "}
                  Freequently Asked <span> Question </span>
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
              {/* Start Accordion */}
              <div className="tab_container pl-30 pt-20">{/* <Faqs /> */}</div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/*Start  Brand Section */}
      {/*===================================================*/}
      <div className="brand-section">
        <div className="container">
          <div className="row">{/* <LogoSlider /> */}</div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
      <div className="subscribe-area style-two mt-5 mt-sm-0">
        <div className="container mx-auto">
          <div className="subscribe">
            <div className="row flex items-center">
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
