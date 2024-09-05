import Title from "../Utilies/Title";

const Training = () => {
  return (
    <div className="mt-4 lg:mt-8">
      <div className="container lg:m-auto">
        <Title title={"Training"} desc={"My Training"} color={"text-slate-500"} colorTitle={"lg:text-2xl text-primary"} />
        <div className="flex flex-wrap w-full lg:mx-5 lg:justify-center">
          <div className="flex flex-row p-3 lg:w-1/3">
            <div className="w-[70px] h-[30px] lg:w-[100px] lg:h-[35px] rounded-full border-2 m-2 border-slate-700 content-center">
              <h2 className="rufina-bold text-xl">I</h2>
            </div>

            <div className="text-start p-2.5">
              <h1 className="texl-xl rufina-bold uppercase ">Digital Talent Scholoarship</h1>
              <p className="text-slate-500 texl-lg py-2">Power BI Data Analyst | April 2024 - Mei 2024</p>

              <h3 className="rufina-bold">key learnings :</h3>
              <ul className="px-4 text-justify">
                <li className="list-disc py-1">Introduction to Power BI: creating interactive reports and dashboards. </li>
                <li className="list-disc py-1">DAX (Data Analysis Expressions): formulas, functions, and calculations in Power BI. </li>
                <li className="list-disc py-1">Data visualization: techniques for presenting data in an attractive and informative way</li>
                <li className="list-disc py-1">Developing a dashboard that presents country data based on various attributes such as country code, name, region, capital city, and geospatial data (longitude and latitude).</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row p-3 lg:w-1/3">
            <div className="w-[70px] h-[30px] lg:w-[100px] lg:h-[35px] rounded-full border-2 m-2 border-slate-700 content-center">
              <h2 className="rufina-bold text-xl">2</h2>
            </div>

            <div className="text-start p-2.5">
              <h1 className="texl-xl rufina-bold uppercase ">SanberCode</h1>
              <p className="text-slate-500 texl-lg py-2">Next JS | Feb 2024 - March 2024</p>

              <h3 className="rufina-bold">Key learnings :</h3>
              <ul className="px-4 text-justify">
                <li className="list-disc py-1">Dynamic routing and page management with Next.js. </li>
                <li className="list-disc py-1">Integration of data from external APIs into Next.js applications.</li>
                <li className="list-disc py-1">Developing a social media platform with interactive features, emphasizing authentication, post management, comments, likes, and notifications.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
