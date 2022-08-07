import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our board selection of available meals
        and enjoy a delecious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingrediants, just in time and
        ofcourse by experienced chef!
      </p>
    </section>
  );
};

export default MealsSummary;
