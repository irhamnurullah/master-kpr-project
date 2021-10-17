// login
// customer

import { Route, Switch } from "react-router-dom";
import Beranda from "../components/Dashboard/Customer/Beranda";
import BerandaPetugas from "../components/Dashboard/Petugas/BerandaPetugas";
import DetailPengajuan from "../components/Dashboard/Petugas/DetailPengajuan";
import ListPengajuan from "../components/Dashboard/Petugas/ListPengajuan";
import HandleData from "../components/Pengajuan/Customer/HandleData";
import HandleForm from "../components/Pengajuan/Customer/HandleForm";
import CustomerLogin from "../pages/customers/Login/Login";

// petugas

const Routes = () => {
  return (
    <Switch>
      {/* Route Customer */}
      <Route path="/customer/beranda" component={Beranda} />
      <Route path="/customer/pengajuan" component={HandleForm} />
      <Route path="/customer/data" component={HandleData} />

      {/* Route Petugas */}
      <Route exact path="/petugas/beranda" component={BerandaPetugas} />

      <Route exact path="/petugas/list-pengajuan" component={ListPengajuan} />
      <Route path="/petugas/list-pengajuan/:id" component={DetailPengajuan} />
    </Switch>
  );
};

export default Routes;
