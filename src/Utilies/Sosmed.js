import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Sosmed = ({ kelas }) => {
  return (
    <div className={`${kelas} flex felx-row justify-center`}>
      <a href="/" className="p-1 lg:p-2 hover:opacity-60">
        <span>
          <FaLinkedin className="w-6 h-6" />
        </span>
      </a>
      <a href="/" className="p-1 lg:p-2 hover:opacity-60">
        <span>
          <FaGithub className="w-6 h-6" />
        </span>
      </a>
      <a href="/" className="p-1 lg:p-2 hover:opacity-60">
        <span>
          <FaInstagram className="w-6 h-6" />
        </span>
      </a>
    </div>
  );
};

export default Sosmed;
