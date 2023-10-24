import React, { useState } from 'react';
import Button from '@mui/material/Button';

function DiceRolling({ options, setCurrentStatus }) {
    const [loading, setLoading] = useState(false);

    const getRandomElFromArr = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomItem = arr[randomIndex];
        setCurrentStatus(randomItem);
        return (randomItem)
    };

    const helloHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            getRandomElFromArr(options);
        }, 1000);
    };

    return (
        <div>
            {loading && <h3 style={{color: "white"}}>Zar Atılıyor...</h3>}
            {!loading && <h3 style={{color: "white"}}>{`Zar: ${getRandomElFromArr(options)}`}</h3>}
            <Button size='large'  onClick={helloHandler} variant="contained">Zar At</Button>
        </div>
    );
}

export default DiceRolling;