import rabia from "./rabia.jpg";
import sita from "./sita.jpg";
import anil from "./anil.jpg";
import municipal from "./municipal.jpg";
import design from "./designandplanning.jpg";
import construction from "./constructionandsupervision.jpg";
import { image } from "framer-motion/client";

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of architectural and construction services, including residential and commercial design, project management, and sustainable building solutions.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The duration of a project depends on its complexity and size. We provide a detailed timeline during the initial consultation.",
  },
  {
    question: "Do you provide design services?",
    answer:
      "Yes, we offer comprehensive design services tailored to meet your specific needs and preferences.",
  },
  {
    question: "Can you work within my budget?",
    answer:
      "Absolutely! We work closely with our clients to develop solutions that fit their budget without compromising quality.",
  },

  {
    question: "Do you have a portfolio of past projects?",
    answer:
      "Yes, we have a portfolio showcasing our previous work. You can view it on our website or request a copy during the consultation.",
  },
  {
    question: "How do I get started with my project?",
    answer:
      "To get started, simply contact us to schedule an initial consultation. We'll discuss your ideas and how we can help bring them to life.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, we provide warranties on our construction work to ensure your peace of mind.",
  },
  {
    question: "How can I contact you for more information?",
    answer:
      "You can reach us through our website's contact form, email, or by phone. We look forward to hearing from you!",
  },
];

export const testimonials = [
  {
    name: "Kumar Bhattarai",
    location: "Tikathali, Lalitpur",
    image: rabia,
    quote:
      "From the very beginning, their professionalism, creativity, and attention to detail exceeded our expectations. The project was delivered on time, and the quality truly speaks for itself.",
  },
  {
    name: "Sita Sharma",
    location: "Baneshwor, Kathmandu",
    image: sita,
    quote:
      "I was impressed with how smoothly everything went. The team communicated every step clearly and brought my vision to life even better than I imagined.",
  },
  {
    name: "Anil Thapa",
    location: "Pokhara, Kaski",
    image: anil,
    quote:
      "The design and execution were flawless. Their dedication and craftsmanship are truly commendable. I’m extremely satisfied with how my home turned out. Highly recommended!",
  },
];

export const titles = [
  {
    title: "Municipal Process",
    image: municipal,
    content:
      "Understanding the local municipal requirements is crucial before beginning any construction work. This includes zoning, permits, and regulatory approvals.",
  },
  {
    title: "Design & Planning",
    image: design,
    content:
      "A well-structured design and planning phase ensures the project stays within budget, meets client expectations, and aligns with local building codes.",
  },
  {
    title: "Construction & Supervision",
    image: construction,
    content:
      "This phase involves the actual building process, where careful supervision is required to ensure quality control, timely delivery, and worker safety.",
  },
];
