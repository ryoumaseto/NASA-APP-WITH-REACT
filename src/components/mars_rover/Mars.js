// 必要なモジュールをインポートする
import React, { useState } from "react";
import MarsRoverForm from "./MarsRoverForm";
import MarsRoverPhotos from "./MarsRoverPhotos";
import axios from "axios";

const MarsRover = () => {
    const [roverName, setRoverName] = useState('curiosity');
    const [sol, setSol] = useState(1000);
    const [camera, setCamera] = useState('fhaz');
    const [photos, setPhotos] = useState([]);
    const [errorStatus, setErrorStatus] = useState(false);
    console.log(roverName, sol, camera);

    

    const fetchMarsRoverData = async (sol, camera, roverName) => {
        const apiKey = process.env.REACT_APP_NASA_API_KEY;
        try {
            const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`;
            const response = await axios.get(url);
            console.log(response,'レスポンス');
            setPhotos(response.data.photos);
            setErrorStatus(false);
        } catch (error) {
            console.error(error);
            setPhotos([]);
            setErrorStatus(true);
        }
    }
    
    return (
        <div className="mars-rover">
            <h2>Mars Rover Photos</h2>
            <MarsRoverForm
                setRoverName={setRoverName}
                setSol={setSol}
                setCamera={setCamera}
                fetchMarsRoverData={fetchMarsRoverData}
            />
            {errorStatus || <MarsRoverPhotos
                photos={photos}
            />}
        </div>
    );
}


export default MarsRover;
