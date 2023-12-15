// Images
import toUse from "../../../../../public/images/section-images/phone.png";
import cityNear from "../../../../../public/images/section-images/urban.png";
import leftArc from "../../../../../public/images/bgImage/left-arc.svg";
import rightArc from "../../../../../public/images/bgImage/right-arc.svg";

export const AboutHeader = () => {
  return (
    <div className="container">
      <header className="bg-about-hed-img px-[165px]">
        <h2 className="text-white py-[75px]">
          About
        </h2>
        <div className="relative border-red-500">
          <div className="absolute right-[-195px] top-[-135px] border-red-600 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="234"
              height="64"
              viewBox="0 0 234 64"
              fill="none"
            >
              <circle cx="31" cy="32" r="29.5" stroke="white" strokeWidth="3" />
              <circle cx="117" cy="32" r="29.5" stroke="white" strokeWidth="3" />
              <circle cx="203" cy="32" r="31" fill="white" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-[150px] py-[100px]">
          <div className="flex justify-between gap-[40px] items-center">
            <div className="w-[45%]">
              <h3>Mobility for the digital era</h3>
              <p className="mt-[25px] mb-[40px]">
                Getting around should be simple (and even fun!) for everyone. We
                embrace technology to provide low cost, smart access to scooters
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
          <div className="flex justify-between gap-[40px] items-center">
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
            <div className="w-[45%]">
              <h3>Better urban living near you</h3>
              <p className="mt-[25px] mb-[40px]">
                We’re helping connect cities and bring people closer
                together. Our scooters are also fully-electric and we offset
                the minimal carbon footprint for each ride.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
