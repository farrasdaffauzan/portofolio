import Title from "../Utilies/Title";

const Project = () => {
  return (
    <div className="mt-4">
      <div className="container lg:m-auto">
        <Title title={"Project"} desc={"My Last Project"} colorTitle={"lg:text-2xl"} />
        <div className="flex flex-wrap w-full items-center lg:mx-5 justify-center">
          <div className="flex flex-row w-full p-3 lg:w-1/2">
            <div className="h-[30px] w-[30px] border-2 content-center m-2 border-slate-600 rounded-full">
              <h1 className="rufina-bold texl-xl">I</h1>
            </div>

            <div className="p-2 w-full">
              <div className="relative shadow-md cursor-pointer overflow-hidden h-full group">
                <img src="images/portofolio.png" alt="Portofolio" className="w-full h-[250px] lg:h-full top-96" />

                <div className="absolute top-0 backdrop-blur-lg z-10 inset-0 translate-y-[220px] lg:translate-y-[300px] lg:content-center lg:px-4 group-hover:translate-y-0 group-hover:duration-500 ">
                  <h1 className="rufina-regular font-semibold text-lg text-primary">Portofolio Website</h1>
                  <p className="text-slate-800 ">
                    Situs web portofolio pribadi ini dirancang untuk menampilkan keterampilan, pengalaman, dan proyek-proyek terbaru saya sebagai seorang profesional di bidang teknologi. Dengan antarmuka yang bersih dan responsif
                  </p>
                  <div className="grid grid-cols-3 p-2 ">
                    <p className="border-2 py-2 px-4 rounded-lg m-1">HTML</p>
                    <p className="border-2 py-2 px-4 rounded-lg m-1">React</p>
                    <p className="border-2 py-2 px-4 rounded-lg m-1">TailwindCSS</p>
                    <p className="border-2 py-2 px-4 rounded-lg m-1">AOS</p>
                    <p className="border-2 py-2 px-4 rounded-lg m-1">typeAnimation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full p-3 lg:w-1/2">
            <div className="h-[30px] w-[30px] border-2 content-center m-2 border-slate-600 rounded-full">
              <h1 className="rufina-bold texl-xl">2</h1>
            </div>

            <div className="p-2 w-full">
              <div className="relative shadow-md cursor-pointer overflow-hidden h-full group">
                <img src="images/SanberDaily.png" alt="Portofolio" className="w-full h-[250px] lg:h-full top-96" />

                <div className="absolute top-0 backdrop-blur-lg z-10 inset-0 translate-y-[220px] lg:translate-y-[300px] lg:content-center lg:px-4 group-hover:translate-y-0 group-hover:duration-500 ">
                  <h1 className="rufina-regular font-semibold text-lg text-primary">Platform Social Media Interaktif</h1>
                  <p className="text-slate-800 ">
                    This Social Media project is the final Next.js project that includes login, register, post management, comments, and likes. This application offers a responsive interface for an interactive and easy-to-use user
                    experience.
                  </p>
                  <div className="grid grid-cols-3 p-2 ">
                    <p className="border-2 py-2 px-4 rounded-lg m-1">HTML</p>
                    <p className="border-2 py-2 px-4 rounded-lg m-1">Next Js</p>
                    <p className="border-2 py-2 px-4 rounded-lg m-1">TailwindCSS</p>
                    <p className="border-2 py-2 px-4 rounded-lg m-1">Chakra UI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full p-3 lg:w-1/2">
            <div className="h-[30px] w-[30px] border-2 content-center m-2 border-slate-600 rounded-full">
              <h1 className="rufina-bold texl-xl">I</h1>
            </div>

            <div className="p-2 w-full">
              <div className="relative shadow-md cursor-pointer overflow-hidden h-full group">
                <img src="images/Anime.png" alt="Portofolio" className="w-full h-[260px] lg:h-full top-96" />

                <div className="absolute top-0 backdrop-blur-lg z-10 inset-0 translate-y-[230px] lg:translate-y-[310px] lg:content-center lg:px-4 group-hover:translate-y-0 group-hover:duration-500 ">
                  <h1 className="rufina-regular font-semibold text-lg text-white">Web App for Popular Anime</h1>
                  <p className="text-slate-100 ">
                    This Anime List project displays popular anime titles with a clean, user-friendly interface. It highlights the ability to create responsive designs and seamless navigation, making it an excellent portfolio piece for
                    showcasing frontend development skills.
                  </p>
                  <div className="grid grid-cols-3 p-2 text-slate-100 ">
                    <p className="border-2 py-2 px-4 rounded-lg m-1">HTML</p>
                    <p className="border-2 py-2 px-4 rounded-lg m-1">Next Js</p>
                    <p className="border-2 py-2 px-4 rounded-lg m-1">TailwindCSS</p>
                    <p className="border-2 py-2 px-4 rounded-lg m-1">Daisy UI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
