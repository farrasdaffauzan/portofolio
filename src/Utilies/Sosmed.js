import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Sosmed = ({ kelas }) => {
  return (
    <div className={`${kelas} flex felx-row justify-center`}>
      <a href="https://www.linkedin.com/in/mohammad-farras-daffauzan" className="p-1 lg:p-2 hover:opacity-60">
        <span>
          <FaLinkedin className="w-6 h-6" />
        </span>
      </a>
      <a href="https://github.com/farrasdaffauzan" className="p-1 lg:p-2 hover:opacity-60">
        <span>
          <FaGithub className="w-6 h-6" />
        </span>
      </a>
      <a href="https://www.instagram.com/farrasdffzn" className="p-1 lg:p-2 hover:opacity-60">
        <span>
          <FaInstagram className="w-6 h-6" />
        </span>
      </a>
    </div>
  );
};

export default Sosmed;
