import Sosmed from "../Utilies/Sosmed";
import Title from "../Utilies/Title";

const About = () => (
  <div className="mt-3 bg-primary shadow-lg p-6 lg:h-[450px] lg:content-center relative" id="about">
    <div className="container items-center m-auto ">
      <Title title={"About Me"} desc={"who am i"} color={"text-slate-400 lg:text-lg"} colorTitle={"text-slate-200 lg:text-2xl"} />
      <div className="flex flex-col items-center w-full justify-center ">
        <div className="w-full lg:w-2/3 px-10 py-3 block">
          <p className="text-justify indent-8 text-white lg:text-xl ">
            My name is Mohammad Farras Daffauzan, a Bachelor of Informatics Engineering graduate from Mercu Buana University with a deep interest in Audit, Software Development, and Data Analyst. With three years of experience as a Teller
            and Cashier Staff at PT Bank Negara Indonesia, I have skills in financial statement analysis, cash control, and compliance with company policies. I also have experience in fullstack web development during my internship at Soko
            Finance, where I improved website processing speed and built intuitive user interfaces for audit purposes. My expertise includes HTML, CSS, JavaScript, PHP, SQL, Python, Power BI, React JS, Next JS, Laravel, and Tailwind. I am a
            fast learner with an independent attitude, always eager to explore new technologies and solve problems. I am ready to take on new challenges and contribute to a dynamic team with a determination to continue growing.
          </p>
        </div>

        <div>
          <Sosmed kelas={"text-white"} />
        </div>
      </div>
    </div>
  </div>
);

export default About;
