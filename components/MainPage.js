import Link from 'next/link';
import MainSlider from '../components/MainSlider';

export default function Dashboard() {
  return (
    <div>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center"></h1>
      <div className="flex flex-col items-start space-y-6">
        {/* Analytics Card */}
        <Link href="/analytics" legacyBehavior>
          <a className="card bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <div className="text-xl font-semibold mb-2 border-b-2 border-blue-500 pb-2">Analytics</div>
            <p className="text-gray-600 mt-2">
              View and analyze data trends and metrics.
            </p>
          </a>
        </Link>

        {/* Visit Locations Card */}
        <Link href="/visit" legacyBehavior>
          <a className="card bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <div className="text-xl font-semibold mb-2 border-b-2 border-green-500 pb-2">Visit Locations</div>
            <p className="text-gray-600 mt-2">
              Explore and manage the various locations.
            </p>
          </a>
        </Link>

        {/* Random Card */}
        <Link href="/our-mission" legacyBehavior>
          <a className="card bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <div className="text-xl font-semibold mb-2 border-b-2 border-gray-500 pb-2">Our Mission</div>
            <p className="text-gray-600 mt-2">
              Our mission is our pride.Learn more here .
            </p>
          </a>
        </Link>
      </div>
      <div className="mainslider">
        <MainSlider />
      </div>
    </div>
      <style jsx>{`

      .mainslider {
        width: 100%;
        max-width: 80%;
        max-height: 50%;
        margin-left: 700px;
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 0;
        border-radius: 10px;
        overflow: hidden;
      }


        .container {
          background-image: url('/dashBoardImage2.jpg');
          max-width: 100%;
          height: 1000px
        }
      `}</style>
    </div>
  );
}
