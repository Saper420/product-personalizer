import OptionColor from './OptionColor/OptionColor';
import OptionSize from './OptionSize/OptionSize';
import Button from './Button/Button';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types'

const ProductForm = ({ handleSubmit, sizes, colors, currentColor, setCurrentColor, currentSize, setCurrentSize }) => {

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize sizes={sizes}
                  currentSize={currentSize}
                  setCurrentSize={setCurrentSize}/>
      <OptionColor colors={colors}
                   currentColor={currentColor}
                   setCurrentColor={setCurrentColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
}

ProductForm.propTypes ={
  handleSubmit: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  };

export default ProductForm;