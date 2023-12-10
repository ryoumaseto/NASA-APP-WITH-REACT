// 必要なモジュールをインポートする
import React, { useState } from "react";
import MarsRoverForm from "./MarsRoverForm";
import MarsRoverPhotos from "./MarsRoverPhotos";
import axios from "axios";
import Header from "../header/Header";

const MarsRover = () => {
    const [roverName, setRoverName] = useState('curiosity');
    const [sol, setSol] = useState(1000);
    const [camera, setCamera] = useState('fhaz');
    const [photos, setPhotos] = useState([]);
    const [errorStatus, setErrorStatus] = useState(false);
    const apiKey = process.env.REACT_APP_NASA_API_KEY;

    const fetchData = async () => {
        try {
            const result = await axios(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}&page=1&per_page=2`
            );

            setPhotos(result.data.photos);
        } catch (error) {
            setErrorStatus(true);
        }
    };

    return (
        <>
        <Header />
        <div className="mars-rover mt-10">
            <h2 className="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">Mars Rover Photos</h2>
            <div className="mr-20 flex justify-end">
                {errorStatus || <MarsRoverForm
                    setRoverName={setRoverName}
                    setSol={setSol}
                    setCamera={setCamera}
                    fetchData={fetchData}
                />
                }   
            </div>
            {photos.length > 0 && <MarsRoverPhotos photos={photos} />}
        </div>
        </>
    );
}


export default MarsRover;
