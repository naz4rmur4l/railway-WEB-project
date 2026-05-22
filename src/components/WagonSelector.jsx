import styles from "./WagonSelector.module.css";

export default function WagonSelector({ wagons, selected, onSelect }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Оберіть вагон:</h3>
      <div className={styles.list}>
        {wagons.map((w) => (
          <button
            key={w.id}
            className={`${styles.btn} ${selected?.id === w.id ? styles.active : ""}`}
            onClick={() => onSelect(w)}
          >
            <span className={styles.num}>Вагон {w.id}</span>
            <span className={styles.type}>{w.type}</span>
            <span className={styles.seats}>{w.seats} місць</span>
          </button>
        ))}
      </div>
    </div>
  );
}