import "./citysection.css";
import Loading from "../loading/loading";

function Citysection({ temp, city, timer, img }) {

  const stylist = {
    backgroundImage: `url(${img})`,
    backgroundColor: "rgba(17, 17, 17, 0.18)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        className="md:col-span-2 col-span-5 row-span-1 md:row-span-2 row-start-2 overflow-hidden flex img-container flex-col justify-between"
        style={stylist}
      >
        <div className=" w-full p-4 flex justify-between items-center">
          <p className="text-white md:text-5xl text-5xl temp col-span-1 row-span-1">
            {temp ? Math.round(temp) + "°" : null}
          </p>
          <p className="text-lg text-white time">{timer}</p>
        </div>
        <div className="p-4">
          <h1 className="md:text-7xl text-5xl img-header text-white py-[10px]   col-start-1 col-span-2 row-start-3 ">
            {city === "Kūy-e Ekhteşāşī-ye Gomrok" ? "Tehran" : city}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Citysection;
