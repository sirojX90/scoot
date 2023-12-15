// Images
import OurTech from "../../../../../public/images/section-images/OurTech.png";
import OurIntegrity from "../../../../../public/images/section-images/OurIntegrity.png";
import OurCommunity from "../../../../../public/images/section-images/OurCommunity.png";

export const AboutMain = () => {
  return (
    <div className="container">
      <section className="px-[165px] py-[60px]">
        <h2 className="text-center mb-[90px]">Our values</h2>
        <div className="flex justify-between gap-[30px]">
          <div className="w-[30%]">
            <div className="relative flex flex-col items-center">
              <img className="rounded-[50%]" src={OurTech} alt="" />
              <div className="absolute bottom-[-48px] flex justify-center items-center w-[96px] h-[96px] bg-yellow rounded-[50%]">
                <span className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">01</span>
              </div>
            </div>
            <h6 className="mt-[80px]">Our tech</h6>
            <p className="text-[15px] text-[grey] text-center font-normal font-[LexendDeca] mt-[30px]">
              We’re using cutting edge technology to drive 
              accessible urban transportation forward. Our 
              fully electric scooters are a joy to ride!
            </p>
          </div>
          <div className="w-[30%]">
            <div className="relative flex flex-col items-center">
              <img className="rounded-[50%]" src={OurIntegrity} alt="" />
              <div className="absolute bottom-[-48px] flex justify-center items-center w-[96px] h-[96px] bg-yellow rounded-[50%]">
                <span className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">01</span>
              </div>
            </div>
            <h6 className="mt-[80px]">Our tech</h6>
            <p className="text-[15px] text-[grey] text-center font-normal font-[LexendDeca] mt-[30px]">
              We’re using cutting edge technology to drive 
              accessible urban transportation forward. Our 
              fully electric scooters are a joy to ride!
            </p>
          </div>
          <div className="w-[30%]">
            <div className="relative flex flex-col items-center">
              <img className="rounded-[50%]" src={OurCommunity} alt="" />
              <div className="absolute bottom-[-48px] flex justify-center items-center w-[96px] h-[96px] bg-yellow rounded-[50%]">
                <span className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">01</span>
              </div>
            </div>
            <h6 className="mt-[80px]">Our tech</h6>
            <p className="text-[15px] text-[grey] text-center font-normal font-[LexendDeca] mt-[30px]">
              We’re using cutting edge technology to drive 
              accessible urban transportation forward. Our 
              fully electric scooters are a joy to ride!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
