import {Container, styled} from "@mui/material";
import PropTypes from "prop-types";
import caretakerBotImage from "../static/sourceglobe-caretaker-bot.png";

const PitchSection = styled(Container)`
  @media (max-width: 600px) {
    font-size: 6vw;
  }
  @media (min-width: 600px) {
    font-size: 2.5vw;
  }
`;

export default function Pitch(props) {
    const {scrollToPitchRef} = props;
    return (
        <PitchSection ref={scrollToPitchRef}>
            <h3>One repository, many developers</h3>
            <p>
                Millions of developers on GitHub work on hundreds of millions repositories.<br/>
                But is it possible to all work together on a single repository?<br/>
                What would you contribute to such a repository? What would others contribute to it?
                Will it break GitHub?<br/>
                Let's find out together.
            </p>
            <h3>All Pull-Request are welcome (and merged)</h3>
            <p>
                The Sourceglobe code repository is a place where everyone can contribute. No matter if you've just
                created your GitHub account or you're an experienced software engineer, everyone
                is welcome to merge in their code.<br/>
                Anything goes (as long as you don't violate GitHub policies).<br/>
                Any technology goes, actually, the more technologies, the better.<br/>
            </p>
            <p>
                Pull-Requests will be merged automatically after they pass 3 rules:
                <ol>
                    <li>You must have starred the Sourceglobe repository</li>
                    <li>All files must be located in your "home folder" (for example: <code>home/sir-type-a-lot</code>)
                    </li>
                    <li>The total size of all your files is not larger than 1 Mb (1.048.576 bytes)</li>
                </ol>
                <img src={caretakerBotImage} width={150} align="right"/>
                BTW the Caretaker bot will guide you through the Pull-Request process.
            </p>
            <h3>How to get started?</h3>
            <p>
                Contributing to the Sourceglobe code repository is easy! Follow these 3 steps to get your code in:
                <ol>
                    <li>Fork the Sourceglobe repository on GitHub</li>
                    <li>Add your code in your "home folder" (for example: <code>home/sir-type-a-lot</code>)</li>
                    <li>Open a Pull-Request and follow the directions of the Caretaker bot</li>
                </ol>
            </p>
            <h3>Newest users</h3>
        </PitchSection>
    )
}

Pitch.propTypes = {
    scrollToPitchRef: PropTypes.any.isRequired
}