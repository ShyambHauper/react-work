import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MENU_RESTAURANT_DETAILS_API } from "../utils/constants"
import Shimmer from "./Shimmer"


const RestaurantDetails = () => {
    const [restaurantDetails, setRestaurantDetails] = useState(null)

    const { restaurantID } = useParams()

    useEffect(() => {
        fetchRestaurantDetails()
    }, [])

    const fetchRestaurantDetails = async () => {
        const data = await fetch(MENU_RESTAURANT_DETAILS_API + restaurantID)

        const json = await data.json()

        setRestaurantDetails(json.data)
    }

    if (restaurantDetails === null) {
        return <Shimmer />
    }

    const { name, avgRating, costForTwoMessage, totalRatingsString, cuisines } = restaurantDetails?.cards[2]?.card?.card?.info
    const { itemCards } = restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (<div className="container">
        <h1>{name}</h1>
        <h3>({cuisines.join(', ')}) {avgRating} ({totalRatingsString}) : {costForTwoMessage}</h3>

        <div>
            <h1>Menu</h1>
            {itemCards.map((item) => <h3 key={item.card.info.id}>{item?.card?.info.name + " Rs. " + (item?.card?.info.price / 100 || item?.card?.info.defaultPrice / 100)}</h3>)}
        </div>
    </div>)
}


export default RestaurantDetails