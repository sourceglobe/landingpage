import {AppBar as MuiAppBar, Button, styled, Toolbar as MuiToolbar} from "@mui/material";
import logo from "../static/sourceglobe-logo-green-on-transparent-128x128.png";

const ActiveLogo = styled('a')`
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`;

const Toolbar = styled(MuiToolbar)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

export default function AppBar() {
    return (
        <MuiAppBar position="fixed" style={{background: 'none'}} elevation={0}>
            <Toolbar>
                <ActiveLogo href="https://sourceglobe.github.io"><img src={logo} alt="Sourceglobe logo" height={48}/></ActiveLogo>
                <Button variant="contained">Join</Button>
            </Toolbar>
        </MuiAppBar>
    );
}