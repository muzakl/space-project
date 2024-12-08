import classes from "../modules/destination.module.scss";
import logo from "../assets/logo.png";
import Moon from '../assets/Destination - A - Moon.png';
import Mars from '../assets/Destination - B - Mars.png';
import Europa from '../assets/Destination - C - Europa.png';
import Titan from '../assets/Destination - D - Titan.png';
import {useState} from "react";

const Destination = ({setPage}) => {
    const [destination, setDestination] = useState(0)
    const [currentImage, setCurrentImage] = useState(Moon)
    const [currentPlanet, setCurrentPlanet] = useState("MOON")
    const [currentDescription, setCurrentDescription] = useState("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain\n" +
        "                        perspective and come back refreshed. While you’re there, take in some history by visiting the\n" +
        "                        Luna 2 and Apollo 11 landing sites.")
    const [currentDistance, setCurrentDistance] = useState("384,400 KM")
    const [currentETA, setCurrentETA] = useState("3 DAYS")

    const planetHandler = (number) => {
        setDestination(number)
        if (number === 1) {
            setCurrentImage(Moon)
            setCurrentPlanet("MOON")
            setCurrentDescription("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain\n" +
                "                        perspective and come back refreshed. While you’re there, take in some history by visiting the\n" +
                "                        Luna 2 and Apollo 11 landing sites.")
            setCurrentDistance("384,400 KM")
            setCurrentETA("3 DAYS")
        } else if (number === 2) {
            setCurrentImage(Mars)
            setCurrentPlanet("MARS")
            setCurrentDescription("Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!")
            setCurrentDistance("225 MIL. KM")
            setCurrentETA("9 MONTHS")
        } else if (number === 3) {
            setCurrentImage(Europa)
            setCurrentPlanet("EUROPA")
            setCurrentDescription("The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.")
            setCurrentDistance("628 MIL. KM")
            setCurrentETA("3 YEARS")
        } else if (number === 4) {
            setCurrentImage(Titan)
            setCurrentPlanet("TITAN")
            setCurrentDescription("The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.")
            setCurrentDistance("1.6 BIL. KM")
            setCurrentETA("7 YEARS")
        }
    }

    const homeHandler = () => {
        setPage(0)
    }

    return (
        <div className={classes["destination-container"]}>
            <div className={classes["navigation"]}>
                <img src={logo} alt="logo"/>
                <div className={classes["navigation-bar"]}>
                    <div className={classes["button-container"]}>
                        <button onClick={homeHandler} className={classes["button-nav"]}>
                            <span className={classes["number-nav"]}>00</span>
                            <span className={classes["text-nav"]}> HOME</span>
                        </button>
                        <button className={classes["button-nav"]}>
                            <span className={classes["number-nav"]}>01</span>
                            <span className={classes["text-nav"]}> DESTINATION</span>
                        </button>
                        <button className={classes["button-nav"]}>
                            <span className={classes["number-nav"]}>02</span>
                            <span className={classes["text-nav"]}> CREW</span>
                        </button>
                        <button className={classes["button-nav"]}>
                            <span className={classes["number-nav"]}>03</span>
                            <span className={classes["text-nav"]}> TECHNOLOGY</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes["hero-container"]}>
                <h1 className={classes["number-header"]}>01</h1><h1 className={classes["text-header"]}> PICK YOUR
                DESTINATION</h1>
                <img src={currentImage} alt="moon"/>
                <div className={classes["destination-button-container"]}>
                    <button onClick={() => planetHandler(1)} className={classes["destination-button"]}>
                        <span>MOON</span>
                    </button>
                    <button onClick={() => planetHandler(2)} className={classes["destination-button"]}>
                        <span>MARS</span>
                    </button>
                    <button onClick={() => planetHandler(3)} className={classes["destination-button"]}>
                        <span>EUROPA</span>
                    </button>
                    <button onClick={() => planetHandler(4)} className={classes["destination-button"]}>
                        <span>TITAN</span>
                    </button>
                </div>
                <div className={classes["text-holder"]}>
                    <h1>{currentPlanet}</h1>
                    <p>{currentDescription}</p>
                    <p className={classes["distance-avg"]}>AVG. DISTANCE</p>
                    <h3>{currentDistance}</h3>
                    <p className={classes["travel-time"]}>EST. TRAVEL TIME</p>
                    <h3 className={classes["travel"]}>{currentETA}</h3>
                </div>
            </div>
        </div>
    )
}

export default Destination