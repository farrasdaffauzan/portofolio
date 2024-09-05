import { FaBootstrap, FaHtml5, FaLaravel, FaPython, FaReact } from "react-icons/fa";
import Card from "../Utilies/Card";
import Title from "../Utilies/Title";
import Marquee from "react-fast-marquee";
import { SiCss3, SiPhp, SiPowerbi } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

const Skill = () => {
  return (
    <div className="mt-4 lg:mt-8 bg-primary">
      <div className="container py-4 lg:py-8 lg:m-auto lg:w-4/5">
        <Title title={"Skills"} desc={"Softskill and Hardskill"} color={"text-slate-300"} colorTitle={"text-white lg:text-2xl"} />
        <div className="my-4">
          <Marquee pauseOnHover>
            <Card
              icon={
                <FaHtml5
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"HTML"}
            />
            <Card
              icon={
                <SiCss3
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"CSS"}
            />
            <Card
              icon={
                <IoLogoJavascript
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"JavaScript"}
            />
            <Card
              icon={
                <RiTailwindCssFill
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"Tailwind"}
            />
            <Card
              icon={
                <FaBootstrap
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"BootStrap"}
            />
            <Card
              icon={
                <FaReact
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"React"}
            />
            <Card
              icon={
                <RiNextjsFill
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"Next JS"}
            />
            <Card
              icon={
                <SiPhp
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"PHP"}
            />
            <Card
              icon={
                <FaLaravel
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"Laravel"}
            />
            <Card
              icon={
                <DiMysql
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"SQL"}
            />
            <Card
              icon={
                <FaPython
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"Python"}
            />
            <Card
              icon={
                <SiPowerbi
                  className="
            w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] m-auto"
                />
              }
              title={"PowerBI"}
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skill;
