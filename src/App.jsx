import { useState } from 'react'
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faClock, faWifi } from "@fortawesome/free-solid-svg-icons";
import {
  gosip,
  background,
  arrow,
  desk,
  one,
  two,
  three,
  four,
  explain,
  enjoy,
  workspace,
  single,
  double,
  earn,

} from "./image";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* First Section */}
      <div className="border-b border-[#FFFFFF2E] ">
        <div className="w-full h-[700px] mb-5 flex flex-col justify-center items-center bg-[url('./assets/images/background.png')] mobile:bg-cover  mobile:px-2 mobile:w-[100%] mobile:mx-auto  mobile:h-[500px]">
          <img
            src={earn}
            alt=""
            srcset=""
            className="object-contain object-center  w-[40%] mobile:object-cover mobile:w-[80%] mobile:mb-9"
          />

          <p className="text-black mb-20 text-xl w-2/5 text-center poppins-light mobile:w-[100%] mobile:text-sm mobile:mb-10">
            Introduce others to our workspace and earn points that can be
            redeemed for exciting rewards
          </p>

          <div className="p-10 relative w-[15%] mobile:p-0 mobile:w-[40%]">
            <button
              type="submit"
              className="bg-blue-400 rounded-2xl w-[100%] leading-loose font-bold text-2xl text-white mt-10  mobile:text-base mobile:px-5 mobile:py-3 mobile:rounded-xl"
            >
              {" "}
              Join Now{" "}
            </button>

            <img
              src={arrow}
              alt=""
              srcset=""
              className="object-contain object-center translate-x-[70%] translate-y-[-50%]  w-60 mobile:w--full absolute"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full px-10 py-20 border-b flex flex-col border-[#FFFFFF2E] mobile:block mobile:px-5 bg-blue-500 items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-5 mobile:text-base mobile:text-center">
          Why Choose TechRoom?
        </h1>

        <p className="text-white mb-5 text-xl mobile:text-sm mobile:text-center">
          Experience a workspace designed to boost productivity and foster
          collaboration.
        </p>

        <div className="flex items-center justify-around w-full mt-20 mobile:flex-col">
          <div className="w-1/4 text-center  mobile:w-full mobile:mb-10">
            <FontAwesomeIcon icon={faWifi} size="5x" color="white" />

            <h1 className="text-white text-2xl font-bold mb-2 mt-10">
              High-Speed Internet
            </h1>

            <p className="text-white mb-5 text-sm">
              Stay connected with our ultra-fast internet.
            </p>
          </div>

          <div className="w-1/4 flex flex-col items-center justify-center text-center  mobile:w-full mobile:mb-10">
            <img
              src={desk}
              alt=""
              srcset=""
              className="object-contain object-center mobile:w--full w-24 "
            />

            <h1 className="text-white text-2xl font-bold mb-2 mt-10">
              Comfortable Environment
            </h1>

            <p className="text-white mb-5 text-sm">
              Work in a space that’s designed for comfort and productivity.
            </p>
          </div>

          <div className="w-1/4 text-center  mobile:w-full mobile:mb-10">
            <FontAwesomeIcon icon={faClock} size="5x" color="white" />

            <h1 className="text-white text-2xl font-bold mb-2 mt-10">
              Flexible Memberships
            </h1>

            <p className="text-white mb-5 text-sm">
              Choose a plan that suits your schedule and needs.
            </p>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full  border-b flex flex-row-reverse  border-[#FFFFFF2E] mobile:block mobile:px-0 ">
        <div className="w-2/4  mobile:w-full">
          <img
            src={gosip}
            alt=""
            srcset=""
            className="object-contain object-center ml-auto h-full w-[100%] mobile:ml-0 mobile:w-full"
          />
        </div>

        <div className="w-2/4  flex flex-col justify-center items-center  mobile:w-full ">
          <div className="p-5 w-[70%] mobile:w-full mobile:px-0">
            <h1 className="text-black leading-normal font-bold text-3xl mobile:mx-auto mobile:text-base mobile:text-center mobile:mb-5">
              How it works
            </h1>
            <p className=" mb-10 text-base mobile:mx-auto mobile:text-center mobile:text-sm mobile:w-full ">
              Earn rewards effortlessly by sharing the TechRoom experience
            </p>

            <div className=" flex flex-row mt-10 mobile:pl-5 ">
              <img
                src={one}
                alt=""
                srcset=""
                className="object-contain object-center  w-[6%] mobile:w-[10%]"
              />

              <div className="pl-10 w-[70%] mobile:w-[90%] mobile:pl-7">
                <h1 className="font-bold text-xl text-black leading-normal">
                  Sign Up
                </h1>

                <p className="text-base font-normal ">
                  Create your free TechRoom account.
                </p>
              </div>
            </div>

            <div className=" flex flex-row mt-10 mobile:pl-5 ">
              <img
                src={two}
                alt=""
                srcset=""
                className="object-contain object-center  w-[6%] mobile:w-[10%]"
              />

              <div className="pl-10 w-[70%] mobile:w-[100%] mobile:pl-7">
                <h1 className="font-bold text-xl text-black leading-normal">
                  Share Your Referral Link
                </h1>

                <p className="text-base font-normal ">
                  Share your unique referral link with friends and colleagues.
                </p>
              </div>
            </div>

            <div className=" flex flex-row mt-10 mobile:pl-5 ">
              <img
                src={three}
                alt=""
                srcset=""
                className="object-contain object-center  w-[6%] mobile:w-[10%]"
              />

              <div className="pl-10 w-[70%] mobile:w-[100%] mobile:pl-7">
                <h1 className="font-bold text-xl text-black leading-normal">
                  Earn Points
                </h1>

                <p className="text-base font-normal ">
                  Earn points for every referral who signs up and uses TechRoom.
                </p>
              </div>
            </div>

            <div className=" flex flex-row mt-10 mobile:pl-5 ">
              <img
                src={four}
                alt=""
                srcset=""
                className="object-contain object-center  w-[6%] mobile:w-[10%]"
              />

              <div className="pl-10 w-[70%] mobile:w-[100%] mobile:pl-7">
                <h1 className="font-bold text-xl text-black leading-normal">
                  Redeem Rewards
                </h1>

                <p className="text-base font-normal ">
                  Redeem your points for exciting rewards like free workspace
                  days and Wi-Fi data plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="w-full  h-[850px] justify-around flex flex-row items-center  bg-[#1C1B1F]  mobile:flex-col mobile:h-fit">
        <img
          src={workspace}
          alt=""
          srcset=""
          className="object-cover object-center mobile:w--full w-[30%] h-[850px] mobile:w-full mobile:h-[600px]"
        />

        <div className="p-10 h-80%  w-[40%] flex flex-col justify-center items-center mobile:w-[100%] mobile:px-0 ">
          <h1 className="text-center font-bold text-white text-2xl">
            Workspace Referral Rewards
          </h1>

          <div className=" w-[80%] flex flex-row p-10  justify-between mobile:flex-col mobile:justify-normal">
            <div className=" w-[50%] h-[100%] mobile:w-[100%] mobile:mb-10">
              <h1 className="text-center font-bold text-white">
                1 Person Referred
              </h1>
              <img
                src={single}
                alt=""
                srcset=""
                className="object-contain object-center mobile:w--full w-[90%] h-fit mobile:h-[120px] mobile:w-[100%]"
              />
              <p className="text-center text-white font-normal text-base">
                20 points
              </p>
            </div>

            <div className=" w-[50%] h-[100%] mobile:w-[100%]">
              <h1 className="text-center font-bold text-white">
                2 Persons Referred
              </h1>
              <img
                src={double}
                alt=""
                srcset=""
                className="object-contain object-center mobile:w--full w-[90%] h-[200px] mobile:h-[120px] mobile:w-[100%]"
              />
              <p className="text-center text-white font-normal text-base">
                40 points
              </p>
            </div>
          </div>

          <div className="p-5 border bg-[url('./assets/images/golden.png')] bg-cover mobile:bg-cover mobile:bg-center rounded-xl w-[80%] mb-5 mobile:w-[100%] mobile:pr-1 mobile:rounded-none">
            <h1 className="font-bold text-white text-lg mobile:text-base">
              Qualify for a Free Workspace Day!
            </h1>

            <p className="text-white text-base font-normal mobile:text-sm">
              Earn 100 points to enjoy a free day in our workspace
            </p>
          </div>

          <div className="p-5  bg-[#616161] rounded-xl w-[80%] mobile:rounded-none mobile:w-[100%]">
            <h1 className="font-bold text-white text-lg mobile:text-base">
              Continuous Rewards!
            </h1>

            <p className="text-white text-base font-normal mobile:text-sm">
              Keep earning 20 points for every continued use of our workspace by
              the people you refer.
            </p>
          </div>
        </div>
      </div>

      {/* Fifth Section */}

      <div className="flex flex-row items-center justify-evenly  w-full h-[800px] mobile:h-fit mobile:flex-col-reverse">
        <div className="w-[50%] flex flex-col justify-center items-center mobile:w-[100%]  mobile:pt-7 mobile:px-0 mb-10">
          <h1 className="text-center font-bold text-black text-2xl mobile:w-[100%] mobile:text-xl">
            Data Service Referral Rewards
          </h1>

          <div className=" w-[80%] flex flex-row p-10  justify-between mobile:flex-col mobile:w-[100%] mobile:items-center ">
            <div className=" w-[50%] flex flex-col justify-center content-center mobile:w-[100%] mobile:mb-10">
              <h1 className="text-center font-bold text-black ">
                1 Person Referred
              </h1>
              <img
                src={single}
                alt=""
                srcset=""
                className="object-contain object-center mobile:w-[60%] w-[100%] h-[150px] mobile:h-[120px]  mobile:mx-auto"
              />
              <p className="text-center text-black font-normal text-base">
                20 points
              </p>
            </div>

            <div className=" w-[50%] flex flex-col justify-center content-center ">
              <h1 className="text-center font-bold text-black mobile:text-sm">
                2 Persons Referred
              </h1>
              <img
                src={double}
                alt=""
                srcset=""
                className="object-contain object-center w-[100%] h-[150px] mobile:w-[100%] mobile:h-[120px]"
              />
              <p className="text-center text-black font-normal text-base">
                40 points
              </p>
            </div>
          </div>

          <div className="px-5 py-2 border-2 border-black border-dashed rounded-xl w-[80%] mb-5 mobile:w-[95%] mobile:px-2">
            <h1 className="font-bold text-black text-lg mb-1 mobile:text-sm">
              Redeem Your Points
            </h1>

            <p className="text-black text-base font-normal leading-normal mobile:text-sm">
              100 Points: Redeem for a free day of workspace use!
            </p>

            <p className="text-black text-base font-normal leading-normal mobile:text-sm">
              100 Points: Redeem for a free Wi-Fi data plan!
            </p>
          </div>
        </div>

        <img
          src={enjoy}
          alt=""
          srcset=""
          className="object-contain object-center mobile:w--full w-[40%] h-[90%] mobile:w-[100%] mobile:object-cover ]"
        />
      </div>

      {/* Sixth Section */}

      <div className="flex flex-row items-center justify-center bg-[#1C1B1F] w-full h-[500px] mobile:h-fit">
        <img
          src={explain}
          alt=""
          srcset=""
          className="object-contain object-center mobile:w--full w-[30%] h-[500px] mobile:h-fit "
        />

        <div className="p-5 w-[50%] mobile:w-[70%]">
          <h1 className="text-white font-bold text-2xl leading-relaxed mb-4 mobile:text-sm">
            Why Join Techroom?
          </h1>

          <p className="text-white font-normal text-lg leading-relaxed w-[75%] mobile:text-xs mobile:w-full">
            TechRoom offers a comfortable, productive environment with
            high-speed internet, great amenities, and a welcoming community.
            Plus, our data services are tailored to meet your needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default App
