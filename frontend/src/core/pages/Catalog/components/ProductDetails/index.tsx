import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/arrow.svg';
import './styles.scss';


type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();
    console.log(productId);

    return (
        <div className="product-details-container">
            <div className="card-base border-redius-20 product-details">
                <Link to="/products" className="product-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
            </div>
        </div>
    );
}
export default ProductDetails;