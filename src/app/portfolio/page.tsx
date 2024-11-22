"use client";
import Footer from "@/components/sections/Footer";
import LandingHeader from "@/components/ui/LandingHeader";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const portfolioData = [
    {
      name: "ASMM ERMS",
      img: "/assets/images/portfolio/asmm.webp",
      description:
        "ASMM (Ather Shahid Media Management) is a versatile ERP system tailored for the dynamic needs of modern businesses. It seamlessly integrates essential functions such as HR, project management, employee management, client relationship management, point of sale (POS), and warehouse management into a unified platform. ASMM enhances operational efficiency by streamlining recruitment, payroll, and employee performance evaluation.",
      caseStudyLink: "/portfolio",
      liveLink: "/portfolio"
    },
    {
      name: "Aubrey Apparels E-Commerce",
      img: "/assets/images/portfolio/asmm.webp",
      description:
        "Aubrey Apparels is a premier e-commerce store offering a seamless and enjoyable shopping experience for fashion enthusiasts. With its robust e-commerce platform, customers can easily browse through a wide range of stylish apparel and accessories. The shopping cart and wishlist features allow users to save their favorite items and manage their purchases effortlessly. Aubrey Apparels supports secure online payments.",
      caseStudyLink: "/portfolio",
      liveLink: "/portfolio"
    },
    {
      name: "Briggs HRMS & Payroll",
      img: "/assets/images/portfolio/asmm.webp",
      description:
        "Introducing Briggs, a comprehensive HRM and Payroll Management System designed to automate the complexities of employee salary distribution. Briggs efficiently calculates salaries by accurately tracking work hours based on shifts, late arrivals, absences, and overtime. This advanced system ensures precise payroll processing.",
      caseStudyLink: "/portfolio",
      liveLink: "/portfolio"
    }
  ];
  return (
    <>
      <LandingHeader />
      <section className="py-48">
        <ul className="container mx-auto grid grid-cols-1 gap-16">
          {portfolioData.map((project, i: any) => (
            <li
              key={i}
              className="portfolio-card flex items-center gap-8">
              <Image
                src="/assets/images/portfolio/asmm.webp"
                width={440}
                height={220}
                alt="project img"
              />
              <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="flex gap-4 items-center mt-4">
                  <Link
                    className="bg-primary text-white hover:bg-white hover:text-primary duration-300 border border-transparent hover:border-primary rounded-xl px-4 py-2"
                    href={project.caseStudyLink}>
                    Case Study
                  </Link>
                  <Link
                    className="bg-primary text-white hover:bg-white hover:text-primary duration-300 border border-transparent hover:border-primary rounded-xl px-4 py-2"
                    href={project.liveLink}>
                    Live Link
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
};
export default Portfolio;
