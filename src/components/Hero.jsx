import photo from "../assets/hero/photo.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const words = ["Programmer", "Full Stack Web Developer", "Machine Learning Enthusiast"];
  const [index, setIndex] = useState(0);

  const imgContainerStyle = {
    position: "relative",
    "::after": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: "linear-w4gradient(rgba(1, 3, 0, 0.7), rgba(0, 0, 0, 0.7))",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Home"
      className="h-[40rem] w-full flex justify-center items-center max-lg:flex-col "
    >
      <div className="rounded-full max-w-[400] max-h-[400] ml-10 mr-10 z-2">
        <img
          className="rounded-full"
          src={photo}
          height={400}
          width={400}
          alt=""
          style={imgContainerStyle}
        />
      </div>
      <div className="w-full max-md:mt-10 ">
        <h2 className="h2 mb-6 ">
          Hi, I'm <span className="text-color-1">Shivansh!!</span>
          <br />
          Passionate{" "}
          <span className="text-color-1 animate-slideInLeft">
            {words[index]}
          </span>
        </h2>

        <p className="body-1 max-w-3xl  mb-6 text-n-2 text-lg lg:mb-8 ">
          A dedicated computer science student currently immersed in my studies,
          I am fueled by a passion for coding and a keen interest in exploring
          the dynamic realms of Web development and Machine learning.
        </p>
      </div>
    </section>
  );
};

export default Hero;
