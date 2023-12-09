import { Button } from "../../../common";

export const HomeHeader = () => {
  return (
    <div className="container">
      <header
        className="
          flex
          flex-col
          justify-center
          py-[150px]
          px-[165px]
          bg-[url('../../../../../public/images/bgImage/Bitmap.jpg')]
          bg-contain
        "
      >
        <h1 className="text-[56px] text-white font-bold font-[SpaceMono] leading-[56px]  mb-[40px]">
          Scooter sharing <br />
          made simple
        </h1>
        <div className="flex relative">
          <div className="absolute left-[-165px] top-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="203"
              height="15"
              viewBox="0 0 203 15"
              fill="none"
            >
              <path d="M203 7.5H0.5" stroke="#FCB72B" strokeWidth="15" />
            </svg>
          </div>
          <p className="text-[15px] text-white font-medium font-[LexendDeca] absolute left-[95px]">
            Scoot takes the hassle out of urban mobility. Our bikes<br />
            are placed in convenient locations in each of our cities.<br />
            Use our app to locate the nearest bike, unlock it with a<br />
            tap, and you’re away!
          </p>
          <div className="absolute left-[540px] top-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="447"
              height="115"
              viewBox="0 0 447 115"
              fill="none"
            >
              <path
                d="M0 8H270.115V107.369H446.378"
                stroke="#FCB72B"
                strokeWidth="15"
                strokeLinejoin="bevel"
              />
            </svg>
          </div>
          <div className="absolute left-[946px] top-[103px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="88"
              viewBox="0 0 50 88"
              fill="none"
            >
              <path
                d="M5.9519 82.4441L44.3782 44.0178L5.9519 5.59155"
                stroke="#FCB72B"
                strokeWidth="15"
                strokeLinejoin="bevel"
              />
            </svg>
          </div>
          <div className="absolute left-[1075px] top-[115px]">
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
        <div className="ml-[95px] mt-[140px]">
          <Button>Get Scootin</Button>
        </div>
      </header>
    </div>
  );
};
