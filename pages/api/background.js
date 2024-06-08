const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "University of Ilorin",
        degree: "BSc, Agricultural & Biosystems Engineering",
        detail:
          "Bachelor's Degree in Agricultural & Biosystems Engineering, specialized in Power and Machinery.",
        year: "2013-2019",
      },
      {
        id: 1,
        title: "AltSchool Africa",
        degree: "Diploma, Software Engineering",
        detail: "Completed a Diploma in Frontend Engineering.",
        year: "2021-2022",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Bare Mind Inc.",
        role: "Frontend Developer",
        url: "https://www.bare-mind.com/",
        desc: "Leads a team of developers, working on Bare Mind, a mental health/wellness platform.",
        year: "09/2021 - Present",
        location: "Johannesburg, South Africa",
      },
      {
        id: 2,
        title: "MSMEs Ecosystems (Tulupay)",
        role: "Frontend Developer",
        url: "",
        desc: "Led a team of frontend developers on a Tulupay, an african-based fintech platform.",
        year: "09/2023 - 12/2023",
        location: "Ilorin, Nigeria",
      },
      {
        id: 3,
        title: "Pacifylabs Technologies",
        role: "Frontend Developer",
        url: "https://pacifylabs.tech/",
        desc: "Worked as a frontend developer. Worked on various projects mainly with React.js and Next.js",
        year: "02/2022 - 05/2023",
        location: "Ilorin, Nigeria",
      },
      {
        id: 4,
        title: "Ticketbay",
        role: "Frontend/Web Developer",
        url: "https://ticketbay.com.ng/",
        desc: "Built a ticketing website for the company. Worked as frontend developer on a custom ticketing solution.",
        year: "04/2020 - 12/2021",
        location: "Lagos, Nigeria",
      },
      {
        id: 5,
        title: "Upwork & Fiverr",
        role: "Freelance Web Developer (Wordpress)",
        url: "",
        desc: "Developed wordpress websites for differents clients on freelancing platforms",
        year: "05/2019 - 01/2022",
        location: "",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
