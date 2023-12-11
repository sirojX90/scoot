import { Button } from "../../common";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Logo from "../../../../public/images/icons/logo.svg";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hendleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="container">
      <nav className="
        flex 
        items-center 
        justify-between 
        px-[165px] 
        py-[25px] 
        sm:fixed 
        sm:left-0 
        sm:top-0 
        sm:bg-white 
        sm:px-[32px] 
        sm:w-[100vw] 
        sm:z-[2]
        md:px-[40px]
      ">
        <div onClick={hendleNav} className="md:hidden lg:hidden 2xl:hidden">
          {!nav ? (<AiOutlineClose color="#fcb72b" size={18} />) : (<AiOutlineMenu color="#fcb72b" size={18} />)}
        </div>
        <div className="flex items-center gap-[60px] md:gap-[50px]">
          <div className="cursor-pointer sm:w-[74px] sm:mr-[25vw] md:w-[109px]">
            <a href="/"><img src={Logo} alt="logo" /></a>
          </div>
          <ul className="flex items-center gap-[35px] sm:hidden md:gap-[30px]">
            <li><a className="text-grey text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="about">About</a></li>
            <li><a className="text-grey text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="locations">Location</a></li>
            <li><a className="text-grey text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="careers">Careers</a></li>
          </ul>
        </div>
        <div className="sm:hidden">
          <Button>Get Scootin</Button>
        </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-[71px] h-[100vh] bg-grey-2 sm:px-[32px] flex flex-col items-start justify-between px-[32px] pt-[65px] pb-[35px] md:hidden lg:hidden 2xl:hidden"
            : "fixed left-[-100%]"
        }
      >
        <ul className="flex flex-col items-start gap-[20px]">
          <li><a className="text-grey-1 text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="about">About</a></li>
          <li><a className="text-grey-1 text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="locations">Location</a></li>
          <li><a className="text-grey-1 text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="careers">Careers</a></li>
        </ul>
        <Button>Get Scootin</Button>
      </div>
      </nav>
    </div>
  );
};
