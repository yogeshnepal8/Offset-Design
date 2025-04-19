import React from "react";
import WhyUs from "../components/WhyUs";
import { motion } from "framer-motion";
import Faq from "../components/Faq";
import { faqs, testimonials, titles } from "../assets/Faqs.js";
import Testimonial from "../components/Testimonial.jsx";
import RecentBlogs from "../components/RecentBlogs.jsx";

function Home() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const testimonialVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const testimonialCardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const blogVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const blogCardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="text-text text-center">
      <div className="hero-section mt-20 lg:mt-40 ">
        <h1 className="text-4xl lg:text-7xl">
          <span className="">DESIGN.</span>
          <span className="text-text px-2">BUILD.</span>
          <span>DELIVER.</span>
        </h1>
        <h2 className="text-2xl lg:text-5xl text-medium ">
          Excellence in Every Detail
        </h2>
        <p className="text-regular py-8 px-10 lg:py-20 lg:px-[33%]">
          From concept to completion, we bring innovation, precision, and
          craftsmanship to every project. Whether it’s architectural design,
          structural planning, or full-scale construction, we ensure quality
          that stands the test of time.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="border border-textSecondary text-text rounded-lg hover:bg-textSecondary/40 transition duration-300 ease-in px-4 py-2 font-bold">
            Portfolio
          </button>
          <button className="border border-textSecondary text-text rounded-lg bg-textSecondary/40 hover:bg-textSecondary/0 transition duration-300 ease-in px-4 py-2 font-bold">
            Contact Us
          </button>
        </div>
      </div>
      <div className="why-us bg-text/20 mx-5 lg:mx-[10%] lg:mt-10 p-[5px] my-10 rounded-lg">
        <h2 className="text-2xl text-bold text-textSecondary  lg:text-4xl lg:mt-5">
          Why Us?
        </h2>
        <p className="text-regular py-3 px-10 lg:px-[25%]">
          With years of experience in architecture and construction, we
          specialize in delivering innovative, sustainable, and high-quality
          projects. From concept to completion, we ensure excellence at every
          step.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap lg:flex-row gap-5 justify-center lg:gap-10 lg:py-5"
        >
          <WhyUs text={"Planning"} img={"tikathali.png"} />
          <WhyUs text={"Design"} img={"tikathali.png"} />
          <WhyUs text={"Build"} img={"tikathali.png"} />
        </motion.div>
      </div>
      <div className="Services ">
        <h2 className="text-2xl text-bold text-textSecondary  lg:text-4xl lg:mt-5">
          Services
        </h2>
      </div>
      <div className="recent-blogs ">
        <h2 className="text-2xl text-bold text-textSecondary  lg:text-4xl lg:mt-5">
          Recent Blogs
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-5 mt-5"
          variants={blogVariants}
          initial="hidden"
          animate="show"
        >
          {titles.map((item, index) => (
            <motion.div key={index} variants={blogCardVariants}>
              <RecentBlogs image="blog-sample.png" title={item.title} />
            </motion.div>
          ))}
        </motion.div>
        <p className="text-right px-[10%] italic text-text/40 my-2">
          View more
        </p>
      </div>
      <div className="testimonials px-5 lg:px-[10%] py-4 ">
        <h2 className="text-2xl text-bold text-textSecondary  lg:text-4xl lg:mt-5">
          What our Clients Say
        </h2>
        <p className="text-regular py-3 px-10 lg:py- lg:px-[25%]">
          We take pride in delivering exceptional quality and service. Here’s
          what our clients have to say about their experience with us:
        </p>
        <motion.div
          className="flex flex-col items-center gap-3 lg:flex-row justify-center px-5 mx-2 lg:gap-10 lg:py-5 flex-wrap"
          variants={testimonialVariants}
          initial="hidden"
          animate="show"
        >
          {testimonials.map((item, index) => (
            <motion.div key={index} variants={testimonialCardVariants}>
              <Testimonial
                name={item.name}
                location={item.location}
                image={item.image}
                quote={item.quote}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="faq py-4 ">
        <h2 className="text-2xl text-bold text-textSecondary  lg:text-4xl lg:mt-5">
          FAQ
        </h2>
        {faqs.map((item, index) => (
          <Faq key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </main>
  );
}

export default Home;
