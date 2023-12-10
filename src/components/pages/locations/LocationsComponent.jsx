import globe from "../../../../public/images/section-images/globe.svg";
import { Button } from "../../common";

export const LocationsComponent = () => {
  return (
    <div className="container">
      <header className="bg-[url('../../../../../public/images/bgImage/locationHed.png')] bg-no-repeat bg-contain px-[165px]">
        <h2 className="text-[56px] text-white font-bold font-[SpaceMono] py-[55px]">
          Location
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
        <div className="my-[100px]">
          <img src={globe} alt="" />
        </div>
        <div className="flex justify-between items-center gap-[20px] my-[120px]">
            <h3 className="text-darkNavy text-[48px] font-[SpaceMono] font-bold tracking-tighter">
              Your city<br />
              not listed?
            </h3>
            <p className="text-[15px] text-[grey] font-normal font-[LexendDeca]">
              If you’d like to see Scoot in your hometown, be sure to let us <br />
              know. We track requests and plan launches based on <br />
              demand. Feel free to message us by clicking the link or <br />
              messaging us on social.
            </p>
            <Button>Message Us</Button>
          </div>
      </header>
    </div>
  );
};
