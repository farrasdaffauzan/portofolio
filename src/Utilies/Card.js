const Card = ({ icon, title }) => {
  return (
    <div className="relative w-full  cursor-pointer">
      <div className="w-[105px] h-[105px] lg:w-[150px] lg:h-[150px] rounded-lg m-3 lg:m-4 bg-slate-300 items-center p-3 content-center hover:opacity-75 shadow-2xl hover:scale-110">
        {icon}
        <h1 className="rufina-regular text-lg font-semibold text-slate-700 p-1">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
