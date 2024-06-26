import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

interface Photo {
    id: number;
    title: string;
    url: string;
}

const Photo = () => {
    const { id } = useParams<{ id: string }>();

    const [photo, setPhoto] = useState<Photo>({ id: 0, title: '', url: '' });

    useEffect(() => {
        const color = async () => {

            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);

            const data: Photo = await response.json();

            setPhoto(data);
        };

        color();

    }, [id]);

    return (
        <>
            <div>
                <h1>{photo.title}</h1>

                <img src={photo.url} alt={photo.title} />

            </div>

            <Link to="/">Go Home</Link>
            
        </>
    );
};

export default Photo;

