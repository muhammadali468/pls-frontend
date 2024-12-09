interface ISERVICEDETAIL {
  success: boolean;
  status: number;
  message: string;
  data: {
    message: string;
    allServices: string;
  };
  allServices: string;
}
interface IALLSERVICES {
  serviceDetail: {
    tabs: {
      id: number;
      name: string;
      title: string;
      description: string;
      features: {
        id: number;
        title: string;
        description: string;
      };
    }[];
    keyFeatures: {
      id: number;
      title: string;
      description: string;
    }[];
    whyChooseUs: string[];
    procedureHeading: string;
    procedureDescription: string;
    processes: {
      id: number;
      title: string;
      description: string;
      action: string;
      outcome: string;
    }[];
  };
}
