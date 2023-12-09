import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Photo from "./Photo";

const Home = () => {
  // Nasa API key
  const apiKey = process.env.REACT_APP_NASA_API_KEY;

  // Nasaから取得したデータを格納するためのstate
  const [data, setData] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false);

    useEffect(() => {
        fetchData();
    }, );

    // Nasa APIを叩くための関数
    const fetchData = async () => {
        try {
            // Nasa APIを叩いて、取得したデータを格納
            const result = await axios.get("https://api.nasa.gov/planetary/apod", {
                params: {
                    api_key: apiKey,
                    date: "2023-11-11", // 入力された日付を使用
                },
            });
            setErrorStatus(false);
            setData(result.data);
        } catch (error) {
            setErrorStatus(true);
        }
    };

    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="mx-auto flex max-w-xl flex-col items-center text-center">
                    <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                        Welcome to Space
                    </p>

                    <h4 class="mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">
                        宇宙を覗いてみよう！
                    </h4>

                    {errorStatus && <Photo data={data} />}

                    <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                        <Link to="/apod">
                            <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                Apod
                            </button>
                        </Link>

                        {/* <Link to="/mars">
                            <button class="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                Mars
                            </button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;
