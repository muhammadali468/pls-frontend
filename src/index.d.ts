interface ISERVICEDETAIL {
  success: boolean;
  status: number;
  message: string;
  data: {
    message: string;
    allServices: {
      name: string[];
      subServiceTitle: string[];
      slug: string;
      // serviceDetail: ISINGLESERVICEDETAIL[] | string
    }[];
  };
}
interface ISINGLESERVICEDETAIL {
  tabs: {
    id: number;
    name: string;
    title: string;
    description: string;
    features: {
      id: number;
      title: string;
      description: string;
    }[];
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
}
interface ISERVICECATEGORY {
  success: boolean;
  status: number;
  message: string;
  data: {
    allCategory: Category[];
  };
}

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  slug: string;
  name: string;
}

interface ISERVICE {
  id: string;
  name: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  detailPage: string;
}
interface ISINGLESERVICE {
  success: boolean;
  status: number;
  message: string;
  data: {
    singleService: SingleService;
  };
  requestInfo: {
    url: string;
    ip: string;
    method: string;
  };
}

interface SingleService {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  detailPage: string | null; // null or string
}
