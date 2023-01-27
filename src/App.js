import './App.css';
import Header from "./components/header"
import Card from "./components/card"

function App() {
  return (
    <div className="App">
      <Header />
      <section className="section-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default App;
