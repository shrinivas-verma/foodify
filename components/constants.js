export const IMG_CDN_URL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

export const FETCH_MENU_URL =
  'https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=';

export const api_url =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.604394270662155&lng=85.07880426943302&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
export const restaurantList = [
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget',
        layout: {
          columns: 4,
        },
        id: 'restaurant_grid_listing',
        gridElements: {
          infoWithStyle: {
            '@type':
              'type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle',
            restaurants: [
              {
                info: {
                  id: '654087',
                  name: 'Burger King',
                  cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
                  locality: 'SP Verma Road',
                  areaName: 'Lodipur',
                  costForTwo: '₹350 for two',
                  cuisines: ['Burgers', 'American'],
                  avgRating: 3.7,
                  feeDetails: {
                    restaurantId: '654087',
                    fees: [
                      {
                        name: 'BASE_DISTANCE',
                        fee: 4700,
                      },
                      {
                        name: 'BASE_TIME',
                      },
                      {
                        name: 'ANCILLARY_SURGE_FEE',
                      },
                    ],
                    totalFee: 4700,
                  },
                  parentId: '166',
                  avgRatingString: '3.7',
                  totalRatingsString: '1K+',
                  sla: {
                    deliveryTime: 34,
                    lastMileTravel: 6.5,
                    serviceability: 'SERVICEABLE',
                    slaString: '34 mins',
                    lastMileTravelString: '6.5 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2023-09-15 02:00:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: 'EVERY ITEM',
                    subHeader: '@ ₹159',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-de48a82a-6d4e-4cc9-9ff7-c05151bb5fa7',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/burger-king-sp-verma-road-lodipur-patna-654087',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '492413',
                  name: 'Faasos - Wraps & Rolls',
                  cloudinaryImageId: 'af33b81798b11deba338e94b7585d348',
                  locality: 'Patna Sadar',
                  areaName: 'Boring Road',
                  costForTwo: '₹200 for two',
                  cuisines: [
                    'Kebabs',
                    'Fast Food',
                    'Snacks',
                    'North Indian',
                    'American',
                    'Healthy Food',
                    'Desserts',
                    'Beverages',
                  ],
                  avgRating: 4.1,
                  feeDetails: {
                    restaurantId: '492413',
                    fees: [
                      {
                        name: 'BASE_DISTANCE',
                        fee: 3700,
                      },
                      {
                        name: 'BASE_TIME',
                      },
                      {
                        name: 'ANCILLARY_SURGE_FEE',
                      },
                    ],
                    totalFee: 3700,
                  },
                  parentId: '21809',
                  avgRatingString: '4.1',
                  totalRatingsString: '1K+',
                  sla: {
                    deliveryTime: 31,
                    lastMileTravel: 4.8,
                    serviceability: 'SERVICEABLE',
                    slaString: '31 mins',
                    lastMileTravelString: '4.8 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2023-09-15 01:00:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: '50% OFF',
                    subHeader: 'UPTO ₹100',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-de48a82a-6d4e-4cc9-9ff7-c05151bb5fa7',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-sadar-boring-road-patna-492413',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '492419',
                  name: 'The Good Bowl',
                  cloudinaryImageId: '0b3356a88b6fc5966c452c4c9b1b5e4a',
                  locality: 'Patna Sadar',
                  areaName: 'Boring Road',
                  costForTwo: '₹400 for two',
                  cuisines: [
                    'Biryani',
                    'North Indian',
                    'Pastas',
                    'Punjabi',
                    'Desserts',
                    'Beverages',
                  ],
                  avgRating: 4.2,
                  feeDetails: {
                    restaurantId: '492419',
                    fees: [
                      {
                        name: 'BASE_DISTANCE',
                        fee: 3700,
                      },
                      {
                        name: 'BASE_TIME',
                      },
                      {
                        name: 'ANCILLARY_SURGE_FEE',
                      },
                    ],
                    totalFee: 3700,
                  },
                  parentId: '7918',
                  avgRatingString: '4.2',
                  totalRatingsString: '500+',
                  sla: {
                    deliveryTime: 27,
                    lastMileTravel: 4.8,
                    serviceability: 'SERVICEABLE',
                    slaString: '27 mins',
                    lastMileTravelString: '4.8 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2023-09-15 01:00:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: '30% OFF',
                    subHeader: 'UPTO ₹75',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-de48a82a-6d4e-4cc9-9ff7-c05151bb5fa7',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/the-good-bowl-sadar-boring-road-patna-492419',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '492418',
                  name: 'Sweet Truth - Cake and Desserts',
                  cloudinaryImageId: '4a3b48488e3aa9bda13efd8cfcd95284',
                  locality: 'Patna Sadar',
                  areaName: 'Boring Road',
                  costForTwo: '₹450 for two',
                  cuisines: ['Snacks', 'Bakery', 'Desserts', 'Beverages'],
                  avgRating: 4.2,
                  feeDetails: {
                    restaurantId: '492418',
                    fees: [
                      {
                        name: 'BASE_DISTANCE',
                        fee: 3700,
                      },
                      {
                        name: 'BASE_TIME',
                      },
                      {
                        name: 'ANCILLARY_SURGE_FEE',
                      },
                    ],
                    totalFee: 3700,
                  },
                  parentId: '4444',
                  avgRatingString: '4.2',
                  totalRatingsString: '100+',
                  sla: {
                    deliveryTime: 25,
                    lastMileTravel: 4.8,
                    serviceability: 'SERVICEABLE',
                    slaString: '25 mins',
                    lastMileTravelString: '4.8 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2023-09-15 01:00:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: '20% OFF',
                    subHeader: 'UPTO ₹50',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-de48a82a-6d4e-4cc9-9ff7-c05151bb5fa7',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-sadar-boring-road-patna-492418',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '492416',
                  name: 'Oven Story Pizza',
                  cloudinaryImageId: 'ab979bffbd658e74de650a15ca0092a3',
                  locality: 'Patna Sadar',
                  areaName: 'Boring Road',
                  costForTwo: '₹500 for two',
                  cuisines: [
                    'Pizzas',
                    'Pastas',
                    'Italian',
                    'Desserts',
                    'Beverages',
                  ],
                  avgRating: 3.7,
                  feeDetails: {
                    restaurantId: '492416',
                    fees: [
                      {
                        name: 'BASE_DISTANCE',
                        fee: 3700,
                      },
                      {
                        name: 'BASE_TIME',
                      },
                      {
                        name: 'ANCILLARY_SURGE_FEE',
                      },
                    ],
                    totalFee: 3700,
                  },
                  parentId: '3534',
                  avgRatingString: '3.7',
                  totalRatingsString: '500+',
                  sla: {
                    deliveryTime: 30,
                    lastMileTravel: 4.8,
                    serviceability: 'SERVICEABLE',
                    slaString: '30 mins',
                    lastMileTravelString: '4.8 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2023-09-15 01:00:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: '50% OFF',
                    subHeader: 'UPTO ₹100',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-de48a82a-6d4e-4cc9-9ff7-c05151bb5fa7',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/oven-story-pizza-sadar-boring-road-patna-492416',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '492417',
                  name: 'LunchBox - Meals and Thalis',
                  cloudinaryImageId: 'nylazndpe3lzotwjoahx',
                  locality: 'Patna Sadar',
                  areaName: 'Boring Road',
                  costForTwo: '₹200 for two',
                  cuisines: [
                    'Biryani',
                    'North Indian',
                    'Punjabi',
                    'Healthy Food',
                    'Desserts',
                    'Beverages',
                  ],
                  avgRating: 4.2,
                  feeDetails: {
                    restaurantId: '492417',
                    fees: [
                      {
                        name: 'BASE_DISTANCE',
                        fee: 3700,
                      },
                      {
                        name: 'BASE_TIME',
                      },
                      {
                        name: 'ANCILLARY_SURGE_FEE',
                      },
                    ],
                    totalFee: 3700,
                  },
                  parentId: '4925',
                  avgRatingString: '4.2',
                  totalRatingsString: '1K+',
                  sla: {
                    deliveryTime: 30,
                    lastMileTravel: 4.8,
                    serviceability: 'SERVICEABLE',
                    slaString: '30 mins',
                    lastMileTravelString: '4.8 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2023-09-15 01:00:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: '40% OFF',
                    subHeader: 'UPTO ₹80',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-de48a82a-6d4e-4cc9-9ff7-c05151bb5fa7',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-sadar-boring-road-patna-492417',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '492414',
                  name: 'Firangi Bake',
                  cloudinaryImageId: 'djrijlbinwjobahb6asm',
                  locality: 'Patna Sadar',
                  areaName: 'Boring Road',
                  costForTwo: '₹400 for two',
                  cuisines: [
                    'Pizzas',
                    'Pastas',
                    'Italian',
                    'Mexican',
                    'Healthy Food',
                    'Desserts',
                    'Beverages',
                  ],
                  avgRating: 4,
                  feeDetails: {
                    restaurantId: '492414',
                    fees: [
                      {
                        name: 'BASE_DISTANCE',
                        fee: 3700,
                      },
                      {
                        name: 'BASE_TIME',
                      },
                      {
                        name: 'ANCILLARY_SURGE_FEE',
                      },
                    ],
                    totalFee: 3700,
                  },
                  parentId: '3952',
                  avgRatingString: '4.0',
                  totalRatingsString: '100+',
                  sla: {
                    deliveryTime: 35,
                    lastMileTravel: 4.8,
                    serviceability: 'SERVICEABLE',
                    slaString: '35 mins',
                    lastMileTravelString: '4.8 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2023-09-15 01:00:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: '40% OFF',
                    subHeader: 'UPTO ₹80',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-de48a82a-6d4e-4cc9-9ff7-c05151bb5fa7',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/firangi-bake-sadar-boring-road-patna-492414',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '704900',
                  name: 'Meal Heaven 24*7',
                  cloudinaryImageId: '12579b16e37776facff7974e32c367f7',
                  locality: 'Lohianagar',
                  areaName: 'Fraser Road',
                  costForTwo: '₹500 for two',
                  cuisines: ['Indian'],
                  avgRating: 4,
                  feeDetails: {
                    restaurantId: '704900',
                    fees: [
                      {
                        name: 'BASE_DISTANCE',
                        fee: 4700,
                      },
                      {
                        name: 'BASE_TIME',
                      },
                      {
                        name: 'ANCILLARY_SURGE_FEE',
                      },
                    ],
                    totalFee: 4700,
                  },
                  parentId: '421737',
                  avgRatingString: '4.0',
                  totalRatingsString: '100+',
                  sla: {
                    deliveryTime: 29,
                    lastMileTravel: 7.6,
                    serviceability: 'SERVICEABLE',
                    slaString: '29 mins',
                    lastMileTravelString: '7.6 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2023-09-15 04:00:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: '50% OFF',
                    subHeader: 'UPTO ₹100',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  isNewlyOnboarded: true,
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-de48a82a-6d4e-4cc9-9ff7-c05151bb5fa7',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/meal-heaven-24-7-lohianagar-fraser-road-patna-704900',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '426369',
                  name: 'Castabill',
                  cloudinaryImageId: 'x8koaqa388g6cobn4tvn',
                  locality: 'patliputra',
                  areaName: 'Patliputra Colony',
                  costForTwo: '₹200 for two',
                  cuisines: ['Continental', 'Burgers', 'Arabian'],
                  avgRating: 3.6,
                  feeDetails: {
                    restaurantId: '426369',
                    fees: [
                      {
                        name: 'BASE_DISTANCE',
                        fee: 3700,
                      },
                      {
                        name: 'BASE_TIME',
                      },
                      {
                        name: 'ANCILLARY_SURGE_FEE',
                      },
                    ],
                    totalFee: 3700,
                  },
                  parentId: '237315',
                  avgRatingString: '3.6',
                  totalRatingsString: '1K+',
                  sla: {
                    deliveryTime: 27,
                    lastMileTravel: 5.8,
                    serviceability: 'SERVICEABLE',
                    slaString: '27 mins',
                    lastMileTravelString: '5.8 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2023-09-15 03:45:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: '60% OFF',
                    subHeader: 'UPTO ₹120',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-de48a82a-6d4e-4cc9-9ff7-c05151bb5fa7',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/castabill-patliputra-patliputra-colony-patna-426369',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
            ],
            theme: 'SeoRestaurantListingGridWidget',
          },
        },
      },
    },
  },
];
