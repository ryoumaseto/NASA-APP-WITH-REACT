import React from 'react'

const MarsRoverPhotos = ({ photos }) => {
    if (!photos) {
        return <div>Loading...</div>;
    }

    

    return (
        photos.map((photo) => (
        <section className="text-gray-600 body-font overflow-hidden" key={photo.id}>
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={photo.img_src}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">Rover NAME</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{photo.rover.name}</h1>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">Earth date</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{photo.earth_date}</h1>
            </div>
            </div>
        </div>
        </section>
        ))
    );
}

export default MarsRoverPhotos