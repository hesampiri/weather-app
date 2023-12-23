import { createContext, useEffect } from "react";
import "./App.css";
import Input from "./input/input";
import { useState } from "react";
import Getlocation from "./getlocation/getlocation";
import Citysection from "./citysection/citysection";
import InfoCard from "./infocard/infocard";
import useSkipFirstRender from "./hooks/useskipfirstrender";
import NextDay from "./nextday/nextday";
import daycounter from "./hooks/daycounter";
import DropAlert from "./alert/alert";

function App() {
  const [url, seturl] = useState("");
  const [condition, setcondition] = useState({});
  const [temperture, settemperture] = useState({});
  const [currentdate, setcurrentdate] = useState(getDate());
  const [wind, setwind] = useState({});
  const [main, setmain] = useState("");
  const [sky, setsky] = useState([]);
  const [suntime, setsuntime] = useState({});
  const [sunrise, setsunrise] = useState("");
  const [sunset, setsunset] = useState("");
  const [isloading, setisloading] = useState(true);
  const [fivedays, setfivedays] = useState([]);
  const [fivetemp, setfivetemp] = useState([]);
  const[isdenied , setisdenied] = useState(false);

  const dayofweak = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useSkipFirstRender(() => {
    settemperture({ ...condition.main });
    setwind({ ...condition.wind });
    setsky([...condition.weather]);
    setsuntime({ ...condition.sys });
  }, [condition]);

  function getDate() {
    const today = new Date();
    const day = today.getDay();
    const time = today.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    
    const dayofweak = ["Sun", "Mon", "Teu", "Wed", "Thu", "Fri", "Sat"];
    return `${dayofweak[day]} , ${time}`;
  }

  useEffect(() => {
    const time = new Date((suntime.sunrise + condition.timezone) * 1000);
    const risetime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setsunrise(risetime);
  }, [suntime]);

  useEffect(() => {
    const sectime = new Date((suntime.sunset + condition.timezone) * 1000);
    const sunsettime = sectime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    setsunset(sunsettime);
  });

  function geturl(state) {
    seturl(state);
  }
  function getweather(value) {
    setcondition(value);
    setisloading(false);
  }

  function getfivedays(cast, temp) {
    setfivedays(cast);
    setfivetemp(temp);
  }

  function loadsetter(){
    seturl("")
  }

  function showerror(){
    setisdenied(true)
  }

  // }
  // useEffect(()=>{
  //   loadingscreen()
  // },[])

  // function loadingscreen(){
  //   if(isloading){
  //     // <Loading/>
  //     console.log("loading")
  //   }else{
  //     null
  //   }
  // }

  useEffect(() => {
    sky.map((item) => setmain(item.main));
  }, [sky]);

  return (
    <>
      <Getlocation getlinkfunc={geturl} getweather={getweather} showerror={showerror} getfivedays={getfivedays}/>
      <div className="lg:flex justify-center lg:h-screen h-[1900px] index-2 background bg-black flex-col items-center">
      {/* {isdenied ? <DropAlert/> : null} */}
        <div className="lg:h-[750px] h-full lg:container containerr w-ful self-center lg:rounded-2xl p-[15px] grid lg:grid-cols-5 grid-cols-2 grid-rows-4 grid-rows-6 lg:grid-rows-4 gap-4 [&>div]:rounded-xl">
          <Citysection
            temp={temperture.temp}
            city={condition.name}
            timer={currentdate}
            img={url}
          />
          <div className="lg:col-span-2 lg:col-start-1 row-span-2 col-span-5 row-span-1 lg:row-span-2">
            <p className="p-2.5 px-3 text-lg font-semibold text-white">
              Todays highlights
            </p>
            <div className=" grid gap-2 lg:grid-cols-3 lg:grid-rows-2 grid-rows-6 row-span-1 [&>div]:rounded-xl [&>div]:p-[10px] p-1 h-4/5 ">
              <InfoCard title="Sky" info={main} className="text-white" />
              <InfoCard
                title="Feels like"
                info={
                  temperture.feels_like
                    ? Math.round(temperture.feels_like)
                    : null
                }
                sign={"deg"}
              />
              <InfoCard title="Sunrise" info={sunrise == 'Invalid Date'? null : sunrise} />
              <InfoCard title="Humidity" info={temperture.humidity} sign="%" />
              <InfoCard title="Wind speed" info={wind.speed ?Math.round(wind.speed):null} sign={"km/h"}/>
              <InfoCard title="Sunset" info={sunset == 'Invalid Date'? null : sunset} />
            </div>
          </div>
          <Input
            getlinkfunc={geturl}
            getweather={getweather}
            getfivedays={getfivedays}
            load={loadsetter}
          />
          <div className="lg:col-span-3 lg:row-span-2  col-span-5 ">
            <p className="p-2.5 text-lg text-white font-semibold px-3">
              Next five days
            </p>
            <div className="grid grid-cols-5 gap-2 p-1 [&>div]:rounded-xl h-3/4">
              <NextDay
                date={dayofweak[daycounter(new Date(), 24)]}
                sky={fivedays[0]}
                max={fivetemp[0] ? fivetemp[0].temp_max + "°" : null}
                min={fivetemp[0] ? fivetemp[0].temp_min + "°" : null}
              />
              <NextDay
                date={dayofweak[daycounter(new Date(), 48)]}
                sky={fivedays[1]}
                max={fivetemp[1] ? fivetemp[1].temp_max + "°" : null}
                min={fivetemp[1] ? fivetemp[1].temp_min + "°" : null}
              />
              <NextDay
                date={dayofweak[daycounter(new Date(), 72)]}
                sky={fivedays[2]}
                max={fivetemp[2] ? fivetemp[2].temp_max + "°" : null}
                min={fivetemp[2] ? fivetemp[2].temp_min + "°" : null}
              />
              <NextDay
                date={dayofweak[daycounter(new Date(), 96)]}
                sky={fivedays[3]}
                max={fivetemp[3] ? fivetemp[3].temp_max + "°" : null}
                min={fivetemp[3] ? fivetemp[3].temp_min + "°" : null}
              />
              <NextDay
                date={dayofweak[daycounter(new Date(), 120)]}
                sky={fivedays[4]}
                max={fivetemp[4] ? fivetemp[4].temp_max + "°" : null}
                min={fivetemp[4] ? fivetemp[4].temp_min + "°" : null}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

