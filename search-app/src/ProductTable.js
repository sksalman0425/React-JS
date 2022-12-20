import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow"; 
//here we receiving products attribute in the props of ProductTable i.e.products
// here we can write props or products or any name, only thing is to remember that 
//if we are giving other name of variable then put it in {} as shown in below example. 
const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default ProductTable;
