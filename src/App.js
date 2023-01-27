import './App.css';
import Header from "./components/header"
import Card from "./components/card"

function App() {
  return (
    <div className="App">
      <Header />
      <section className="section-card">
        <Card
            image = "../images/mount fuji.jpg"
            locationName ="JAPAN"
            locationLink ="/"
            locationTitle = "Mount Fuji"
            timeline = "12 Jan, 2021 - 24 Jan, 2021"
            description = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."

        />
      </section>
    </div>
  );
}

export default App;
