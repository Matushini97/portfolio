import "./styles/App.scss";
import { Navbar } from "../widgets/Navbar";
import { Footer } from "../widgets/Footer";
import { Main } from "../widgets/Main";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="main-wrapper">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
