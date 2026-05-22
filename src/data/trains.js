export const trains = [
  {
    id: 1,
    number: "743",
    from: "Львів",
    to: "Київ",
    departure: "2025-06-10T07:30",
    duration: "5 год 40 хв",
    wagons: [
      { id: 1, type: "Купе", seats: 36 },
      { id: 2, type: "Плацкарт", seats: 54 },
      { id: 3, type: "Люкс", seats: 18 },
    ],
  },
  {
    id: 2,
    number: "101",
    from: "Харків",
    to: "Одеса",
    departure: "2025-06-10T14:00",
    duration: "8 год 20 хв",
    wagons: [
      { id: 1, type: "Купе", seats: 36 },
      { id: 2, type: "Плацкарт", seats: 54 },
    ],
  },
  {
    id: 3,
    number: "55",
    from: "Київ",
    to: "Дніпро",
    departure: "2025-06-11T09:15",
    duration: "4 год 10 хв",
    wagons: [
      { id: 1, type: "Плацкарт", seats: 54 },
      { id: 2, type: "Купе", seats: 36 },
    ],
  },
  {
    id: 4,
    number: "201",
    from: "Одеса",
    to: "Львів",
    departure: "2025-06-12T22:00",
    duration: "11 год 30 хв",
    wagons: [
      { id: 1, type: "Люкс", seats: 18 },
      { id: 2, type: "Купе", seats: 36 },
      { id: 3, type: "Плацкарт", seats: 54 },
    ],
  },
  {
    id: 5,
    number: "304",
    from: "Запоріжжя",
    to: "Харків",
    departure: "2025-06-13T06:45",
    duration: "3 год 50 хв",
    wagons: [
      { id: 1, type: "Купе", seats: 36 },
    ],
  },
];