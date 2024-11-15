// import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// const Isotope = dynamic(() => import("isotope-layout"), { ssr: false });

const CaseStudies = () => {
  const isotope = useRef<any>(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    const initIsotope = async () => {
      const IsotopeModule = await import("isotope-layout");
      isotope.current = new IsotopeModule.default(".image_load", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item"
        },
        // @ts-ignore
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });
    };
    initIsotope();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*" ? isotope.current.arrange({ filter: `*` }) : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value: string) => (value === filterKey ? "current_menu_item" : "");

  return (
    <>
      <div className="case-study-bg">
        <div className="w-full">
          <div className="consen-section-title uppercase text-center pb-12">
            <h5 className="text-lg font-semibold">Case Studies</h5>
            <h2 className="text-4xl font-bold">We Serve the Best Works</h2>
            <h2 className="text-4xl font-bold">
              View <span className="text-primary">Case Studies</span>
            </h2>
          </div>
        </div>
        <div className="portfolio-shape relative">
          <div className="port-shape-thumb rotateme">
            <Image
              src="/assets/images/resource/red-dot.png"
              width={174}
              height={174}
              alt=""
            />
          </div>
          <div className="port-shape-thumb2 bounce-animate2 ">
            <Image
              src="/assets/images/resource/all-shape6.png"
              width={134}
              height={280}
              alt=""
            />
          </div>
        </div>
        <div className="w-full">
          <div className="portfolio_nav">
            <div className="portfolio_menu text-center">
              <ul className="menu-filtering flex justify-center gap-4 flex-wrap sm:flex-nowrap">
                <li
                  className={`cursor-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}>
                  All items
                </li>
                <li
                  className={`cursor-pointer ${activeBtn("physics")}`}
                  onClick={handleFilterKeyChange("physics")}>
                  Strategy
                </li>
                <li
                  className={`cursor-pointer ${activeBtn("chemistry")}`}
                  onClick={handleFilterKeyChange("chemistry")}>
                  Faculties
                </li>
                <li
                  className={`cursor-pointer ${activeBtn("math")}`}
                  onClick={handleFilterKeyChange("math")}>
                  Coaching
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}

      <div className="row image_load left-4 sm:left-0">
        <div className="col-lg-4 col-md-6 grid-item gap-2 physics english">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              <Image
                src="/assets/images/project/study1.png"
                width={371}
                height={330}
                alt=""
              />

              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study1.png">
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link
                        legacyBehavior
                        href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="video-icon style-two">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
             
              <Image
                src="/assets/images/project/study2.png"
                width={371}
                height={330}
                alt=""
              />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study2.png">
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link
                        legacyBehavior
                        href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="video-icon style-two">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 grid-item chemistry english">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              
              <Image
                src="/assets/images/project/study3.png"
                width={371}
                height={330}
                alt=""
              />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study3.png">
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link
                        legacyBehavior
                        href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="video-icon style-two">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 grid-item math english">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              
              <Image
                src="/assets/images/project/study4.png"
                width={371}
                height={330}
                alt=""
              />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study4.png">
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link
                        legacyBehavior
                        href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="video-icon style-two">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 grid-item math physics">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              
              <Image
                src="/assets/images/project/study5.png"
                width={371}
                height={330}
                alt=""
              />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study5.png">
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link
                        legacyBehavior
                        href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="video-icon style-two">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 grid-item chemistry physics">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              <Image
                src="/assets/images/project/study6.png"
                width={371}
                height={330}
                alt=""
              />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study6.png">
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link
                        legacyBehavior
                        href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="video-icon style-two">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
