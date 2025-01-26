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

  getData = async () => {
    try {
      const data = await fetch(api_url);
      // console.log(data);
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
  };

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
            filterByText(searchText);
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
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={'/restaurant/' + restaurant?.info?.id}>
                <div className="restaurant" key={restaurant?.info?.id}>
                  <h1>{restaurant?.info?.name}</h1>
                  <img
                    src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}
                    alt={restaurant?.info?.name}
                    className="restaurant-image"
                  />
                  <h1>{restaurant?.info?.avgRating} stars</h1>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
