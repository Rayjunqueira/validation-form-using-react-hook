import { LinkContainer } from 'react-router-bootstrap';

import './successpage.css';

const Successpage = () => {
  return (
    <div className='successContainer'>
        <h2>
            You have been successfully registered!
        </h2>
        <LinkContainer to='/'>
            <button>Back to Form</button>
        </LinkContainer>
    </div>
  )
}

export default Successpage