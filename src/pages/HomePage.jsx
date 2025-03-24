import CardTrips from "../components/CardTrips";
import tripsArray from "../data/tripsArray"


export default function HomePage() {


  return (
    <>
      <div className="container">
        <div className="row row-cols-3">
            <CardTrips trips={tripsArray} />
        </div>
      </div>
    </>
  );
}
