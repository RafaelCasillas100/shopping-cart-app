import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: 1,
    price: 10,
    title: 'book 1',
    description: 'This is a first product - amazing!'
  },
  {
    id: 2,
    price: 5,
    title: 'book 2',
    description: 'This is a second product - amazing!'
  },
  {
    id: 3,
    price: 15,
    title: 'book 3',
    description: 'This is a third product - amazing!'
  }
];

const productsList = products.map(product => (
  <ProductItem
    key={product.id}
    id={product.id}
    title={product.title}
    price={product.price}
    description={product.description}
  />
))

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsList}
      </ul>
    </section>
  );
};

export default Products;
