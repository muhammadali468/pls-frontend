import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const CardsContainer = ({ data }: any) => {
    return (
        <section className="mt-8">
            <div className="service-area mt-40">
                <div className="container mx-auto">
                    <div className="row flex justify-between align-items-center mb-10">
                        <div className="col-lg-7 col-md-8 pl-0">
                            <div className="consen-section-title mobile-center">
                                <h2> We Run All Kinds Of Services</h2>
                                <h2>
                                    {" "}
                                    From <span> Technologies </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    {data.map((category: any, categoryIndex: number) => (
                        category?.services?.length > 0 ? (
                            <div key={categoryIndex}>
                                <h2 className="font-bold text-2xl">{category.name}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
                                    {category.services.map((service: any, serviceIndex: number) => (
                                        <div key={serviceIndex}>
                                            <div className="dreamit-service-box">
                                                <div className="service-box-inner">
                                                    <div className="em-service-icon flex justify-center items-center">
                                                        <Image
                                                            height={32}
                                                            width={32}
                                                            src="/assets/images/resource/service-icon.png"
                                                            alt="Service Icon"
                                                            quality={100}
                                                        />
                                                    </div>
                                                    <div className="em-service-title">
                                                        <h2>{service.name}</h2>
                                                    </div>
                                                    <div className="service-number">
                                                        <h1>0{serviceIndex + 1}</h1>
                                                    </div>
                                                    <div className="em-service-text">
                                                        <p>{service.description}</p>
                                                    </div>
                                                    <div className="service-button">
                                                        <Link href="/service-details">
                                                            <span className="flex gap-2 items-center">
                                                                <p>Read More</p>
                                                                <FaPlus />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardsContainer;
