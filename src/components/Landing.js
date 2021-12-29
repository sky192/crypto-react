import React, { useState, useEffect } from "react";
import { getCoins } from "../services/api";
import Loader from "./Loader";

const Landing = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoins();
            setCoins(data);
            console.log(data);
        };

        fetchAPI();
    }, []);

    return (
        <>
            <input type="text" placeholder="Search" />
            {coins.length ? (
                <div>
                    {coins.map((coin) => (
                        <p key={coin.id}>{coin.name}</p>
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Landing;
