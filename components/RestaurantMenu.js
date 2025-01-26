import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, FETCH_MENU_URL } from './constants';

const RestaurantMenu = () => {
  const params = useParams();
  const resId = params.resId;

  const [restaurant, setRestaurant] = useState({});
  console.log(restaurant);
  //   const cloudinaryImageId = restaurant?.cards[0]?.card?.card?cloudinaryImageId;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    const res_data = json?.cards[0]?.card?.card?.info;
    console.log(json.data);
    setRestaurant(json.data);
  }

  return (
    <>
      {/* <img src="{IMG_CDN_URL}+{CloudinaryImageId}" alt="photo" /> */}
      <h1>This is restaurant menu page</h1>
      <h2>The Restaurant Id is-{resId}</h2>
    </>
  );
};

export default RestaurantMenu;
