import { useNavigate } from "react-router-dom";

import WorkImage from "../assets/work.png";

export const Work = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full h-1/2  py-16 gap-32  ">
      <div className="flex items-center justify-center  max-w-1/3">
        <img src={WorkImage} alt="Work illustration" className="w-2/3" />
      </div>
      <div className="flex flex-col items-start justify-center  gap-10  ">
        <h2 className="mb-2">My Work</h2>
        <h3 className="mb-4">Building Solutions Across Platforms</h3>
        <p className=" leading-relaxed">
          I have experience delivering robust web and mobile applications,
          collaborating with cross-functional teams, and driving innovation from
          concept to deployment. My work spans a variety of industries and
          technologies, always with a focus on user experience and technical
          excellence.
        </p>
        <p>
          Recent projects include interactive data visualizations, scalable
          backend systems, and immersive AR/VR experiences.
        </p>
        <button
          className="button-border w-1/2 mt-3 py-2"
          onClick={() => {
            navigate("/work");
          }}
        >
          View Portfolio
        </button>
      </div>
    </div>
  );
};
