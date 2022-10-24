import {styled} from "@mui/material";
import Hero from "./components/Hero";
import NewUsers from "./components/NewUsers";
import {useEffect, useRef, useState} from "react";
import AppBar from "./components/AppBar";

const Page = styled('div')`
  background-color: rgb(14, 17, 22);
`;

function App() {
    const [userCount, setUserCount] = useState(0);
    const [newUsers, setNewUsers] = useState([]);
    const scrollToRef = useRef(null);

    useEffect(() => {
        const loodScoreboard = async () => {
            const res = await fetch('https://api.github.com/gists/b744ce6d70adc12aa958080702868826')
            if (res.ok) {
                const json = await res.json();
                const totalsData = JSON.parse(json.files['totals.json'].content);
                setUserCount(totalsData.users);
                const newUserData = JSON.parse(json.files['newest.json'].content);
                setNewUsers(newUserData);
            }
        }
        loodScoreboard();
    }, []);

    return (
        <Page>
            <AppBar/>
            <Hero userCount={userCount} scrollToRef={scrollToRef}/>
            <NewUsers newUsers={newUsers} scrollToRef={scrollToRef}/>
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
