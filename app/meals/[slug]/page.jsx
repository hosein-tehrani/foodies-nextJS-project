export default function MealDetail({ params }) {
  return (
    <>
      <h1>MealDetail</h1>
      <p>{params.slug}</p>
    </>
  );
}
