import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { trains } from "../data/trains";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";
import { getBookedSeats } from "../services/BookingService";
import styles from "./Booking.module.css";

export default function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const train = trains.find((t) => t.id === Number(trainId));

  const [wagon, setWagon] = useState(null);
  const [selected, setSelected] = useState([]);

  if (!train) {
    return (
      <div className={styles.page}>
        <p>Потяг не знайдено</p>
        <button onClick={() => navigate("/")}>← Назад</button>
      </div>
    );
  }

  const booked = wagon ? getBookedSeats(train.id, wagon.id) : [];

  const toggleSeat = (seat) => {
    setSelected((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleWagonSelect = (w) => {
    setWagon(w);
    setSelected([]);
  };

  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={() => navigate("/")}>
        ← Назад до списку
      </button>

      <div className={styles.header}>
        <h1>Потяг №{train.number}</h1>
        <p className={styles.route}>
          {train.from} → {train.to}
        </p>
        <p className={styles.info}>
          {new Date(train.departure).toLocaleString("uk-UA")} · {train.duration}
        </p>
      </div>

      <WagonSelector
        wagons={train.wagons}
        selected={wagon}
        onSelect={handleWagonSelect}
      />

      {wagon && (
        <>
          <SeatMap
            totalSeats={wagon.seats}
            booked={booked}
            selected={selected}
            onToggle={toggleSeat}
          />
          <BookingForm
            trainId={train.id}
            wagonId={wagon.id}
            seats={selected}
            onSuccess={() => setSelected([])}
          />
        </>
      )}

      {!wagon && (
        <p className={styles.hint}>👆 Оберіть вагон для перегляду місць</p>
      )}
    </div>
  );
}