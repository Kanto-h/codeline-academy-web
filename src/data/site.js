export const site = {
  name: "Codeline Academy",
  tagline: "Online IT courses with structured programs and practical assignments.",
  nav: [
    { href: "./index.html", label: "Home", key: "home" },
    { href: "./courses.html", label: "Courses", key: "courses" },
    { href: "./course-details.html", label: "Course details", key: "details" },
    { href: "./enrollment.html", label: "Enrollment", key: "enrollment" }
  ],
  footerColumns: [
    {
      title: "Courses",
      links: [
        { href: "./courses.html", label: "Programming" },
        { href: "./courses.html", label: "Web Development" },
        { href: "./courses.html", label: "Data" }
      ]
    },
    {
      title: "Academy",
      links: [
        { href: "./index.html", label: "About" },
        { href: "./index.html#instructors", label: "Instructors" },
        { href: "./index.html", label: "Contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "./index.html", label: "Terms" },
        { href: "./index.html", label: "Privacy" }
      ]
    }
  ]
};

export const categories = ["Programming", "Web Development", "Data", "DevOps", "Security"];

export const instructors = [
  { name: "Marcus Lindqvist", role: "Senior Frontend Engineer", bio: "Ten years building web products; teaches React and JavaScript." },
  { name: "Elena Petrova", role: "Data Engineer", bio: "Works with analytics pipelines and teaches SQL and Pandas." },
  { name: "Daniel Okoye", role: "DevOps Engineer", bio: "Runs container platforms and teaches Docker and Git workflows." }
];

export const courses = [
  { slug: "python", category: "Programming", title: "Python for Beginners", level: "Beginner", weeks: 8, rating: "4.8", price: 49, instructor: "Elena Petrova", image: "python", alt: "Abstract code symbols on a blue background" },
  { slug: "javascript", category: "Web Development", title: "JavaScript Essentials", level: "Beginner", weeks: 10, rating: "4.7", price: 59, instructor: "Marcus Lindqvist", image: "javascript", alt: "Abstract code symbols on a blue background" },
  { slug: "react", category: "Web Development", title: "React from Scratch", level: "Intermediate", weeks: 12, rating: "4.9", price: 89, instructor: "Marcus Lindqvist", image: "react", alt: "Abstract code symbols on a blue background" },
  { slug: "sql", category: "Data", title: "SQL and Databases", level: "Beginner", weeks: 6, rating: "4.6", price: 45, instructor: "Elena Petrova", image: "sql", alt: "Abstract code symbols on a blue background" },
  { slug: "pandas", category: "Data", title: "Data Analysis with Pandas", level: "Intermediate", weeks: 8, rating: "4.7", price: 79, instructor: "Elena Petrova", image: "pandas", alt: "Abstract code symbols on a blue background" },
  { slug: "git", category: "DevOps", title: "Git and GitHub Workflow", level: "Beginner", weeks: 4, rating: "4.8", price: 29, instructor: "Daniel Okoye", image: "git", alt: "Abstract code symbols on a blue background" },
  { slug: "docker", category: "DevOps", title: "Docker for Developers", level: "Intermediate", weeks: 6, rating: "4.6", price: 69, instructor: "Daniel Okoye", image: "docker", alt: "Abstract code symbols on a blue background" },
  { slug: "security", category: "Security", title: "Cybersecurity Fundamentals", level: "Beginner", weeks: 8, rating: "4.5", price: 59, instructor: "Daniel Okoye", image: "security", alt: "Abstract code symbols on a blue background" }
];

export const featuredCourse = courses.find((c) => c.slug === "react");

export const modules = [
  { title: "Module 1. Components and JSX", lessons: "6 lessons", hours: 5 },
  { title: "Module 2. State and props", lessons: "8 lessons", hours: 7 },
  { title: "Module 3. Hooks and effects", lessons: "8 lessons", hours: 8 },
  { title: "Module 4. Routing and forms", lessons: "7 lessons", hours: 6 },
  { title: "Module 5. Final project", lessons: "4 lessons", hours: 10 }
];

export const reviews = [
  { author: "Anna Weber", rating: 5, date: "2026-09-12", dateLabel: "12 Sep 2026", text: "Clear structure and practical assignments. I built my first real application." },
  { author: "Oleh Kovalenko", rating: 5, date: "2026-08-30", dateLabel: "30 Aug 2026", text: "Marcus explains hooks better than any book I have read." },
  { author: "Sofia Marino", rating: 4, date: "2026-08-14", dateLabel: "14 Aug 2026", text: "Good pace and useful feedback. More examples on routing would help." }
];

export const priceLabel = (value) => "€" + value;
