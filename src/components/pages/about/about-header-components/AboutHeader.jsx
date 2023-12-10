// Images
import toUse from "../../../../../public/images/section-images/phone.png";
import cityNear from "../../../../../public/images/section-images/urban.png";
import leftArc from "../../../../../public/images/bgImage/left-arc.svg";
import rightArc from "../../../../../public/images/bgImage/right-arc.svg";

export const AboutHeader = () => {
  return (
    <div className="container">
      <header className="bg-[url('../../../../../public/images/bgImage/aboutHed.png')] bg-no-repeat bg-contain px-[165px]">
        <h2 className="text-[56px] text-white font-bold font-[SpaceMono] py-[55px]">
          About
        </h2>
        <div className="flex flex-col gap-[150px] py-[100px]">
          <div className="flex justify-between items-center">
            <div className="w-[50%]">
              <h3 className="text-[48px] text-[#495567] font-bold font-[SpaceMono]">
                Mobility for the<br />
                digital era
              </h3>
              <p className="text-[15px] text-[grey] font-normal font-[LexendDeca] mt-[25px] mb-[40px]">
                Getting around should be simple (and even fun!) for everyone. We<br />
                embrace technology to provide low cost, smart access to scooters<br />
                at your fingertips.
              </p>
            </div>
            <div className="flex">
              <img className="rounded-[50%]" src={toUse} alt="gril" />
              <div className="relative">
                <div className="absolute right-[-165px]">
                  <img src={rightArc} alt="" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-[-570px] top-[295px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="735"
                    height="115"
                    viewBox="0 0 735 115"
                    fill="none"
                  >
                    <path
                      d="M734.969 107.369H176.854V8.00006H0.591125"
                      stroke="#FCB72B"
                      strokeWidth="15"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </div>
                <div className="absolute left-[-575px] top-[257px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="88"
                    viewBox="0 0 50 88"
                    fill="none"
                  >
                    <path
                      d="M44.6394 82.6394L6.21313 44.2131L44.6394 5.78687"
                      stroke="#FCB72B"
                      strokeWidth="15"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="relative">
                <div className="absolute right-[-185px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="350"
                    height="115"
                    viewBox="0 0 350 115"
                    fill="none"
                  >
                    <path
                      d="M-384.969 8H173.146V107.369H349.409"
                      stroke="#FCB72B"
                      strokeWidth="15"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </div>
                <div className="absolute right-[-200px] top-[63px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="88"
                    viewBox="0 0 50 88"
                    fill="none"
                  >
                    <path
                      d="M5.3606 82.6394L43.7869 44.2131L5.3606 5.78687"
                      stroke="#FCB72B"
                      strokeWidth="15"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-[-165px]">
                  <img src={leftArc} alt="" />
                </div>
              </div>
              <img className="rounded-[50%]" src={cityNear} alt="cash" />
            </div>
            <div className="w-[52%]">
              <h3 className="text-[48px] text-[#495567] font-bold font-[SpaceMono]">
                Better urban living<br />
                near you
              </h3>
              <p className="text-[15px] text-[grey] font-normal font-[LexendDeca] mt-[25px] mb-[40px]">
                We’re helping connect cities and bring people closer<br />
                together. Our scooters are also fully-electric and we offset<br />
                the minimal carbon footprint for each ride.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
