// import sql from "better-sqlite3";
// const db = sql("meals.db");

// export async function getMeals() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return db.prepare(`SELECT * FROM meals`).all();
// }
// export async function getMeals(slug) {
//   return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
// }
import { redirect } from "next/navigation";
import xss from "xss";
import slugify from "slugify";
import fs from "node:fs";
import dummyMeals from "./mealsData";
import { revalidatePath } from "next/cache";

export async function getMeals() {
  const meals = await dummyMeals;

  return meals;
}
export async function getMeal(slug) {
  const meals = await dummyMeals;
  const meal = meals.filter((item) => item.slug === slug)[0];
  return meal;
}
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const imageExtension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${imageExtension}`;
  console.log(fileName);
  const bufferedImage = await meal.image.arrayBuffer();
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      console.log("error is: ", error);

      throw new Error("sth went wrong while uploading image!");
    }
  });
  meal.image = `/images/${fileName}`;
  revalidatePath("/meals");
  redirect("/meals");
}
