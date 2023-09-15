import axios from "axios"
import { useState, useEffect } from "react"
import React from 'react'

export const NewsApp = () => {

    const [news, setNews] = useState([]);

    let api_key = // your api key

        useEffect(() => {
            axios({ api_key }).then((res) => {
                setNews(res.data.articles.slice(0, 9));
            })
        }, [])


    return (
        <div className="m-5 ">
            <div className="row text-center ">
                {
                    news.map((val) => {
                        return (
                            <div className="col my-3 ">
                                <div className="card border border-success" style={{ width: "18rem" }}>
                                    <img src={val.urlToImage} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{val.title}</h5>
                                        <p className="card-text">{val.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default NewsApp;