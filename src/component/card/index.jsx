import "./style.scss";

export default function Card(props) {
    return (
        <div className="Card">
            <img src={props.icon} alt="icon car" className="Card__icon" />
            <h1 className="Card__title">{props.name}</h1>
            <p className="Card__desc">{props.desc}</p>
            <button className="Card__button">Learn more</button>
        </div>
    );
}
