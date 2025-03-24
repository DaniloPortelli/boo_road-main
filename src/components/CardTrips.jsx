import { Link } from "react-router-dom";

export default function CardTravel({trips}) {


  return trips.map((t) => {
    return (
      <Link to={`travel/${t.id}`} key={t.id} className="col-md-4 mb-4">
        <div >
          <div className="card">
            <img src={t.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{t.nomeCitta}</h5>
              <p className="card-text">{t.descrizione}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Data Inizio: {t.dataInizio}</strong>
                </li>
                <li className="list-group-item">
                  <strong>Data Fine: {t.dataFine}</strong>
                </li>
                <li className="list-group-item">
                  <strong>Prezzo: {t.prezzo}€</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    );
  });
}
