import React from 'react'

const MarsRoverForm = ({ roverName, sol, camera, setRoverName, setSol, setCamera ,fetchMarsRoverData}) => {
    return (
        <div>
            <form>
                <label htmlFor="roverName">Rover Name:</label>
                <input type="text" id="roverName" value={roverName} onChange={(e) => setRoverName(e.target.value)} />

                <label htmlFor="sol">Sol:</label>
                <input type="number" id="sol" value={sol} onChange={(e) => setSol(e.target.value)} />

                <label htmlFor="camera">Camera:</label>
                <input type="text" id="camera" value={camera} onChange={(e) => setCamera(e.target.value)} />
                <button type="submit" onClick={fetchMarsRoverData}>検索</button>
            </form>
        </div>
    )
}

export default MarsRoverForm