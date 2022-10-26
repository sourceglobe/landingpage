import {styled} from "@mui/material";

const FooterSection = styled('div')`
  display: flex;
  justify-content: center;
  padding-bottom: 1em;
`;

export default function Footer() {
    return (
        <FooterSection>
            <span>Cover photo by <a
                href="https://unsplash.com/@jkozoski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Juliana
            Kozoski</a> on <a
                href="https://unsplash.com/s/photos/globe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
        </FooterSection>
    );
}