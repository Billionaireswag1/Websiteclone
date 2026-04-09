import Welcome from "./Components/Welcome";
import Navbar from "./Components/Navbar";
import Donation from "./Components/Donation"
import Learning from "./Components/learning";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Donation/>
      <Learning/>
      <Footer/>
    </div>
  );
}

export default App;