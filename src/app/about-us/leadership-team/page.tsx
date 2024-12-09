import Footer from "@/components/sections/Footer";
import LandingHeader from "@/components/ui/LandingHeader";
import Image from "next/image";

const LeadershipTeam = () => {
  const softwareDevTeam = [
    {
      name: "Software Development Manager",
      description: ""
    },
    {
      name: "Web Developer",
      description: ""
    },
    {
      name: "Mobile Application Developer",
      description: ""
    },
    {
      name: "SaaS Developer",
      description: ""
    },
    {
      name: "API Developer",
      description: ""
    },
    {
      name: "Web 3.0 Developer",
      description: ""
    },
    {
      name: "Salesforce Developer",
      description: ""
    },
    {
      name: "CMS Developer",
      description: ""
    }
  ];
  const dataAnalyticsTeam = [
    {
      name: "Data Analyst",
      description: ""
    },
    {
      name: "Big Data Engineer",
      description: ""
    },
    {
      name: "AI/ML Engineer",
      description: ""
    },
    {
      name: "Computer Vision Specialist",
      description: ""
    }
  ];
  const cloudTeam = [
    {
      name: "Cloud Architect",
      description: ""
    },
    {
      name: "DevOps Engineer",
      description: ""
    },
    {
      name: "Containerization Specialist",
      description: ""
    },
    {
      name: "Cloud Security Specialist",
      description: ""
    }
  ];

  const emergingTechTeam = [
    {
      name: "Blockchain Developer",
      description: ""
    },
    {
      name: "IoT Engineer",
      description: ""
    },
    {
      name: "AI Developer",
      description: ""
    },
    {
      name: "Voice Technology Specialist",
      description: ""
    }
  ];

  const creativeTeam = [
    {
      name: "Graphic Designer",
      description: ""
    },
    {
      name: "CAD Designer",
      description: ""
    },
    {
      name: "UI/UX Designer",
      description: ""
    },
    {
      name: "Visual Content Creator",
      description: ""
    }
  ];

  const commerceTeam = [
    {
      name: "E-commerce Specialist",
      description: ""
    },
    {
      name: "Digital Marketing Manager",
      description: ""
    },
    {
      name: "Social Media Specialist",
      description: ""
    },
    {
      name: "Content Writer",
      description: ""
    }
  ];

  const productionTeam = [
    {
      name: "Production Manager",
      description: ""
    },
    {
      name: "Sound Engineer",
      description: ""
    },
    {
      name: "Video Editor",
      description: ""
    },
    {
      name: "Media Technician",
      description: ""
    }
  ];

  const cyberSecurityTeam = [
    {
      name: "Cybersecurity Analyst",
      description: ""
    },
    {
      name: "Ethical Hacker",
      description: ""
    },
    {
      name: "Incident Response Specialist",
      description: ""
    },
    {
      name: "Compliance Specialist",
      description: ""
    }
  ];

  const futureTech = [
    {
      name: "Green IT Specialist",
      description: ""
    },
    {
      name: "Sustainability Consultant",
      description: ""
    },
    {
      name: "Environmental Data Analyst",
      description: ""
    },
    {
      name: "Future Tech Researcher",
      description: ""
    }
  ];

  const qualityTeam = [
    {
      name: "QA Analyst",
      description: ""
    },
    {
      name: "Automation Tester",
      description: ""
    },
    {
      name: "Performance Tester",
      description: ""
    },
    {
      name: "Security Tester",
      description: ""
    }
  ];
  const progressTeam = [
    {
      name: "Progress Developer",
      description: ""
    },
    {
      name: "Integration Specialist",
      description: ""
    },
    {
      name: "Technical Consultant",
      description: ""
    },
    {
      name: "Support Engineer",
      description: ""
    }
  ];
  const supportTeam = [
    {
      name: "IT Support Specialist",
      description: ""
    },
    {
      name: "System Administrator",
      description: ""
    },
    {
      name: "Help Desk Technician",
      description: ""
    },
    {
      name: "Network Engineer",
      description: ""
    }
  ];
  const leadershipTeam = [
    {
      name: "CEO",
      description: ""
    },
    {
      name: "CTO",
      description: ""
    },
    {
      name: "CFO",
      description: ""
    },
    {
      name: "CAO",
      description: ""
    }
  ];
  return (
    <>
      <LandingHeader />
      <div
        className="team_area new"
        id="team">
        <div className="px-32 mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper  pb-60">
                <h5> Team Member </h5>
                <h2 className="text-center">
                  {" "}
                  Let’s Meet with Our <span> Experts </span>
                </h2>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center text-primary">Leadership</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {leadershipTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Software Development Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {softwareDevTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Data and Analytics Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {dataAnalyticsTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Cloud and DevOps Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {cloudTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Emerging Technologies Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {emergingTechTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Creative and Design Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {creativeTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Digital Commerce and Marketing Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {commerceTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Production and Media Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {productionTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Cybersecurity Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {cyberSecurityTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Sustainability and Future Tech Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {futureTech.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Quality Control and Testing Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {qualityTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-32 text-center text-primary">Progress Technology Services Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {progressTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-32 text-center text-primary">IT Support Team</h2>
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
            {supportTeam.map((member, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden">
                <div className="h-[300px] w-full relative">
                  <Image
                    src="/assets/images/resource/team-1.jpg"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">{member.name}</h4>
                  {/* <h5 className="text-center text-white">{member.designation}</h5> */}
                  <p className="text-white text-center"> {member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LeadershipTeam;
