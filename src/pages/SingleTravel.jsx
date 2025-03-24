import { useParams } from "react-router-dom";
import travelers from "../data/travelersArray";
import tripsArray from "../data/tripsArray"
import CardTrips from "../components/CardTrips"

export default function SingleTravel() {

    const { id } = useParams()

    const viaggiatoriFiltrati = travelers.filter((t) => {

        return (
            t.id_travel === parseInt(id)
        )
    })

    const travel = tripsArray.filter((trip) => {
        return (
            trip.id === parseInt(id)
        )
    })


    return (
        <>
           <CardTrips trips={travel} />
            {
                viaggiatoriFiltrati.map((v) => {
                    return (
                        <div key={v.id} className="card">
                            <p>
                                <span>Nome:</span> {v.nome}
                            </p>
                            <p>
                                <span>Cognome:</span> {v.cognome}
                            </p>
                        </div>
                    )
                })
            }

        </>
    )
}