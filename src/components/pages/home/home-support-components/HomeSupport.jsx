import { Button } from "../../../common";
// Images
import toUse from "../../../../../public/images/section-images/gril.jpg";
import cityNear from "../../../../../public/images/section-images/sity.jpg";
import payZero from "../../../../../public/images/section-images/cash.jpg";
import leftArc from "../../../../../public/images/bgImage/left-arc.svg";
import rightArc from "../../../../../public/images/bgImage/right-arc.svg";

export const HomeSupport = () => {
  return (
    <div className="container">
      <section 
        className="
          flex 
          flex-col 
          gap-[150px] 
          px-[165px] 
          pt-[100px] 
          pb-[200px]
          text-[48px]
          text-darkNavy
          font-SpMo
          font-bold
          mob:px-[32px] 
          mob:gap-[100px]
          tab:px-[40px]
        ">
        <div className="flex mob:flex-wrap-reverse tab:flex-wrap-reverse justify-between items-center">
          <div className="w-[50%] mob:w-[100%]">
            <h3 className="mob:text-center mob:mt-[55px] mob:mb-[32px]">
              Easy to use<br />
              riding telemetry
            </h3>
            <h4 className="mob">
              Easy to use<br />
              riding telemetry
            </h4>
            <p className="mob:text-center mt-[25px] mob:mt-0 mb-[40px] mob:mb-[32px]">
              The Scoot app is available with riding telemetry. This means
              it can show you your average speed, how long you've been
              using the scooter, your traveling distance, and many more
              things all in an easy to use app.
            </p>
            <div className="mob:flex mob:justify-center">
              <Button>Learn More</Button>
            </div>
          </div>
          <div className="flex">
            <img className="rounded-[50%]" src={toUse} alt="gril" />
            <div className="relative mob:hidden">
              <div className="absolute right-[-165px]">
                <img src={rightArc} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mob:flex-col justify-between items-center">
          <div className="flex">
            <div className="relative mob:hidden">
              <div  className="absolute left-[-165px]">
                <img src={leftArc} alt="" />
              </div>
            </div>
            <img className="rounded-[50%]" src={cityNear} alt="cash" />
          </div>
          <div className="w-[50%] mob:w-[100%]">
            <h3 className="mob:text-center mob:mt-[55px] mob:mb-[32px]">Coming to a city near you</h3>
            <p className="mob:text-center mt-[25px] mob:mt-0 mb-[40px] mob:mb-[32px]">
              Scoot is available in 4 major cities so far. We’re expanding 
              rapidly, so be sure to let us know if you want to see us in 
              your hometown. We’re aiming to let our scooters loose on 23 
              cities over the coming year.
            </p>
            <div className="mob:flex mob:justify-center">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
        <div className="flex mob:flex-wrap-reverse justify-between items-center">
          <div className="w-[50%] mob:w-[100%]">
            <h3 className="mob:text-[32px] mob:text-center mob:mt-[55px] mob:mb-[32px]">Zero hassle <br />payments</h3>
            <p className="mob:text-center mt-[25px] mob:mt-0 mb-[40px] mob:mb-[32px]">
              Our payment is as easy as one two three. We accept most
              credit cards and debit cards. You can also link your PayPal
              account inside the app. Need to pay later? No worries! You
              can defer payment for up to a month.
            </p>
            <div className="mob:flex mob:justify-center">
              <Button>Learn More</Button>
            </div>
          </div>
          <div className="flex">
            <img className="rounded-[50%]" src={payZero} alt="cash" />
            <div className="relative mob:hidden">
              <div className="absolute right-[-165px]">
                <img src={rightArc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
