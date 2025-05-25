
const Header = ({title}) => {
  return (
    <header className="h-[4vw] bg-gradient-to-r from-cyan-500 to-cyan-800 text-[2vw] flex items-center p-[10px] font-semibold">
        <h1 className="text-white">{title}</h1>
      </header>
  );
};

export default Header;