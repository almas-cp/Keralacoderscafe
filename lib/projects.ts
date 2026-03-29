export interface Project {
  id: number;
  name: string;
  submittedBy: string;
  description: string;
  problem: string;
  audience: string;
  language: string;
  languageColor: string;
  topics: string[];
  date: string;
  link?: string;
}

export const REPOS: Project[] = [
  {
    id: 5,
    name: "journal-pub-tool",
    submittedBy: "Sathish",
    description:
      "A lightweight scientific journal writing and publication tool built for non-technical PhD researchers — simplifying formatting, citations, and submission.",
    problem: "PhD scholars face friction with complex journal writing tools.",
    audience: "Technical & non-technical researchers",
    language: "Python",
    languageColor: "#3572A5",
    topics: ["research", "academic", "writing"],
    date: "Mar 23",
    link: "https://docs.google.com/document/d/1n_rqWyHa63cXDQn5nKPe6Ka-iCldQune/edit?usp=sharing&ouid=104705300161293552423&rtpof=true&sd=true",
  },
  {
    id: 6,
    name: "friends-meetup-finder",
    submittedBy: "Abhijith",
    description:
      "Finds a fair, optimised meeting point for friends spread across different cities — considering travel time, transport options (public & private), and nearby junctions.",
    problem: "No tool finds a genuinely fair midpoint for multi-city friend meetups in Kerala.",
    audience: "Friend groups across different locations",
    language: "TypeScript",
    languageColor: "#3178c6",
    topics: ["maps", "social", "travel"],
    date: "Mar 27",
    link: "https://drive.google.com/file/d/17vUbAS6S5_W3_bRa9gDb8TPv6b1gJKnf/view?usp=sharing",
  },
  {
    id: 7,
    name: "repo-pulse",
    submittedBy: "Aby Varghese",
    description:
      "RepoPulse — a modern GitHub analytics dashboard that transforms repositories into meaningful insights. Track commits, PRs, and contribution trends in real-time.",
    problem: "Developers lack a clean, at-a-glance dashboard for repo health.",
    audience: "Developers, open source contributors",
    language: "TypeScript",
    languageColor: "#3178c6",
    topics: ["github", "analytics", "dashboard"],
    date: "Mar 28",
    link: "https://docs.google.com/document/d/1_gqvT7ods4SYGhB6myTAE9Ktb4zJrrRp/edit?usp=sharing&ouid=104705300161293552423&rtpof=true&sd=true",
  },
  {
    id: 1,
    name: "used-book-marketplace",
    submittedBy: "Leo Joseph Sibichen",
    description:
      "A platform that helps readers get their favourite books at low prices, and helps new readers start their reading journey affordably.",
    problem: "Makes books accessible to all age groups at reduced cost.",
    audience: "All age groups",
    language: "TypeScript",
    languageColor: "#3178c6",
    topics: ["marketplace", "books", "ecommerce"],
    date: "Mar 22",
  },
  {
    id: 2,
    name: "creator-biz-collab",
    submittedBy: "Leo Joseph Sibichen",
    description:
      "Connects business owners with content creators for brand collaborations. Helps businesses promote products through creator partnerships while giving creators paid opportunities.",
    problem: "No unified platform for creator–brand partnerships in Kerala.",
    audience: "Young entrepreneurs, content creators",
    language: "TypeScript",
    languageColor: "#3178c6",
    topics: ["marketing", "creators", "b2b"],
    date: "Mar 22",
  },
  {
    id: 3,
    name: "pharma-cost-db",
    submittedBy: "",
    description:
      "A medicine cost database that finds drugs with the same or similar active compounds and suggests affordable alternatives.",
    problem: "Patients and doctors lack a tool to find cheaper equivalent medicines.",
    audience: "Doctors, nurses, general public",
    language: "Python",
    languageColor: "#3572A5",
    topics: ["healthcare", "pharma", "database"],
    date: "Mar 22",
  },
  {
    id: 4,
    name: "find-toddy-shop",
    submittedBy: "Aravind",
    description:
      "A web and mobile app to discover authentic toddy shops across Kerala — with locations, food availability, quality info, and user reviews.",
    problem: "No centralised digital platform for Kerala's traditional toddy shop culture.",
    audience: "Food & culture explorers, tourists, locals",
    language: "JavaScript",
    languageColor: "#f1e05a",
    topics: ["kerala", "maps", "food-culture"],
    date: "Mar 23",
  },
];
