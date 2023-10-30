import React from 'react'
import { useState,useEffect } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { menuCdn } from '../utils/constants';

const RestrauntMenu = () => {
  const[resInfo,setresInfo] = useState(null);

  const {resId} = useParams();
  
  useEffect( () => {
    FetchMenu();
  },[] );

  const FetchMenu = async () => {
    const data = await fetch(
      menuCdn + resId
    );
    const json = await data.json();
    setresInfo(json.data);
  };

  if(resInfo ===null)  
     return <Shimmer/>
 
    const   {itemCards }   =  
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
  
 

  


  return (
    <div className='menu'>
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <p>
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" , ")}
        </p>
      <h2>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h2>
      <ul>
        <li>{itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100} RS </li>)}</li>
        <li>/</li>
        <li>Buitemrger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  )
}

export default RestrauntMenu

