// import Navbar from "./Components/Navbar";
// import Description from "./Components/Description";
// import Jssstu from "./Components/JSSSTU_logo/jssstu";
import LoginPage from "./LoginPage/loginpage";
import CarouselSlider from "./Components/Carousel_Slider/Carousel_slider";
import HomePage from "./Homepage/homepage";
import Navbar from "./Components/Navbar";
import FAQSection from "./Components/FAQ/Faq";

function App() {
    return (
        <div className="home-page">
            {/* <CarouselSlider /> */}
            <HomePage />
            <Navbar />
            {/* <FAQSection /> */}

            {/* <LoginPage></LoginPage> */}
        </div>
    );
}

export default App;
