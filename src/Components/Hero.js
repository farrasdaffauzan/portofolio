import { TypeAnimation } from "react-type-animation";
import Button from "../Utilies/Button";
import { FaFileDownload } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="mt-14 lg:mt-0" id="home">
      <div className="container lg:w-3/4 m-auto items-center">
        <div className="flex flex-wrap w-full p-4 justify-center items-center lg:h-screen">
          <div className="relative mb-3 mx-auto lg:w-1/2 lg:items-end lg:m-auto">
            <img src="/images/profil.png" alt="Farras Daffauzan" className="rounded-3xl w-[300px] lg:m-auto lg:w-[500px]" />

            <span className=" absolute -left-10 -z-10 bottom-0 m-0 max-w-full lg:left-0 lg:bottom-0">
              <svg className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#4A7973"
                  d="M31.6,-54.9C37.4,-51.3,36.2,-35.7,45.6,-24.6C55,-13.5,75,-6.7,74.9,-0.1C74.8,6.6,54.5,13.2,46.8,27.3C39.2,41.4,44,63,38.3,71.4C32.6,79.8,16.3,75.1,0.7,74C-15,72.8,-29.9,75.3,-38,68.2C-46.1,61.2,-47.3,44.6,-54.4,31.6C-61.4,18.7,-74.4,9.3,-75.3,-0.5C-76.3,-10.4,-65.3,-20.9,-53.9,-26.4C-42.6,-32,-30.9,-32.6,-21.8,-34.4C-12.8,-36.2,-6.4,-39.2,3.2,-44.8C12.9,-50.4,25.7,-58.6,31.6,-54.9Z"
                  transform="translate(100 100) scale(1.2)"
                />
              </svg>
            </span>
          </div>

          <div className="w-full mt-3 lg:mt-32 lg:w-1/2">
            <h3 className="text-lg rufina-regular text-slate-700 lg:text-2xl">Hello, i am</h3>
            <h1 className="text-xl rufina-bold text-emerald-500 m-2  uppercase lg:text-3xl">Mohammad Farras Daffauzan</h1>

            <div>
              <TypeAnimation
                sequence={["IT Enthusiast", 3000, "Front-End Developer", 3000, "Data Analyst", 3000, "Fullstack Developer", 3000]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
                className="rufina-regular font-extrabold m-2 text-xl lg:text-2xl"
              />
            </div>

            <p className="w-3/4 p-3 m-auto text-justify text-slate-500 lg:text-lg">
              IT graduate skilled in software development and data analysis, with expertise in React Js, Next Js, laravel, Tailwind, SQL, Python, and Power BI. Ready to tackle new challenges and contribute to a dynamic team
            </p>

            <div className="flex justify-normal w-2/3 m-auto py-4">
              <Button name={"Contact Me"} logo={<RiContactsFill className="w-5 h-5" />} link={"https://wa.me/6282297125611"} />
              <Button name={"Get Resume"} logo={<FaFileDownload className="w-5 h-5" />} link={"https://drive.google.com/file/d/1e9vDhBs1pgg2n6YsGGNw1V3hU07rFLBU/view?usp=drive_link"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
