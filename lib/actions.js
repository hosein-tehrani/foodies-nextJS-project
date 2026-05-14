"use server";

import { saveMeal } from "./meals";
function isInvalidText(text) {
  return !text || text.trim() === "";
}
export async function addMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.instructions) ||
    !meal.image
  ) {
    return {
      message: "Please input all the fields correctly!",
    };
  }
  await saveMeal(meal);
}
