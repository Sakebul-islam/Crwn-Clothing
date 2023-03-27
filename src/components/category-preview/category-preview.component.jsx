import ProductCard from "../product-card/product-card.component";
import { selectCateoriesISLoading } from "../../store/categories/category.selector";
import Spinner from "../spinner/spinner.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

import { useSelector } from "react-redux";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCateoriesISLoading);

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <Preview>
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Preview>
      )}
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
