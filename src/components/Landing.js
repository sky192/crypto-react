import React, { useState, useEffect } from "react";
import { getCoins } from "../services/api";
import Coin from "./Coin";
import Loader from "./Loader";

const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoins();
            setCoins(data);
            console.log(data);
        };

        fetchAPI();
    }, []);

    const searchHandler = (event) => {
        setSearch(event.target.value);
    };

    const searchedCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={searchHandler}
            />
            {coins.length ? (
                <div>
                    {searchedCoins.map((coin) => (
                        <Coin
                            key={coin.id}
                            image={coin.image}
                            name={coin.name}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            marketCap={coin.market_cap}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Landing;
