
const BannerLayout = ({ children }) => {
    return (
      <div
        className="relative backdrop-blur-sm w-full h-80 bg-fixed z-10"
        style={{
          background:
            "url(https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-[#20202A]">
          <div className="bg-[#2929316b] backdrop-blur-sm w-full h-full">
            {children}
          </div>
        </div>
      </div>
    );
}

export default BannerLayout