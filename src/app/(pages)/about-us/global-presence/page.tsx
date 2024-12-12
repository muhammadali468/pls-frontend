"use client";
import Footer from "@/components/sections/Footer";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { testimonial_list_slider } from "@/components/ui/sliderProps";
import Counter from "@/components/ui/Counter";

const GlobalPresence = () => {
  return (
    <>
      <div className="testimonial-area overflow-hidden py-56">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center testi-rotate items-center">
            <div className="lg:w-7/12 md:w-6/12 mb-6 md:mb-0">
              <div className="consen-section-title text-white pb-12">
                <h5 className="text-lg font-semibold">Global Presence</h5>
                <h2 className="text-3xl font-bold text-white">Prime Logic Solution Trusted Customers</h2>
                <h2 className="text-3xl font-bold text-white">
                  Accross <span className="text-primary">Globe</span>
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
                  name: "North America",
                  role: "USA",
                  image: "/assets/images/about/global-presence/north-america.png",
                  review: "Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media."
                },
                {
                  name: "Europe",
                  role: "UK",
                  image: "/assets/images/about/global-presence/europe.png",
                  review: "Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media."
                },
                {
                  name: "Middle East",
                  role: "Dubai",
                  image: "/assets/images/about/global-presence/middle-east.png",
                  review: "Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media."
                },
                {
                  name: "Asia",
                  role: "India",
                  image: "/assets/images/about/global-presence/asia.png",
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
                      <div className="flex">
                        <div className="w-1/2">
                          <div className="testi-counter-box upper">
                            <div className="testi-counter-title">
                              <h3 className="counter text-center !text-[#141323]">2000</h3>
                              <span>+</span>
                              <p className="!text-[#141323]">Happy Customers</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/2">
                          <div className="testi-counter-box">
                            <div className="testi-counter-title">
                              <h3 className="counter !text-[#141323]">50</h3>
                              <span>%</span>
                              <p className="!text-[#141323]">Satisfaction Rate</p>
                            </div>
                          </div>
                        </div>
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
      <Footer />
    </>
  );
};
export default GlobalPresence;
