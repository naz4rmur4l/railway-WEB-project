const STORAGE_KEY = "railway_bookings";

export const getBookings = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveBooking = (booking) => {
  const all = getBookings();
  all.push({ ...booking, id: Date.now(), createdAt: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
};

export const getBookedSeats = (trainId, wagonId) => {
  return getBookings()
    .filter((b) => b.trainId === trainId && b.wagonId === wagonId)
    .flatMap((b) => b.seats);
};