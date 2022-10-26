import {styled} from "@mui/material";
import Hero from "./components/Hero";
import NewUsers from "./components/NewUsers";
import {useEffect, useRef, useState} from "react";
import AppBar from "./components/AppBar";
import Pitch from "./components/Pitch";
import Footer from "./components/Footer";

const Page = styled('div')`
  background-color: rgb(14, 17, 22);
`;

function App() {
    const [userCount, setUserCount] = useState(0);
    const [newUsers, setNewUsers] = useState([]);
    const scrollToPitchRef = useRef(null);
    const scrollToNewUsersRef = useRef(null);

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
            <AppBar scrollToPitchRef={scrollToPitchRef}/>
            <Hero userCount={userCount} scrollToPitchRef={scrollToPitchRef} scrollToNewUserRef={scrollToNewUsersRef}/>
            <Pitch scrollToPitchRef={scrollToPitchRef}/>
            <NewUsers newUsers={newUsers} scrollToNewUserRef={scrollToNewUsersRef}/>
            <Footer/>
        </Page>
    );
}

export default App;
