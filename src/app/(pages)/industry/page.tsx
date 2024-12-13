"use client";
import Link from "next/link";
import CardsContainer from "@/components/ui/CardsContainer";
import { dindustry } from "@/constants";
import AboutCompany from "@/components/ui/AboutCompany";
import GlobalPresence from "../about-us/global-presence/page";

const Industry = () => {
  return (
    <>
      {/*==================================================*/}

      <CardsContainer data={dindustry} />
      <AboutCompany />
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
      <GlobalPresence />
    </>
  );
};
export default Industry;
