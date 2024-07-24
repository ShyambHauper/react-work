import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { FETCH_RESTAURANT_DETAILS_API } from "../utils/constants"
import { Link } from "react-router-dom"

const Body = () => {
    const [restaurantDataList, setrestaurantDataList] = useState([])
    const [filteredRestaurantDetails, setFilteredRestaurantDetails] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchRestaurantData()
    }, [])

    const fetchRestaurantData = async () => {
        const data = await fetch(FETCH_RESTAURANT_DETAILS_API)
        const json = await data.json()
        setrestaurantDataList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurantDetails(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // Conditional Rendering 
    return restaurantDataList.length === 0 ? <Shimmer /> : (<div className='body'>
        <div className='filter'>
            <div className="search">
                <input type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button onClick={() => { const filteredRestaurant = restaurantDataList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())); setFilteredRestaurantDetails(filteredRestaurant) }}>Search</button>
            </div>
            <button onClick={() => {
                const filteredRestaurant = restaurantDataList.filter((res) => res.info.avgRating > 4.5)
                setFilteredRestaurantDetails(filteredRestaurant)
            }}>Top Rated Restaurant</button></div>
        <div className='body-restaurant-container'>
            {filteredRestaurantDetails.map((restaurant) => <Link key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>
            )}
        </div>
    </div>)
}


export default Body