import Carousel from "react-elastic-carousel";
import Placement2 from "./Placement2";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export default function PlacementCarousel() {
    <Carousel
        breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed={1500}
        itemPadding={[10, 50]}
        pagination={false}
        infinite
    >
        <Placement2 />
        <Placement2 />
        <Placement2 />
        <Placement2 />
    </Carousel >
}