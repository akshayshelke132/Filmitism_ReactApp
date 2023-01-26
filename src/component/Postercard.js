import React from "react";

const Postercard=(film)=>{
    // console.log(film.info);
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
        <div className="film">
            <img src={img_path+film.info.poster_path} alt="poster" width={200} height={300} className="poster"></img>
            <div className="film-details">
                <div className="box">
                    <h4 className="title">{film.info.title}</h4>
                    <p className="rating">{film.info.vote_average}</p>
                </div>
                <div className="overview">
                    <h2>overview</h2>
                    {film.info.overview}
                </div>
            </div>
        </div>
        </>
    )
}
export default Postercard;