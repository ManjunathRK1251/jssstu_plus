import Navbar from "./Components/Navbar";
import Description from "./Components/Description";
import Jssstu from "./Components/JSSSTU_logo/jssstu";
// import navbar_img from "./Images/navbar_bg.jpg"

function App() {
  return (
    <div className="home-page">
      {/* <h2>Let's get started!</h2> */}
      {/* <img src={navbar_img} alt="" /> */}
      <Navbar />
      <Jssstu />
      <Description />
    </div>
  );
}

export default App;
