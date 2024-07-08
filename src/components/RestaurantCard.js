import {CDN_URL} from '../utils/constants'

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } = resData
    const { deliveryTime } = resData.sla
    return (<div className='restaurant-card'>
        <img className='restaurant-logo' alt='restaurant-logo' src={CDN_URL + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
    </div >)
}

export default RestaurantCard