const SearchBar = ({filterText,inStockOnly}) => {
//or we can write const {filterText,inStockOnly}=props
//onChange event this onChangeHandler is called which is call back function.
  const onChangeHandler =()=>{

  }
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input  onChange= {onChangeHandler} type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
