

import Image from "next/image";
import Link from "next/link";
const Partners = () => {
  return (
    <>
      <section className="py-48   ">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
            Amazing IT Solutions We Provide <br />
            <span className="text-orange-600">That We Stand Behind</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="single-service-box">
              <div className="service-box-thumb">
                <Image
                  src="/assets/images/resource/team-1.jpg"
                  alt=""
                  height={300}
                  width={300}
                />
              </div>
              <div className="service-icon-thumb">
              <Image
                  className="-mt-[3.25rem]"
                  src="/assets/images/resource/srv1.png"
                  alt=""
                  height={32}
                  width={32}
                />
              </div>
              <div className="service-content">
                <h2>Product Development</h2>
                <p>Capitalize low hanging fruit to identify beta test. Override digital</p>
                <Link href="/service">Read More</Link>
              </div>
            </div>
            <div className="single-service-box">
              <div className="service-box-thumb">
              <Image
                  src="/assets/images/resource/team-1.jpg"
                  alt=""
                  height={300}
                  width={300}
                />
              </div>
              <div className="service-icon-thumb">
                <Image
                  className="-mt-[3.25rem]"
                  src="/assets/images/resource/srv1.png"
                  alt=""
                  height={32}
                  width={32}
                />
              </div>
              <div className="service-content">
                <h2>Product Development</h2>
                <p>Capitalize low hanging fruit to identify beta test. Override digital</p>
                <Link href="/service">Read More</Link>
              </div>
            </div>
            <div className="single-service-box">
              <div className="service-box-thumb">
              <Image
                  src="/assets/images/resource/team-1.jpg"
                  alt=""
                  height={300}
                  width={300}
                />
              </div>
              <div className="service-icon-thumb">
              <Image
                  className="-mt-[3.25rem]"
                  src="/assets/images/resource/srv1.png"
                  alt=""
                  height={32}
                  width={32}
                />
              </div>
              <div className="service-content">
                <h2>Product Development</h2>
                <p>Capitalize low hanging fruit to identify beta test. Override digital</p>
                <Link href="/service">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};
export default Partners;
