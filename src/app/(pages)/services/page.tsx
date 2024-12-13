"use client";
import Link from "next/link";
import { dservice } from "@/constants";
import GlobalPresence from "../about-us/global-presence/page";
import CardsContainer from "@/components/ui/CardsContainer";
import AboutCompany from "@/components/ui/AboutCompany";

const Services = () => {
  return (
    <>
      <CardsContainer data={dservice} />
      <AboutCompany />
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
                  <Link
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                    target="_blank">
                    <i className="bi bi-pause-circle-fill" />
                  </Link>
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
      <GlobalPresence />
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Brand Section */}
      {/*===================================================*/}
      {/* <div className="brand-section srv-page">
        <div className="container">
          <div className="row">
            <LogoSlider />
          </div>
        </div>
      </div> */}

    </>
  );
};
export default Services;
