import ErrorImg from '../../assets/Error.webp'

const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col justify-center text-center items-center p-20 ">
                <img className='h-64' src={ErrorImg} alt="" />
            <h1 className="text-5xl font-bold pt-5">Oops!</h1>
            <p className="text-2xl font-bold pt-5">Sorry, an unexpected error has occurred.</p>
            <p className="font-bold pt-5"> Not Fount </p>
        </div>
        </div>
    );
};

export default ErrorPage;