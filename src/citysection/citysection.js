import "./citysection.css";
import Loading from "../loading/loading";

function Citysection({temp , city , timer , img }) {
  return (
    <>
      <div className="md:col-span-2 col-span-5 row-span-1 md:row-span-2 row-start-2 overflow-hidden flex items-center img-container">
      {/* <img src={img} alt="" className="w-full " /> */}
      {
        img == ''?
        <Loading/>:
        <img src={img} alt="" className="w-full " />
      }
      <div className="absolute m-[15px] md:top-[20px] md:h-2/5 w-ful md:w-[550p] h-[200px] grid grid-cols-4 grid-rows-3 grid">
        <p className="text-white md:text-5xl text-5xl temp col-span-1 row-span-1">
          {temp ? Math.round(temp) + "°" : null}
        </p>
        <h1 className="md:text-7xl text-5xl img-header text-white py-[10px]   col-start-1 col-span-2 row-start-3 ">
          {city === "Kūy-e Ekhteşāşī-ye Gomrok"
            ? "Tehran"
            : city}
        </h1>
        <div className=" absolute col-start-4 py-[5px]">
          <p className="text-lg text-white time">{timer}</p>
        </div>
      </div>
    </div>
    </> 
  );
}

export default Citysection
