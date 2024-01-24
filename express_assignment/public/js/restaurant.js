
const root = ReactDOM.createRoot(document.getElementById("restaurants-container"));

const Restaurants = () => {
    return (
        <>
            <Restocard name="siva" cuisine="indian" rating="4.4"/>
            <Restocard name="yadesh" cuisine="american" rating="2.4"/>
            <Restocard name="vimal" cuisine="hyderabad style" rating="3.4"/>
        </>
            
    )
}

const Restocard = ({name,cuisine,rating}) => {
    return (
        <div className="restocard">
            <h1>{name}</h1>
            <h2> Cuisine: {cuisine}</h2>
            <h3> Rating: {rating}</h3>
        </div>
    )
}

root.render(<Restaurants/>);