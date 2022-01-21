import Navbar from "../Components/Navbar";
import Description from "../Components/Description";
import Jssstu from "../Components/JSSSTU_logo/jssstu";
import CarouselSlider from "../Components/Carousel_Slider/Carousel_slider";

export default function HomePage() {
    return (
        <div className="home-page">
            <div className="Navbar-bg">
                <CarouselSlider />
            </div>
            <Jssstu />
            <Description />
        </div>
    );
}
