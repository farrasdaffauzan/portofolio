import Hamburger from "../Utilies/Hamburger";

const Navbar = () => {
  return (
    <header className="bg-transparent opacity-85 backdrop-blur-sm fixed top-0 left-0 w-full flex items-center z-10">
      <div className="container m-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4 w-1/2 text-start" data-aos="fade-right" data-aos-duration="500" data-aos-delay="0">
            <a href="/" className="font-bold text-xl text-primary rufina-bold block py-6">
              FarrasDaffauzan
            </a>
          </div>

          {/* Hamburger */}
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
