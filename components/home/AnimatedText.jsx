import { TypeAnimation } from "react-type-animation";

export default function AnimatedText() {
  return (
    <h4 className="text-white">
      a Professional{" "}
      <span className="text-primary">
        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,
            "Full-Stack Developer",
            2000,
            "Python Developer",
            2000,
            "React & Next.js Developer",
            2000,
          ]}
          speed={50}
          deletionSpeed={70}
          repeat={Infinity}
          cursor={true}
        />
      </span>
    </h4>
  );
}
