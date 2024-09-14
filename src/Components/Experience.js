import Title from "../Utilies/Title";

const Experience = () => {
  return (
    <div className="mt-4 lg:mt-8">
      <div className="container lg:m-auto lg:w-full">
        <Title title={"Experiences"} desc={"My Work Experiences"} color={"text-slate-500"} colorTitle={"lg:text-2xl"} />
        <div className="flex flex-wrap w-full lg:mx-5">
          <div className="flex flex-row p-3 lg:w-1/3">
            <div className="w-[70px] h-[30px] lg:w-[100px] lg:h-[35px] rounded-full border-2 m-2 border-slate-700 content-center">
              <h2 className="rufina-bold text-xl">I</h2>
            </div>

            <div className="text-start p-2.5">
              <h1 className="texl-xl rufina-bold uppercase ">PT Bank Negara Indonesia</h1>
              <p className="text-slate-500 texl-lg py-2">Teller | March 2021 - March 2022</p>

              <h3 className="rufina-bold">Key Responsibilities :</h3>
              <ul className="px-4 text-justify">
                <li className="list-disc py-1">Providing friendly and professional customer service, handling transactions efficiently, and providing clear information to customers. </li>
                <li className="list-disc py-1">Maintaining compliance with bank policies and government regulations regarding financial transactions, contributing to risk management and fraud prevention. </li>
                <li className="list-disc py-1">Manage financial transaction records and ensure compliance with bank policies. </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row p-3 lg:w-1/3">
            <div className="w-[70px] h-[30px] lg:w-[100px] lg:h-[35px] rounded-full border-2 m-2 border-slate-700 content-center">
              <h2 className="rufina-bold text-xl content-center">2</h2>
            </div>

            <div className="text-start p-2.5">
              <h1 className="texl-xl rufina-bold uppercase ">PT Bank Negara Indonesia</h1>
              <p className="text-slate-500 texl-lg py-2">Cashier Staff | March 2022 - March 2024</p>

              <h3 className="rufina-bold">Key Responsibilities :</h3>
              <ul className="px-4 text-justify">
                <li className="list-disc py-1">Compile and verify daily cash reports with high accuracy. </li>
                <li className="list-disc py-1">Manage daily financial transactions efficiently, including cash receipts and disbursements. </li>
                <li className="list-disc py-1">In-depth analysis of branch financial needs and ensuring the percentage of cash storage is in accordance with operational needs </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row p-3 lg:w-1/3">
            <div className="w-[70px] h-[30px] lg:w-[100px] lg:h-[35px] rounded-full border-2 m-2 border-slate-700 content-center">
              <h2 className="rufina-bold text-xl">3</h2>
            </div>

            <div className="text-start p-2.5">
              <h1 className="texl-xl rufina-bold uppercase ">Soko Finance</h1>
              <p className="text-slate-500 texl-lg py-2">Internship IT Fullstack | April 2024 - July 2024</p>

              <h3 className="rufina-bold">Key Responsibilities :</h3>
              <ul className="px-4 text-justify">
                <li className="list-disc py-1">Developing a fullstack website with a data-driven approach, resulting in a 25% increase in website processing speed and responsiveness.</li>
                <li className="list-disc py-1">Membangun antarmuka pengguna yang responsif dan intuitif</li>
                <li className="list-disc py-1">Berkolaborasi dengan tim lintas fungsi untuk menyelaraskan pengembangan teknologi dengan tujuan bisnis Perusahaan </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
