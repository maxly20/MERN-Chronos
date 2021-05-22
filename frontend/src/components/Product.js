import './Product.scss';
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className='product'>
      <Link to={`/product/${productId}`}>
        <img src={imageUrl} alt={name} />
      </Link>
      <div className='product__info'>
        <Link to={`/product/${productId}`}>
          <p className='info__name'>{name}</p>
        </Link>
        <Link to={`/product/${productId}`}>
          <p className='info__description'>
            {description.substring(0, 100)}...
          </p>
        </Link>
        <p className='info__price'>${price.toLocaleString()}</p>

        <Link to={`/product/${productId}`} className='info__button'>
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
