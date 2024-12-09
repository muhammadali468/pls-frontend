"use client";
import Footer from "@/components/sections/Footer";
import LandingHeader from "@/components/ui/LandingHeader";
import Link from "next/link";

const HireFreelancer = () => {
  return (
    <>
      <LandingHeader />
      {/*==================================================*/}
      <div className="service-area mt-80">
        <div className="container mx-auto">
          <div className="row flex justify-between align-items-center flex-col sm:flex-row mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
              <div className="consen-section-title mobile-center">
                <h2> We Run All Kinds Of Services</h2>
                <h2>
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
            {/* <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link
                  legacyBehavior
                  href="/service">
                  <a>
                    {" "}
                    All Service <FaPlus />{" "}
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/contact-freelancer"
              className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon flex justify-center items-center">
                    <img
                      src="assets/images/resource/service-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="em-service-title">
                    <h2> Frontend Developer </h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 01 </h1>
                  </div>
                </div>
              </div>
            </Link>
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
                    <h2> Backend Developer </h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 02 </h1>
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
                    <h2> Mobile App Developer </h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 03 </h1>
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
                    <h2>Full-stack Developer</h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 04 </h1>
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
                    <h2> UI/UX Designer </h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 05 </h1>
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
                    <h2>Cyber Security</h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 06 </h1>
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
                    <h2>Blockchain Developer</h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 07 </h1>
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
                    <h2> Ai Developer </h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 08 </h1>
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
                    <h2>Data Analyst</h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 09 </h1>
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
                    <h2>Digital Marketer</h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 10 </h1>
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
                    <h2> SEO Expert </h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 11 </h1>
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
                    <h2>CMS Developer</h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 12 </h1>
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
                    <h2>Motion Graphics Designer</h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 13 </h1>
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
                    <h2> Sound Designer </h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 14 </h1>
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
                    <h2>Digital Media Creator</h2>
                  </div>
                  <div className="service-number text-center">
                    <h1> 15 </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}

      <Footer />
    </>
  );
};
export default HireFreelancer;
