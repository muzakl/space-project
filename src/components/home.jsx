import classes from "../modules/home.module.scss";
import logo from "../assets/logo.png";

const Home = ({ setPage }) => {

    const destinationHandler = () => {
        setPage(1)
    }

    return (
        <div className={classes["home-container"]}>
            <div className={classes["navigation"]}>
                <img src={logo} alt="logo"/>
                <div className={classes["navigation-bar"]}>
                    <div className={classes["button-container"]}>
                        <button className={classes["button-nav"]}>
                            <span className={classes["number-nav"]}>00</span>
                            <span className={classes["text-nav"]}> HOME</span>
                        </button>
                        <button onClick={destinationHandler} className={classes["button-nav"]}>
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
                <div className={classes["text-container"]}>
                    <h3>SO, YOU WANT TO TRAVEL TO</h3>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                        hover
                        kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this
                        world
                        experience!
                    </p>
                </div>
                <button onClick={destinationHandler} className={classes["explore-button"]}>
                    <span>EXPLORE</span>
                </button>
            </div>

        </div>
    )
}

export default Home