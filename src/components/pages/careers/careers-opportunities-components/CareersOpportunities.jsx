// Images
import OurTech from "../../../../../public/images/section-images/OurTech.png";
import OurIntegrity from "../../../../../public/images/section-images/OurIntegrity.png";
import OurCommunity from "../../../../../public/images/section-images/OurCommunity.png";
import { Button } from "../../../common";

export const CareersOpportunities = () => {
  return (
    <div className="container">
      <section className="px-[165px] py-[60px]">
        <h2 className="text-[56px] text-darkNavy text-center font-bold font-[SpaceMono] mb-[90px]">
          Our values
        </h2>
        <div className="flex justify-between gap-[30px]">
          <div className="w-[30%]">
            <div className="relative flex flex-col items-center">
              <img className="rounded-[50%]" src={OurTech} alt="" />
              <div className="absolute bottom-[-48px] flex justify-center items-center w-[96px] h-[96px] bg-yellow rounded-[50%]">
                <span className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">
                  01
                </span>
              </div>
            </div>
            <h4 className="text-[24px] text-darkNavy text-center font-bold font-[SpaceMono] mt-[80px]">
              Our tech
            </h4>
            <p className="text-[15px] text-[grey] text-center font-normal font-[LexendDeca] mt-[30px]">
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride!
            </p>
          </div>
          <div className="w-[30%]">
            <div className="relative flex flex-col items-center">
              <img className="rounded-[50%]" src={OurIntegrity} alt="" />
              <div className="absolute bottom-[-48px] flex justify-center items-center w-[96px] h-[96px] bg-yellow rounded-[50%]">
                <span className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">
                  01
                </span>
              </div>
            </div>
            <h4 className="text-[24px] text-darkNavy text-center font-bold font-[SpaceMono] mt-[80px]">
              Our tech
            </h4>
            <p className="text-[15px] text-[grey] text-center font-normal font-[LexendDeca] mt-[30px]">
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride!
            </p>
          </div>
          <div className="w-[30%]">
            <div className="relative flex flex-col items-center">
              <img className="rounded-[50%]" src={OurCommunity} alt="" />
              <div className="absolute bottom-[-48px] flex justify-center items-center w-[96px] h-[96px] bg-yellow rounded-[50%]">
                <span className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">
                  01
                </span>
              </div>
            </div>
            <h4 className="text-[24px] text-darkNavy text-center font-bold font-[SpaceMono] mt-[80px]">
              Our tech
            </h4>
            <p className="text-[15px] text-[grey] text-center font-normal font-[LexendDeca] mt-[30px]">
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[25px] my-[120px]">
          <div className="flex justify-between items-center bg-[#F2F5F9] py-[35px] px-[40px]">
            <div>
              <h4 className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">
                General Manager
              </h4>
              <p className="text-[15px] text-darkNavy font-normal font-[LexendDeca]">
                Jakarta, Indonesia
              </p>
            </div>
            <Button>Apply</Button>
          </div>
          <div className="flex justify-between items-center bg-[#F2F5F9] py-[35px] px-[40px]">
            <div>
              <h4 className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">
                UI/UX Designer
              </h4>
              <p className="text-[15px] text-darkNavy font-normal font-[LexendDeca]">
                Yokohama, Japan
              </p>
            </div>
            <Button>Apply</Button>
          </div>
          <div className="flex justify-between items-center bg-[#F2F5F9] py-[35px] px-[40px]">
            <div>
              <h4 className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">
                Blog Content Copywriter
              </h4>
              <p className="text-[15px] text-darkNavy font-normal font-[LexendDeca]">
                New York, United States
              </p>
            </div>
            <Button>Apply</Button>
          </div>
          <div className="flex justify-between items-center bg-[#F2F5F9] py-[35px] px-[40px]">
            <div>
              <h4 className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">
                Graphic Designer
              </h4>
              <p className="text-[15px] text-darkNavy font-normal font-[LexendDeca]">
                New York, United States
              </p>
            </div>
            <Button>Apply</Button>
          </div>
          <div className="flex justify-between items-center bg-[#F2F5F9] py-[35px] px-[40px]">
            <div>
              <h4 className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">
                Fleet Supervisor
              </h4>
              <p className="text-[15px] text-darkNavy font-normal font-[LexendDeca]">
                Jakarta, Indonesia
              </p>
            </div>
            <Button>Apply</Button>
          </div>
          <div className="flex justify-between items-center bg-[#F2F5F9] py-[35px] px-[40px]">
            <div>
              <h4 className="text-[24px] text-darkNavy font-bold font-[SpaceMono]">
                UX Analyst
              </h4>
              <p className="text-[15px] text-darkNavy font-normal font-[LexendDeca]">
                London, United Kingdom
              </p>
            </div>
            <Button>Apply</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
