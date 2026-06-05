import { TypeAnimation } from "react-type-animation";

export default function AnimatedText() {
  return (
    <h3 className="text-white">
      a Professional{" "}
      <span className="text-primary">
        <TypeAnimation
          
          sequence={[
            "Web Developer",
            2000,
            "Software Engineer",
            2000,
            "Python Developer",
            2000,
          ]}
          speed={50}
          deletionSpeed={70}
          repeat={Infinity}
          cursor={true}
        />
      </span>
    </h3>
  );
}
