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

    async function getMarsRoverPhotos(roverName, sol, camera) {
        try {
            const apiKey = process.env.REACT_APP_NASA_API_KEY;
            const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`;

            const response = await axios.get(apiUrl);
            const data = await response.json();
            return data.photos;
        } catch (error) {
            console.error('Error retrieving Mars Rover photos:', error);
            return [];
        }
    }

    // データを取得する
        getMarsRoverPhotos(roverName, sol, camera)
            .then(photos => {
                setPhotos(photos);
                setErrorStatus(false);
            })
            .catch(error => {
                setErrorStatus(true);
            });
            console.log(photos);
    // 取得したデータを表示する
    return (
        <div className="mars-rover">
            <h2>Mars Rover Photos</h2>
            <MarsRoverForm
                setRoverName={setRoverName}
                setSol={setSol}
                setCamera={setCamera}
            />
            {errorStatus ||<MarsRoverPhotos
                photos={photos}
            />
            }   
        </div>
    );
}

export default MarsRover;
