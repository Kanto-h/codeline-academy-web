export const site = {
  name: "Codeline",
  nav: [
    { href: "./index.html", label: "Home", key: "home" },
    { href: "./courses.html", label: "Courses", key: "courses" },
    { href: "./enrollment.html", label: "Enrollment", key: "enrollment" }
  ]
};

export const categories = ["All", "Programming", "Web", "Data", "DevOps"];

export const courses = [
  { category: "Programming", title: "Python for Beginners", level: "Beginner", weeks: 8, price: 49 },
  { category: "Web", title: "JavaScript Essentials", level: "Beginner", weeks: 10, price: 59 },
  { category: "Web", title: "React from Scratch", level: "Intermediate", weeks: 12, price: 89 },
  { category: "Data", title: "SQL and Databases", level: "Beginner", weeks: 6, price: 45 },
  { category: "DevOps", title: "Git and GitHub", level: "Beginner", weeks: 4, price: 29 },
  { category: "DevOps", title: "Docker Basics", level: "Intermediate", weeks: 6, price: 69 }
];

export const featured = {
  category: "Web",
  title: "React from Scratch",
  description: "Build modern interfaces with components, state and hooks.",
  level: "Intermediate",
  weeks: 12,
  instructor: "Marcus Lind",
  price: 89,
  image: "react",
  alt: "Abstract code symbols on a blue background",
  modules: [
    { title: "Components and JSX", weeks: 2 },
    { title: "State and props", weeks: 3 },
    { title: "Hooks", weeks: 3 },
    { title: "Final project", weeks: 4 }
  ]
};

export const priceLabel = (value) => "€" + value;
