import React,{useState} from 'react';
import './style.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Header() {
  return (
    <header>
      <h1>Welcome !</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

function Article() {
  const [open,setOpen] = useState(false);
  return (
    <article>
      <h2>Welcome ! </h2>
      계절이 지나가는 하늘에는 <br />
      가을로 가득 차 있습니다. <br />
      <br />
      나는 아무 걱정도 없이 <br />
      가을 속의 별들을 다 헤일 듯합니다. <br />
      <br />
      가슴 속에 하나 둘 새겨지는 별을 <br />
      이제 다 못 헤는 것은 <br />
      쉬이 아침이 오는 까닭이요, <br />
      내일 밤이 남은 까닭이요, <br />
      아직 나의 청춘이 다하지 않은 까닭입니다. <br />
      <br />
      별 하나에 추억과 <br />
      별 하나에 사랑과 <br />
      별 하나에 쓸쓸함과 <br />
      별 하나에 동경과 <br />
      별 하나에 시와 <br />
      별 하나에 어머니, 어머니, <br />
      <br />
      <ButtonGroup>
        <Button variant="outlined" onClick = {() => {
            setOpen(true);
          }}
        > create </Button>
        <Button variant="outlined"> update </Button>
      </ButtonGroup>
      <Button variant="outlined"> delete </Button>
      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>Hello Create!!</DialogContent>
        <DialogActions>
          <Button variant="outlined"> create </Button>
          <Button variant="outlined" onClick = {() => {
              setOpen(false);
            }}
          > cancel </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

export default function App() {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs={2}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={10}>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
}
