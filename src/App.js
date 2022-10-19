import {AppBar, styled, Toolbar} from "@mui/material";
import heroImage from './static/hero-image.jpg';
import logo from './static/sourceglobe-logo-white-on-transparent-128x128.png';
import {useEffect, useState} from "react";

const HeroSection = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${heroImage});
  background-size: cover;
  font-family: 'Archivo Black', sans-serif;
  font-size: 5rem;
  color: white;
  text-align: center;
`;

const ScoreboardSection = styled('div')`
  display: flex;
`

const ScorboardEntry = styled('div')`
  margin: 1em;
  display: flex;
  flex-direction: column;
`

const Page = styled('div')`
  background-color: rgb(14, 17, 22);
`;

function App() {
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        const loodScoreboard = async () => {
            const res = await fetch('https://api.github.com/gists/b744ce6d70adc12aa958080702868826')
            if (res.ok) {
                const json = await res.json();
                const content = json.files['totals.json'].content;
                const data = JSON.parse(content);
                setUserCount(data.Users);
            }
        }
        loodScoreboard();
    }, []);



    return (
        <Page>
            <AppBar position="fixed" style={{background: 'none'}} elevation={0}>
                <Toolbar style={{minHeight: '80px'}}>
                    <img src={logo} alt="Sourceglobe logo" height={48}/>
                </Toolbar>
            </AppBar>
            <HeroSection>
                Join the Sourceglobe<br/>code repository
                <ScoreboardSection>
                    <ScorboardEntry>
                        <div>#Users</div>
                        <div>{userCount}</div>
                    </ScorboardEntry>
                    <ScorboardEntry>
                        <div>#Countries</div>
                        <div>0</div>
                    </ScorboardEntry>
                </ScoreboardSection>
            </HeroSection>
            <div>
                Photo by <a
                href="https://unsplash.com/@jkozoski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Juliana
                Kozoski</a> on <a
                href="https://unsplash.com/s/photos/globe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </Page>


    );
}

export default App;
