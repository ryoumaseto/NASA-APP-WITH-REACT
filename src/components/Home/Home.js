import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Photo from "./Photo";

const Home = () => {

    return (
        <>
        <Header />
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                    <p className="mb-4 font-semibold text-indigo-500 sm:text-4xl md:mb-12 md:text-5xl">
                        Welcome to Space
                    </p>

                    <Photo />

                    <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                        <Link to="/apod">
                            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                Apod
                            </button>
                        </Link>

                        <Link to="/mars">
                            <button className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                Mars Rover
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};


export default Home;
