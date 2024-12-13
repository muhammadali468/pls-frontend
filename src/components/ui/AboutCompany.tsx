"use client"
import Link from "next/link"
import { IoSettingsOutline } from "react-icons/io5"
import ProgressBar from "../Progressbar"
import { SlArrowRightCircle } from "react-icons/sl"
import { Image } from "react-bootstrap"
const AboutCompany = () => {
    return (
        <div
            className="about-area style-three"
            id="about">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center p-4 sm:p-0">
                    <div className="lg:w-1/2 md:w-full mb-8 lg:mb-0">
                        <div className="dreamit-about-thumb p-16 md:p-0">
                            <Image
                                src="/assets/images/about/about-2.png"
                                alt="About Us"
                                width={585}
                                height={530}
                            />
                            <div className="about-shape-thumb3 bounce-animate4">
                                <Image
                                    height={100}
                                    width={100}
                                    src="/assets/images/about/about-shape4.png"
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
                                    <li className="flex items-center gap-2 mb-2">
                                        <SlArrowRightCircle className="text-primary" />
                                        <span>Communicate orthogonal process</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SlArrowRightCircle className="text-primary" />
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
                                href="/about">
                                <IoSettingsOutline /> More About
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutCompany