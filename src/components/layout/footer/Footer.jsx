import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import ApleStor from "../../../../public/images/icons/ApleStore.svg"
import GooglePlay from "../../../../public/images/icons/GooglePlay.svg"

export const Footer = () => {
  return (
    <div className="container">
      <section 
        className="
          flex 
          justify-between 
          items-center 
          px-[165px] 
          brder-2 
          py-[100px] 
          bg-darkNavy 
          bg-[url('../../../../public/images/bgImage/circle.png')]
          bg-no-repeat
          bg-right-bottom
          mob:flex-col
          mob:px-[32px]
          mob:py-[85px]
        ">
        <div>
          <h3 className="
            text-white 
            text-[48px] 
            mr-[20vw] 
            mob:mr-0
            mob:text-center 
            mob:mb-[40px]
            font-[SpaceMono] 
            font-bold 
            tracking-tighter
          ">
            Sign up and Scoot off today
          </h3>
        </div>
        <div className="flex items-center gap-[20px]">
          <a href="https://www.apple.com/app-store/" target="_blank">
            <img className="rounded-md" src={ApleStor} alt="" />
          </a>
          <a href="https://play.google.com/store/apps" target="_blank">
            <img className="rounded-md" src={GooglePlay} alt="" />
          </a>
        </div>
      </section>
      <footer className="flex mob:flex-col items-center justify-between px-[165px] mob:px-[32px] py-[35px] mob:py-[65px] bg-grey-2">
        <div className="flex mob:flex-col items-center gap-[60px]">
          <div className="cursor-pointer">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="108"
                height="29"
                viewBox="0 0 108 29"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M107.097 23.2V28H98.6971C97.7905 28 97.0505 27.7067 96.4771 27.12C95.9038 26.5333 95.6171 25.7867 95.6171 24.88V12.96H89.7371V8.16H95.6171V0H100.657V8.16H107.817V12.96H100.657V22C100.657 22.8 101.017 23.2 101.737 23.2H107.097ZM9.12 28.56C11.7333 28.56 13.76 27.9733 15.2 26.8C16.64 25.6267 17.36 24.0533 17.36 22.08V21.84C17.36 20.0533 16.72 18.66 15.44 17.66C14.16 16.66 12.5067 16.0533 10.48 15.84C8.72 15.6533 7.50667 15.42 6.84 15.14C6.17333 14.86 5.84 14.4 5.84 13.76C5.84 13.3067 6.05333 12.9267 6.48 12.62C6.90667 12.3133 7.54667 12.16 8.4 12.16C9.33333 12.16 10.0933 12.3667 10.68 12.78C11.2667 13.1933 11.68 13.76 11.92 14.48L16.48 12.64C16.2667 12.08 15.96 11.5 15.56 10.9C15.16 10.3 14.64 9.75333 14 9.26C13.36 8.76667 12.58 8.36667 11.66 8.06C10.74 7.75333 9.65333 7.6 8.4 7.6C7.44 7.6 6.50667 7.73333 5.6 8C4.69333 8.26667 3.89333 8.66 3.2 9.18C2.50667 9.7 1.94667 10.3333 1.52 11.08C1.09333 11.8267 0.88 12.6933 0.88 13.68V13.92C0.88 15.8133 1.54 17.2467 2.86 18.22C4.18 19.1933 5.96 19.7733 8.2 19.96C9.02667 20.04 9.71333 20.1467 10.26 20.28C10.8067 20.4133 11.24 20.58 11.56 20.78C11.88 20.98 12.1 21.1933 12.22 21.42C12.34 21.6467 12.4 21.8933 12.4 22.16C12.4 22.6133 12.1667 23.0333 11.7 23.42C11.2333 23.8067 10.3733 24 9.12 24C7.70667 24 6.66 23.68 5.98 23.04C5.3 22.4 4.85333 21.6533 4.64 20.8L0 22.32C0.133333 23.0133 0.393333 23.7267 0.78 24.46C1.16667 25.1933 1.72 25.86 2.44 26.46C3.16 27.06 4.06667 27.56 5.16 27.96C6.25333 28.36 7.57333 28.56 9.12 28.56ZM31.5743 28.56C34.401 28.56 36.661 27.84 38.3543 26.4C40.0476 24.96 41.121 23.0667 41.5743 20.72L36.6143 19.48C36.3743 20.7867 35.8476 21.8267 35.0343 22.6C34.221 23.3733 33.041 23.76 31.4943 23.76C30.7743 23.76 30.0943 23.6467 29.4543 23.42C28.8143 23.1933 28.2543 22.8533 27.7743 22.4C27.2943 21.9467 26.9143 21.38 26.6343 20.7C26.3543 20.02 26.2143 19.24 26.2143 18.36V18.12C26.2143 17.24 26.3543 16.4467 26.6343 15.74C26.9143 15.0333 27.2943 14.4333 27.7743 13.94C28.2543 13.4467 28.8143 13.0667 29.4543 12.8C30.0943 12.5333 30.7743 12.4 31.4943 12.4C33.041 12.4 34.241 12.8267 35.0943 13.68C35.9476 14.5333 36.4543 15.5467 36.6143 16.72L41.5743 15.44C41.121 13.0933 40.0343 11.2 38.3143 9.76C36.5943 8.32 34.3476 7.6 31.5743 7.6C30.1343 7.6 28.781 7.84 27.5143 8.32C26.2476 8.8 25.141 9.49333 24.1943 10.4C23.2476 11.3067 22.5076 12.4 21.9743 13.68C21.441 14.96 21.1743 16.4 21.1743 18V18.48C21.1743 20.08 21.441 21.5067 21.9743 22.76C22.5076 24.0133 23.241 25.0667 24.1743 25.92C25.1076 26.7733 26.2076 27.4267 27.4743 27.88C28.741 28.3333 30.1076 28.56 31.5743 28.56ZM57.9286 27.88C56.6886 28.3333 55.3886 28.56 54.0286 28.56C52.6686 28.56 51.3686 28.3333 50.1286 27.88C48.8886 27.4267 47.7886 26.7667 46.8286 25.9C45.8686 25.0333 45.1086 23.9667 44.5486 22.7C43.9886 21.4333 43.7086 19.9733 43.7086 18.32V17.84C43.7086 16.2133 43.9886 14.7667 44.5486 13.5C45.1086 12.2333 45.8686 11.16 46.8286 10.28C47.7886 9.4 48.8886 8.73333 50.1286 8.28C51.3686 7.82667 52.6686 7.6 54.0286 7.6C55.3886 7.6 56.6886 7.82667 57.9286 8.28C59.1686 8.73333 60.2686 9.4 61.2286 10.28C62.1886 11.16 62.9486 12.2333 63.5086 13.5C64.0686 14.7667 64.3486 16.2133 64.3486 17.84V18.32C64.3486 19.9733 64.0686 21.4333 63.5086 22.7C62.9486 23.9667 62.1886 25.0333 61.2286 25.9C60.2686 26.7667 59.1686 27.4267 57.9286 27.88ZM54.0286 23.76C53.3086 23.76 52.6286 23.64 51.9886 23.4C51.3486 23.16 50.7886 22.8133 50.3086 22.36C49.8286 21.9067 49.4486 21.3533 49.1686 20.7C48.8886 20.0467 48.7486 19.3067 48.7486 18.48V17.68C48.7486 16.8533 48.8886 16.1133 49.1686 15.46C49.4486 14.8067 49.8286 14.2533 50.3086 13.8C50.7886 13.3467 51.3486 13 51.9886 12.76C52.6286 12.52 53.3086 12.4 54.0286 12.4C54.7486 12.4 55.4286 12.52 56.0686 12.76C56.7086 13 57.2686 13.3467 57.7486 13.8C58.2286 14.2533 58.6086 14.8067 58.8886 15.46C59.1686 16.1133 59.3086 16.8533 59.3086 17.68V18.48C59.3086 19.3067 59.1686 20.0467 58.8886 20.7C58.6086 21.3533 58.2286 21.9067 57.7486 22.36C57.2686 22.8133 56.7086 23.16 56.0686 23.4C55.4286 23.64 54.7486 23.76 54.0286 23.76ZM80.6229 27.88C79.3829 28.3333 78.0829 28.56 76.7229 28.56C75.3629 28.56 74.0629 28.3333 72.8229 27.88C71.5829 27.4267 70.4829 26.7667 69.5229 25.9C68.5629 25.0333 67.8029 23.9667 67.2429 22.7C66.6829 21.4333 66.4029 19.9733 66.4029 18.32V17.84C66.4029 16.2133 66.6829 14.7667 67.2429 13.5C67.8029 12.2333 68.5629 11.16 69.5229 10.28C70.4829 9.4 71.5829 8.73333 72.8229 8.28C74.0629 7.82667 75.3629 7.6 76.7229 7.6C78.0829 7.6 79.3829 7.82667 80.6229 8.28C81.8629 8.73333 82.9629 9.4 83.9229 10.28C84.8829 11.16 85.6429 12.2333 86.2029 13.5C86.7629 14.7667 87.0429 16.2133 87.0429 17.84V18.32C87.0429 19.9733 86.7629 21.4333 86.2029 22.7C85.6429 23.9667 84.8829 25.0333 83.9229 25.9C82.9629 26.7667 81.8629 27.4267 80.6229 27.88ZM76.7229 23.76C76.0029 23.76 75.3229 23.64 74.6829 23.4C74.0429 23.16 73.4829 22.8133 73.0029 22.36C72.5229 21.9067 72.1429 21.3533 71.8629 20.7C71.5829 20.0467 71.4429 19.3067 71.4429 18.48V17.68C71.4429 16.8533 71.5829 16.1133 71.8629 15.46C72.1429 14.8067 72.5229 14.2533 73.0029 13.8C73.4829 13.3467 74.0429 13 74.6829 12.76C75.3229 12.52 76.0029 12.4 76.7229 12.4C77.4429 12.4 78.1229 12.52 78.7629 12.76C79.4029 13 79.9629 13.3467 80.4429 13.8C80.9229 14.2533 81.3029 14.8067 81.5829 15.46C81.8629 16.1133 82.0029 16.8533 82.0029 17.68V18.48C82.0029 19.3067 81.8629 20.0467 81.5829 20.7C81.3029 21.3533 80.9229 21.9067 80.4429 22.36C79.9629 22.8133 79.4029 23.16 78.7629 23.4C78.1229 23.64 77.4429 23.76 76.7229 23.76Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
          <ul className="flex mob:flex-col items-center gap-[35px] mob:mb-[40px]">

            <li>
              <a className="text-grey text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="about">About</a>
            </li>
            <li>
              <a className="text-grey text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="locations">Location</a>
            </li>
            <li>
              <a className="text-grey text-[15px] font-bold font-[SpaceMono] hover:text-yellow" href="careers">Careers</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <a href="https://www.facebook.com/" target="_blank">
            <ImFacebook2 className="cursor-pointer hover:fill-[#e5ecf4]" color="#fcb72b" size="23px"/>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FaTwitter className="cursor-pointer hover:fill-[#e5ecf4]" color="#fcb72b" size="24px"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram className="cursor-pointer hover:fill-[#e5ecf4]" color="#fcb72b" size="24px"/>
          </a>
        </div>
      </footer>
    </div>
  )
}
