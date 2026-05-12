import Link from "next/link";
export const metadata = {
  title: "meals page",
};
export default function Meals() {
  return (
    <div>
      <h1>Meals</h1>
      <div>
        <Link href="/meals/pizza">pizza</Link>
      </div>
      <div>
        <Link href="/meals/sushi">sushi</Link>
      </div>
      <div>
        <Link href="/meals/hamburger">hamburger</Link>
      </div>
    </div>
  );
}
