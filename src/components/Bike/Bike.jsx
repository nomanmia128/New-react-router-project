

const Bike = ({ bike }) => {

    const { bikeId, modelName, image, price, rating, manufacturer, category } = bike;

    return (

        <div className="card bg-cyan-300 shadow-xl p-5 border">
            <figure className="rounded-2xl">
                <img className="h-[166px] w-full"
                    src={image}
                    alt={modelName} />
            </figure>
            <div className="card-body px-0 py-5">
                <h2 className="card-title font-bold">
                    {modelName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="font-bold mb-5">By: {manufacturer}</p>
                    <div className="border-t-2 bg-black border-dashed"></div>
                    <div className="card-actions justify-between mt-5">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating items-end gap-2">
                            <p className="font-bold">{rating}</p>
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Bike;