// import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// Робимо createSlice
// IMBA робимо так завжди

// const mySlice = createSlice({
//   name: `myValue`,
//   initialState: 500,
//   reducers: {
//     increment(state, action) {
//       return state + action.payload;
//     },
//     decrement(state, action) {
//       return state - action.payload;
//     },
//   },
// });

// export const { increment, decrement } = mySlice.actions;
// Роблю звичайни інкремент дікремент
// Створюю екшн подію

// export const increment = createAction(`myValue/increment`);
// export const decrement = createAction(`myValue/decrement`);

// increment.toString()-- отримаєм type action = myValue/increment

// payload - значення ,яке передаєм в функці.

// Створюєио редюсер,через який будуть проходити конкретні значення
// Створюємо об'єк сторе,в якому додаємо потрібну кількість ключів  (muValue)
// В якості значення ссилку на редюсер

// const myReducer = createReducer(500, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// Перший аргумент в редюсері це початкове значення властивості,другий аргумент об'єкт екшенів

// В компоненті

// Використовуєм useSelector для того ,щоб отримати значення зі стору
//  const value = useSelector(state => state.myValue);
// Використовуєм useDispatch для того,щоб викликати потрібний екшн,та передаєм його колбеком,попередньо зробивши експорт
//  const dispatch = useDispatch();
