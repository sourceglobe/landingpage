import {AppBar as MuiAppBar, Button, styled, Toolbar as MuiToolbar} from "@mui/material";
import sourceGlobeLogo from "../static/sourceglobe-logo-green-on-transparent-128x128.png";
import githubLogo from '../static/github-logo-white-on-transparent-120x120.png';
import PropTypes from "prop-types";
import Hyperlink from "./Hyperlink";

const ActiveLogo = styled('a')`
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
    transition: 1.5s;
  }
`;

const TopRightSection = styled('div')`
  display: flex;
  align-items: center;
`;

const Toolbar = styled(MuiToolbar)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

export default function AppBar(props) {
    const {scrollToPitchRef} = props;
    return (
        <MuiAppBar  position="fixed" style={{background: 'none'}} elevation={0}>
            <Toolbar>
                <ActiveLogo href="https://sourceglobe.github.io"><img src={sourceGlobeLogo} alt="Sourceglobe logo"
                                                                      height={48}/></ActiveLogo>
                <TopRightSection>
                    <span style={{marginRight: '1em'}}>
                        <Button variant="contained"
                                onClick={() => scrollToPitchRef.current.scrollIntoView()}>Join</Button>
                    </span>
                    <Hyperlink href="https://github.com/sourceglobe"><img alt="GitHub logo"
                                                                          src={githubLogo}
                                                                          height={48}/></Hyperlink>
                </TopRightSection>
            </Toolbar>
        </MuiAppBar>
    );
}

AppBar.propTypes = {
    scrollToPitchRef: PropTypes.any.isRequired
}