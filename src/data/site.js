export const site = {
  name: "Codeline",
  nav: [
    { href: "./index.html", key: "home" },
    { href: "./courses.html", key: "courses" },
    { href: "./enrollment.html", key: "enrollment" }
  ],
  languages: ["en", "uk"]
};

export const categories = ["all", "programming", "web", "data", "devops"];

export const courses = [
  { category: "programming", title: "Python for Beginners", level: "beginner", weeks: 8, price: 49, image: "python" },
  { category: "web", title: "JavaScript Essentials", level: "beginner", weeks: 10, price: 59, image: "javascript" },
  { category: "web", title: "React from Scratch", level: "intermediate", weeks: 12, price: 89, image: "react" },
  { category: "data", title: "SQL and Databases", level: "beginner", weeks: 6, price: 45, image: "sql" },
  { category: "devops", title: "Git and GitHub", level: "beginner", weeks: 4, price: 29, image: "git" },
  { category: "devops", title: "Docker Basics", level: "intermediate", weeks: 6, price: 69, image: "docker" }
];

export const featured = {
  ...courses[2],
  instructor: "Marcus Lind",
  modules: [
    { key: "module.1", weeks: 2 },
    { key: "module.2", weeks: 3 },
    { key: "module.3", weeks: 3 },
    { key: "module.4", weeks: 4 }
  ]
};

export const coverAlt = (course) => "Cover of the " + course.title + " course";

export const priceLabel = (value) => "€" + value;
