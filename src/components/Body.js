import { useState, useEffect } from 'react';
import { IMG_CDN_URL, api_url } from './constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

// const data = restaurantList[0].card.card.gridElements.infoWithStyle.restaurants;

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  const filterByText = (search) => {
    const textFilteredRestaurants = allRestaurants.filter((restaurant) => {
      return restaurant.info.name.includes(search);
    });
    setFilteredRestaurants(textFilteredRestaurants);
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const data = await fetch(api_url);
      console.log(data);
      const json = await data.json();
      console.log(json);
      console.log(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="search"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            filterByText(searchText);
          }}
          className="search-btn"
        ></button>
      </div>

      <div>
        {allRestaurants.length === 0 ? (
          <>
            <Shimmer></Shimmer>
          </>
        ) : (
          <div className="flex flex-row flex-nowrap items-center justify-start overflow-x-auto snap-x snap-mandatory pl-4">
            {filteredRestaurants.map((r) => (
              <Link
                to={'/restaurant/' + r.info.id}
                key={r.info.id}
                className="flex-none w-60 h-80 m-2 flex flex-col items-center p-3 bg-sky-50 hover:bg-green-200 snap-start scroll-m-2 rounded-lg shadow-md"
              >
                {/* image wrapper becomes the positioning context */}
                <div className="w-full h-48 relative overflow-hidden rounded">
                  <img
                    src={IMG_CDN_URL + r.info.cloudinaryImageId}
                    alt={r.info.name}
                    className="w-full h-full object-cover"
                  />

                  {/* overlay badge bottom-left */}
                  <div
                    className="absolute left-1 bottom-1 z-20 bg-black bg-opacity-60 text-white font-bold text-md px-2 py-1 rounded"
                    aria-hidden="false"
                  >
                    {r.info.costForTwo}
                  </div>
                </div>

                <div className="restaurant-card-details w-full h-32 flex flex-col items-start gap-1 mt-2">
                  <h2 className="w-full text-lg truncate">{r.info.name}</h2>

                  <div className="flex flex-row items-center gap-x-1 w-full justify-start">
                    {/* yellow filled star */}
                    <svg
                      className="w-4 h-4 text-yellow-400 inline-block"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.999 2.678c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.01 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                    </svg>

                    <p className="text-sm">{r.info.avgRating}</p>
                    <span className="text-sm">•</span>
                    <p className="text-sm">{r.info.sla.deliveryTime} mins</p>
                  </div>

                  <p className="w-full text-sm truncate whitespace-nowrap">
                    {r.info.cuisines.join(', ')}
                  </p>
                  <p>{/* cost removed from here */}</p>
                  <p className="truncate text-right">{r.info.locality}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
