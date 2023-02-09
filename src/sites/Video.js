/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Video = () => {

    const { movie_id } = useParams();

        const [error, setError] = useState();
        const [loading, setLoading] = useState(true);
        const [videos, setVideos] = useState();
        const [videoId, setVideoId] = useState();

    const styled = css`
        iframe {
            height: 99.5vh;
            width: 100%;
        }
    `

    let APIKey = "8aae96e730d41065f7cfa804530c488a"

    
        useEffect(() => {
            axios(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${APIKey}&language=en-US`)
            .then((response) => setVideos(response.data.results))
            .catch(() => setError("Something went wrong..."))
            .finally(() => setLoading(false))
        }, []);

        useEffect(() => {
            if(videos) {
                setVideoId(
                    videos.find((video) => 
                    video.type.toLowerCase().includes("trailer")
                    )
                )
            }
        }, [videos]);


     videoId && console.log(videoId)
    return videoId && ( 
        <article css={styled}>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            <iframe src={`https://www.youtube.com/embed/${videoId.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </article>
     );
}
 
export default Video;
