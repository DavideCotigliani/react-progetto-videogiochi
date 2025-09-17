import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
const HomePage = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/videogames").then((res) => setItems(res.data.data))
            .catch((err) => console.error("Errore nel caricamento della pagina", err));
    }, []);

  return (
    <div className="container-fluid bg-secondary-subtle">
            
    <div className="container mt-4" >
      <h1 className="text-center mb-4"> Catalogo dei Videogiochi</h1>

      {items.length === 0 ? (
        <p className="text-center text-muted">Nessun videogioco disponibile.</p>
      ) : (
        <div className="row">
          {items.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                {/* immagine
                <div className="bg-light d-flex align-items-center justify-content-center">
                  <img src={item.image_url} alt={item.title} className="img-fluid mb-3" />
                </div> */}

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text"> {item.release_year}</p>
                  {/* <p className="text-muted small mb-3">
                    Categoria: {item.category || "Sconosciuta"}
                  </p> */}

                  <Link
                    to={`/videogames/${item.id}`}
                    className="btn btn-primary mt-auto"
                  >
                    Dettagli →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
      </div>
  )
}

export default HomePage
