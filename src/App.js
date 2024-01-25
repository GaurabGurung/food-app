import styles from "../src/App.module.scss";
import Foods from "./components/foods/foods";

import HeadLineCards from "./components/headLine-cards/headLine-cards";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Foods />
    </div>
  );
}

export default App;
