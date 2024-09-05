import Sosmed from "../Utilies/Sosmed";

const Footer = () => {
  return (
    <div className=" bg-primary">
      <div className="container">
        <div className="flex flex-wrap justify-center lg:justify-between items-center ">
          <div className="w-1/2 p-2">
            <h1 className="text-slate-200 rufina-regular lg:text-lg">
              @ Developer Portofolio By <span className="font-semibold text-slate-50"> Mohammad Farras Daffauzan</span>
            </h1>
          </div>
          <Sosmed kelas={"text-slate-300"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
