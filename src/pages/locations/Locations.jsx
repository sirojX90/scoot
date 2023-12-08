import { Footer } from "../../components/layout/footer"
import { Navbar } from "../../components/layout/navbar/Navbar"
import { LocationsComponent } from "../../components/pages"

export const Locations = () => {
  return (
    <div>
      <Navbar/>
      <LocationsComponent/>
      <Footer/>
    </div>
  )
}
