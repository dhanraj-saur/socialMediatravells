import React, {useState,useEffect} from 'react'
import {  useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import DetailsPage from './DetailsPage';
const Item=()=>{
    const {data} = useSelector((state) => state);
    const {id}=useParams();
    const postData=data.filter((post)=> post.id == id)[0];
    const moreData=data.filter((post)=> post.userId==postData.userId);
    return (<DetailsPage postData={postData} moreData={moreData} />)
}
export default Item;

