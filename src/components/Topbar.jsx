import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Typography, Stack, Button } from "@mui/material"
import { Link, useLocation } from 'react-router-dom';

const Topbar = () => {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow-sm border-bottom border-secondary">
      <Container>
        <Navbar.Brand><Link to='/' sx={{ color: 'secondary' }}>
          <Typography variant='h4' color="secondary">
            Cheatsheet
          </Typography>
        </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to='/html-cheatsheet'>
                <Button
                  variant="outlined"
                  color="secondary"
                  className='py-1'
                  sx={location.pathname === '/' || location.pathname === '/html-cheatsheet' ? { px: 1, bgcolor: 'white', color: '#000' } : { px: 1 }}
                >
                  <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <img width="30" height="30" src="./public/html.svg" alt="html" />
                    <Typography>
                      Html
                    </Typography>
                  </Stack>
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/css-cheatsheet'>
                <Button
                  variant="outlined"
                  color="secondary"
                  className='py-1'
                  sx={location.pathname === '/css-cheatsheet' ? { px: 1, bgcolor: 'white', color: '#000' } : { px: 1 }}
                >
                  <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <img width="30" height="30" src="./public/css.svg" alt="css" />
                    <Typography>
                      Css
                    </Typography>
                  </Stack>
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/javascript-cheatsheet'>
                <Button
                  variant="outlined"
                  color="secondary"
                  className='py-1'
                  sx={location.pathname === '/javascript-cheatsheet' ? { px: 1, bgcolor: 'white', color: '#000' } : { px: 1 }}
                >
                  <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <img width="30" height="30" src="./public/javascript.svg" alt="javascript" />
                    <Typography>
                      Javascript
                    </Typography>
                  </Stack>
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/jquery-cheatsheet'>
                <Button
                  variant="outlined"
                  color="secondary"
                  className='py-1'
                  sx={location.pathname === '/jquery-cheatsheet' ? { px: 1, bgcolor: 'white', color: '#000' } : { px: 1 }}
                >
                  <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <img width="30" height="30" src="./public/jquery.svg" alt="jquery" />
                    <Typography>
                      JQuery
                    </Typography>
                  </Stack>
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/bootstrap-cheatsheet'>
                <Button
                  variant="outlined"
                  color="secondary"
                  className='py-1'
                  sx={location.pathname === '/bootstrap-cheatsheet' ? { px: 1, bgcolor: 'white', color: '#000' } : { px: 1 }}
                >
                  <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <img width="30" height="30" src="./public/bootstrap.svg" alt="bootstrap" />
                    <Typography>
                      Bootstrap
                    </Typography>
                  </Stack>
                </Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;