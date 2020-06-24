import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Photo from './Photo';

export default function PhotoList() {

    const [photo, setPhoto] = useState("");

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=5GSO01AQ74WyjsKsap2cSmvPuyW0sCpYsoaxfyUG`)
            .then(res => {
                console.log("res", res)
                setPhoto(res.data);
            })
            .catch(err => {
                console.log('err', err);
            });
    }, []);
    
    return (
        <div>
            <Photo date={photo.date} exp={photo.explanation} title={photo.title} url={photo.url} />
        </div>
    )
}