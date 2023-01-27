
export default function Card(props) {
    return(
        <section className="card">
            <img className="card-image" src="../images/mount fuji.jpg" alt="mount fuji"/>
            <div className="card-content">
                <div className="location">
                    <img className="location-icon" src="../images/location.svg" alt="location icon"/>
                    <span className="location-name">JAPAN</span>
                    <a className="location-link" href="/">View on Google Maps</a>
                </div>

                <h1 className="location-title">Mount Fuji</h1>
                <p className="timeline">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            
        </section>
    )
}