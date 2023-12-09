// Main.js
import React, { useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import Error from './Error';

// Nasa API key
const apiKey = process.env.REACT_APP_NASA_API_KEY;

function Main() {
    // Nasaから取得したデータを格納するためのstate
    const [data, setData] = useState([]);
    // 日付指定をするためのstate
    const [date, setDate] = useState('');
    // エラーメッセージを格納するためのstate
    const [errorMessage, setErrorMessage] = useState('');

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
            setErrorMessage('');
        } catch (error) {
            console.error('Error fetching data from NASA API:', error);
            setErrorMessage('データの取得に失敗しました。代わりに僕の隣で眠る猫の画像を見せてあげます。再度検索してください');
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
        <div >
            <div className="container mx-auto p-4 flex-row">
                <h1 className="text-3xl font-bold">NASAの写真を検索しよう！</h1>
                <input type="date" onChange={changeDate} className="mt-4 p-2 border border-gray-300 rounded" />
            </div>
            <button onClick={() => handleClick(date)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">検索</button>
            {errorMessage && <Error />}
            {errorMessage || <ImageCard data={data} />}
        </div>
    );
}

export default Main;
