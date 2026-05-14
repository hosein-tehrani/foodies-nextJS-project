import ImagePicker from "@/components/images/ImagePicker";
import classes from "./page.module.css";
import { saveMeal } from "@/lib/meals";
export default function ShareMealPage() {
  async function addMeal(formData) {
    "use server";
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      creator: formData.get("creator"),
      creator_email: formData.get("creator_email"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
    };
    await saveMeal(meal)
  }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={addMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="creator" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="creator_email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker name="image" label="image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
