import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Santiago Torres",
  initials: "ST",
  url: "https://dillion.io",
  location: "Waterloo, ON",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Computer Systems Technician and aspiring Full-stack Developer. I love building things and helping people.",
  summary:
    "Hi! I'm Santiago. I recently graduated from Conestoga; I completed the Computer Systems Technician diploma. Although my program was mainly focused on IT, Network Infrastructure and Cybersecurity, I am passionate about Software and Web Development. I Have created multiple projects which you can find below.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Express.js",
    "Javascript",
    "Node.js",
    "Python",
    "TCP/IP Suite",
    "VMware",
    "Cisco",
    "Mikrotik",
    "Fortigate",
    "MySQL",
    "AWS",
    "Automation",
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
      company: "Megawire",
      href: "https://megawire.com",
      badges: [],
      location: "Waterloo, ON",
      title: "IT Technical Support - Tier 1",
      logoUrl: "/megawire.jpg",
      start: "April 2024",
      end: "Present",
      description:
        "Assisted customers with various IT requests in a Managed Service Provider (MSP) environment. Provided Tier 1 technical support by troubleshooting and resolving hardware and software issues, managing user accounts, and configuring network devices. Ensured prompt and effective customer service to enable seamless IT operations for over 30 client organizations. Implemented scripts to automate repetitive tasks, reducing response times and improving overall efficiency. Collaborated with Tier 2 and Tier 3 support teams to escalate and resolve complex issues while maintaining detailed documentation of all support activities.",
    },
    {
      company: "Well.ca",
      badges: [],
      href: "https://well.ca",
      location: "Guelph, ON",
      title: "IT Systems Administrator",
      logoUrl: "/wellca.jpg",
      start: "January 2024",
      end: "April 2024",
      description:
        "Managed and maintained IT infrastructure for a warehouse environment, ensuring optimal performance and minimal downtime. Administered servers, network devices, and storage systems to support daily operations. Automated Power BI report generation and distribution using Power Automate, enhancing data visibility and decision-making for management. Implemented security protocols and regular system updates to safeguard against vulnerabilities. Assisted warehouse staff with technical issues, configured user accounts, and managed inventory software. Developed scripts to automate routine maintenance tasks, improving system efficiency and reducing manual workload. Collaborated with cross-functional teams to ensure seamless integration of new technologies and processes.",
    },
    {
      company: "Rogers",
      href: "https://rogers.com/",
      badges: [],
      location: "Remote",
      title: "Customer Service Consultant",
      logoUrl: "/rogers.jpg",
      start: "May 2023",
      end: "August 2023",
      description:
        "Provided exceptional customer service as a call center representative, addressing a wide range of inquiries and issues related to ISP and telecom services. Assisted customers with account setup, billing questions, and technical troubleshooting, ensuring quick and effective resolution. Automated routine customer interaction processes using CRM tools, improving response times and customer satisfaction. Educated customers on service features and benefits to enhance their experience. Collaborated with technical support and sales teams to escalate and resolve complex issues. Maintained detailed records of customer interactions and feedback to identify areas for service improvement.",
    },
    {
      company: "Conestoga College",
      href: "https://conestogac.on.ca",
      badges: [],
      location: "Waterloo, ON",
      title: "eSports Hub Lead",
      logoUrl: "/conestoga.jpg",
      start: "January 2023",
      end: "August 2023",
      description:
        "Ensured smooth operation of the eSports hub by maintaining and troubleshooting gaming equipment. Regularly updated game servers to provide the latest features and minimize downtime. Managed student bookings for computers and consoles, optimizing accessibility. Automated booking processes and server updates to improve efficiency. Provided technical support to students and collaborated on gaming events and tournaments.",
    },
    {
      company: "Dollar Tree",
      href: "https://li.me/",
      badges: [],
      location: "Kitchener, ON",
      title: "Cashier/Stocker",
      logoUrl: "/dollartree.jpg",
      start: "October 2022",
      end: "May 2023",
      description:
        "Operated the cash register efficiently, handling transactions and providing excellent customer service. Stocked shelves and managed inventory to ensure product availability and organized displays. Assisted customers with inquiries and helped maintain a clean, orderly store environment. Automated inventory tracking processes to improve accuracy and reduce manual effort. Collaborated with team members to ensure smooth store operations and a positive shopping experience for customers.",
    },
    {
      company: "Concentrix",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Bogota, COL",
      title: "Customer Service Representative",
      logoUrl: "/concentrix.jpg",
      start: "August 2021",
      end: "August 2022",
      description:
        "Provided outstanding customer service by handling inquiries, resolving issues, and processing transactions efficiently. Managed and documented customer interactions using CRM tools to ensure accurate records and follow-ups. Assisted with troubleshooting technical issues and offered solutions to enhance customer satisfaction. Automated routine tasks to streamline workflows and improve response times. Collaborated with team members to address complex issues and deliver a seamless customer experience.",
    },
  ],
  education: [
    {
      school: "Conestoga College",
      href: "https://conestogac.on.ca",
      degree: "Computer Systems Technician Diploma (CST)",
      logoUrl: "/conestoga.jpg",
      start: "2016",
      end: "2021",
    }
  ],
  projects: [
    {
      title: "Shalom Store",
      href: "https://chatcollect.com",
      dates: "Feb 2024 - Apr 2024",
      active: true,
      description:
        "My mother sells jewelry on the side. She had no advertising strategy and her sales were limited to her social circle, so I decided to create a website for her. Using React and Bootstap for the front end, and Express.js with MySQL (hosted on AWS) for the backend, I managed to create a simple eCommerce store. Some of the functionalities include: Order placement, shopping cart, user sign in and log in, payments (with PayU gateway), and an Admin portal were my mom could see the current orders and fulfill them, as well as add new products. The website was up for a month for testing, but my mother lost her supplier so it never went into production.",
      technologies: [
        "Node.js",
        "Express.js",
        "React",
        "MySQL",
        "AWS",
        "Bootstrap",
      ],
      links: [
        {
          type: "Front End",
          href: "https://github.com/santiago-torres1/shalom",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Back end",
          href: "https://github.com/santiago-torres1/shalom_backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shalom.jpeg",
      video:"",
    },
    {
      title: "Car Rental Website",
      href: "https://magicui.design",
      dates: "July 2024 - Present",
      active: true,
      description:
        "For my Cloud Infrastructure class, I created a static website for a car rental company. The front end was hosted in an AWS S3 bucket and AWS Cloudfront was used to set up a custom domain. The back end was hosted in a AWS EC2 instance with a public IP, and the database was a MySQL database hosted in AWS RDS. The management app was developed using React",
      technologies: [
        "Node.js",
        "Express.js",
        "HTML",
        "CSS",
        "MySQL",
        "AWS",
        "Bootstrap",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/carRental.png",
      video: "",
    },
    {
      title: "Smart Home Automation System",
      href: "https://llm.report",
      dates: "May 2024 - August 2024",
      active: true,
      description:
        "Developed a Smart Home Automation System. This system uses Home Assistant OS installed in a raspberry pi to manage sensors, which are connected using the Zigbee protocol. Then, the data is sent to a AWS RDS database using a MQTT broker to translate it and using an Express.js server to send it.",
      technologies: [
        "Node.js",
        "Express.js",
        "React",
        "MySQL",
        "AWS",
        "Bootstrap",
        "MQTT",
      ],
      links: [
        {
          type: "Front End",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Back End",
          href: "https://github.com/santiago-torres1/smart-home-automation-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/smarthome.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
