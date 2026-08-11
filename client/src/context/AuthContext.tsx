import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (
    name: string,
    email: string,
    password: string
  ) => boolean;
  logout: () => void;
}

const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

interface StoredUser extends User {
  password: string;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("lunera-current-user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "lunera-current-user",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("lunera-current-user");
    }
  }, [user]);

  const register = (
    name: string,
    email: string,
    password: string
  ): boolean => {
    const existingUsers: StoredUser[] = JSON.parse(
      localStorage.getItem("lunera-users") || "[]"
    );

    const emailExists = existingUsers.some(
      (existingUser) =>
        existingUser.email.toLowerCase() ===
        email.toLowerCase()
    );

    if (emailExists) {
      return false;
    }

    const newUser: StoredUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password,
    };

    localStorage.setItem(
      "lunera-users",
      JSON.stringify([...existingUsers, newUser])
    );

    const loggedInUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    setUser(loggedInUser);

    return true;
  };

  const login = (
    email: string,
    password: string
  ): boolean => {
    const existingUsers: StoredUser[] = JSON.parse(
      localStorage.getItem("lunera-users") || "[]"
    );

    const foundUser = existingUsers.find(
      (existingUser) =>
        existingUser.email.toLowerCase() ===
          email.toLowerCase() &&
        existingUser.password === password
    );

    if (!foundUser) {
      return false;
    }

    const loggedInUser: User = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
    };

    setUser(loggedInUser);

    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}