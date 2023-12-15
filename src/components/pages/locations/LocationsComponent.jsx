import globe from "../../../../public/images/section-images/globe.svg";
import { Button } from "../../common";

export const LocationsComponent = () => {
  return (
    <div className="container">
      <header className="bg-location-hed-img px-[165px]">
        <h2 className="text-white py-[75px]">Location</h2>
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
          <h3 className="w-[27%]">Your city not listed?</h3>
          <p className="w-[35%]">
            If you’d like to see Scoot in your hometown, be sure to let us
            know. We track requests and plan launches based on
            demand. Feel free to message us by clicking the link or
            messaging us on social.
          </p>
          <Button>Message Us</Button>
        </div>
      </header>
    </div>
  );
};
