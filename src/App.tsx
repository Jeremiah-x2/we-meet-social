import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import SignInPage from "./pages/auth/signin";
import SignUpPage from "./pages/auth/signup";
import AuthPage from "./pages/auth/auth";
import { Provider } from "./components/ui/provider";
import Dashboard from "./pages/dashboard/dashboard";
import DashboardHome from "./pages/dashboard/dashboard-home";
import Friends from "./pages/dashboard/friends";
import Messages from "./pages/dashboard/messages";
import ChatPage from "./pages/dashboard/chat-by-id";
import TestSocket from "./pages/test-socket";
function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="auth" element={<AuthPage />}>
              <Route path="login" element={<SignInPage />} />
              <Route path="register" element={<SignUpPage />} />
            </Route>

            <Route path="/test" element={<TestSocket />} />

            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="friends" element={<Friends />} />
              <Route path="messages" element={<Messages />} />
              <Route path="messages/:chatId" element={<ChatPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
