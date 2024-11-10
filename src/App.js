import React, { useState, useEffect } from "react";
import "./App.css";
import { FaHeart } from "react-icons/fa"; // Change bookmark icon to heart
import AirImg from "../src/Assets/airbnb_logo.png";
import Hotel from "../src/Assets/hotel.jpg";

// Dummy images for each rental style and activity
import FlatsImage from "../src/Assets/flats.jpg";
import CottagesImage from "../src/Assets/cottages.jpg";
import HousesImage from "../src/Assets/houses.jpg";
import Activity1Image from "../src/Assets/activity1.jpg";
import Activity2Image from "../src/Assets/activity2.jpg";
import Activity3Image from "../src/Assets/activity3.jpg";
import Activity4Image from "../src/Assets/activity4.jpg"; // New image for additional activity
import Activity5Image from "../src/Assets/activity5.jpg"; // New image for additional activity

function App() {
  const [stickyNav, setStickyNav] = useState(false);
  const [bookmarkedActivities, setBookmarkedActivities] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle bookmark for activities
  const toggleBookmark = (id) => {
    setBookmarkedActivities((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="App">
      {/* Navbar */}
      <header className={`w-full flex justify-between items-center p-6 bg-white shadow-md ${stickyNav ? "sticky top-0 z-50" : ""}`}>
        <img src={AirImg} alt="Airbnb logo" className="h-8" />
        <p className="text-gray-500 font-semibold">Airbnb your place</p>
      </header>

      {/* Section 1: Search Card */}
      <main className="w-full flex justify-center p-4">
        <div className="relative flex flex-col items-center max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden md:flex-row-reverse">
          <div className="w-full md:w-2/3">
            <img src={Hotel} alt="hotel" className="object-cover h-full w-full" />
          </div>
          <div className="absolute top-2/4 md:relative bg-white p-8 rounded-lg shadow-lg md:w-1/3 transform md:-translate-y-1/2 md:translate-x-0">
            <h2 className="text-2xl font-bold mb-2">Holiday rentals in India</h2>
            <p className="text-gray-600 mb-4">Find and book unique accommodation on Airbnb</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="location" className="text-gray-700">Location</label>
                <div className="relative mt-1">
                  <input type="text" id="location" className="w-full p-2 pl-8 pr-4 border rounded-lg focus:outline-none focus:ring focus:border-pink-500" placeholder="India" />
                  <div className="absolute top-2 left-2 text-gray-500"><i className="fas fa-map-marker-alt"></i></div>
                </div>
              </div>
              <div className="flex space-x-4 flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/2">
                  <label htmlFor="checkin" className="text-gray-700">Check in</label>
                  <input type="text" id="checkin" className="w-full p-2 border rounded-lg" placeholder="Add Date" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2">
                  <label htmlFor="checkout" className="text-gray-700">Check out</label>
                  <input type="text" id="checkout" className="w-full p-2 border rounded-lg" placeholder="Add Date" />
                </div>
              </div>
              <button className="w-full py-2 mt-4 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 transition duration-300">
                <i className="fas fa-search mr-2"></i> Search
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Section 2: Top-rated Rentals */}
      <section className="w-full max-w-5xl mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Top-rated holiday rentals in India</h2>
        <div className="flex overflow-x-auto space-x-4 px-4">
          {[ { title: "Treehouse in Kottayam", rating: 4.97, reviews: 236, label: "Guest favourite" },
            { title: "Tiny home in Ramamangalam", rating: 4.9, reviews: 135, label: "Superhost" },
            { title: "Holiday home in Kumily", rating: 4.95, reviews: 129, label: "Guest favourite" },
            { title: "Farm stay in Kottayam", rating: 4.91, reviews: 163, label: "Guest favourite" } ]
            .map((rental, index) => (
              <div key={index} className="bg-white min-w-[250px] p-4 rounded-lg shadow-lg flex-shrink-0">
                <div className="bg-gray-200 h-32 rounded-lg mb-4"></div>
                <span className="bg-yellow-200 px-2 py-1 rounded-full text-xs font-semibold text-yellow-800">
                  {rental.label}
                </span>
                <h3 className="text-lg font-semibold mt-2">{rental.title}</h3>
                <p className="text-gray-600 mt-1">⭐ {rental.rating} ({rental.reviews})</p>
              </div>
          ))}
        </div>
      </section>

      {/* Section 3: Holiday Rentals for Every Style */}
      <section className="w-full max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Holiday rentals for every style</h2>
        <p className="text-center text-gray-500 mb-6">Get the amount of space that is right for you</p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[ { image: FlatsImage, title: "Flats", description: "Convenient locations with everyday essentials" },
            { image: CottagesImage, title: "Cottages", description: "Quaint homes, peaceful surroundings" },
            { image: HousesImage, title: "Houses", description: "A space that's all yours, with room for everyone" } ]
            .map((style, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <img src={style.image} alt={style.title} className="rounded-lg h-48 w-full object-cover mb-4" />
                <h3 className="text-xl font-semibold">{style.title}</h3>
                <p className="text-gray-600 mt-1">{style.description}</p>
              </div>
          ))}
        </div>
      </section>

      
     {/* Section 4: Things to Do */}
<section className="w-full max-w-5xl mx-auto py-10 px-4">
  <h2 className="text-3xl font-bold text-center mb-6">Things to Do</h2>
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {[ { id: 1, image: Activity1Image, title: "Mountain Hiking", description: "Experience scenic mountain views", price: "$150/night", dates: "10-15 Nov", view: "Mountain View", rating: 4.8 },
      { id: 2, image: Activity2Image, title: "City Tours", description: "Explore popular city attractions", price: "$80/night", dates: "12-18 Nov", view: "City View", rating: 4.5 },
      { id: 3, image: Activity3Image, title: "Beach Relaxation", description: "Enjoy a peaceful day by the beach", price: "$120/night", dates: "9-14 Nov", view: "Ocean View", rating: 4.7 },
      { id: 4, image: Activity4Image, title: "River Rafting", description: "Feel the rush of river rafting", price: "$90/night", dates: "14-20 Nov", view: "River View", rating: 4.6 },
      { id: 5, image: Activity5Image, title: "Cultural Experience", description: "Dive into the culture of India", price: "$110/night", dates: "11-16 Nov", view: "Cultural View", rating: 4.9 }
    ]
    .map((activity) => (
      <div key={activity.id} className="relative bg-white p-4 rounded-lg shadow-lg">
        <img src={activity.image} alt={activity.title} className="rounded-lg h-48 w-full object-cover mb-4" />
        <h3 className="text-xl font-semibold">{activity.title}</h3>
        <p className="text-gray-600 mt-1">{activity.description}</p>
        <div className="mt-3 text-gray-800 font-medium">
          <p>Price: <span className="text-green-600">{activity.price}</span></p>
          <p>Available Dates: {activity.dates}</p>
          <p>View: {activity.view}</p>
          <p>Rating: ⭐ {activity.rating}</p>
        </div>
        {/* Heart Icon */}
        <div className="absolute top-3 right-3 cursor-pointer" onClick={() => toggleBookmark(activity.id)}>
          <FaHeart size={24} className={`${bookmarkedActivities[activity.id] ? 'text-red-500' : 'text-gray-300'}`} />
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}

export default App;
