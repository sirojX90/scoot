import { Button } from "../../../common";
// Images
import toUse from "../../../../../public/images/section-images/boy.jpg";

export const CareersHeader = () => {
  return (
    <div className="container">
      <header className="bg-[url('../../../../../public/images/bgImage/locationHed.png')] bg-no-repeat bg-contain px-[165px]">
        <h2 className="text-[56px] text-white font-bold font-[SpaceMono] py-[55px]">
          Careers
        </h2>
        <div className="relative border-red-500">
          <div className="absolute right-[-195px] top-[-130px] border-red-600 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="234"
              height="64"
              viewBox="0 0 234 64"
              fill="none"
            >
              <circle cx="31" cy="32" r="29.5" stroke="white" strokeWidth="3" />
              <circle
                cx="117"
                cy="32"
                r="29.5"
                stroke="white"
                strokeWidth="3"
              />
              <circle cx="203" cy="32" r="31" fill="white" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center my-[120px]">
          <div className="w-[50%]">
            <h3 className="text-[48px] text-[#495567] font-bold font-[SpaceMono]">
              Care to join our
              <br />
              mission?
            </h3>
            <p className="text-[15px] text-[grey] font-normal font-[LexendDeca] mt-[25px] mb-[40px]">
              We’re always looking for ambitious individuals to help us on our
              journey. If you’re passionate about our mission to provide clean,
              accessible transport to improve urban living we want to hear from
              you!
            </p>
            <Button>Say Hello</Button>
          </div>
          <div className="flex">
            <img className="rounded-[50%]" src={toUse} alt="gril" />
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
                    d="M734.969 8H176.854V107.369H0.591125"
                    stroke="#FCB72B"
                    strokeWidth="15"
                    strokeLinejoin="bevel"
                  />
                </svg>
              </div>
              <div className="absolute left-[-575px] top-[359px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="88"
                  viewBox="0 0 50 88"
                  fill="none"
                >
                  <path
                    d="M44.6392 82.6394L6.21289 44.2131L44.6392 5.78687"
                    stroke="#FCB72B"
                    strokeWidth="15"
                    strokeLinejoin="bevel"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
