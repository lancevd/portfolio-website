import Intro from "../components/Common/Intro";
import Nav from "../components/Common/Nav/Nav";
import { FaBars, FaMousePointer } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { SlOptionsVertical } from "react-icons/sl";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const metadata = {
  title: "Olamide Mosoobalaje",
  description:
    "Olamide Mosobalaje, an experienced Frontend Developer based in Nigeria",
  author: "Olamide Winner Mosobalaje",
  keywords:
    "Frontend Developer, frontend engineer, african frontend developer, african frontend engineer, frontend developer in nigeria",
  favicon: "/favicon.png",
};

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("");
  const router = useRouter();


  useEffect(() => {
    const handleRouteChange = (url) => {
      setCurrentRoute(url);
    };

    setCurrentRoute(router.pathname);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);


  return (
    <div
      className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}
    >
      <div className="lg:hidden">
        <div className=" bg-[#20202A] text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIntro(!intro)}
          >
            <span className="icon border-2 text-[#5CB4F0] border-[#5CB4F0] p-1 text-sm rounded-lg">
              <SlOptionsVertical />
            </span>
            {/* <div className="text-Snow absolute -right-1 -bottom-1">
              <FaMousePointer />
            </div> */}
          </div>
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIsOpen(!isOpen)}
          >
            <span className="icon border-2 text-[#5CB4F0] border-[#5CB4F0] p-1 text-sm rounded-lg">
              {" "}
              <FaBars />
            </span>
          </div>
        </div>
      </div>
      <div className="flex relative h-full justify-between gap-x-3">
        {/* left most side */}
        <div
          className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-[#20202A] shadow-2xl z-50 lg:flex flex-col  lg:relative ${
            intro ? "flex absolute" : "hidden"
          }`}
        >
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>
        {/* overlay */}
        {intro && (
          <div
            onClick={(e) => setIntro(false)}
            className="fixed top-0 left-0  w-full h-full bg-black/50 backdrop-blur-[2px] z-40"
          ></div>
        )}

        {/* middle of screen */}
        <div className="w-full h-auto lg:w-9/12 shadow-2xl bg-[#20202A] relative overflow-auto overflow-x-hidden no-scrollbar">
          {children}
        </div>

        {/* right side */}
        {/* right side */}
        <div
          className={`hidden lg:block absolute lg:w-20 lg:relative bg-[#20202A] shadow-2xl rounded-xl overflow-hidden`}
        >
          <div
            onClick={(e) => setIsOpen(!isOpen)}
            className="bg-[#242430] text-[#eee] hover:text-[#fff] hidden lg:flex items-center h-16 justify-center text-2xl "
          >
            <span className="icon p-2 rounded-xl cursor-pointer">
              <ImMenu />
            </span>
          </div>
          <span className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 flex items-center justify-center text-center text-xl text-gray-600  tracking-widest">
            {currentRoute == "/"
              ? "HOME"
              : currentRoute.replace("/", "").toUpperCase()}
          </span>
        </div>
        {<Nav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}
