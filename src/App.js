import './App.css';
import Header from "./components/header"
import Card from "./components/card"
import Data from "./data"

function App() {

  let dataCard = Data.map((item) => {
    return(
      <Card item = {item} />
    )
  })
  return (
    <div className="App">
      <Header />
      <section className="section-card">
        {dataCard}
      </section>
    </div>
  );
}

export default App;
