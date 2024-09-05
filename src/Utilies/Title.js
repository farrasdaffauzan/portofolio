const Title = ({ title, desc, colorTitle, color }) => {
  return (
    <div>
      <h1 className={`${colorTitle} rufina-bold text-xl uppercase`}>{title}</h1>
      <p className={`${color} text-sm -mt-2`}>{desc}</p>
    </div>
  );
};

export default Title;
