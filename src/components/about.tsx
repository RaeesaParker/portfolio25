import React from "react";
import { useNavigate } from "react-router-dom";

import AboutImage from "../assets/about.png";

export const About = ({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const navigate = useNavigate();

  return (
    <div
      ref={aboutRef}
      className="flex flex-col md:flex-row items-center justify-center w-full h-dvh  gap-32 "
    >
      <div className="flex-[2] flex flex-col items-start justify-center  gap-10 ">
        <h2 className="mb-2 ">About me</h2>
        <h3 className="mb--4">From studying stars to building software</h3>
        <p className=" leading-relaxed">
          I apply the analytical thinking and problem-solving skills I developed
          in astronomy to create innovative digital solutions as a full stack
          developer.
        </p>
        <p>
          I'm currently part of the{" "}
          <span className="text-[var(--color-blue-500)] ">
            Innovation Team at Lancaster University,
          </span>{" "}
          building all sorts of wonderful things across web, mobile, AR, and VR.
        </p>

        <button
          className="button-border w-1/2 mt-3 py-2"
          onClick={() => {
            navigate("/about");
          }}
        >
          Learn more
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center  max-w-1/3">
        <img src={AboutImage} alt="About illustration" className="w-2/3 " />
      </div>
    </div>
  );
};
