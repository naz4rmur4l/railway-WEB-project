import { useNavigate } from "react-router-dom";
import styles from "./TrainCard.module.css";

export default function TrainCard({ train }) {
  const navigate = useNavigate();
  const dep = new Date(train.departure);

  const dateStr = dep.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const timeStr = dep.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.number}>№{train.number}</span>
        <span className={styles.duration}>⏱ {train.duration}</span>
      </div>
      <div className={styles.route}>
        <span className={styles.city}>{train.from}</span>
        <span className={styles.arrow}>→</span>
        <span className={styles.city}>{train.to}</span>
      </div>
      <div className={styles.info}>
        <span>📅 {dateStr}</span>
        <span>🕐 {timeStr}</span>
        <span>🚃 Вагонів: {train.wagons.length}</span>
      </div>
      <button
        className={styles.btn}
        onClick={() => navigate(`/booking/${train.id}`)}
      >
        Обрати місця
      </button>
    </div>
  );
}