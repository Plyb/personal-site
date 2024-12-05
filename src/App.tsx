import './App.css';
import { Email } from './Email';
import { hoverBubble } from './HoverBubble';
import { ProjectList } from './ProjectList';
import { Timeline } from './Timeline';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <a href='/res/CV.pdf'>CV</a>
        <a href='https://github.com/Plyb'><img src='/res/icons/github.svg' alt='GitHub'/></a>
        <a href='https://www.linkedin.com/in/kobylewis'><img src='/res/icons/linkedin.svg' alt="LinkedIn"/></a>
        { hoverBubble(
          <img src='/res/icons/email.svg' alt="Email"/>,
          <Email/>
        ) }
      </header>

      <div className='content'>
        <div className='about-me-section'>
          <div className='profile'>
            <img src='/res/profile-50-percent.png' alt='profile'/>
          </div>
          <div className='panel'>
            <h2>Koby Lewis</h2>
            <p>I'm a software engineer pursuing a PhD in programming languages and tools. I graduated with my Bachelor's in <a href='https://cs.byu.edu/'>Computer Science</a> from <a href='https://www.byu.edu/'>Brigham Young University</a> in 2023 and I have been working as a backend software engineer for <a href='https://www.award.co/'>Awardco</a> since then.</p>
            <p>I'm interested in ways to make programmers' jobs easier, less error prone, and more productive, mainly through the design of new languages, tools, and libraries. I also am interested in systems with emergent behavior and simulations. Outside of technical work, I enjoy hiking, tabletop games, reading, and studying linguistics.</p>
            <p>You can find my CV and ways to contact me in the header of this page!</p>
          </div>
        </div>

        <div className='panel-group'>
          <div><ProjectList/></div>
          <div><Timeline/></div>
        </div>
      </div>

      <footer>Copyright Koby Lewis 2024 <a href="https://github.com/Plyb/personal-site">Source code</a></footer>
    </div>
  );
}

export default App;
