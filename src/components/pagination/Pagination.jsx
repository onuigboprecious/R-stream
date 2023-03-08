import Pagination from 'react-bootstrap/Pagination';
import '../pagination/Pagination.css'

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

function pagination() {
    return ( 
  <div className='pagination_color'>
    <Pagination size="sm">{items}</Pagination>
  </div>
    );
}
export default pagination;
