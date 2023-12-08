import { Navbar } from "../../components/layout/navbar/Navbar"
import { CareersHeader, CareersOpportunities } from "../../components/pages/careers"

export const Careers = () => {
  return (
    <div>
      <Navbar/>
      <CareersHeader/>
      <CareersOpportunities/>
    </div>
  )
}
