import { Footer } from "../../components/layout/footer"
import { Navbar } from "../../components/layout/navbar/Navbar"
import { AboutHeader, AboutMain, AboutSupport } from "../../components/pages/about"

export const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutHeader/>
      <AboutMain/>
      <AboutSupport/>
      <Footer/>
    </div>
  )
}
