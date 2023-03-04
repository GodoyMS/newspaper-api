
import GitHubIcon from '@mui/icons-material/GitHub';
import {Title,GithubLink,Container} from './styledHeader'
import { Tooltip } from "@mui/material";
const Header = () => {
  return (
            <Container >         
                <Title> NewsPaper all over the world</Title>
                <Tooltip title="Star on Github"><GithubLink target='_blank' href='https://github.com/GodoyMS/newspaper-api'><GitHubIcon/></GithubLink></Tooltip>
                
            </Container>
  )
}

export default Header