import Navbar from './navbar/Navbar';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import DetailsListBasicExample from './components/TableOrganizations/DetailsListBasicExample';
import BtnOrganization from './components/Button/BtnOrganization';
import SideBar from './components/Sidebar/sidebar';

initializeIcons('https://my.cdn.com/path/to/icons/');

function App() {
  return (
    <div className="father">
     <Navbar />
     <SideBar />
     <BtnOrganization />
    <DetailsListBasicExample />
    </div>
  );
}

export default App;