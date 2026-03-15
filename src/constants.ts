export interface Skill {
  name: string;
  category: 'Automation' | 'Analysis' | 'Operations';
  description: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  id?: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export const SKILLS: Skill[] = [
  {
    name: "Excel VBA",
    category: "Automation",
    description: "Advanced macro development for complex data processing and workflow automation.",
    icon: "FileSpreadsheet"
  },
  {
    name: "Python Automation",
    category: "Automation",
    description: "End-to-end Excel automation and data pipeline construction using Python.",
    icon: "Terminal"
  },
  {
    name: "RPA on Hugging Face",
    category: "Automation",
    description: "Deploying Robotic Process Automation models and AI-driven agents.",
    icon: "Cpu"
  },
  {
    name: "Healthcare Metrics Analysis",
    category: "Analysis",
    description: "Deep analysis of AR, Prior Auth, and financial performance metrics.",
    icon: "Activity"
  },
  {
    name: "Power BI",
    category: "Analysis",
    description: "Interactive dashboard creation for executive-level reporting.",
    icon: "BarChart3"
  },
  {
    name: "SLA/KPI Governance",
    category: "Operations",
    description: "Managing large-scale delivery (130+ FTEs) with strict performance adherence.",
    icon: "ShieldCheck"
  },
  {
    name: "Exp Payer Intelligence",
    category: "Analysis",
    description: "Deep understanding of payer behaviors and intelligence for optimized claims.",
    icon: "Activity"
  },
  {
    name: "Prior Authorization",
    category: "Operations",
    description: "Expertise in managing and streamlining the prior authorization process.",
    icon: "ShieldCheck"
  },
  {
    name: "Client Management",
    category: "Operations",
    description: "Building and maintaining strong relationships with healthcare clients.",
    icon: "User"
  },
  {
    name: "Transition Operations",
    category: "Operations",
    description: "Managing the smooth transition of operational workflows and projects.",
    icon: "Briefcase"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Certified Revenue Cycle Representative (CRCR)",
    issuer: "HFMA",
    date: "2025",
    image: "/Certified Revenue Cycle Representative (CRCR).png"
  },
  {
    title: "Certified Specialist Ambulatory Practice Management (CSAPM)",
    issuer: "HFMA",
    date: "2026",
    image: "/Certified Specialist Ambulatory Practice Management (CSAPM).png"
  },
  {
    title: "Quality Certification",
    issuer: "Six Sigma / Lean",
    date: "2021",
    image: "/Quality Certification.jpg"
  },
  {
    title: "Be10X AI Workshop",
    issuer: "Be10X",
    date: "2024",
    image: "/Be10X.png"
  },
  {
    title: "PMP Examination Eligibility",
    issuer: "PMI",
    date: "Completed 35 Contact Hours"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Operations Manager",
    company: "R1 RCM",
    period: "Aug 2023 – Present",
    highlights: [
      "Lead 9 AR and Prior Authorization projects with a span of 130+ FTEs, owning delivery, financial performance, quality, and operational governance.",
      "Govern SLAs and KPIs including TAT, aging, collections, denial ratios, appeal success rate, and compliance metrics.",
      "Drive cash acceleration by reducing high-aging inventory through strategic queue prioritization and structured denial management.",
      "Payer intelligence analysis using Automation/RPA using Python.",
      "Oversee end-to-end AR lifecycle: claim follow-ups, denial resolution, underpayment analysis, appeals tracking, payer negotiations, and escalation management.",
      "Own complete Prior Authorization workflows: benefits verification, authorization initiation, clinical documentation validation, submission, follow-ups, P2P coordination, and appeal management.",
      "Resolve payer enablement challenges including credentialing gaps, portal access, and submission route alignment.",
      "Lead client onboarding initiatives—requirement gathering, cross-functional coordination, system access enablement, FTE ramp-up, issue/risk log tracking, and stabilization.",
      "Conduct denial and authorization trend analysis; implement SOP updates and workflow enhancements to improve first-pass yield and approval rates.",
      "Present performance dashboards and governance reports to leadership and clients; manage escalations and executive-level communications."
    ]
  },
  {
    role: "Team Lead – Delivery",
    company: "Reventics / Omega Healthcare",
    period: "Jul 2022 – Aug 2023",
    highlights: [
      "Managed AR and authorization teams ensuring SLA adherence",
      "Handled payer escalations and productivity optimization"
    ]
  }
];
