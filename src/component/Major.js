import React,{useState,useEffect} from "react";

import Postercard from "./Postercard";


let API_key="&api_key=5a1a8553560e386450bcb23bcb286d52";
let Base_url="https://api.themoviedb.org/3";
let url=Base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let mlist=["Popular","Drama","Rated","Kids","Comedie","2023"];

const Major=()=>{
    const [filmdata,setFilmdata]=useState([]);
    const [urlset,setUrl]=useState(url);
    const [search,setSearch]=useState("");

    useEffect(()=>{
        fetch(urlset)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.results);
            setFilmdata(data.results);
        });
    },[urlset]);

    const getData=(filmType)=>{
        if(filmType=="Popular"){
            url=Base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(filmType=="Drama"){
            url=Base_url+"/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"+API_key;
        }
        if(filmType=="Rated"){
            url=Base_url+"/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc"+API_key;
        }
        if(filmType=="Kids"){
            url=Base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(filmType=="Comedie"){
            url=Base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        if(filmType=="2023"){
            url=Base_url+"/discover/movie?with_genres=18&primary_release_year=2023"+API_key;
        }
    setUrl(url);
    };

    const searchfilm=(hapn)=>{
        if(hapn.key=="Enter" && search.length>0){
            url=Base_url+"/search/movie?api_key=5a1a8553560e386450bcb23bcb286d52&query="+search;
            setUrl(url);
            setSearch("");
        }
    };

    const serachbtn=()=>{
        if(search.length>0){
            url=Base_url+"/search/movie?api_key=5a1a8553560e386450bcb23bcb286d52&query="+search;
            setUrl(url);
            setSearch("");
        } 
    };

    return(
        <>
        <div className="head">
            <nav>
            {/* <a href="#"><img src="./Brand-logo.png" alt="brandN" width={130} height={40}></img></a> */}
                <ul>
                    <section><a href="#"><img src="./logobrand0.2.jpg" alt="brandN" width={180} height={50}></img></a></section>
                    {
                        mlist.map((value)=>{
                            return(
                                <>
                                <li><a href="#" name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                                </>  
                            )
                        })
                    }
                </ul>   
            </nav>
            <form>
                <div className="search-tab">
                    <input type={'text'} placeholder="Enter Film Name" className="film-text" onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyDown={searchfilm} ></input>
                    <button onClick={serachbtn}><i className="fa-solid fa-magnifying-glass-arrow-right sicon"></i></button>
                </div>
            </form>
        </div>
        <div className="dusbin">
            {/* <Postercard/> */}
            {
                (filmdata.length===0)?<p className="notfound">Not Found</p>:filmdata.map((res,pos)=>{
                    return(
                        <>
                        <Postercard info={res} key={pos}/>
                        </>
                    )
                })
            }
            
        </div>
        </>
    )
}
export default Major