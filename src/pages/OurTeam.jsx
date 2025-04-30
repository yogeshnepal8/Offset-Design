import React from "react";
import TeamMember from "../components/TeamMember";
import yogesh from "../assets/yogesh.JPG";
import rabi from "../assets/rabi.jpg";

function OurTeam() {
  return (
    <div>
      {/* CEO Section */}
      <div className="flex flex-col lg:gap-10 lg:flex-row items-center w-full px-5 lg:px-[20%] text-left text-text mt-4">
        <img
          src={yogesh}
          alt="Yogesh Nepal"
          className="w-[200px] h-[200px] object-cover flex-none my-10 rounded-full"
        />
        <div>
          <h1 className="text-2xl text-bold px-4 text-textSecondary lg:text-4xl lg:mt-5">
            Message from CEO
          </h1>
          <p className="text-normal py-3 px-4">
            At offset design, our vision is to shape the future of architecture
            and construction through innovation, sustainability, and excellence.
            We are committed to delivering projects that not only meet but
            exceed expectations, creating spaces that inspire and endure.
          </p>
          <p className="text-normal py-3 px-4">
            Our success is built on a foundation of trust, collaboration, and a
            relentless pursuit of quality. As we continue to grow, we remain
            dedicated to our clients, partners, and the communities we serve.
            Together, we are building a legacy that will stand the test of time.
          </p>
          <p className="text-normal px-4">Thank you for your trust in us.</p>
          <p className="text-normal px-4">Yogesh Nepal</p>
          <p className="text-normal px-4">Chief Executive Officer</p>
        </div>
      </div>

      {/* Managing Director Section */}
      <div className="flex flex-col lg:gap-10 lg:flex-row-reverse items-center w-full px-5 lg:px-[20%] text-left text-text mt-4">
        <img
          src={rabi}
          alt="Rabi Silwal"
          className="w-[200px] h-[200px] object-cover flex-none my-10 rounded-full"
        />
        <div>
          <h1 className="text-2xl text-bold px-4 text-textSecondary lg:text-4xl lg:mt-5">
            Message from the Managing Director
          </h1>
          <p className="text-normal px-4 py-3">
            At Offset Design, we believe that great architecture and
            construction are more than just structures—they are a reflection of
            vision, craftsmanship, and dedication. Our team works tirelessly to
            transform ideas into reality, ensuring every project is built with
            precision and care.
          </p>
          <p className="text-normal py-3 px-4">
            We take pride in our ability to adapt to changing industry demands
            while maintaining the highest standards of quality and integrity.
            With a strong commitment to innovation and sustainability, we
            continue to shape skylines and communities for a better future.
          </p>
          <p className="text-normal px-4">
            Thank you for being part of our journey.
          </p>
          <p className="text-normal px-4">Rabi Silwal</p>
          <p className="text-normal px-4">Managing Director</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-5 lg:px-[10%] py-4 text-center text-text mt-4">
        <h1 className="text-2xl text-bold text-textSecondary lg:text-4xl lg:mt-5">
          Our Team
        </h1>
        <p className="text-regular py-3 px-10 lg:px-[20%]">
          At Offset Design, our success is driven by the passion, expertise, and
          dedication of our team. From architects and engineers to project
          managers and skilled craftsmen, each member plays a vital role in
          bringing our vision to life.
        </p>
        <p className="text-regular py-3 px-10 lg:px-[20%]">
          Meet the people behind our projects and explore their contributions to
          our journey.
        </p>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap justify-center gap-10 px-5 lg:px-[10%] py-10">
        {team.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            designation={member.designation}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}
import { team } from "../assets/team";

export default OurTeam;
