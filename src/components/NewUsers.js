import {Avatar, Container, Grid, styled} from "@mui/material";
import PropTypes from "prop-types";
import {DateTime} from "luxon";

const UserCard = styled('div')`
  margin: 1em;
  border: solid white 1px;
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5vw;
  color: white;
`;

const Joined = styled('span')`
  font-size: 0.9vw;
`

const Login = styled('span')`
  font-size: 1.2vw;
`

export default function NewUsers(props) {
    const {newUsers, scrollToNewUserRef} = props;
    if (newUsers.length === 0) {
        return null;
    } else {
        return (
            <Container>
                <Grid ref={scrollToNewUserRef} container spacing={2}>
                    {newUsers.map(u =>
                        <Grid key={u.login} item xs={6} md={3}>
                            <a href={`https://sourceglobe.github.io/home/${u.login}`}>
                                <UserCard>
                                    <Avatar src={u.avatar_url} style={{width: '50%', height: '50%'}}/>
                                    <Login>{u.login}</Login>
                                    <Joined>Joined: <b>{DateTime.fromMillis(u.since).toRelative()}</b></Joined>
                                </UserCard>
                            </a>
                        </Grid>
                    )}
                </Grid>
            </Container>
        );
    }
}

NewUsers.propTypes = {
    newUsers: PropTypes.array.isRequired,
    scrollToNewUserRef: PropTypes.any.isRequired
}