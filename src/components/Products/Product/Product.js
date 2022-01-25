import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm'

const Product = ({colors, sizes, title, basePrice, name}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  function getPrice(){
    const clickedSize = sizes.find(element => element.name === currentSize)
    return basePrice + clickedSize.additionalPrice;
  }
  const handleSubmit = e => {
    e.preventDefault();
    console.log(
      'Summary\n'+
      '=========\n'+
      'Name: '+title+'\n'+
      'Price: '+getPrice()+'\n'+
      'Size: '+currentSize+'\n'+
      'Color: '+currentColor
    )
  }
  
  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm handleSubmit={handleSubmit} sizes={sizes} colors={colors} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;