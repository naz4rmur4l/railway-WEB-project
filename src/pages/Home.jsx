import TrainList from "../components/TrainList";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>🚄 Квитки Укрзалізниця</h1>
      <p className={styles.subtitle}>Оберіть рейс та забронюйте місця онлайн</p>
      <TrainList />
    </main>
  );
}