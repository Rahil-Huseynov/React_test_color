import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

interface Photo {
  id: number;

  title: string;

  thumbnailUrl: string;

}

const Home = () => {

  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {

    const color = async () => {

      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=100');

      const data = await response.json();

      setPhotos(data);
    };

    color();

  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center',flexWrap: 'wrap' }}>

        {photos.map(photo => (

          <div key={photo.id} style={{ margin: '10px' }}>

            <Link to={`/photo/${photo.id}`}>

              <img src={photo.thumbnailUrl} alt={photo.title} />

            </Link>
          </div>

        ))}
        
      </div>

    </div>
  );
};

export default Home;
