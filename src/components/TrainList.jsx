import { useState } from "react";
import { trains } from "../data/trains";
import TrainCard from "./TrainCard";
import styles from "./TrainList.module.css";

export default function TrainList() {
  const [query, setQuery] = useState("");

  const filtered = trains.filter((t) => {
    const q = query.toLowerCase();
    return (
      t.from.toLowerCase().includes(q) ||
      t.to.toLowerCase().includes(q) ||
      t.number.includes(q)
    );
  });

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        type="text"
        placeholder="🔍 Пошук за містом або номером потяга"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filtered.length === 0 ? (
        <p className={styles.empty}>Рейсів не знайдено</p>
      ) : (
        <div className={styles.list}>
          {filtered.map((t) => (
            <TrainCard key={t.id} train={t} />
          ))}
        </div>
      )}
    </div>
  );
}