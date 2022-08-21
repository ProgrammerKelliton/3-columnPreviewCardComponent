import "./App.scss";
import Card from "../component/card";

import IconCard2 from "../../public/icons/icon-luxury.svg";
import IconCard1 from "../../public/icons/icon-sedans.svg";
import IconCard3 from "../../public/icons/icon-suvs.svg";

function App() {
    return (
        <div className="App">
            <div className="App__cards">
                <Card
                    name="Sedans"
                    desc="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
                    icon={IconCard1}
                ></Card>
                <Card
                    name="SUVs"
                    desc="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
                    icon={IconCard2}
                ></Card>
                <Card
                    name="Luxury"
                    desc="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
                    icon={IconCard3}
                ></Card>
            </div>
        </div>
    );
}

export default App;
