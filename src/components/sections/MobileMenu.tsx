import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenus, setSubMenus] = useState("");
  const activeMenuSet = (value: any) => setActiveMenu(activeMenu === value ? "" : value),
    activeBtn = (value: any) => (value === activeMenu ? "-" : "+"),
    activeLi = (value: any) => (value === activeMenu ? { display: "block" } : { display: "none" }),
    // @ts-ignore
    setSub = ({ value, motherMenu }: any) => (motherMenu === activeMenu && value == subMenus ? setSubMenus("") : setSubMenus(value)),
    // @ts-ignore
    activeSub = (value: any) => (value === subMenus ? { display: "block" } : { display: "none" });
  return (
    <div className="mobile-menu-area sm:block lg:hidden header____">
      <div className="mobile-menu mean-container">
        <div className="mean-bar">
          <a
            href="#nav"
            className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
            onClick={() => setToggle(!toggle)}>
            {toggle ? (
              "X"
            ) : (
              <Fragment>
                <span /> <span /> <span />
              </Fragment>
            )}
          </a>
          <nav className="mean-nav">
            <ul
              className="nav_scroll"
              style={{ display: toggle ? "block" : "none" }}>
              {/* <li>
                <a href="#">Home </a>
                <ul
                  className="sub-menu"
                  style={activeLi("Home")}>
                  <li>
                    <Link
                      legacyBehavior
                      href="/">
                      IT Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="index-2">
                      Finance Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="/index-3">
                      <a>IT Solution</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="/landing-1">
                      <a>Landing Page</a>
                    </Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Home")}
                  style={{ fontSize: 18 }}>
                  {activeBtn("Home")}
                </a>
              </li> */}
              <li>
                <Link
                  legacyBehavior
                  href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  legacyBehavior
                  href="/">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services">Services </Link>
                <ul
                  className="sub-menu"
                  style={activeLi("Services")}>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Web Development</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Mobile Application</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Data Analysis</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">E-commerce</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">SaaS Development</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Digital Marketing</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Production Services</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Graphic Design</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Sound Engineering</li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Services")}
                  style={{ fontSize: 18 }}>
                  {activeBtn("Services")}
                </a>
              </li>
              <li>
                <Link href="/industry">Industry </Link>
                <ul
                  className="sub-menu"
                  style={activeLi("Industry")}>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Information Technology (IT)</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Healthcare</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Finance & Banking</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Retail & E-commerce</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Tourism & Hospitaility</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Education</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Media & entertainment</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Construction</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Energy & Utility</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Logistics & Transport</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Legal & Compliance</li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Industry")}
                  style={{ fontSize: 18 }}>
                  {activeBtn("Industry")}
                </a>
              </li>
              <li>
                <Link href="/technology">Technology </Link>
                <ul
                  className="sub-menu"
                  style={activeLi("Technology")}>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Web Technology</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Mobile Technology</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Backend Technology</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Database</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Cloud Infrastructure</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Blockchain</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">Cybersecurity</li>
                  <li className="!bg-white text-primary py-4 px-16 !text-md">E-Commerce</li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Technology")}
                  style={{ fontSize: 18 }}>
                  {activeBtn("Technology")}
                </a>
              </li>
              {/* <li>
                <a href="#">Company </a>
                <ul
                  className="sub-menu"
                  style={activeLi("Company")}>
                  <li>
                    <Link
                      legacyBehavior
                      href="about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="service">
                      Our Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="pricing">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="team">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="portfolio-details">
                      Portfolio Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="404">
                      404
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Company")}
                  style={{ fontSize: 18 }}>
                  {activeBtn("Company")}
                </a>
              </li> */}
              <li>
                <Link
                  legacyBehavior
                  href="/portfolio">
                  Portfolio
                </Link>
              </li>
              {/* <li>
                <a href="#">Blog </a>
                <ul
                  className="sub-menu"
                  style={activeLi("Portfolio")}>
                  <li>
                    <Link
                      legacyBehavior
                      href="blog-grid">
                      Blog Gird
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="blog-list">
                      Blog List
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="blog-2column">
                      Blog-2Column
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="blog-details">
                      Blog Details
                    </Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Portfolio")}
                  style={{ fontSize: 18 }}>
                  {activeBtn("Portfolio")}
                </a>
              </li> */}
              <li className="mean-last">
                <Link
                  legacyBehavior
                  href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push" />
      </div>
    </div>
  );
};
export default MobileMenu;
