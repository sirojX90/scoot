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
        mob:fixed 
        mob:left-0 
        mob:top-0 
        mob:bg-white 
        mob:px-[32px] 
        mob:w-[100vw] 
        mob:z-[2]
        tab:px-[40px]
      ">
        <div onClick={hendleNav} className="tab:hidden lab:hidden des:hidden">
          {!nav ? (<AiOutlineClose color="#fcb72b" size={18} />) : (<AiOutlineMenu color="#fcb72b" size={18} />)}
        </div>
        <div className="flex items-center gap-[60px] tab:gap-[50px]">
          <div className="cursor-pointer mob:w-[74px] mob:mr-[25vw] tab:w-[109px]">
            <a href="/"><img src={Logo} alt="logo" /></a>
          </div>
          <ul className="flex items-center gap-[35px] mob:hidden tab:gap-[30px]">
            <li><a className="text-grey text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="about">About</a></li>
            <li><a className="text-grey text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="locations">Location</a></li>
            <li><a className="text-grey text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="careers">Careers</a></li>
          </ul>
        </div>
        <div className="mob:hidden">
          <Button>Get Scootin</Button>
        </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-[71px] h-[100vh] bg-grey-2 mob:px-[32px] flex flex-col items-start justify-between px-[32px] pt-[65px] pb-[35px] tab:hidden lab:hidden des:hidden"
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
