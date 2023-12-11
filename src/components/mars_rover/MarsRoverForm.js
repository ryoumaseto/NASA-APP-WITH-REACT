import React from 'react'

const MarsRoverForm = ({ sol, camera, setPages, setCamera, fetchData }) => {
    const cameras = [
        {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera"
        },
        {
            name: "NAVCAM",
            full_name: "Navigation Camera"
        },
        {
            name: "MAST",
            full_name: "Mast Camera"
        },
        {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex"
        },
        {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera"
        }
    ];

    return (
        <div className='sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <div className='flex flex-col sm:flex-row items-center'>
                <label className='ml-2 sm:ml-20 font-sans' htmlFor="pages">Max Pages:</label>
                <input min='1' max='25' type="number" placeholder='10' className="ml-2 sm:ml-5 rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 text-right" id="pages" value={sol} onChange={(e) => setPages(e.target.value)} />
                <label className="ml-2 sm:ml-20 font-sans" htmlFor="camera">Camera:</label>
                <select id="camera" className="ml-2 sm:ml-5 rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10" value={camera} onChange={(e) => setCamera(e.target.value)}>
                    {cameras.map((camera) => (
                        <option key={camera.name} value={camera.name}>
                            {camera.full_name}
                        </option>
                    ))}
                </select>

                <button onClick={() => fetchData()} className="ml-2 sm:ml-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    検索
                </button>
            </div>
        </div>
    )
}

export default MarsRoverForm