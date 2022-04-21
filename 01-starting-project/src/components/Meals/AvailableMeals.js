import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Dabeli',
      description: 'Famous dish of Gujarat!',
      price: 20,
    },
    {
      id: 'm2',
      name: 'Litti Chokha',
      description: 'The Simplicity of Bihar!',
      price: 30,
    },
    {
      id: 'm3',
      name: 'Misal Pao',
      description: 'The famous food of Aamchi Mumbai!!',
      price: 25,
    },
    {
      id: 'm4',
      name: 'Idli Sambhar',
      description: ' The Chennai Love!!',
      price: 40,
    },
];



const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
