import './App.css';
import NavigationBar from "./components/NavigationBar"
import "./style/land.css"
import Intro from "./components/Intro"
import Skill from "./components/Languages"
import Projects from './components/Projects';
import Certificate from './components/Certificate';

function App() {
  return (
  <div>
   <div className='BG'>
      <NavigationBar/>
      <Intro/>
      <Skill/>
   </div>

   <div>
    <Projects/>
    <Certificate/>
   </div>
  </div>
  );
}

export default App;
