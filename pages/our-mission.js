import { useState } from 'react';
import dynamic from 'next/dynamic';
import Dropdown from '../components/Dropdown';
import PieChartComponent from '../components/PieChart';
import BarChartComponent from '../components/Barchart';
import Testimonials from '../components/Testimonials';

// Dynamically import ImageSlider with no SSR
const ImageSlider = dynamic(() => import('../components/ImageSlider'), { ssr: false });

const locations = [
  { loc_id: 1, name: 'Vijayawada' },
  { loc_id: 2, name: 'Visakhapatnam' },
  { loc_id: 3, name: 'Guntur' },
  { loc_id: 4, name: 'Nellore' },
  { loc_id: 5, name: 'Tirupati' },
];

const mockData = [
  {
    loc_id: 1,
    name: 'Vijayawada',
    number_of_children: 3000,
    children_with_anemia: 500,
    children_with_tooth_plaque: 700,
  },
  {
    loc_id: 2,
    name: 'Visakhapatnam',
    number_of_children: 3500,
    children_with_anemia: 600,
    children_with_tooth_plaque: 800,
  },
  {
    loc_id: 3,
    name: 'Guntur',
    number_of_children: 2500,
    children_with_anemia: 400,
    children_with_tooth_plaque: 500,
  },
  {
    loc_id: 4,
    name: 'Nellore',
    number_of_children: 2000,
    children_with_anemia: 300,
    children_with_tooth_plaque: 400,
  },
  {
    loc_id: 5,
    name: 'Tirupati',
    number_of_children: 1500,
    children_with_anemia: 200,
    children_with_tooth_plaque: 300,
  },
];

export default function OurMission () {
  const [selectedLocation, setSelectedLocation] = useState(locations[0].loc_id);

  const handleSelect = (locId) => {
    setSelectedLocation(parseInt(locId));
  };

  const data = mockData.find((item) => item.loc_id === selectedLocation);

  if (!data) {
    return <div>Loading...</div>;
  }

  const beforeAfterData = {
    anemia: {
      before: data.children_with_anemia,
      after: Math.floor(data.children_with_anemia * 0.64),
    },
    toothPlaque: {
      before: data.children_with_tooth_plaque,
      after: Math.floor(data.children_with_tooth_plaque * 0.64),
    },
  };

  return (
    <>
      <div className="mission-container">
        <h1 className="page-title">Our Mission</h1>
        <hr className="title-line" />
        <p className="hero-text">Mission ZERO Cavity</p>
        <p className="hero-text">"Dentistry is not expensive.. Neglecting it is!!"</p>
        <ImageSlider /> {/* Add ImageSlider here */}
        <Dropdown locations={locations} onSelect={handleSelect} />
        <div className="charts">
          <div className="chart">
            <PieChartComponent data={{ diagnosed: data.children_with_anemia + data.children_with_tooth_plaque, total: data.number_of_children }} />
          </div>
          <div className="chart">
            <BarChartComponent data={beforeAfterData} />
          </div>
        </div>
        <div className="testimonials">
          <Testimonials />
        </div>
        <br />
        <button className="yellow-button">Donate</button>
        <br />
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

        .hero-text {
          font-family: 'Poppins', sans-serif;
          font-size: 36px;
          margin-bottom: 20px;
          color: #6c5b7b; /* Subtle color */
          font-weight: 600;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          letter-spacing: 1px; /* Slightly spaced letters */
          font-style: italic; /* Italicize hero text */
        }

        .testimonials {
          padding-top: 50px;
        }

        .mission-container {
          padding: 20px; /* Add padding inside the container */
          max-width: 100%;
          margin: 0 auto;
          text-align: center;
          background-color: #ffffff; /* Set background to white */
          position: relative; /* Set relative positioning for the button container */
          min-height: 100vh; /* Ensure the container takes the full height of the viewport */
          border: 5px solid #333; /* Add border around the container */
          border-radius: 15px; /* Add border radius to soften edges */
        }

        .page-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 7rem;
          margin-bottom: 10px;
          color: #333;
          font-weight: bold;
        }

        .title-line {
          width: 50%;
          margin: 0 auto 20px;
          border: 0;
          height: 2px;
          background-color: #333;
        }

        .charts {
          display: flex;
          justify-content: space-between;
          gap: 20px; /* Reduces space between charts */
          margin-top: 40px; /* Adds space above charts */
        }

        .chart {
          flex: 1;
          min-width: 300px;
          height: 500px;
        }

        .yellow-button {
          background-color: yellow;
          color: black;
          padding: 15px 30px;
          font-size: 18px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .yellow-button:hover {
          background-color: gold;
          transform: scale(1.05);
        }

        .yellow-button:active {
          background-color: orange;
        }

        .slider-container {
          margin-top: 40px; /* Space above the slider */
        }
      `}</style>
    </>
  );
};
