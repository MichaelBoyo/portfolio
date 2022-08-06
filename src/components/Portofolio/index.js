import Loader from "react-loaders";
import "./index.scss";


const Portfolio = () => { 
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    My Portfolio
                </h1>
               
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;