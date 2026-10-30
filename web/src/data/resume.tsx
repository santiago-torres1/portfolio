import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Santiago Torres",
  initials: "ST",
  // Set at build time by the CD pipeline (CloudFront URL or custom domain).
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  location: "Kitchener, ON",
  locationLink: "https://www.google.com/maps/place/Kitchener,+ON",
  description:
    "DevOps & Cloud Engineer. 3+ years running production IT, now automating it with infrastructure as code and CI/CD.",
  summary:
    "I'm a DevOps engineer based in Kitchener, Ontario, with 3+ years of hands-on IT experience across MSP and in-house environments. My foundation is networking, identity, and endpoint management; these days most of my work is automation, infrastructure as code, and CI/CD on **Microsoft Azure**, with growing experience on **AWS**.\n\nAt my current role, I redesigned our Azure ingress architecture, cutting subscription costs considerably, and deployed it with Bicep and a GitHub Actions pipeline with pull request validation and an approval gate. I hold the **AZ-104**, **SC-300**, and **CCNA** certifications, and I'm scheduled to take the **AZ-400 DevOps Engineer Expert** exam in November 2026.\n\nI'm looking for my next role in **DevOps, Cloud, or Platform Engineering**. The source for this site, including the Terraform and GitHub Actions pipeline that deploy it to AWS, is [on GitHub](https://github.com/santiago-torres1/portfolio).",
  avatarUrl: "/me.jpeg",
  skills: [
    "Microsoft Azure",
    "AWS",
    "Bicep",
    "GitHub Actions",
    "CI/CD",
    "Docker",
    "Ansible",
    "Python",
    "PowerShell",
    "Bash",
    "Git",
    "Linux",
    "Entra ID",
    "Intune",
    "Microsoft 365",
    "Networking",
    "Fortinet",
    "VMware vSphere",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "santiago.torres1407@gmail.com",
    tel: "+1 (226) 899-6712",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/santiago-torres1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santiago-torres-706792271/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Perimeter Institute",
      href: "https://perimeterinstitute.ca",
      badges: [],
      location: "Waterloo, ON",
      title: "Technology Specialist II",
      logoUrl: "/perimeter.svg",
      start: "November 2025",
      end: "Present",
      description:
        "Redesigned the Azure ingress architecture for hosted APIs, web applications, and public documents, simplifying the traffic path and reducing subscription costs by 35%. Engineered the Bicep templates and GitHub Actions CI/CD pipeline that deploy it, with automated validation on pull requests, an approval gate, and production deployment on merge to main. Manage and support production applications running in Docker containers. Designed and deployed Microsoft Intune from the ground up for 150 devices, covering configuration, application deployment, Windows Update, security, and compliance policies. Automate onboarding and offboarding with Python, Bash, and PowerShell, and server patching with Ansible playbooks. Currently defining the organization's first formal release strategy for device updates and policy changes.",
    },
    {
      company: "MSP Corp Central",
      href: "https://mspcorp.ca",
      badges: [],
      location: "Guelph, ON",
      title: "Senior IT Support Specialist (Level 2)",
      logoUrl: "/mspcorp.png",
      start: "January 2025",
      end: "November 2025",
      description:
        "Senior technical escalation point for 60+ client environments (25–150 employees each), specializing in Azure and Microsoft 365. Diagnosed and resolved Azure VPN gateway, NAT gateway, and virtual machine issues, restoring connectivity and availability for client workloads. Deployed and maintained hybrid environments, securing identity, access, and endpoints across Microsoft 365, Entra ID, and Azure. Triaged and resolved tickets in Autotask and ConnectWise with accurate documentation and consistent SLA compliance.",
    },
    {
      company: "Megawire Inc.",
      href: "https://megawire.com",
      badges: [],
      location: "Waterloo, ON",
      title: "IT Support Specialist",
      logoUrl: "/megawire.jpg",
      start: "April 2024",
      end: "January 2025",
      description:
        "Led a team of 5 technicians supporting 30+ business clients across Active Directory, Microsoft 365, Exchange, and network infrastructure (Ubiquiti, Fortinet, MikroTik, Cisco). Built tools, chatbots, backend services, and REST API integrations in Python and JavaScript to simplify the team's support work and remove repetitive tasks. Monitored and troubleshot network operations across 120+ locations, resolving critical router, switch, and access point issues.",
    },
    {
      company: "Well.ca",
      href: "https://well.ca",
      badges: [],
      location: "Guelph, ON",
      title: "IT Systems Administrator (Co-op)",
      logoUrl: "/wellca.jpg",
      start: "January 2024",
      end: "April 2024",
      description:
        "Built automation workflows with Power Automate, Power BI, and MySQL, speeding up data exports and improving reporting accuracy. Managed Windows systems through imaging and policy-based configuration, and applied MySQL to optimize data-driven processes.",
    },
    {
      company: "Rogers Communications",
      href: "https://rogers.com",
      badges: [],
      location: "Waterloo, ON",
      title: "Customer Service & Technical Support Specialist",
      logoUrl: "/rogers.jpg",
      start: "May 2023",
      end: "September 2023",
      description:
        "Handled 40+ inbound calls per day across billing, account, and technical support requests. Provided Level 1 technical support for connectivity, hardware, and software issues while maintaining a high first-call resolution rate, and consistently met or exceeded performance targets.",
    },
    {
      company: "Concentrix",
      href: "https://www.concentrix.com",
      badges: [],
      location: "Bogota, Colombia",
      title: "Technical Support Representative",
      logoUrl: "/concentrix.jpg",
      start: "August 2021",
      end: "August 2022",
      description:
        "Resolved 50+ technical support and troubleshooting calls per day for AT&T, including number porting and ICCID updates. Ranked in the top 5 of 100+ agents on customer satisfaction, sales, and revenue.",
    },
  ],
  education: [
    {
      school: "Conestoga College",
      href: "https://conestogac.on.ca",
      degree: "Computer Systems Technician – IT Infrastructure and Services Diploma",
      logoUrl: "/conestoga.jpg",
      start: "2022",
      end: "2024",
      description:
        "Relevant coursework: Computer Operations and Troubleshooting, Network and Security, Virtual Infrastructure, Cloud Infrastructure Administration.",
    },
  ],
  certifications: [
    {
      title: "DevOps Engineer Expert",
      code: "AZ-400",
      issuer: "Microsoft",
      status: "In progress",
      note: "Exam scheduled for November 2026",
      image: "/badges/microsoft-expert.svg",
      href: "https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/",
    },
    {
      title: "Azure Administrator Associate",
      code: "AZ-104",
      issuer: "Microsoft",
      issued: "Aug 2025",
      expires: "Aug 2027",
      image: "/badges/microsoft-associate.svg",
      credentialUrl:
        "https://learn.microsoft.com/users/santiagotorres-7196/credentials/39d022ecb6b1e89a",
    },
    {
      title: "Identity and Access Administrator Associate",
      code: "SC-300",
      issuer: "Microsoft",
      issued: "Jun 2025",
      expires: "Jun 2027",
      image: "/badges/microsoft-associate.svg",
      credentialUrl:
        "https://learn.microsoft.com/users/santiagotorres-7196/credentials/cab615b42b4734c2",
    },
    {
      title: "Cisco Certified Network Associate",
      code: "CCNA",
      issuer: "Cisco",
      issued: "Oct 2024",
      expires: "Oct 2027",
      image: "/badges/ccna.png",
      credentialUrl:
        "https://www.credly.com/badges/2dcbce15-cea7-4e71-a07c-3818787cad5a",
    },
  ],
} as const;
