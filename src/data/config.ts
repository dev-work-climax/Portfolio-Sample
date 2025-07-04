const config = {
  title: "Harold Pinter | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Harold, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Harold, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Harold Pinter",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Spline",
    "Framer Motion",
    "freelance developer",
    "hire developer",
  ],
  author: "Harold Pinter",
  email: "harold.dev.work@proton.me",
  site: "https://portfolio-sample-k2u2.vercel.app/",
  siteName: "Harold Pinter Portfolio",
  language: "en-US",
  locale: "en_US",
  timezone: "UTC",
  twitterHandle: "@Harold0107",
  
  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  
  social: {
    twitter: "https://x.com/hpintertheatre",
    linkedin: "https://www.linkedin.com/in/Harold0107/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/dev-work-climax",
  },
};
export { config };
