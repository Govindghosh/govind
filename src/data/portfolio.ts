import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, 
  SiSpringboot, SiNetlify, SiVercel, SiGithub, SiLinkedin
} from 'react-icons/si';
import { FaDatabase, FaCode, FaMobile, FaSearch, FaTools, FaJava, FaComments, FaClipboardList, FaBolt, FaRocket } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

export const techStack = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
  { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/govind/ecommerce-platform',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, file sharing, and team communication features.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    liveUrl: 'https://taskmaster-pro.com',
    githubUrl: 'https://github.com/govind/task-management',
    featured: true,
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization, scheduling, and multi-platform integration.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'Chart.js', 'REST APIs'],
    liveUrl: 'https://social-dash.com',
    githubUrl: 'https://github.com/govind/social-dashboard',
    featured: false,
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with advanced search, virtual tours, and mortgage calculator.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'Spring Boot', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://realty-pro.com',
    githubUrl: 'https://github.com/govind/real-estate-platform',
    featured: true,
  },
  {
    id: 5,
    title: 'Learning Management System',
    description: 'Educational platform with course management, video streaming, quizzes, and progress tracking.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Video.js'],
    liveUrl: 'https://learn-hub.com',
    githubUrl: 'https://github.com/govind/lms-platform',
    featured: false,
  },
  {
    id: 6,
    title: 'Restaurant Management System',
    description: 'Complete restaurant solution with POS system, inventory management, and customer ordering platform.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://resto-manager.com',
    githubUrl: 'https://github.com/govind/restaurant-system',
    featured: false,
  },
];

export const services = [
  {
    id: 1,
    title: 'Web App Development',
    description: 'Full-stack web applications using modern technologies like React, Node.js, and cloud services.',
    icon: FaCode,
    features: ['Custom Web Applications', 'API Development', 'Database Design', 'Cloud Deployment'],
  },
  {
    id: 2,
    title: 'Responsive UI/UX Design',
    description: 'Beautiful, responsive user interfaces that work seamlessly across all devices and platforms.',
    icon: FaMobile,
    features: ['Mobile-First Design', 'Cross-Browser Compatibility', 'Accessibility Compliance', 'Performance Optimization'],
  },
  {
    id: 3,
    title: 'API & Database Development',
    description: 'Robust backend systems with secure APIs, efficient databases, and scalable architecture.',
    icon: FaDatabase,
    features: ['RESTful APIs', 'Database Optimization', 'Security Implementation', 'Third-party Integrations'],
  },
  {
    id: 4,
    title: 'Website Optimization',
    description: 'Improve your website\'s performance, SEO rankings, and user experience for better conversion rates.',
    icon: FaSearch,
    features: ['Performance Optimization', 'SEO Implementation', 'Core Web Vitals', 'Analytics Setup'],
  },
  {
    id: 5,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, updates, and technical support to keep your applications running smoothly.',
    icon: FaTools,
    features: ['Regular Updates', '24/7 Monitoring', 'Bug Fixes', 'Performance Monitoring'],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Govind delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is outstanding.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateLab',
    content: 'Working with Govind was a game-changer for our project. Fast delivery, clean code, and excellent communication throughout the process.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, Digital Solutions',
    content: 'The web application Govind built for us has significantly improved our business operations. Highly recommend for any development needs.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'CTO, ScaleUp Ventures',
    content: 'Govind\'s expertise in full-stack development helped us launch our MVP ahead of schedule. Professional, reliable, and skilled.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Director, GrowthCo',
    content: 'The responsive design and performance optimization work done by Govind increased our conversion rates by 40%. Excellent results!',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
];

export const processSteps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'We discuss your project requirements, goals, and timeline to create a detailed plan.',
    icon: FaComments,
  },
  {
    id: 2,
    title: 'Proposal & Agreement',
    description: 'Get a detailed proposal with scope, timeline, and pricing. Sign the agreement to begin.',
    icon: FaClipboardList,
  },
  {
    id: 3,
    title: 'Design & Development',
    description: 'I create wireframes, design the UI, and develop your application using modern technologies.',
    icon: FaBolt,
  },
  {
    id: 4,
    title: 'Testing & Delivery',
    description: 'Thorough testing across devices and browsers before delivering the final product.',
    icon: FaRocket,
  },
  {
    id: 5,
    title: 'Ongoing Support',
    description: 'Continued maintenance, updates, and support to ensure optimal performance.',
    icon: FaTools,
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/govindghosh/',
    icon: SiGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://in.linkedin.com/in/govind-web-developer',
    icon: SiLinkedin,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/govind_ghosh',
    icon: RiTwitterXLine,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for creating maintainable and scalable React applications with modern tools and techniques.',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'React',
    slug: 'building-scalable-react-applications',
  },
  {
    id: 2,
    title: 'Full-Stack Development with MERN Stack',
    excerpt: 'A comprehensive guide to building full-stack applications using MongoDB, Express.js, React, and Node.js.',
    date: '2024-03-10',
    readTime: '12 min read',
    category: 'Full Stack',
    slug: 'fullstack-development-mern-stack',
  },
  {
    id: 3,
    title: 'Optimizing Web Performance',
    excerpt: 'Essential techniques and tools for improving your website\'s performance and user experience.',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Performance',
    slug: 'optimizing-web-performance',
  },
];