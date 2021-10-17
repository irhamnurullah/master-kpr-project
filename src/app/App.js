import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutHome from "../components/Layout/Customer/LayoutCustomer";
import LayoutPetugas from "../components/Layout/Petugas/LayoutPetugas";
import CustomerLogin from "../pages/customers/Login/Login";
import "./App.css";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/customer" component={LayoutHome} />
          <Route path="/customer-login" component={CustomerLogin} />
          <Route path="/petugas" component={LayoutPetugas} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
