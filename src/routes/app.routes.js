// login
// customer
// petugas
import { Route, Switch } from "react-router-dom";
import Beranda from "../components/Dashboard/Customer/Beranda";
import HandleData from "../components/Pengajuan/Customer/HandleData";
import HandleForm from "../components/Pengajuan/Customer/HandleForm";
import CustomerLogin from "../pages/customers/Login/Login";

const Routes = () => {
   return (
      <Switch>
         {/* Route Customer */}
         <Route path="/customer/beranda" component={Beranda} />
         <Route path="/customer/pengajuan" component={HandleForm} />
         <Route path="/customer/data" component={HandleData} />
      </Switch>
   );
};

export default Routes;
