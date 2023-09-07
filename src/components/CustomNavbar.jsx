import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function CustomNavbar() {
  return (
    <Navbar bg='light' expand='lg' fixed='top' className='shadow-sm'>
      <div className='container-fluid'>
        {/* Bagian Kiri */}
        <div className='navbar-left'>
          <Navbar.Brand
            href='#'
            style={{ fontFamily: 'Vegan', color: 'crimson' }}
          >
            Lorep ipsum
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarNavAltMarkup'>
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
        </div>

        {/* Bagian Kanan */}
        <div className='navbar-right'>
          <Navbar.Collapse id='navbarNavAltMarkup'>
            <Nav className='navbar-nav ml-auto'>
              <Nav.Link href='#' className='nav-link active'>
                Home
              </Nav.Link>
              <Nav.Link href='#' className='nav-link'>
                Recipe
              </Nav.Link>
              <Nav.Link href='#' className='nav-link'>
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
