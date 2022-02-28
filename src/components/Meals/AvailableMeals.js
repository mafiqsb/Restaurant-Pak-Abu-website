import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Nasi Goreng Kampung ',
    description: 'Mahukan yang hangat? ',
    price: 7.99,
  },
  {
    id: 'm2',
    name: 'Sambal Udang Hipster',
    description: 'Fresh! Pedas! dan secukup rasa!',
    price: 16.50,
  },
  {
    id: 'm3',
    name: 'Burger Pak Abu',
    description: 'Kami Bawakan kepada anda Burger garing dan berapi!',
    price: 15.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Fresh dan Sihat!',
    price: 5.99,
  },
  {
    id: 'm5',
    name: 'Nasi Goreng Ayam ',
    description: 'Bukan kaleng-kaleng...Ayam Goreng McD derr',
    price: 7.99,
  },
  {
    id: 'm6',
    name: 'Chicken Chop Padu',
    description: 'Paling lakuu',
    price: 11.50,
  },
  {
    id: 'm7',
    name: 'Roti John Hipster',
    description: 'Rasakan kolaborasi daging Ramlee bersama kepingan roti homemade daripada kami',
    price: 7.50,
  },
  {
    id: 'm8',
    name: 'Char Kuey Teow',
    description: 'Terpaling Mantap',
    price: 18.99,
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
