import { Footer } from "../../components/layout/footer"
import { Navbar } from "../../components/layout/navbar/Navbar"
import { CareersHeader, CareersOpportunities } from "../../components/pages/careers"

export const Careers = () => {
  return (
    <div>
      <Navbar/>
      <CareersHeader/>
      <CareersOpportunities/>
      <Footer/>
    </div>
  )
}
