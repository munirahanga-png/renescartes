import { 
  Wind, 
  Cpu, 
  Settings, 
  ShieldCheck, 
  GraduationCap, 
  Search, 
  Database, 
  Users, 
  Activity, 
  HardHat, 
  AlertTriangle, 
  BarChart, 
  Zap,
  Globe
} from "lucide-react";

export const servicesData = [
    {
      slug: "education-consultancy",
      title: "Education Consultancy Services",
      icon: GraduationCap,
      imageUrl: "https://images.unsplash.com/photo-1523050338392-06ba56741001?q=80&w=2070&auto=format&fit=crop",
      description: "Innovative solutions supporting excellence in higher education and global recruitment.",
    content: {
      overview: "At Renés-Cartes, we provide innovative solutions to support excellence in higher education. Our consultancy services help institutions attract quality students, secure research funding, foster academic-industry collaboration, and enhance staff capacity.",
      capabilities: [
        "Development of international student recruitment strategies",
        "Market research and competitor analysis",
        "Branding and visibility enhancement for target regions",
        "Agent and partner institution engagement",
        "Digital outreach campaigns and social media strategy",
        "Support with student conversion and onboarding processes",
        "Customised recruitment events and virtual fairs",
        "Capacity building and training for in-house recruitment teams",
        "Compliance support for international admissions processes"
      ],
      strategicImpact: "By leveraging a data-driven approach, we help universities expand their global reach and build diverse, high-quality student communities."
    }
  },
    {
      slug: "research-analysis",
      title: "Research & Analysis",
      icon: Search,
      imageUrl: "https://images.unsplash.com/photo-1454165833762-0165b4a5047a?q=80&w=2070&auto=format&fit=crop",
      description: "Independent field research and expert analysis for data-backed decision making.",
      content: {
      overview: "We conduct quick assessments and field research projects on several areas of organisation and management relevant to our clients. We also provide independent reviews, ensuring value for money from contractors.",
      capabilities: [
        "Literature review on state-of-the-art organisational research",
        "Fieldwork including interviews, surveys, and focus groups",
        "Expert quantitative and qualitative analysis",
        "Independent reviews of organisational systems",
        "Impact assessments of policy changes on business performance"
      ],
      strategicImpact: "Our research saves clients valuable time and money while ensuring rigorous, evidence-based outcomes."
    }
  },
    {
      slug: "ikm",
      title: "Information & Knowledge Management",
      icon: Database,
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2070&auto=format&fit=crop",
      description: "Leveraging academic and practitioner perspectives to optimise enterprise knowledge assets.",
      content: {
      overview: "We have a profound understanding of Information and Knowledge Management issues, both from academic and practitioner perspectives.",
      capabilities: [
        "Identifying and evaluating KM implementation technologies",
        "Review and initiation of KM projects aligned with strategy",
        "Appraisal of information systems for knowledge process fit",
        "Knowledge audits and creation process reviews",
        "Knowledge management awareness training for personnel"
      ],
      strategicImpact: "Transforms organisational data into a strategic asset, fostering innovation and operational resilience."
    }
  },
    {
      slug: "project-management",
      title: "Project Management",
      icon: Settings,
      imageUrl: "https://images.unsplash.com/photo-1507207611509-af012a3edead?q=80&w=2070&auto=format&fit=crop",
      description: "Comprehensive technical oversight from inception to project completion.",
      content: {
      overview: "Our project management services provide comprehensive support from start to finish, including novel procurement and financing methods.",
      capabilities: [
        "Project scoping and management of deliverables",
        "Budget control and financial oversight",
        "Management of bridging activities",
        "Onsite project support and client representation",
        "Development of project procurement and financing methods"
      ],
      strategicImpact: "Ensures projects are delivered on time, within budget, and in full alignment with the client's strategic intent."
    }
  },
    {
      slug: "training",
      title: "Training & Capacity Building",
      icon: Users,
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      description: "Tailor-made programmes to enhance organisational competency and technical skills.",
      content: {
      overview: "We provide bespoke training services across various technical and management disciplines.",
      capabilities: [
        "Construction technology and management courses",
        "HSEQ awareness workshops",
        "Oil & gas industry courses for non-technical personnel",
        "Knowledge management and competency evaluation",
        "Change management and emergency response training"
      ],
      strategicImpact: "Empowers the workforce with the latest industry knowledge and technical proficiencies."
    }
  },
    {
      slug: "renewable-energy",
      title: "Renewable Energy Solutions",
      icon: Zap,
      imageUrl: "https://images.unsplash.com/photo-1466611653911-9548152ac92b?q=80&w=2070&auto=format&fit=crop",
      description: "Strategic frameworks for a sustainable, low-carbon industrial future.",
      content: {
      overview: "We develop solutions to reduce organisational carbon footprint and transition to sustainable energy sources.",
      capabilities: [
        "Techno-economic evaluation of renewable energy investments",
        "Development of business financial models for energy systems",
        "Environmental and site assessment",
        "Conceptual design, modelling, and simulation",
        "Installation, commissioning, and remote performance monitoring"
      ],
      strategicImpact: "Reduces operational costs and carbon emissions while increasing energy access in off-grid locations."
    }
  },
    {
      slug: "energy-environment",
      title: "Energy & Environmental Management",
      icon: Wind,
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
      description: "Minimising operational costs and carbon emissions through SMART policies.",
      content: {
      overview: "Our services are geared at minimising operational costs and carbon emission related to energy consumption in buildings and industrial facilities.",
      capabilities: [
        "Development of organisational energy and carbon strategies",
        "Environmental targeting and policy design",
        "Benchmarking and corporate sustainability strategy",
        "Energy auditing, surveys, and monitoring",
        "Digital energy management platform development"
      ],
      strategicImpact: "Drives long-term sustainability through targeted monitoring and integration of low-energy systems."
    }
  },
    {
      slug: "hseq",
      title: "HSEQ Management",
      icon: ShieldCheck,
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      description: "Establishing global benchmarks in health, safety, and quality assurance.",
      content: {
      overview: "We provide tailor-made services in all areas of Health, Safety, Environment, and Quality management.",
      capabilities: [
        "Development and review of HSEQ policies and procedures",
        "Onsite HSEQ support for offshore and onshore operations",
        "Environmental impact assessments and auditing",
        "Accident investigation, analysis, and reporting",
        "Flood control and desertification impact monitoring"
      ],
      strategicImpact: "Ensures full compliance with international safety standards and minimises operational risks."
    }
  },
    {
      slug: "asset-management",
      title: "Engineering Asset Management",
      icon: Activity,
      imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      description: "Enhancing the efficiency, reliability, and security of critical energy infrastructure.",
      content: {
      overview: "Our asset management services are tailored to optimise electricity distribution and energy infrastructure operations.",
      capabilities: [
        "Infrastructure assessment and optimisation strategies",
        "Digital technology integration (UAVs and IR thermography)",
        "Data analytics and predictive maintenance protocols",
        "Regulatory compliance and risk management frameworks",
        "Training and capacity building for asset personnel"
      ],
      strategicImpact: "Optimizes asset lifecycle, detects anomalies early, and ensures uninterrupted service delivery."
    }
  },
    {
      slug: "bim-digital",
      title: "BIM & Digital Engineering",
      icon: Cpu,
      imageUrl: "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop",
      description: "State-of-the-art digital twinning and BIM protocols for infrastructure delivery.",
      content: {
      overview: "We bring research-led digital engineering technologies to manage new and existing built asset portfolios.",
      capabilities: [
        "Development of BIM implementation strategies",
        "Retrospective modelling of existing buildings",
        "Clash detection and coordination checks",
        "Architectural and MEP BIM content creation",
        "Cloud-based asset information management systems"
      ],
      strategicImpact: "Achieves significant efficiency improvements in AEC projects through digital twinning and VR/AR integration."
    }
  },
    {
      slug: "erm",
      title: "Enterprise Risk Management",
      icon: AlertTriangle,
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      description: "Identifying and mitigating critical risks in line with international best practices.",
      content: {
      overview: "Our ERM expertise helps organisations understand and manage critical and strategic risks.",
      capabilities: [
        "Development of ERM policies and frameworks",
        "Design of risk appetite and control registers",
        "Risk assessment reporting and implementation plans",
        "Risk awareness programming and automation",
        "Specialised ERM training for staff"
      ],
      strategicImpact: "Protects organisational value and ensures stability in volatile market conditions."
    }
  },
    {
      slug: "transformation",
      title: "Strategic Enterprise Transformation",
      icon: BarChart,
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      description: "Holistic transformation through a non-traditional strategy-as-practice approach.",
      content: {
      overview: "We develop high-impact strategic transformation initiatives based on the unique peculiarities of each organisation.",
      capabilities: [
        "Performance management frameworks (strategic and operational)",
        "Leadership capacity building at scale",
        "Human capital development and IT strategic review",
        "Stakeholder engagement and digital marketing strategy",
        "Organizational rebranding and strategic partnerships"
      ],
      strategicImpact: "Enables meaningful transformation and long-term competitiveness through holistic alignment."
    }
  },
    {
      slug: "it-solutions",
      title: "IT Solutions",
      icon: Globe,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      description: "Streamlining business processes with AI, Machine Learning, and Cloud Computing.",
      content: {
      overview: "We offer specialised consultation and development services to meet specific organisational IT needs, especially in the energy sector.",
      capabilities: [
        "Big Data infrastructure advisory services",
        "Business analytics, ML, and AI strategic consultation",
        "Tailored cyber security consulting for infrastructure",
        "Custom software design and development (Smart Metering focus)",
        "Digital transformation journey guidance"
      ],
      strategicImpact: "Equips businesses with advanced tools to remain agile and secure in the digital age."
    }
  },
    {
      slug: "construction-tech",
      title: "Construction Technology & Management",
      icon: HardHat,
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
      description: "Delivering sustainable built environments through innovative building systems.",
      content: {
      overview: "We provide critical support in delivering efficient and sustainable built environments using the latest techniques.",
      capabilities: [
        "Integrated Project Delivery (IPD) planning",
        "Application of sustainable building materials",
        "Building performance modelling and simulation",
        "MEP engineering design and execution",
        "HSE compliance and PPP structuring"
      ],
      strategicImpact: "Reduces waste and enhances performance across all stages of the construction project life cycle."
    }
  }
];
