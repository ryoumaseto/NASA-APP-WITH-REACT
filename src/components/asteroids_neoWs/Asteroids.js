import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Asteroids = () => {
    
        const [data, setData] = useState(null);
        const search_query = 'moon'; // ここに検索したいキーワードを入力してください
    
        useEffect(() => {
            const fetchData = async () => {
                const result = await axios(
                    `https://images-api.nasa.gov/search?q=${search_query}`
                );
    
                setData(result.data);
            };
    
            fetchData();
        }, [search_query]);
        data && data.collection.items.map((item, index) => (
            item.links.map((link, index) => (
                console.log(link.href)
            ))
        ))
        return (
            <div>
                {data && (
                    <div>
                        {data.collection.items.map((item, index) => (
                            <div key={index}>
                                <h2>{item.data.title}</h2>
                                <p>{item.data.description}</p>
                            </div>
                        ))}
                        <p>konnnitiha</p>
                    </div>
                )}
                
            </div>
        );
}

export default Asteroids