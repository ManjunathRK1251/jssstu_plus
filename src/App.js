// import Navbar from "./Components/Navbar";
// import Description from "./Components/Description";
// import Jssstu from "./Components/JSSSTU_logo/jssstu";
import LoginPage from "./LoginPage/loginpage";
import CarouselSlider from "./Components/Carousel_Slider/Carousel_slider";
import HomePage from "./Homepage/homepage";
import Navbar from "./Components/Navbar";
import FAQSection from "./Components/FAQ/Faq";
// import navbar_img from "./Images/navbar_bg.jpg"

function App() {
    return (
        <div className="home-page">
            {/* <Navbar /> */}
            {/* <CarouselSlider /> */}
            {/* <HomePage /> */}
            <FAQSection />

            {/* <LoginPage></LoginPage> */}
        </div>
    );
}

export default App;
