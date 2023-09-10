import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav links
 * Body
 *  - Search
 *  - RestarauntCOntainer
 *    - RestaurantCard
 *      - Name of Resto, Img, Rating, Cuisines
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/01/48/66/0148662247327a7d268ce7d02b8662cf.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    id: "51970",
    name: "Have More Restaurant",
    cloudinaryImageId: "z1ivr68uksp9d7ypbfad",
    locality: "S D Road",
    areaName: "SD Road",
    costForTwo: "₹300 for two",
    cuisines: [
      "Chinese",
      "North Indian",
      "Biryani",
      "Haleem",
      "Arabian",
      "Indian",
      "Tandoor",
      "Seafood",
      "Desserts",
      "Mughlai",
      "Fast Food",
    ],
    avgRating: 3.8,
    feeDetails: {
      restaurantId: "51970",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 2600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 2600,
    },
    parentId: "9191",
    avgRatingString: "3.8",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 0.4,
      serviceability: "SERVICEABLE",
      slaString: "35 mins",
      lastMileTravelString: "0.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-10 01:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "708915",
    name: "Pista House Bakery",
    cloudinaryImageId: "4333b8a60af1aadb2f3c13bccc523f03",
    locality: "S D Road",
    areaName: "Secunderabad",
    costForTwo: "₹500 for two",
    cuisines: ["Biryani", "Tandoor", "North Indian"],
    avgRating: 4.1,
    feeDetails: {
      restaurantId: "708915",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 2600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 2600,
    },
    parentId: "19008",
    avgRatingString: "4.1",
    totalRatingsString: "100+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 0.4,
      serviceability: "SERVICEABLE",
      slaString: "30 mins",
      lastMileTravelString: "0.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-10 00:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "708996",
    name: "Pista House Restaurant",
    cloudinaryImageId: "8897124781976e694d84046bd90f7270",
    locality: "S D Road",
    areaName: "Secunderabad",
    costForTwo: "₹500 for two",
    cuisines: ["Tandoor", "Indian", "Chinese", "Biryani", "Beverages"],
    avgRating: 3.9,
    feeDetails: {
      restaurantId: "708996",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3100,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3100,
    },
    parentId: "158135",
    avgRatingString: "3.9",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 0.4,
      serviceability: "SERVICEABLE",
      slaString: "28 mins",
      lastMileTravelString: "0.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-10 00:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "53796",
    name: "Jaggu Mithai",
    cloudinaryImageId: "n7fhclyf7wngqusam2he",
    locality: "Secunderabad",
    areaName: "Kalasiguda",
    costForTwo: "₹250 for two",
    cuisines: ["Desserts", "Biryani", "Chaat"],
    avgRating: 4.3,
    veg: true,
    feeDetails: {
      restaurantId: "53796",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 2600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 2600,
    },
    parentId: "9629",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 34,
      lastMileTravel: 1.2,
      serviceability: "SERVICEABLE",
      slaString: "34 mins",
      lastMileTravelString: "1.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-09 22:00:00",
      opened: true,
    },
    badges: {},
    select: true,
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "10% OFF",
      subHeader: "UPTO ₹40",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "491623",
    name: "Blue Sea",
    cloudinaryImageId: "dod0wwivdk4hckgufyey",
    locality: "Begumpet",
    areaName: " secunderabad",
    costForTwo: "₹150 for two",
    cuisines: ["Indian", "Snacks"],
    avgRating: 4.3,
    feeDetails: {
      restaurantId: "491623",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 2600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 2600,
    },
    parentId: "294924",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 1.3,
      serviceability: "SERVICEABLE",
      slaString: "23 mins",
      lastMileTravelString: "1.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-09 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "403013",
    name: "Swiss Castle",
    cloudinaryImageId: "oyexeenoep1k2mbrjfoo",
    locality: "Nallakunta & Vidyanagar",
    areaName: "West Maredpally",
    costForTwo: "₹500 for two",
    cuisines: ["Bakery", "Desserts", "Sweets"],
    avgRating: 4.5,
    veg: true,
    feeDetails: {
      restaurantId: "403013",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 2600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 2600,
    },
    parentId: "2532",
    avgRatingString: "4.5",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 1,
      serviceability: "SERVICEABLE",
      slaString: "30 mins",
      lastMileTravelString: "1.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-09 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "209311",
    name: "Almond House",
    cloudinaryImageId: "98f000705871712f6c7738c047aa63f4",
    locality: "SD Road",
    areaName: "Secunderabad",
    costForTwo: "₹500 for two",
    cuisines: ["Sweets", "Desserts", "Snacks", "Beverages"],
    avgRating: 4.6,
    veg: true,
    feeDetails: {
      restaurantId: "209311",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3100,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3100,
    },
    parentId: "40",
    avgRatingString: "4.6",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 1.1,
      serviceability: "SERVICEABLE",
      slaString: "30 mins",
      lastMileTravelString: "1.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-09 21:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "9004",
    name: "Hotel Sandarshini",
    cloudinaryImageId: "oy8fld62ygazcvrnpjr6",
    locality: "Opp Secunderabad railway station",
    areaName: "Shivaji Nagar",
    costForTwo: "₹250 for two",
    cuisines: ["South Indian", "North Indian", "Chinese"],
    avgRating: 4.2,
    veg: true,
    feeDetails: {
      restaurantId: "9004",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 2600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 2600,
    },
    parentId: "476",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 1.2,
      serviceability: "SERVICEABLE",
      slaString: "32 mins",
      lastMileTravelString: "1.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-09 22:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "6585",
    name: "Sahara Bakers",
    cloudinaryImageId: "qdglspcmmpgowxs4lccd",
    locality: "Jawahar nagar",
    areaName: "RTC X Road",
    costForTwo: "₹200 for two",
    cuisines: ["Bakery", "Pizzas"],
    avgRating: 3.6,
    feeDetails: {
      restaurantId: "6585",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3800,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3800,
    },
    parentId: "19528",
    avgRatingString: "3.6",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 4.4,
      serviceability: "SERVICEABLE",
      slaString: "36 mins",
      lastMileTravelString: "4.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-09 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
];

const RestaurantCard = ({
  resData: { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId },
}) => {
  return (
    <div
      className="resto-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="resto-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.slice(0, 4).join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
