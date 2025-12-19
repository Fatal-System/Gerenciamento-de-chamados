import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./pages/Layout"
import UserConfig from "./pages/UserConfig"
import CreateTicket from "./pages/CreateTicket";
import SuccesTicket from "./pages/SuccesTicket";
import ViewTicketForm from "./pages/ViewTicketForm";
import Tickets from "./pages/Tickets";
import StatusTicket from "./pages/StatusTicket";
import FAQ from "./pages/FAQ";
import AdminHome from "./pages/AdminHome";
import ManageUsers from './pages/ManageUsers';
import ManageTickets from './pages/ManageTickets';
import TecHome from './pages/TecHome';
import PriorityTicket from "./pages/PriorityTicket";
import ReplyTicket from "./pages/ReplyTicket";
import Report from "./pages/Report";
import HowToUse from "./pages/HowToUse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/user-configuration" element={<UserConfig />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="/create-ticket/success" element={<SuccesTicket />} />
          <Route path="/view-ticket-form" element={<ViewTicketForm />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/status-ticket" element={<StatusTicket />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-tickets" element={<ManageTickets />} />
          <Route path="/tec-home" element={<TecHome />} />
          <Route path="/priority-ticket" element={<PriorityTicket />} />
          <Route path="/reply-ticket" element={<ReplyTicket />} />
          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
