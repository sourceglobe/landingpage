import {Avatar, Grid, styled} from "@mui/material";
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
  font-size: 2vw;
  color: white;
`;

export default function NewUsers(props) {
    const {newUsers, scrollToRef} = props;
    if (newUsers.length === 0) {
        return null;
    } else {
        return (
            <Grid ref={scrollToRef} container spacing={2}>
                {newUsers.map(u =>
                        <Grid key={u.login} item xs={6} md={3}>
                            <a  href={`https://sourceglobe.github.io/home/${u.login}`}>
                            <UserCard>
                                <Avatar src={u.avatar_url} style={{width: '50%', height: '50%'}}/>
                                <span>{u.login}</span>
                                <span>{DateTime.fromMillis(u.since).toRelative()}</span>
                            </UserCard>
                            </a>
                        </Grid>
                    )}
            </Grid>
        );
    }
}

NewUsers.propTypes = {
    newUsers: PropTypes.array.isRequired,
    scrollToRef: PropTypes.any.isRequired
}