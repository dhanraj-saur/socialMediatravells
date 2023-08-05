import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {postFetching, postFetchSuccess, postFetchError} from "../redux/actions/postActions";
import { fetchingData } from "../redux/action/postAction";
import { useDispatch, useSelector } from "react-redux";
import arrowIcon from './forwardarrow.png'
const PostDisplay = () => {



    const { loading, data, error } = useSelector((state) => state);


    const dispatch = useDispatch();
    // console.log(loading, data, error);

    useEffect(
        () => {
            dispatch(fetchingData())
        }, []
    )

    return (
        <div  className="display" >
            {data.length > 0 ? (
                data.map((item, index) => {
                    return (
                        <div  className='cards' key={index}>
                            <Link to={`/item/${item.id}`}>
                                <div key={item.id} >
                                    <div className="card_img">
                                        <img src={` https://picsum.photos/200?random=${item.id}`} />
                                    </div>
                                    <div className="cont-button">
                                        <div className="container">
                                            <h3>{item.title}</h3>
                                            <p className="readmore">{item.body}, <a href={item.body} >ReadMore...</a></p>
                                        </div>
                                        <div className="button">
                                            <button className="btn">
                                                <img className="btn-img" src={arrowIcon} width={30} height={30} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })
            ) : (
                <h1>{error}</h1>
            )}

        </div>
    );
}

export default PostDisplay;