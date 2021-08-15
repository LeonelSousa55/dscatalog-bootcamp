import ContentLoader from "react-content-loader"
import { generateList } from "../../../../utils/list";

const ProductCardLoader = () => {
    const loaderItens = generateList(3);

    return (
        //Conceito de fragment do react para que dentre desse possa ter 
        //mais de uma div no sentido de poder duplicar esse componetne
        <>
            {loaderItens.map(item => (
                <ContentLoader
                    key={item}
                    speed={1}
                    width={250}
                    height={335}
                    viewBox="0 0 250 335"
                    backgroundColor="#ecebeb"
                    foregroundColor="#d6d2d2"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="250" height="335" />
                </ContentLoader>
            ))}
        </>
    )
}

export default ProductCardLoader