import "./App.scss";
import Card from "../component/card";

import IconCard2 from "../../public/icons/icon-luxury.svg";
import IconCard1 from "../../public/icons/icon-sedans.svg";
import IconCard3 from "../../public/icons/icon-suvs.svg";

function App() {
    return (
        <div className="App">
            <div className="App__cards">
                <Card name=".." desc="..." icon={IconCard1}></Card>
            </div>
        </div>
    );
}

export default App;
