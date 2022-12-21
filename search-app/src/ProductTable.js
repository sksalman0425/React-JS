import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow"; 
//here we receiving products attribute in the props of ProductTable i.e.products
// here we can write props or products or any name, only thing is to remember that 
//if we are giving other name of variable then put it in {} as shown in below example. 
const ProductTable = ({ products }) => {
  console.log("inside ProductTable component props recieved",products);
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    console.log("inside ProductTable component forEach loop",products);
    console.log("checking condition",product.category !== lastCategory);
    if (product.category !== lastCategory) {
      console.log("Adding product category to Row Array",product.category);
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    console.log("pushing each product to the row array ::",product);
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  console.log("rows ::",rows);
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
