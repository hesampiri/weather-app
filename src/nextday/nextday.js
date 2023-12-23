import "./nextday.css";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function NextDay({ sky, max, min , date}) {
  function iconplacer() {
    if (sky == "Clouds") {
      return <TiWeatherCloudy />;
    } else if (sky == "Rain") {
      return <TiWeatherShower />;
    } else if (sky == "Clear") {
      return <TiWeatherSunny />;
    }
  }

  return (
    <>
      <div className="flex  lg:flex-col items-center justify-around fivecard text-white lg:h-[270px] col-span-5 lg:col-span-1">
        <p className="text-lg xl:text-xl pt-2 ">{date}</p>
        <hr className="w-4/5 h-[2px] bg-white opacity-20 hidden" />
        <p className="text-5xl pt-4">{iconplacer()}</p>
        <span className="p-4  lg:h-1/2 flex flex-col justify-between ">
          <p className="xl:text-2xl text-lg flex"><span className="px-2 text-green-400 text-3xl"><IoMdArrowDropup /></span>{max}</p>
          <p className="xl:text-2xl text-lg flex"><span className="px-2 text-red-400 text-3xl"><IoMdArrowDropdown /></span>{min}</p>
        </span>
      </div>
    </>
  );
}

export default NextDay;
