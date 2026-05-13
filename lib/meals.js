// import sql from "better-sqlite3";
// const db = sql("meals.db");

// export async function getMeals() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return db.prepare(`SELECT * FROM meals`).all();
// }
// export async function getMeals(slug) {
//   return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
// }
import dummyMeals from "./mealsData";

export async function getMeals() {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const meals = await dummyMeals;

  return meals;
}
export async function getMeal(slug) {
  const meals = await dummyMeals;
  const meal = meals.filter((item) => item.slug === slug)[0];
  return meal;
}
