import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-8 justify-center w-full h-full bg-gradient-to-t from-[#2B2B36]">
        <div className="w-[100%] h-[90%] py-2 overflow-hidden flex md:block">
          <div className="flex items-center px-4 lg:px-0 md:items-center md:justify-around">
            <div className="">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">
                Hi, <br /> Welcome to my website.
              </h1>
              <div className="my-3">
                <code className=" py-4 font-courier text-Snow text-sm lg:text-base pb-4 h-20 lg:h-auto">
                  <span>
                    {"<"}
                    <span className="text-[#5CB4F0] font-bold">code</span>
                    {">"}{" "}
                    <span className="text-Snow font-bold">
                      {" "}
                      I am a{" "}
                      <span className="inline-block">
                        <Typewriter
                          options={{
                            strings: [
                              "Software Developer",
                              "Frontend Developer",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </span>{" "}
                    {"</"}
                    <span className="text-[#5CB4F0] sm:text-base xl:text-lg font-bold">
                      code
                    </span>
                    {">"}{" "}
                  </span>
                </code>
              </div>
              <Link
                to="intro"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="button uppercase text-xs font-semibold"
              >
                Explore Now
              </Link>
            </div>
            <div className="w-48 h-52 relative hidden md:block"></div>
          </div>
        </div>

        {/* details in row */}
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">
          <div className="flex items-center gap-x-3">
            <span className="text-base md:text-lg text-[var(--blue-color)] font-bold">
              3+
            </span>
            <span className="text-xs text-Snow">Years Frontend Experience</span>
          </div>

          <div className="flex items-center gap-x-3">
            <span className="text-base md:text-lg text-[var(--blue-color)] font-bold">
              30+
            </span>
            <span className="text-xs text-Snow">Completed Websites</span>
          </div>

          <div className="flex items-center gap-x-3">
            <span className="text-base md:text-lg text-[var(--blue-color)] font-bold">
              10+
            </span>
            <span className="text-xs text-Snow">Frontend Projects</span>
          </div>

          <div className="flex items-center gap-x-3">
            <span className="text-base md:text-lg text-[var(--blue-color)] font-bold">
              30+
            </span>
            <span className="text-xs text-Snow">Freelance Clients</span>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
