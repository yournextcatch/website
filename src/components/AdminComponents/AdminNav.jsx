import { Basket2, BookmarkCheck, Rss } from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';

function AdminNav({ onSelectView }) {
  return (
    <>

      <Col className='d-flex flex-column gap-3 pt-3 text-white bg-secondary' style={{ height: '100vh' }}>
        <div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={() => onSelectView('hotBite')}>
          <Rss />
          <span className='ms-2'>Hot Bites</span>
        </div>
        <div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={() => onSelectView('bookedTrips')}>
          <BookmarkCheck />
          <span className='ms-2'>Booked Trips</span>
        </div>
        <div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={() => onSelectView('store')}>
          <Basket2 />
          <span className='ms-2'>Store</span>
        </div>
      </Col>
    </>
  );
}

export default AdminNav;
