import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from 'react-image-timeline';
require('react-image-timeline/dist/timeline.css'); // .scss also available

const events = [
    {
        date: new Date(2014, 9, 27),
        text: "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.",
        title: "Cairo, Egypt",
        buttonText: 'Click Me',
        imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
        onClick: console.log,
    },
    {
        date: new Date(2014, 9, 27),
        text: "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.",
        title: "Cairo, Egypt",
        buttonText: 'Click Me',
        imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
        onClick: console.log,
    },
    {
        date: new Date(2014, 9, 27),
        text: "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.",
        title: "Cairo, Egypt",
        buttonText: 'Click Me',
        imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
        onClick: console.log,
    }
];

export default function EventsTimeline() {
    return (
        <Timeline events={events} />
    );
}