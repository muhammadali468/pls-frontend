"use client";
import { testimonial_list_slider } from "@/components/ui/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Counter from "@/components/ui/Counter";
import ProgressBar from "@/components/Progressbar";
import Footer from "@/components/sections/Footer";
import CaseStudies from "@/components/sections/casestudies";
import LandingHeader from "@/components/ui/LandingHeader";
import Image from "next/image";
import { InlineWidget } from "react-calendly";
import BasicModal from "@/components/ui/BasicModal";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [modalName, setModalName] = useState("")
  return (
    <>
      <LandingHeader />
      <BasicModal
        isOpen={isModalOpen}
        onClose={closeModal}>
        {modalName === "hireUs" ?
          <div className="max-w-5xl grid grid-cols-2">
            <div>
              <img
                className="h-full object-cover"
                src="./assets/images/resource/abouts_1_new.png"
                alt="hire us"
              />
            </div>
            <div className="contact_from_box py-40">
              <div className="contact_title pb-4">
                <h3>Hire Us</h3>
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
                        name="details"
                        placeholder="Details"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_box mb-30">
                      <input
                        type="text"
                        name="address"
                        placeholder="Address"
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
                        <i className="bi bi-gear" /> Hire Now!
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div id="status" />
            </div>
          </div> :
          <div className="scrollbar-hidden">
            <InlineWidget url="https://calendly.com/ali-renesistech" />
          </div>}
      </BasicModal>
      <div
        className="slider-area slider2 flex items-center"
        id="home">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <div className="slider-content">
                <h1 className="text-4xl font-bold !text-center sm:!text-left">The Financial</h1>
                <h1 className="text-4xl font-bold !text-center sm:!text-left">
                  Planning <span className="text-primary">Guide</span>
                </h1>
                <p className="mt-4 mx-auto sm:mx-0 text-lg !text-center sm:!text-left">
                  Without Consulting Plans, Plans not Growing fashion user friendly architectures synergistic resources.
                </p>
              </div>
              <div className="slider-button mt-8 flex flex-col sm:items-start items-center">
                <button
                  onClick={()=>{
                    setModalName("")
                    openModal()
                  }
                  }
                  type="button"
                  className="flex items-center gap-2 text-lg text-primary">
                  <span className=" flex items-center bg-primary gap-2 text-lg text-white rounded-[32px] w-max px-6 py-4 hover:underline">
                    <i className="bi bi-pencil" /> Free Consultation
                  </span>
                </button>
                <button
                  onClick={()=>{
                    openModal()
                    setModalName("hireUs")
                  }}
                  >
                  <span className="mt-4 flex items-center bg-white gap-2 text-lg text-primary rounded-[32px] w-max px-6 py-4">
                    <i className="bi bi-gear" /> Hire Us
                  </span>
                </button>
              </div>
            </div>
            {/* Slider shapes */}
            <div className="slider-shape  mt-8">
              <div className="slider-shape-thumb2 w-full h-full">
                <Image
                  src="/assets/images/slider/shape2.png"
                  height={480}
                  width={460}
                  alt="shape-2"
                />
              </div>
              <div className="slider-shape-thumb4">
                <Image
                  src="/assets/images/slider/shape3.png"
                  height={404}
                  width={286}
                  alt="shape-3"
                />
              </div>
              <div className="slider-shape-thumb5 dance">
                <Image
                  src="/assets/images/slider/circle1.png"
                  height={54}
                  width={54}
                  alt="circle-1"
                />
              </div>
              <div className="slider-shape-thumb6 bounce-animate">
                <Image
                  src="/assets/images/slider/circle2.png"
                  height={12}
                  width={12}
                  alt="circle-2"
                />
              </div>
              <div className="slider-shape-thumb7 bounce-animate2">
                <Image
                  src="/assets/images/slider/circle3.png"
                  height={28}
                  width={28}
                  alt="shape-3"
                />
              </div>
              <div className="slider-shape-thumb8 bounce-animate3">
                <Image
                  src="/assets/images/slider/white-dot.png"
                  height={118}
                  width={118}
                  alt="white-dots"
                />
              </div>
              <div className="slider-shape-thumb9">
                <Image
                  src="/assets/images/slider/line.png"
                  height={1300}
                  width={600}
                  alt="shape-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="feature-area relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 feature-bg">
            <div className="single-feature-box">
              <div className="feature-box-inner p-6 border rounded-lg shadow">
                <div className="feature-icon1 mb-4">
                  <Image
                    src="/assets/images/resource/main1.png"
                    height={60}
                    width={60}
                    alt=""
                  />
                </div>
                <div className="feature-title mb-2">
                  <h3 className="text-xl font-semibold">Business Planning</h3>
                </div>
                <div className="feature-text mb-4">
                  <p>Appropriately enhance principle-cent standards in platforms. Credibly orch popular services.</p>
                </div>
                <div className="feature-bar h-1 bg-primary" />
              </div>
              {/* feature back */}
              <div className="consen-feature-back p-4 bg-gray-100 rounded-lg mt-4">
                <div className="feature-back-title">
                  <h3 className="text-lg font-medium">Strategy</h3>
                  <h2 className="text-2xl font-bold">Strategy Building</h2>
                </div>
                <div className="feature-back-icon">
                  <a
                    href="#"
                    className="text-xl font-bold">
                    +
                  </a>
                </div>
              </div>
            </div>

            <div className="single-feature-box">
              <div className="feature-box-inner p-6 border rounded-lg shadow">
                <div className="feature-icon1 mb-4">
                  <Image
                    src="/assets/images/resource/main3.png"
                    height={60}
                    width={60}
                    alt=""
                  />
                </div>
                <div className="feature-title mb-2">
                  <h3 className="text-xl font-semibold">Cloud Solutions</h3>
                </div>
                <div className="feature-text mb-4">
                  <p>Appropriately enhance principle-cent standards in platforms. Credibly orch popular services.</p>
                </div>
                <div className="feature-bar h-1 bg-primary" />
              </div>
              {/* feature back */}
              <div className="consen-feature-back p-4 bg-gray-100 rounded-lg mt-4">
                <div className="feature-back-title">
                  <h3 className="text-lg font-medium">Strategy</h3>
                  <h2 className="text-2xl font-bold">Strategy Building</h2>
                </div>
                <div className="feature-back-icon">
                  <a
                    href="#"
                    className="text-xl font-bold">
                    +
                  </a>
                </div>
              </div>
            </div>

            <div className="single-feature-box">
              <div className="feature-box-inner p-6 border rounded-lg shadow">
                <div className="feature-icon1 mb-4">
                  <Image
                    src="/assets/images/resource/main2.png"
                    height={60}
                    width={60}
                    alt=""
                  />
                </div>
                <div className="feature-title mb-2">
                  <h3 className="text-xl font-semibold">Customers Support</h3>
                </div>
                <div className="feature-text mb-4">
                  <p>Appropriately enhance principle-cent standards in platforms. Credibly orch popular services.</p>
                </div>
                <div className="feature-bar h-1 bg-primary" />
              </div>
              {/* feature back */}
              <div className="consen-feature-back p-4 bg-gray-100 rounded-lg mt-4">
                <div className="feature-back-title">
                  <h3 className="text-lg font-medium">Strategy</h3>
                  <h2 className="text-2xl font-bold">Strategy Building</h2>
                </div>
                <div className="feature-back-icon">
                  <a
                    href="#"
                    className="text-xl font-bold">
                    +
                  </a>
                </div>
              </div>
            </div>

            {/* feature shape */}
            <div className="feature-shape bounce-animate2 mt-8 col-span-1">
              <Image
                src="/assets/images/resource/all-shape4.png"
                height={100}
                width={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div
        className="about-area style-three !px-4 sm:px-0"
        id="about">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 md:w-full mb-8 lg:mb-0">
              <div className="dreamit-about-thumb p-16 md:p-0">
                <Image
                  src="/assets/images/about/about-2.png"
                  height={585}
                  width={530}
                  alt=""
                />
                {/* about-shape */}
                {/* <div className="about-shape-thumb1 bounce-animate2 ">
                  <img
                    src="assets/images/about/about-shpe.png"
                    alt="About Shape 1"
                  />
                </div> */}
                <div className="about-shape-thumb3 bounce-animate4">
                  <Image
                    src="/assets/images/about/about-shape4.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-full">
              <div className="consen-section-title mb-6">
                <h5 className="text-lg font-semibold !text-center">About Prime Logic Solutions</h5>
                <h2 className="text-3xl font-bold !text-center">We Are Global Stakeholder</h2>
                <h2 className="text-3xl font-bold !text-center">
                  Over 2000+ <span className="text-primary">Companies</span>
                </h2>
                <p className="about-text1 mt-4 !text-center">
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
              <div className="progress-box mb-6 flex gap-8 flex-col sm:flex-row">
                <div className="flex items-center">
                  <ProgressBar value={85} />
                  <h4 className="text-lg font-semibold leading-[1.5]">
                    Clients <br /> Satisfactions
                  </h4>
                </div>
                <div className="flex items-center">
                  <ProgressBar value={95} />
                  <h4 className="text-lg font-semibold">
                    Finance <br /> Consulting
                  </h4>
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

      {/* Section 4 */}
      <div
        className="service-area style-three"
        id="service">
        <div className="container mx-auto">
          <div className="flex justify-center sm:justify-start">
            <div className="lg:w-7/12 md:w-6/12 mb-4">
              <div className="consen-section-title text-white pb-12 mb-1">
                <h5 className="text-lg font-semibold">What We Do?</h5>
                <h2 className="text-3xl font-bold text-white">We Run All Kinds Of Services</h2>
                <h2 className="text-3xl font-bold text-white">
                  From <span className="text-primary">Technologies</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Service Box 1 */}
            <div className="px-4 sm:pl-1">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon1 upper">
                    <Image
                      src="/assets/images/resource/service-icon8.png"
                      height={50}
                      width={50}
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h3 className="text-xl font-semibold">Cyber Security</h3>
                  </div>
                  <div className="service-bar" />
                  <div className="em-service-text">
                    <p>Dramatically cultivate qualit user centric growth stratege enable emerging.</p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a className="flex items-center text-primary hover:underline">
                        Read More <i className="bi bi-plus ml-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Box 2 */}
            <div className="px-4 sm:pl-1">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon1">
                    <Image
                      src="/assets/images/resource/service-icon5.png"
                      height={50}
                      width={50}
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h3 className="text-xl font-semibold">IT Management</h3>
                  </div>
                  <div className="service-bar" />
                  <div className="em-service-text">
                    <p>Dramatically cultivate qualit user centric growth stratege enable emerging.</p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a className="flex items-center text-primary hover:underline">
                        Read More <i className="bi bi-plus ml-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Box 3 */}
            <div className="px-4 sm:pl-1">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon1">
                    <Image
                      src="/assets/images/resource/service-icon6.png"
                      height={50}
                      width={50}
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h3 className="text-xl font-semibold">Web Development</h3>
                  </div>
                  <div className="service-bar" />
                  <div className="em-service-text">
                    <p>Dramatically cultivate qualit user centric growth stratege enable emerging.</p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a className="flex items-center text-primary hover:underline">
                        Read More <i className="bi bi-plus ml-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Box 4 */}
            <div className="px-4 sm:pl-1">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon1">
                    <Image
                      src="/assets/images/resource/service-icon7.png"
                      height={50}
                      width={50}
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h3 className="text-xl font-semibold">Leadership Work</h3>
                  </div>
                  <div className="service-bar" />
                  <div className="em-service-text">
                    <p>Dramatically cultivate qualit user centric growth stratege enable emerging.</p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a className="flex items-center text-primary hover:underline">
                        Read More <i className="bi bi-plus ml-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Box 5 */}
            <div className="px-4 sm:pl-1">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon1">
                    <Image
                      src="/assets/images/resource/service-icon7.png"
                      height={50}
                      width={50}
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h3 className="text-xl font-semibold">Leadership Work</h3>
                  </div>
                  <div className="service-bar" />
                  <div className="em-service-text">
                    <p>Dramatically cultivate qualit user centric growth stratege enable emerging.</p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a className="flex items-center text-primary hover:underline">
                        Read More <i className="bi bi-plus ml-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Box 6 */}
            <div className="px-4 sm:pl-1">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon1">
                    <Image
                      src="/assets/images/resource/service-icon7.png"
                      height={50}
                      width={50}
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h3 className="text-xl font-semibold">Leadership Work</h3>
                  </div>
                  <div className="service-bar" />
                  <div className="em-service-text">
                    <p>Dramatically cultivate qualit user centric growth stratege enable emerging.</p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/service-details">
                      <a className="flex items-center text-primary hover:underline">
                        Read More <i className="bi bi-plus ml-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6">
            <div className="service-bottom-text">
              <p>
                Consulting and Finance Services Built Specially and Business{" "}
                <Link
                  legacyBehavior
                  href="/service">
                  <a className="text-primary hover:underline">Find Solutions</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="service-shape">
            <Image
              src="/assets/images/resource/all-shape3.png"
              width={310}
              height={280}
              alt=""
            />
          </div>
          <div className="service-shape1 bounce-animate2">
            <Image
              src="/assets/images/resource/all-shape6.png"
              height={280}
              width={134}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Section 5 */}

      <div className="why-choose-us-area !px-4 sm:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <div className="consen-section-title">
                <h5 className="text-lg font-semibold">What we offer?</h5>
                <h2 className="text-3xl font-bold">We Strive To Offer</h2>
                <h2 className="text-3xl font-bold">
                  Intelligent <span className="text-primary">Business Solutions</span>
                </h2>
                <p className="choose-text1">
                  Appropriately enhance principle-centered innovation rather than high standards in platforms. Credibly orchestrate functional.
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul className="list-disc pl-5">
                  <li className="flex items-center mb-2">
                    <i className="bi bi-arrow-right-circle mr-2" />
                    <span>Technology Consultancy</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="bi bi-arrow-right-circle mr-2" />
                    <span>E-Commerce Development</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="bi bi-arrow-right-circle mr-2" />
                    <span>Cloud Software Solutions</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="bi bi-arrow-right-circle mr-2" />
                    <span>Brand Development</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="bi bi-arrow-right-circle mr-2" />
                    <span>Enterprise App Development</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="bi bi-arrow-right-circle mr-2" />
                    <span>Mobile Application Development</span>
                  </li>
                </ul>
              </div>
              <div className="why-choose-button">
                <Link
                  legacyBehavior
                  href="/about">
                  <a className="flex items-center text-primary hover:underline">
                    <i className="bi bi-gear mr-1" />
                    More About
                  </a>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-full">
              <div className="why-choose-us-thumb">
                <Image
                  src="/assets/images/resource/why-choose.avif"
                  width={845}
                  height={570}
                  alt=""
                />
                {/* Choose shape thumb */}
                <div className="why-choose-us-image relative">
                  <div className="why-choose-us-shape-thumb bounce-animate">
                    <Image
                      src="/assets/images/resource/all-shape2.png"
                      width={111}
                      height={111}
                      alt=""
                    />
                  </div>

                  <div className="why-choose-us-shape-thumb3 bounce-animate2">
                    <Image
                      src="/assets/images/resource/case-shape2.png"
                      width={475}
                      height={230}
                      alt=""
                    />
                  </div>
                  <div className="why-choose-us-shape-thumb4">
                    <Image
                      src="/assets/images/about/about-shape4.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                {/* End choose shape thumb */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 5 */}
      <div className="testimonial-area overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center testi-rotate items-center">
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
              <Image
                src="/assets/images/resource/testimonial-map.png"
                width={747}
                height={714}
                alt=""
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
                  image: "/assets/images/resource/testi1.png",
                  review: "Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media."
                },
                {
                  name: "Ryan Williams",
                  role: "CEO, Founder",
                  image: "/assets/images/resource/testi3.png",
                  review: "Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media."
                },
                {
                  name: "David Alexon",
                  role: "MH Manager",
                  image: "/assets/images/resource/testi2.png",
                  review: "Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media."
                },
                {
                  name: "Ryan Williams",
                  role: "CEO, Founder",
                  image: "/assets/images/resource/testi3.png",
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
                          <Image
                            src={testimonial.image}
                            width={76}
                            height={76}
                            alt=""
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
                <Image
                  src="/assets/images/resource/all-shape5.png"
                  width={309}
                  height={280}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 6 */}
      <div
        className="case-study-area style-three"
        id="portfolio">
        <div className="container mx-auto h-screen">
          <CaseStudies />
        </div>
      </div>
      {/* Section 7 */}
      <div className="process-area style-two">
        <div className="container mx-auto">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-4 pb-lg-5">
                <h5> process </h5>
                <h2> Our Development </h2>
                <h2>
                  <span> Process </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="process-text">
                <p>
                  {" "}
                  Monotonectally brand worldwide value before in seamless process Collaboratively initiate strategic expertise after functionalized
                  and formulate based internal organic.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* process shape */}
          <div className="process-shape">
            <div className="service-shape">
              <Image
                src="/assets/images/resource/all-shape3.png"
                width={330}
                height={280}
                alt=""
              />
            </div>
            <div className="process-shape-thumb bounce-animate2">
              <Image
                src="/assets/images/resource/all-shape6.png"
                width={133}
                height={280}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="process-extra-area style-two">
        <div className="container mx-auto">
          <div className="row justify-content-center process-bg flex flex-col sm:flex-row">
            <div className="col-lg-4 col-sm-6 px-4">
              <div className="process-single-box2">
                <div className="process-icon-thumb flex justify-center">
                  <Image
                    src="/assets/images/resource/a.png"
                    width={70}
                    height={70}
                    alt=""
                  />
                </div>
                <div className="process-title">
                  <h3>Define Requirements</h3>
                  <p>Collaboratively initiate strategic ex formulate based internal.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 px-4">
              <div className="process-single-box2 responsive">
                <div className="process-icon-thumb flex justify-center">
                  <Image
                    src="/assets/images/resource/b.png"
                    width={70}
                    height={70}
                    alt=""
                  />
                </div>
                <div className="process-title">
                  <h3> Design & Prototyping</h3>
                  <p>Collaboratively initiate strategic ex formulate based internal.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 px-4">
              <div className="process-single-box2 upper">
                <div className="process-icon-thumb flex justify-center after:!hidden ">
                  <Image
                    src="/assets/images/resource/c.png"
                    width={70}
                    height={70}
                    alt=""
                  />
                </div>
                <div className="process-title">
                  <h3> Final Solution </h3>
                  <p>Collaboratively initiate strategic ex formulate based internal.</p>
                </div>
              </div>
            </div>
            {/* Causing UI issue */}
            {/* <div className="process-shape">
              <div className="process-shape-thumb3 bounce-animate3">
                <img src="assets/images/resource/all-shape2.png" alt=""/>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Section 8 */}
      <div
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
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
          </div>
          {/* <div className="row flex justify-center">
            <div className="col-lg-4 col-sm-6 px-4">
              <div className="single_team">
                <div className="single_team_thumb1 ">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    width={370}
                    height={400}
                    alt=""
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
                  <Image
                    src="/assets/images/resource/team-2.jpg"
                    width={370}
                    height={400}
                    alt=""
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
                  <Image
                    src="/assets/images/resource/team-3.jpg"
                    width={370}
                    height={400}
                    alt=""
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
          </div> */}
        </div>
      </div>
      {/* Section 9 */}
      <div
        className="faq-area"
        id="contact">
        <div className="container mx-auto">
          <div className="row flex gap-8 flex-col sm:flex-row">
            <div className="sm:w-1/2 col-lg-6 col-md-6 pl-0">
              {/* Start Accordion */}
              <div className="tab_container">
                <div className="consen-section-title white pb-40 mb-1">
                  <h5> FAQ </h5>
                  <h2>
                    {" "}
                    Frequently Asked <span> Question </span>
                  </h2>
                </div>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full min-w-[20rem]">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl text-white">Is it accessible?</AccordionTrigger>
                    <AccordionContent className="text-white text-lg">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl text-white">Is it styled?</AccordionTrigger>
                    <AccordionContent className="text-white text-lg">
                      Yes. It comes with default styles that matches the other components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl text-white">Is it animated?</AccordionTrigger>
                    <AccordionContent className="text-white text-lg">
                      Yes. It&apos;s animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* End Accordion */}
            </div>
            <div className="sm:w-1/2 col-lg-6 col-md-6">
              <div className="contract-form-bg">
                <div className="contact-form-title">
                  <h4> Free Consultant </h4>
                  <p> 24/7 anytime Open Our Services </p>
                </div>
                <div className="contact_from">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    id="dreamit-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your E-Mail*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            placeholder="Write a Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="quote_button">
                          <button
                            className="btn"
                            type="submit">
                            {" "}
                            <i className="bi bi-gear" /> Free Consultant{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div id="status" />
                </div>
              </div>
            </div>
            <div className="form-shape">
              <div className="testi-shape-thumb">{/* <img src="assets/images/resource/all-shape5.png" alt="" /> */}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 10 */}
      <div
        className="blog-area style-two"
        id="blog">
        <div className="container mx-auto">
          <div className="row  pb-40">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title mobile-center">
                <h2 className="text-white"> We Run All Kinds Of Services </h2>
                <h2 className="text-white">
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="consen-button text-right pt-4 pt-md-0">
                <Link
                  legacyBehavior
                  href="/blog-grid">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> View all Blog{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <Image
                    src="/assets/images/resource/blog1.png"
                    width={370}
                    height={250}
                    alt=""
                  />
                  <div className="blog-top-button">
                    <a href="#"> GRAPHIC </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 25, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link
                        legacyBehavior
                        href="/blog-details">
                        <a> Popular Consultants are big Meetup 2023 </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <Image
                        src="/assets/images/resource/blog-icon.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Alex Collins </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link
                      legacyBehavior
                      href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <Image
                    src="/assets/images/resource/blog2.png"
                    width={370}
                    height={250}
                    alt=""
                  />
                  <div className="blog-top-button">
                    <a href="#"> DEVELOPMENT </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 21, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link
                        legacyBehavior
                        href="/blog-details">
                        <a> How to Increase Business Products Sales </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <Image
                        src="/assets/images/resource/blog-icon.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Julia Moris </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link
                      legacyBehavior
                      href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <Image
                    src="/assets/images/resource/blog3.png"
                    width={370}
                    height={250}
                    alt=""
                  />
                  <div className="blog-top-button">
                    <a href="#"> DESIGN </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 20, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link
                        legacyBehavior
                        href="/blog-details">
                        <a> Top 10 Most Populars Google Chrome app</a>
                      </Link>
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <Image
                        src="/assets/images/resource/blog-icon.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Amantha </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link
                      legacyBehavior
                      href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-shape">
              <div className="port-shape-thumb2 bounce-animate2">
                <Image
                  src="/assets/images/resource/all-shape6.png"
                  width={133}
                  height={280}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 11 */}
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
}
