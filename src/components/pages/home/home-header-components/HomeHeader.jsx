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
          bg-no-repeat
          mob:bg-cover
          mob:bg-right
          mob:px-[32px]
          mob:py-[115px]
          mob:mt-[70px]
          tab:px-[40px]
          tab:border-2
          tab:bg-cover
          tab:bg-right
        "
      >
        <h1 className="mob:hidden pr-[55%] pb-[40px]">Scooter sharing made simple</h1>
        <h4 className="mob text-white pr-[0] pb-[25px]">Scooter sharing made simple</h4>
        <div className="flex relative">
          <div 
            className="
              absolute 
              left-[-165px] 
              top-[40px] 
              mob:hidden
              tab:hidden 
            ">
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
          <p 
            className="
              absolute 
              left-[95px] 
              text-white 
              pr-[55%] 
              mob:text-center 
              mob:pr-0
              mob:left-[0] 
              tab:text-center
              tab:left-0
              tab:mr-0
              tab:px-[60px] 
            ">
            Scoot takes the hassle out of urban mobility. Our bikes 
            are placed in convenient locations in each of our cities. 
            Use our app to locate the nearest bike, unlock it with a 
            tap, and you’re away!
          </p>
          <div 
            className="
              absolute 
              left-[540px] 
              top-[60px] 
              z-[1]
              mob:top-[210px] 
              mob:left-[-350px] 
              tab:left-[-160px]
              tab:top-[130px] 
            ">
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
          <div 
            className="
              absolute 
              left-[946px] 
              top-[103px]
              mob:top-[273px]
              mob:left-[50px] 
              tab:left-[240px]
              tab:top-[193px] 
            ">
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
          <div 
            className="
              absolute 
              left-[1075px]
              top-[115px] 
              mob:hidden
              tab:left-[520px]
              tab:top-[200px]
            ">
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
        <div 
          className="
            mt-[140px] 
            ml-[95px] 
            mob:flex 
            mob:justify-center 
            mob:ml-0 
            mob:mt-[200px]
            tab:ml-0 
            tab:flex
            tab:justify-center
            tab:mt-[100px] 
          ">
          <Button>Get Scootin</Button>
        </div>
      </header>
    </div>
  );
};
