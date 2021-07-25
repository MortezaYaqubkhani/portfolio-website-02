import "./App.scss";
import TopBar from "./components/topBar/topBar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfoio/portfolio";
import Works from "./components/works/works";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
