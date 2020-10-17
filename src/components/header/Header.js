import React, {Fragment} from 'react';
import {BDiv, Button, Collapse, Navbar} from 'bootstrap-4-react';

const Header = (
    {
      uid,

      logout,
      setIsShowingAddCostsModal,
      setIsShowingAddCategoryModal,
      setIsShowingAddIncomesModal,
    },
) => {

  // добавляем на window, потому что ещё есть mobile версия приложения
  // которая взаимодействует через нативный интерфейс с страницой
  window.setIsShowingAddCostsModal = setIsShowingAddCostsModal;
  window.setIsShowingAddIncomesModal = setIsShowingAddIncomesModal;
  window.setIsShowingAddCategoryModal = setIsShowingAddCategoryModal;
  window.logout = logout;

  return (
      <Navbar expand="lg" dark bg="dark" mb="3" sticky="top">
        <Navbar.Brand href="#">
          Мои финансы
        </Navbar.Brand>
        {
          uid && <Navbar.Toggler target={'#navbar'}/>
        }
        {
          uid && (
              <Fragment>
                <Collapse navbar justifyContent="end">
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
                        success
                        mr={2}
                        mt={2}
                        onClick={setIsShowingAddIncomesModal}
                    >
                      Добавить доход
                    </Button>
                    <Button
                        info
                        mr={2}
                        mt={2}
                        onClick={setIsShowingAddCostsModal}
                    >
                      Добавить трату
                    </Button>
                    <Button
                        warning
                        mr={2}
                        mt={2}
                        onClick={logout}
                    >
                      Выйти
                    </Button>
                  </BDiv>
                </Collapse>
                <Collapse id={'navbar'}>
                  <Button
                      warning
                      mr={2}
                      mt={2}
                      onClick={logout}
                  >
                    Выйти
                  </Button>
                </Collapse>
              </Fragment>
          )
        }

      </Navbar>
  );
};

export default Header;