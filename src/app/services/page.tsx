"use client";
import Footer from "@/components/sections/Footer";
import LandingHeader from "@/components/ui/LandingHeader";
import Link from "next/link";
import ProgressBar from "@/components/Progressbar";

const Services = () => {
  return (
    <>
      <LandingHeader />
      {/* <section className="py-40">
                <div className="container mx-auto">
                    <h1 className="text-center">About us</h1>
                </div>
            </section> */}
      {/* Start consen service Area */}
      {/*==================================================*/}
      <div className="service-area mt-80">
        <div className="container mx-auto">
          <div className="row flex justify-between align-items-center mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
              <div className="consen-section-title mobile-center">
                <h2> We Run All Kinds Of Services</h2>
                <h2>
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link
                  legacyBehavior
                  href="/service">
                  <a>
                    {" "}
                    All Service <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon flex justify-center items-center">
                    <img
                      src="assets/images/resource/service-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h2> Web Application </h2>
                  </div>
                  <div className="service-number">
                    <h1> 01 </h1>
                  </div>
                  <div className="em-service-text">
                    <p> Dramatically cultivate from quality user centric growth strateges emerging </p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon flex justify-center items-center">
                    <img
                      src="assets/images/resource/service-icon2.png"
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h2> Mobile Application </h2>
                  </div>
                  <div className="service-number">
                    <h1> 02 </h1>
                  </div>
                  <div className="em-service-text">
                    <p> Dramatically cultivate from quality user centric growth strateges emerging </p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon flex justify-center items-center">
                    <img
                      src="assets/images/resource/service-icon3.png"
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h2> Data Analysis </h2>
                  </div>
                  <div className="service-number">
                    <h1> 03 </h1>
                  </div>
                  <div className="em-service-text">
                    <p> Dramatically cultivate from quality user centric growth strateges emerging </p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon flex justify-center items-center">
                    <img
                      src="assets/images/resource/service-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h2> E-commerce </h2>
                  </div>
                  <div className="service-number">
                    <h1> 04 </h1>
                  </div>
                  <div className="em-service-text">
                    <p> Dramatically cultivate from quality user centric growth strateges emerging </p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon flex justify-center items-center">
                    <img
                      src="assets/images/resource/service-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h2> SaaS Development </h2>
                  </div>
                  <div className="service-number">
                    <h1> 05 </h1>
                  </div>
                  <div className="em-service-text">
                    <p> Dramatically cultivate from quality user centric growth strateges emerging </p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon flex justify-center items-center">
                    <img
                      src="assets/images/resource/service-icon2.png"
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h2> Digital Marketing </h2>
                  </div>
                  <div className="service-number">
                    <h1> 06 </h1>
                  </div>
                  <div className="em-service-text">
                    <p> Dramatically cultivate from quality user centric growth strateges emerging </p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon flex justify-center items-center">
                    <img
                      src="assets/images/resource/service-icon3.png"
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h2> Production Services </h2>
                  </div>
                  <div className="service-number">
                    <h1> 07 </h1>
                  </div>
                  <div className="em-service-text">
                    <p> Dramatically cultivate from quality user centric growth strateges emerging </p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon flex justify-center items-center">
                    <img
                      src="assets/images/resource/service-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h2> Graphics Design </h2>
                  </div>
                  <div className="service-number">
                    <h1> 08 </h1>
                  </div>
                  <div className="em-service-text">
                    <p> Dramatically cultivate from quality user centric growth strateges emerging </p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen service Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div
        className="about-area style-three"
        id="about">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 md:w-full mb-8 lg:mb-0">
              <div className="dreamit-about-thumb">
                <img
                  src="assets/images/about/about-2.png"
                  alt="About Us"
                />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2 ">
                  <img
                    src="assets/images/about/about-shpe.png"
                    alt="About Shape 1"
                  />
                </div>
                <div className="about-shape-thumb3 bounce-animate4">
                  <img
                    src="assets/images/about/about-shape4.png"
                    alt="About Shape 2"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-full">
              <div className="consen-section-title mb-6">
                <h5 className="text-lg font-semibold">About Consen</h5>
                <h2 className="text-3xl font-bold">We Are Global Stakeholder</h2>
                <h2 className="text-3xl font-bold">
                  Over 2000+ <span className="text-primary">Companies</span>
                </h2>
                <p className="about-text1 mt-4">
                  Appropriately enhance principle-centered innovation rather than high standards in platforms. Credibly orchestrate functional.
                </p>
              </div>
              <div className="dreamit-icon-box mb-6">
                <div className="dreamit-icon-list">
                  <ul className="list-disc pl-5">
                    <li className="flex items-center mb-2">
                      <i className="bi bi-arrow-right-circle mr-2" />
                      <span>Communicate orthogonal process</span>
                    </li>
                    <li className="flex items-center">
                      <i className="bi bi-arrow-right-circle mr-2" />
                      <span>Professionally grow cutting-edge paradigms</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Progress bar */}
              <div className="progress-box mb-6">
                <ProgressBar value={85} />
                <div className="circle-progress-title">
                  <h4 className="text-lg font-semibold">
                    Clients <br /> Satisfactions
                  </h4>
                </div>
                <div className="extra-progress mt-4">
                  <ProgressBar value={95} />
                  <div className="circle-progress-title">
                    <h4 className="text-lg font-semibold">
                      Finance <br /> Consulting
                    </h4>
                  </div>
                </div>
              </div>
              <div className="about-button">
                <Link
                  legacyBehavior
                  href="/about">
                  <a className="flex items-center text-lg text-primary hover:underline">
                    <i className="bi bi-gear mr-2" /> More About
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start call do action Section */}
      {/*===================================================*/}
      <div className="call-do-action-section">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-do-action-video text-center mb-35">
                <div className="video-icon-cda">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                    target="_blank">
                    <i className="bi bi-pause-circle-fill" />
                  </a>
                </div>
              </div>
              <div className="call-do-action-content text-center">
                <h2 className="text-white">
                  We Deliver Solution With The Goal Of <br />
                  <span className="sub-title"> A Trusting Relationships</span>
                </h2>
                <p className="text-white">Appropriate for your specific business, making it easy for you to have quality IT services.</p>
                <div className="btn-common btn-cda mt-40">
                  <Link
                    legacyBehavior
                    href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area style-two">
        <div className="container mx-auto">
          <div className="row flex testi-rotate items-center justify-center">
            <div className="col-lg-12">
              <div className="consen-section-title pb-50 text-center upper">
                <h5> Testimonials </h5>
                <h2> Consen Trusted Customers </h2>
                <h2>
                  {" "}
                  Awesome <span> Reviews </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img
                        src="assets/images/resource/testi1.png"
                        alt=""
                      />
                    </div>
                    <div className="quote-title">
                      <h4>Philip Anthorpy</h4>
                      <p>UI Designer</p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>“Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media”.</p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img
                        src="assets/images/resource/testi3.png"
                        alt=""
                      />
                    </div>
                    <div className="quote-title">
                      <h4> Shilpa Shethy </h4>
                      <p> CEO, Founder </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>“Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media”.</p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img
                        src="assets/images/resource/testi2.png"
                        alt=""
                      />
                    </div>
                    <div className="quote-title">
                      <h4> David Alexon </h4>
                      <p> MH Manager </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>“Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media”.</p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            {/* testi shape */}
            <div className="testi-shape">
              <div className="testi-shape-thumb">
                <img
                  src="assets/images/resource/all-shape5.png"
                  alt=""
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
      {/* Start Brand Section */}
      {/*===================================================*/}
      <div className="brand-section srv-page">
        <div className="container">
          <div className="row">{/* <LogoSlider /> */}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Services;
