import { Footer } from "../../components/layout/footer"
import { Navbar } from "../../components/layout/navbar/Navbar"

export const NotFound = () => {
  return (
    <div className="container">
      <Navbar/>
      <div className="flex justify-center items-center px-[165px]">
        <h2 className="text-[50px] text-center font-bold font-[SpaceMono] my-[300px]">
          404 error <br />
          Page not found
        </h2>
      </div>
      <Footer/>
    </div>
  )
}
