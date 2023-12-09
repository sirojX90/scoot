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
      <section className="flex flex-col gap-[150px] px-[165px] pt-[100px] pb-[200px]">
        <div className="flex justify-between items-center">
          <div className="w-[50%]">
            <h3 className="text-[48px] text-[#495567] font-bold font-[SpaceMono]">
              Easy to use<br />
              riding telemetry
            </h3>
            <p className="text-[15px] text-[grey] font-normal font-[LexendDeca] mt-[25px] mb-[40px]">
              The Scoot app is available with riding telemetry. This means
              it can show you your average speed, how long you've been
              using the scooter, your traveling distance, and many more
              things all in an easy to use app.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="flex">
            <img className="rounded-[50%]" src={toUse} alt="gril" />
            <div className="relative">
              <div className="absolute right-[-165px]">
                <img src={rightArc} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="relative">
              <div  className="absolute left-[-165px]">
                <img src={leftArc} alt="" />
              </div>
            </div>
            <img className="rounded-[50%]" src={cityNear} alt="cash" />
          </div>
          <div className="w-[50%]">
            <h3 className="text-[48px] text-[#495567] font-bold font-[SpaceMono]">Coming to a city <br /> near you</h3>
            <p className="text-[15px] text-[grey] font-normal font-[LexendDeca] mt-[25px] mb-[40px]">
              Scoot is available in 4 major cities so far. We’re expanding 
              rapidly, so be sure to let us know if you want to see us in 
              your hometown. We’re aiming to let our scooters loose on 23 
              cities over the coming year.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[50%]">
            <h3 className="text-[48px] text-[#495567] font-bold font-[SpaceMono]">Zero hassle <br /> payments</h3>
            <p className="text-[15px] text-[grey] font-normal font-[LexendDeca] mt-[25px] mb-[40px]">
              Our payment is as easy as one two three. We accept most
              credit cards and debit cards. You can also link your PayPal
              account inside the app. Need to pay later? No worries! You
              can defer payment for up to a month.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="flex">
            <img className="rounded-[50%]" src={payZero} alt="cash" />
            <div className="relative">
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
