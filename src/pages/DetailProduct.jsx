import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const DetailProduct = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/videogames/${id}`)
      .then((res) => setItem(res.data.data))
      .catch((err) =>
        console.error("Errore nel caricamento della pagina:", err)
      );
  }, [id]);

  if (!item) return <p className="text-center mt-5">Caricamento...</p>;

  return (
    <div>
         <div className="container mt-5">
      <div className="card shadow-lg">
              <div className="row g-0">
                  
          {/* immagini */}
          <div className="col-md-4 d-flex align-items-center justify-content-center bg-light" style={{ minHeight: "250px" }}>
           <img src={item.image_url} className="img-fluid mb-3" />
          </div>

          <div className="col-md-8">
            <div className="card-body">
                <p className="card-text"><strong>Titolo:</strong> {item.name}</p>
                <p className="card-text"><strong>Pubblicazione:</strong> {item.release_year}</p>
                <p className="card-text"><strong>Lingua:</strong> {item.language}</p>
              {/* <p className="card-text"><strong>Categoria:</strong> {item.category}</p> */}
              {/* <p className="card-text"><strong>Editore:</strong> {item.publisher?.name}</p> */}
              <hr />
              <p className="card-text">{item.description}</p>

              <div className="mt-4">
                <Link to="/" className="btn btn-outline-primary">
                  ← Torna al catalogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailProduct
