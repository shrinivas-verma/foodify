import { useState, useEffect } from 'react';
import { restaurantList, IMG_CDN_URL, api_url } from './constants';
import Shimmer from './Shimmer';

// const data = restaurantList[0].card.card.gridElements.infoWithStyle.restaurants;

const filterByText = (search, allRestaurants) => {
  const filteredRestaurants = allRestaurants.filter((restaurant) => {
    return restaurant.info.name.includes(search);
  });
  return filteredRestaurants;
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  async function getData() {
    const data = await fetch(api_url);
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterByText(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
          className="search-btn"
        ></button>
      </div>

      <div className="restaurant-container">
        {allRestaurants.length === 0 ? (
          <>
            <Shimmer></Shimmer>
          </>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <div className="restaurant" key={restaurant?.info?.id}>
                <h1>{restaurant?.info?.name}</h1>
                <img
                  src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}
                  alt={restaurant?.info?.name}
                  className="restaurant-image"
                />
                <h1>{restaurant?.info?.avgRating} stars</h1>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
