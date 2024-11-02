import { useEffect, useState } from "react";
import Bike from "../Bike/Bike";


const Bikes = () => {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('./bikes.json')
        .then(res => res.json())
        .then(data => setBikes(data));
    },[])

    return (
        <div>
            <h2 className="text-5xl font-bold text-center py-5">BIKES</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    bikes.map(bike => <Bike key={bike.bikeId} bike={bike}></Bike>)
                }
            </div>
        </div>
    );
};

export default Bikes;