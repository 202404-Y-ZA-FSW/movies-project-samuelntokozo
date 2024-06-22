import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TVShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`'https://api.themoviedb.org/3/tv/series_id/lists?/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!show) {
    return <div>Show not found</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      {show.image && <img src={show.image.medium} alt={show.name} />}
    </div>
  );
};

export default TVShowDetails;
