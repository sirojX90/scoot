import { Footer } from "../../components/layout/footer"
import { Navbar } from "../../components/layout/navbar/Navbar"
import { HomeHeader, HomeMain, HomeSupport } from "../../components/pages/home"

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeHeader/>
      <HomeMain/>
      <HomeSupport/>
      <Footer/>
    </div>
  )
}
