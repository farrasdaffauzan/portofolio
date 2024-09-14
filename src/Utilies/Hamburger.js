import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Sosmed from "./Sosmed";

const Hamburger = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className=" flex px-4 items-center mr-3 lg:w-full justify-center" data-aos="fade-down" data-aos-duration="500" data-aos-delay="0">
      <button id="hamburger" name="hamburger" type="button" className="block absolute" onClick={() => setToggle(toggle ? false : true)}>
        <span className="lg:hidden">{toggle ? <AiOutlineMenu className="w-5 h-5" /> : <AiOutlineClose className="w-5 h-5" />}</span>
      </button>

      <div className={`${toggle ? "hidden" : "absolute py-2 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-5 top-3/4"} lg:flex lg:justify-between lg:w-full`}>
        <ul className="block lg:flex lg:left-7">
          <li className="group rufina-regular m-2">
            <a href="/" className="text-neutral-800 py-2 mx-8 group-hover:text-emerald-400">
              Home
            </a>
          </li>
          <li className="group rufina-regular m-2">
            <a href="#about" className="text-neutral-800 py-2 mx-8 group-hover:text-emerald-400">
              About
            </a>
          </li>
          <li className="group rufina-regular m-2">
            <a href="#Experience" className="text-neutral-800 py-2 mx-8 group-hover:text-emerald-400">
              Experience
            </a>
          </li>
          <li className="group rufina-regular m-2">
            <a href="#project" className="text-neutral-800 py-2 mx-8 group-hover:text-emerald-400">
              Project
            </a>
          </li>
          <li className="group rufina-regular m-2">
            <a href="#skill" className="text-neutral-800 py-2 mx-8 group-hover:text-emerald-400">
              Skill
            </a>
          </li>
        </ul>

        <Sosmed />
      </div>
    </div>
  );
};

export default Hamburger;
