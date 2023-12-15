import { Button } from "../../common";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdDarkMode, MdLightMode  } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../public/images/icons/logoBlack.png";
import { useTranslation } from "react-i18next";

export const Navbar = ({ changeThemeHandler, changeLang }) => {
  const [nav, setNav] = useState(true);
  const [theme, setTheme] = useState(false);
  const { t } = useTranslation()
  const hendleNav = () => {
    setNav(!nav);
  };
  const hendleTheme = () => {
    setTheme(!theme);
    changeThemeHandler();
  };
  const changeLangHandler = (e) => {
    changeLang(e.target.value)
  }
  return (
    <div className="container">
      <nav className="flex items-center justify-between px-[7.6vw] py-[25px] tab:px-[40px] mob:px-[32px]">
        <div onClick={hendleNav} className="mob">
          {!nav ? (<AiOutlineClose color="#fcb72b" size={25} />) : (<AiOutlineMenu color="#fcb72b" size={25} />)}
        </div>
        <div className="flex items-center gap-[60px]">
          <Link to="/"><img src={Logo} alt="logo" /></Link>
          <ul className="mob:hidden flex items-center gap-[35px]">
            <li><Link to="about">{t("about")}</Link></li>
            <li><Link to="locations">{t("location")}</Link></li>
            <li><Link to="careers">{t("careers")}</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="mob:hidden">
            <Button>Get Scootin</Button>
          </div>
          <select className="dark:bg-gray-700 dark:text-white font-[LexendDeca] p-2 outline-none" onChange={changeLangHandler}>
            <option value="eng">ENG</option>
            <option value="uz">UZ</option>
          </select>
          <div className="mob:hidden cursor-pointer" onClick={hendleTheme}>
            {!theme ? (<MdDarkMode color="#fff" size={25} />) : (<MdLightMode  color="#495567" size={25} />)}
          </div>
        </div>
        <div
          className={
            !nav
              ? "tab:hidden lab:hidden des:hidden fixed left-0 top-[79px] h-[80vh] bg-grey-2 z-[1] flex flex-col items-start justify-between px-[32px] pt-[65px] pb-[35px]"
              : "fixed left-[-100%]"
          }
        >
          <ul className="flex flex-col items-start gap-[20px]">
            <li><Link to="about">{t("about")}</Link></li>
            <li><Link to="locations">{t("location")}</Link></li>
            <li><Link to="careers">{t("careers")}</Link></li>
          </ul>
          <div className="flex flex-col items-center gap-[20px]">
            <div onClick={hendleTheme}>
              {!theme ? (<MdDarkMode color="#fff" size={25} />) : (<MdLightMode  color="#fff" size={25} />)}
            </div>
            <Button>Get Scootin</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};
