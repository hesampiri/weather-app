import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
// import useSkipFirstRender from './userfirstrender';
import useSkipFirstRender from '../hooks/useskipfirstrender';
import DropAlert from '../alert/alert';

function Getlocation({getlinkfunc , getweather , showerror , getfivedays}){

    const[wdate , setwdate] = useState('')
    const[location ,setlocation] = useState({});
    const[cityname , setcityname] = useState('')
    const firstrender = useRef(true)

    var options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      };

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                console.log(result);
                if (result.state === "granted") {
                navigator.geolocation.getCurrentPosition(success , error , options)
                // console.log('granted')
                } else if (result.state === "prompt") {
                navigator.geolocation.getCurrentPosition(success , error , options)
                } else if (result.state === "denied") {
                showerror(); 
                }
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    },[]);

    function success(pos) {
        var crd = pos.coords;
        setlocation({...location , lat:crd.latitude , lon:crd.longitude})
      }
      
        function error(err){
          console.log(err.code)
        }

        useSkipFirstRender(()=>{

            axios(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=52d11d5eefe1a0d2d7f8568c91a8b560`)
            .then((res)=> {
                // console.log(res.data)
                const data = res.data
                getweather({...data})
                if(res.data.name === "Kūy-e Ekhteşāşī-ye Gomrok"){
                    setcityname('Tehran')
                }else{
                setcityname(res.data.name)
                }
            })
            .catch(()=>{
              console.log('failed request')})
        
          },[location])

          useSkipFirstRender(()=>{

            axios(`https://api.unsplash.com/search/photos?page=1&query=${cityname}&client_id=IwncWX0CFohcEYekNkQ8rZhNkPHQQ0BL9FtEjFuOa-Q`)
            .then((res)=> {
                const imglink = res.data.results[0]
                getlinkfunc(imglink.urls.regular)
            })
            .catch(()=>{
              console.log('failed request')});
            axios(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&units=metric&cnt=5&appid=69393d7cc552ecc46597de0edc9a11ba`
              )
                .then((res) => {
                  const skymod = res.data.list.map(item=> item.weather[0].main)
                  const temps = res.data.list.map(item=>item.main)
                  getfivedays(skymod , temps)
                })
                .catch((err) => {
                  console.log(err);
                });    
        
          },[cityname])
    return(
        <>
        </>
    )
};

export default Getlocation 