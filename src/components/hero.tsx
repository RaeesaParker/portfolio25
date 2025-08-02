export const Hero = ({ onEnterUniverse }: { onEnterUniverse: () => void }) => {
  return (
    <div className="flex justify-center align-middle text-center h-dvh ">
      <div className="flex flex-col justify-between w-1/2">
        <div className="flex flex-col justify-center align-middle gap-6 my-auto">
          <h1>Hello, I'm Raeesa</h1>
          <h2>
            Astrophysicist
            <span className="inline-block mx-1 align-middle">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7 15l5-5-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  color="var(--color-gold-500)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Full Stack Developer
          </h2>
          <p>
            I bring together data-driven insights, creative problem-solving, and
            a versatile development toolkit to build impactful, cross-platform
            digital solutions.
          </p>
        </div>
        <button
          className="button-border w-1/2 mx-auto mb-28 py-2"
          onClick={onEnterUniverse}
        >
          Enter my Universe
        </button>
      </div>
    </div>
  );
};
