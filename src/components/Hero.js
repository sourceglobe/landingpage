import CountUp from "react-countup";
import {styled} from "@mui/material";
import heroImage from "../static/hero-image.jpg";
import PropTypes from "prop-types";

const HeroSection = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${heroImage});
  background-size: cover;
  font-family: 'Archivo Black', sans-serif;
  @media (max-width: 600px) {
    font-size: 12vw;
  }
  @media (min-width: 600px) {
    font-size: 6vw;
  }
  color: white;
  text-align: center;
`;

const ScoreboardSection = styled('div')`
  display: flex;
`;

const ScorboardEntry = styled('div')`
  margin: 1em;
  border: solid white 1px;
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    font-size: 8vw;
  }
  @media (min-width: 600px) {
    font-size: 4vw;
  }
`;

const ActiveSpan = styled('span')`
  color: #00E9A2;
  cursor: pointer;
`;

export default function Hero(props) {
    const {userCount, scrollToRef} = props;
    return (
        <HeroSection>
            <div>
                <ActiveSpan onClick={() => scrollToRef.current.scrollIntoView()}>Join</ActiveSpan> the Sourceglobe<br/>code
                repository
            </div>
            <ScoreboardSection>
                <ScorboardEntry>
                    <div>#Users</div>
                    <div><CountUp end={userCount} duration={3}/></div>
                </ScorboardEntry>
            </ScoreboardSection>
        </HeroSection>
    );
}

Hero.propTypes = {
    userCount: PropTypes.number.isRequired,
    scrollToRef: PropTypes.any.isRequired
}