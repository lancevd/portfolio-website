const expertise = [
  {
    id: 0,
    title: "Frontend Development",
    desc: "Creating visually appealing and user-friendly interfaces using the latest web technologies. My expertise in React.js and Next.js ensures seamless and responsive design across all devices",
  },
  {
    id: 1,
    title: "Backend Development",
    desc: "Building robust and scalable server-side applications. I specialize in creating efficient backend systems with technologies like Node.js, Express.js, and databases, ensuring your application performs reliably.",
  },
  {
    id: 2,
    title: "CMS Development",
    desc: "Developing user-friendly Content Management Systems tailored to your needs. I specialize in creating custom CMS solutions with platforms like WordPress, Shopify and Open Cart, empowering you to manage your content effortlessly.",
  },
  {
    id: 3,
    title: "Graphic Design",
    desc: "Crafting stunning visual content to captivate your audience. My graphic design services include logo creation, branding, and marketing materials that communicate your brand's identity effectively.",
  },
  {
    id: 4,
    title: "SEO ",
    desc: "Optimizing your website to improve its visibility on search engines. My SEO services include keyword research, on-page optimization, and link-building strategies to drive organic traffic and enhance your online presence.",
  },
];

export default function handler(req, res) {
    res.status(200).json(expertise)
}
