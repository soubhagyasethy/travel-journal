
export default function Card(props) {
    return(
        <section className="card">
            <img className="card-image" src={props.image} alt="mount fuji"/>
            <div className="card-content">
                <div className="location">
                    <img className="location-icon" src="../images/location.svg" alt="location icon"/>
                    <span className="location-name">{props.locationName}</span>
                    <a className="location-link" href={props.locationLink}>View on Google Maps</a>
                </div>

                <h1 className="location-title">{props.locationTitle}</h1>
                <p className="timeline">{props.timeline}</p>
                <p className="description">{props.description}</p>
            </div>
            
        </section>
    )
}