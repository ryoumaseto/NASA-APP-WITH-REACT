// Main.js
import React, { useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

// Nasa API key
const apiKey = process.env.REACT_APP_NASA_API_KEY;

function Main() {
    // Nasaから取得したデータを格納するためのstate
    const [data, setData] = useState([]);
    // 日付指定をするためのstate
    const [date, setDate] = useState('');

    // Nasa APIを叩くための関数
    const fetchData = async (date) => {
        try {
            // Nasa APIを叩いて、取得したデータを格納
            const result = await axios.get('https://api.nasa.gov/planetary/apod', {
                params: {
                    api_key: apiKey,
                    date: date, // 入力された日付を使用
                },
            });
            setData(result.data);
        } catch (error) {
            console.error('Error fetching data from NASA API:', error);
        }
    };

    // 検索ボタンを押した時にfetchData関数を実行
    const handleClick = (date) => {
        console.log(date);
        fetchData(date);
    };

    // 日付のinputに入力された値をstateに格納
    const changeDate = (e) => {
        setDate(e.target.value);
    };

    return (
        <div>
            <input type="date" onChange={changeDate} />
            <button onClick={() => handleClick(date)}>検索</button>
            <ImageCard data={data} />
        </div>
    );
}

export default Main;
