import React from "react";

function Contact() {
  return (
    <div className="text-text py-12 px-6 lg:px-[20%]">
      <h2 className="text-2xl lg:text-4xl font-bold text-textSecondary text-center mb-6">
        Contact Us
      </h2>
      <p className="text-center text-text mb-10 leading-6">
        We'd love to hear from you! Whether you have a question about a project,
        want to collaborate, or just say hello — drop us a message.
      </p>
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label
            className="block text-sm text-textSecondary mb-1"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 bg-text/30 text-text border border-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-textSecondary"
          />
        </div>

        {/* Email */}
        <div>
          <label
            className="block text-sm text-textSecondary mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 bg-text/30 text-text border border-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-textSecondary"
          />
        </div>

        {/* Message */}
        <div>
          <label
            className="block text-sm text-textSecondary mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            required
            placeholder="Your message..."
            className="w-full px-4 py-3 bg-text/30 text-text border border-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-textSecondary"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-textSecondary/10 text-text font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition duration-500 hover:bg-textSecondary/70"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
