import "./input.css"
import { useState } from "react";
import axios from "axios";
import { IoMdSearch } from "react-icons/io";

function Input({ getlinkfunc, getweather , getfivedays ,load}) {
  const [inputvalue, setinputvalue] = useState("");

  function searching() {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&units=metric&appid=0ca3b575491069905863a68ac926f000`
    ).then((res) => {
      const data = res.data;
      getweather({ ...data });

      axios(
        `https://api.unsplash.com/search/photos?page=1&query=${inputvalue}&client_id=IwncWX0CFohcEYekNkQ8rZhNkPHQQ0BL9FtEjFuOa-Q`
      )
        .then((res) => {
          const img = res.data.results[0];
          getlinkfunc(img.urls.regular);
          console.log("shod").catch((err) => console.log(err));
        })
        .catch(() => {
          console.log("image not loaded");
        });
    });
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${inputvalue}&units=metric&cnt=5&appid=69393d7cc552ecc46597de0edc9a11ba`
    )
      .then((res) => {
        const skymod = res.data.list.map(item=> item.weather[0].main)
        const temps = res.data.list.map(item=>item.main)
        getfivedays(skymod , temps)
      })
      .catch((err) => {
        console.log(err);
      });
      setinputvalue("")
      load()
  }

  return (
    <div className=" col-start-1 lg:col-start-3 row-start-1 col-span-5 col-end-6 lg:row-span-2 lg:row-start-1 rounded flex items-center flex-col  lg:border lg:border-t-0 lg:border-r-0">
      <div className="flex justify-end w-full h-1/3" >
        <input
          type="text"
          className="lg:w-4/6 w-4/5 px-[10px] rounded-xl mx-2 text-gray-500 h-[40px]"
          value={inputvalue}
          onChange={(e) => {
            setinputvalue(e.target.value);
          }}
          placeholder="Search for any city you want here"
          required
        />
        <button className="lg:px-3 rounded-lg text-white text-2xl button lg:w-[50px] w-1/5 pl-4 h-[40px]" onClick={searching}>
          <IoMdSearch />
        </button>
      </div>
      <div className="text-center pb-4 container">
        <h1 className=" header lg:text-8xl text-white text-5xl">WEATHER WISE</h1>
        <p>Please use VPN for better experience</p>
      </div>
    </div>
  );
}

export default Input;
