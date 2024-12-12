import Image from "next/image";
const Awards = () => {
  return (
    <>
      <section className="py-48 container mx-auto">
        <div className=" mb-6">
          <h3 className="text-sm font-medium text-gray-500">Awards & Recognitions</h3>
          <h2 className="text-3xl font-bold text-primary">Our Awards</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <Image
            src="/assets/images/about/content/img-1.png"
            height={500}
            width={500}
            alt="none"
            className="rounded-xl"
          />
          <div className="space-y-4">
            {[
              { year: "2014", title: "Business Award", description: "Physical space is often conceived in three linear dimensions" },
              { year: "2016", title: "Design Award", description: "Maxwell’s equations—the foundation of classical electromagnetism" },
              { year: "2017", title: "Best Renovation", description: "The long barrow was built on land previously inhabited in the Mesolithic" },
              { year: "2018", title: "Innovation Award", description: "Physiological respiration involves the mechanisms that ensure that" },
              { year: "2019", title: "Landscape Design", description: "Maxwell’s equations—the foundation of classical electromagnetism" }
            ].map((award, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-medium text-gray-600">{award.year}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">{award.title}</h4>
                    <p className="text-sm text-gray-500">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Awards;
