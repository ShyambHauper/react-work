import { useState } from "react"
import restaurantData from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    const [restaurantDataList, setrestaurantDataList] = useState(restaurantData)

    return (<div className='body'>
        <div className='search'><button onClick={() => {
            const filteredRestaurant = restaurantDataList.filter((res) => res.info.avgRating > 4.5)
            setrestaurantDataList(filteredRestaurant)
        }}>Top Rated Restaurant</button></div>
        <div className='body-restaurant-container'>
            {restaurantDataList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
            )}
        </div>
    </div>)
}


export default Body