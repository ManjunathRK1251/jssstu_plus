import Navbar from "./Components/Navbar";
import Description from "./Components/Description";
import Jssstu from "./Components/JSSSTU_logo/jssstu";
import LoginPage from "./LoginPage/loginpage";
import CarouselSlider from "./Components/Carousel_Slider/Carousel_slider";
// import navbar_img from "./Images/navbar_bg.jpg"

function App() {
  return (
    <div className="home-page">
      <CarouselSlider></CarouselSlider>
      {/* <h2>Let's get started!</h2> */}
      {/* <img src={navbar_img} alt="" /> */}
      {/* <Navbar />
      <Jssstu />
      <Description /> */}
      {/* <LoginPage></LoginPage> */}
    </div>
  );
}

export default App;