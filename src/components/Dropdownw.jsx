import Dropdown from 'react-bootstrap/Dropdown';

function Dropdownw() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" className='drop'>
        Pilih Kategori
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/KatalogMakanan">Makanan</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Elektronik</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Pakaian</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Kosmetik</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdownw;