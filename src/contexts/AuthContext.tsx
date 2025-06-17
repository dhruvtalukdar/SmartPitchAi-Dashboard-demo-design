import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole, AuthContextType } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'john.doe@acme.com',
    firstName: 'John',
    lastName: 'Doe',
    role: UserRole.Admin,
    organizationId: 'org-1',
    organizationName: 'Acme Corporation',
    avatar: 'JD',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-16'
  },
  {
    id: '2',
    email: 'sarah.manager@acme.com',
    firstName: 'Sarah',
    lastName: 'Johnson',
    role: UserRole.Manager,
    organizationId: 'org-1',
    organizationName: 'Acme Corporation',
    avatar: 'SJ',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-16'
  },
  {
    id: '3',
    email: 'mike.member@acme.com',
    firstName: 'Mike',
    lastName: 'Smith',
    role: UserRole.Member,
    organizationId: 'org-1',
    organizationName: 'Acme Corporation',
    avatar: 'MS',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-16'
  }
];

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user from localStorage or API
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      // Default to Admin user for demo
      setUser(mockUsers[0]);
      localStorage.setItem('currentUser', JSON.stringify(mockUsers[0]));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const hasRole = (roles: UserRole[]): boolean => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    hasRole,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Convenience hook for role checking
export function useHasRole(roles: UserRole[]): boolean {
  const { hasRole } = useAuth();
  return hasRole(roles);
}