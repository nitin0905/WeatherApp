import React, { useEffect, useState } from 'react';
import "./css/style.css";
const Tempapp = () => {

    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("Delhi");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=15da62d4bb710adcab7127c4642bbffc`
            const response = await fetch(url);
            const resjson = await response.json();

            setcity(resjson.main);
        };
        fetchApi();
    }, [search])

    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input type="search"value={search} className='inputField' onChange={(event) => {
                        setsearch(event.target.value)
                    }} />
                </div>
                {!city ? (<p className='errorMsg'> No Data Found</p>) : (
                    <div>
                        <div className='info'>
                            <h2 className='location'>
                                <i className='fas fa-street-view'></i>{search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp}°cel
                            </h1>
                            <h3 className='tempmin_max' >Min : {city.temp_min}°cel | Max : {city.temp_max}° cel</h3>
                        </div>

                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                    </div>
                )}

            </div>
        </>

    )
}

export default Tempapp;