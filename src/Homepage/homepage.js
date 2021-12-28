import Navbar from "../Components/Navbar";
import Description from "../Components/Description";
import Jssstu from "../Components/JSSSTU_logo/jssstu";

export default function HomePage() {
    return (
        <div className="home-page">
            <Navbar />
            <Jssstu />
            <Description />
        </div>
    );
}