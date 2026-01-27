import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, senha: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("auth")
  );

  function login(email: string, senha: string) {
    // login simples (depois pode integrar com API)
    if (email === "admin@email.com" && senha === "123456") {
      localStorage.setItem("auth", "true");
      setIsAuthenticated(true);
      return true;
    }

    return false;
  }

  function logout() {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
