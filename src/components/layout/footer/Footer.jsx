import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
// Images
import ApleStor from "../../../../public/images/icons/ApleStore.png"
import GooglePlay from "../../../../public/images/icons/GooglePlay.png"
import Logo from "../../../../public/images/icons/logoWhite.png"
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="container">
      <section className="bg-footer-img flex justify-between items-center px-[165px] py-[100px] mob:px-[32px] mob:flex-col">
        <h3 className="text-white w-[40%] mob:hidden">Sign up and Scoot off today</h3>
        <h5 className="text-white text-center mb-[30px] mob">Sign up and Scoot off today</h5>
        <div className="flex items-center gap-[20px]">
          <a href="https://www.apple.com/app-store/" target="_blank">
            <img className="rounded-md w-[159px]" src={ApleStor} alt="" />
          </a>
          <a href="https://play.google.com/store/apps" target="_blank">
            <img className="rounded-md " src={GooglePlay} alt="" />
          </a>
        </div>
      </section>
      <footer className="flex items-center justify-between px-[165px] py-[35px] bg-grey-2 mob:flex-col mob:gap-[30px]">
        <div className="flex items-center gap-[60px] mob:flex-col">
          <Link to="/"><img src={Logo} alt="logo image"/></Link>
          <ul className="flex items-center gap-[35px] mob:flex-col">
            <li><Link to="about">{t("about")}</Link></li>
            <li><Link to="locations">{t("location")}</Link></li>
            <li><Link to="careers">{t("careers")}</Link></li>
          </ul>
        </div>
        <div className="flex gap-5">
          <a href="https://www.facebook.com/" target="_blank">
            <ImFacebook2 className="hover:fill-[#e5ecf4]" color="#fcb72b" size="23px"/>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FaTwitter className="hover:fill-[#e5ecf4]" color="#fcb72b" size="24px"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram className="hover:fill-[#e5ecf4]" color="#fcb72b" size="24px"/>
          </a>
        </div>
      </footer>
    </div>
  )
}
