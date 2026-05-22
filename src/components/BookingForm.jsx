import { useState } from "react";
import { toast } from "react-toastify";
import { saveBooking } from "../services/BookingService";
import styles from "./BookingForm.module.css";

export default function BookingForm({ trainId, wagonId, seats, onSuccess }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Введіть ім'я";
    if (!form.phone.trim()) e.phone = "Введіть телефон";
    else if (!/^\+?\d{10,13}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Невірний формат телефону";
    if (!form.email.trim()) e.email = "Введіть email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Невірний формат email";
    return e;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = () => {
    if (seats.length === 0) {
      toast.error("Оберіть хоча б одне місце!");
      return;
    }
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    saveBooking({ trainId, wagonId, seats, ...form });
    toast.success(`✅ Заброньовано місця: ${seats.join(", ")}`);
    setForm({ name: "", phone: "", email: "" });
    onSuccess();
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>Дані пасажира:</h3>

      <div className={styles.field}>
        <label>Ім'я та прізвище</label>
        <input
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Іван Іваненко"
          className={errors.name ? styles.inputError : ""}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label>Телефон</label>
        <input
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="+380991234567"
          className={errors.phone ? styles.inputError : ""}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.field}>
        <label>Email</label>
        <input
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="ivan@example.com"
          className={errors.email ? styles.inputError : ""}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      {seats.length > 0 && (
        <p className={styles.selected}>
          Обрані місця: <strong>{seats.join(", ")}</strong>
        </p>
      )}

      <button className={styles.btn} onClick={handleSubmit}>
        Забронювати квиток
      </button>
    </div>
  );
}