import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";

const FilterableProductTable = ({ products }) => {
  // we can write props or other variable name directly which we have to assign
  // .i.e. here products.this is latest method which is widely used. 
  //  console.log("Props recieved::", props);
  //   const products=props.products;
  //   const { products } = props;
  //here we use usestate bz it is parent component of both searchBar and ProductTable
  const [filterText, setFilterText]=useState("");// here initial value is null
  const [inStockOnly,setInstockOnly]=useState(false);
  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly}/>
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
      {/*here we make products which is props of FilterableProductTable as attribute of ProductTable
       and passing it to props of ProductTable component  */}
    </div>
  );
};

export default FilterableProductTable;