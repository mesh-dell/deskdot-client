import AppRoutes from "./routes/Approutes";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
