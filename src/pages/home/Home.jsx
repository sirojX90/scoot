import { HomeHeader, HomeMain, HomeSupport } from "../../components/pages/home"
import { Navbar, Footer } from "../../components/layout"

export const Home = ({changeThemeHandler}) => {
  return (
    <div>
      <HomeHeader/>
      <HomeMain/>
      <HomeSupport/>
    </div>
  )
}
