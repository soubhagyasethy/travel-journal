
export default function Card(props) {
    return(
        <section className="card">
            <img className="card-image" src={props.item.image} alt="mount fuji"/>
            <div className="card-content">
                <div className="location">
                    <img className="location-icon" src="../images/location.svg" alt="location icon"/>
                    <span className="location-name">{props.item.locationName}</span>
                    <a className="location-link" href={props.item.locationLink}>View on Google Maps</a>
                </div>

                <h1 className="location-title">{props.item.locationTitle}</h1>
                <p className="timeline">{props.item.timeline}</p>
                <p className="description">{props.item.description}</p>
            </div>
            
        </section>
    )
}