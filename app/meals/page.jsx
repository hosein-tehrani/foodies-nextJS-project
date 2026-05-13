import MealsGrid from "@/components/meals/MealsGrid";
import styles from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import { getMeals } from "@/lib/meals";
export const metadata = {
  title: "meals page",
};
async function Meals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const meals = await getMeals();
  
  // throw new Error("meals can not be fetched!"); //TO TEST ERROR PAGE!!!!
  return <MealsGrid meals={meals} />;
}
export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals created
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. it is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
