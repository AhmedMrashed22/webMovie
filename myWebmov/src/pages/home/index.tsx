
import { useState } from "react";
import {Button} from "semantic-ui-react" ;
import { ColumnDisplay } from "./column-display";
import {fetchMovies,fetchTVShows} from "./query"
import { useQuery } from "@tanstack/react-query";


// eslint-disable-next-line react-refresh/only-export-components
export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows" 

}

export const Home = ()=> {
    const [displayType,setDisplayType]= useState <DisplayType>(
        DisplayType.Movies 
    
    );
    const {data: movieData,isLoading:isLoadingMovies}= useQuery ({queryKey:["movies"] ,queryFn:fetchMovies})
    const {data: tvShowData,isLoading:isLoadingTVShowes}= useQuery ({queryKey:["tvshows"] ,queryFn:fetchTVShows})


return <div style={{marginTop:50 , height:"auto"}}>
               {""}
         <Button.Group>
             <Button
              color={displayType === DisplayType.Movies ? "blue" : undefined} 
              onClick={()=> setDisplayType(DisplayType.Movies) }>
              Movies
             </Button>
             <Button
              color={displayType === DisplayType.TvShows ? "blue" : undefined} 
              onClick={()=> setDisplayType(DisplayType.TvShows) }>
              Tvshows
             </Button>
         </Button.Group>

         {isLoadingMovies || isLoadingTVShowes ?(<div>loading....</div>):(

            <div style={{ marginTop: 20 }}>
            
            { displayType === DisplayType.Movies ? (
                <ColumnDisplay  data={movieData.results} displayType={DisplayType.Movies}/> )
            : ( <ColumnDisplay data={tvShowData.results} displayType={DisplayType.TvShows} />) }
            
             </div> 
             
               )

             }

     </div>

}