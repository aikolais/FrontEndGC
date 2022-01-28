import Navbar from './navbar/Navbar';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import DetailsListBasicExample from './components/TableOrganizations/DetailsListBasicExample';
import BtnOrganization from './components/Button/BtnOrganization';
import SideBar from './components/Sidebar/sidebar';
import AppRoutes from  './Routes/AppRoutes';

initializeIcons('https://my.cdn.com/path/to/icons/');

function App() {
  return (
    <div className="father">
      <div className="father">
        <AppRoutes/>
      </div>
    </div>
  );
}

export default App;