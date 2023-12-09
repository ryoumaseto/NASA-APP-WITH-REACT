// Main.js
import React, { useState } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import Error from "./Error";

// Nasa API key
const apiKey = process.env.REACT_APP_NASA_API_KEY;

function Main() {
    // Nasaから取得したデータを格納するためのstate
    const [data, setData] = useState([]);
    // 日付指定をするためのstate
    const [date, setDate] = useState("1999-09-19");
    // エラーメッセージを格納するためのstate
    const [errorStatus, setErrorStatus] = useState(false);

    // Nasa APIを叩くための関数
    const fetchData = async (date) => {
        try {
            // Nasa APIを叩いて、取得したデータを格納
            const result = await axios.get("https://api.nasa.gov/planetary/apod", {
                params: {
                    api_key: apiKey,
                    date: date, // 入力された日付を使用
                },
            });
            setErrorStatus(false);
            setData(result.data);
        } catch (error) {
            console.error("Error fetching data from NASA API:", error);
            setData([]);
            setErrorStatus(true);
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
        <div class="border-t border-gray-200 ">
                <div class="mx-4 px-4 md:px-8">
                        <h3 class="mt-10 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">宇宙を覗いてみよう！</h3>
                </div>
            <div class="container px-5 py-8 flex flex-wrap mx-auto items-center justify-end">
                <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                    <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
                        <label for="footer-field" class="leading-7 text-sm text-gray-600">検索すると画像が表示されます</label>
                        <input
                            type="date"
                            onChange={changeDate}
                            id="footer-field"
                            name="footer-field"
                            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button onClick={() => handleClick(date)} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                        検索
                    </button>
                </div>
            </div>
                {errorStatus && <Error />}
                {data && <ImageCard data={data} />}
        </div>
    );
}

export default Main;
