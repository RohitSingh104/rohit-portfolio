import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



const HomePage = () => {
  const iconStyle = {
    width:'30px',
    height:'30px',
   
  }

  return (
    <div className="homePage-container">
      <div className="homepage-leftside">
        <h2>Hello</h2>
        <span></span>
        <br />
        <h2 className="name">I'm Rohit Singh</h2>
        <br />
        <h2 className="role">Software Engineer</h2>
        <div className="buttons">
          <GitHubIcon style={iconStyle} onClick={() => window.open('https://github.com/RohitSingh104')} target="_blank"/> 
          <LinkedInIcon style={iconStyle} onClick={() => window.open('https://www.linkedin.com/in/rohit-singh-478476153/')} target="_blank"/> 
          <TwitterIcon style={iconStyle} onClick={() => window.open('https://twitter.com/rk_singh_01')} target="_blank"/>
        </div>
      </div>
      <div className="homepage-rightside">
        <div className='home-image'></div>
      </div>
    </div>
  );
};

export default HomePage;
