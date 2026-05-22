import styles from "./SeatMap.module.css";

export default function SeatMap({ totalSeats, booked, selected, onToggle }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Схема місць:</h3>
      <div className={styles.legend}>
        <span className={`${styles.dot} ${styles.free}`} /> Вільне
        <span className={`${styles.dot} ${styles.selected}`} /> Обране
        <span className={`${styles.dot} ${styles.booked}`} /> Заброньоване
      </div>
      <div className={styles.grid}>
        {Array.from({ length: totalSeats }, (_, i) => i + 1).map((seat) => {
          const isBooked = booked.includes(seat);
          const isSelected = selected.includes(seat);
          let cls = styles.seat;
          if (isBooked) cls += ` ${styles.booked}`;
          else if (isSelected) cls += ` ${styles.selected}`;
          else cls += ` ${styles.free}`;

          return (
            <button
              key={seat}
              className={cls}
              disabled={isBooked}
              onClick={() => onToggle(seat)}
              title={`Місце ${seat}`}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );
}