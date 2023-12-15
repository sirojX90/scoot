import { Button } from "../../../common";

export const HomeHeader = () => {
  return (
    <div className="container">
      <header className="flex flex-col bg-home-hed-img py-[150px] px-[165px] mob:px-[32px]">
        <h1 className="mob:hidden pr-[55%] pb-[40px]">
          Scooter sharing made simple
        </h1>
        <h4 className="mob text-white pr-[0] pb-[25px]">
          Scooter sharing made simple
        </h4>
        <div className="flex relative">
          <div className="absolute left-[-165px] top-[40px] mob:hidden tab:hidden">
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
          <p className="text-white absolute left-[95px] pr-[55%] mob:left-0 mob:pr-0 mob:text-center">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <div className="absolute left-[540px] top-[40px] z-[1] mob:left-[-350px] mob:top-[220px]">
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
          <div className="absolute left-[946px] top-[103px] mob:left-[50px] mob:top-[283px]">
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
          <div className="absolute left-[1075px] top-[115px] mob:hidden">
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
        <div className="mt-[140px] ml-[95px] mob:mt-[200px] mob:ml-0 mob:flex mob:justify-center">
          <Button>Get Scootin</Button>
        </div>
      </header>
    </div>
  );
};
