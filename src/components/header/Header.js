import React from 'react';
import {BDiv, Button, Collapse, Navbar} from 'bootstrap-4-react';

const Header = (
    {
      setIsShowingAddCostsModal,
      setIsShowingAddCategoryModal,
    },
) => {
  return (
      <Navbar expand="lg" dark bg="dark" mb="3" sticky="top">
        <Navbar.Brand href="#">
          Финансы
        </Navbar.Brand>
        <Navbar.Toggler target={'#navbar'}/>
        <Collapse navbar id={'navbar'} justifyContent="end">
          <BDiv my="2 lg-0">
            <Button
                success
                mr={2}
                mt={2}
                onClick={setIsShowingAddCategoryModal}
            >
              Добавить категорию
            </Button>
            <Button
                info
                mr={2}
                mt={2}
                onClick={setIsShowingAddCostsModal}
            >
              Добавить трату
            </Button>
          </BDiv>
        </Collapse>
      </Navbar>
  );
};

export default Header;