import Badge from "../Badge";
import { TOOLS } from "../../../constants/constants";
const Tools = () => {
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">
          Other Tools
        </span>
        <div className="flex flex-wrap gap-2">
          <ul className="text-LightGray text-sm list-image-custom-mark">
            {TOOLS.map((item, index) => (
              <li
                key={index}
                className=" list-inside"
                style={{
                  backgroundImage: "url(/images/mark.png)",
                  backgroundSize: "16px 16px", // Adjust size as needed
                  backgroundRepeat: "no-repeat",
                  paddingLeft: "24px", // Adjust to position text correctly
                  backgroundPosition: "0 50%", // Center vertically
                }}
              >
                {item}
              </li>
              // <Badge key={index} title={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tools;
