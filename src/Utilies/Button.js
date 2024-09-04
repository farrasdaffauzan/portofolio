const Button = ({ name, link, logo }) => {
  return (
    <button className="bg-primary py-2 px-5  rounded-full flex items-center m-auto hover:opacity-85 hover:bg-opa">
      <a href={link} className="text-slate-200 ">
        {name}
      </a>
      <span className="p-2">{logo}</span>
    </button>
  );
};

export default Button;
