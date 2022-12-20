import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = ({ products }) => {
  // we can write props or other variable name directly which we have to assign
  // .i.e. here products.this is latest method which is widely used. 
  //  console.log("Props recieved::", props);
  //   const products=props.products;
  //   const { products } = props;
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;