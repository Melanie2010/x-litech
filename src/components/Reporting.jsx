import '../App.css';
import MainDash from './MainDash/MainDash';
import Sidebar from './Sidebar/Sidebar';

function Reporting() {
  return (
    
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
      </div>
    </div>
  );
}

export default Reporting;