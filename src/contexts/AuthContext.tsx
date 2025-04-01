
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { toast } from '@/hooks/use-toast';

type User = {
  id: string;
  address: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  connectWallet: () => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth state on mount
    const storedUser = localStorage.getItem('devhub_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      // Check if window.ethereum exists
      if (!window.ethereum) {
        toast({
          title: "No wallet detected",
          description: "Please install MetaMask or another browser wallet to continue",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Request wallet connection
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      
      if (accounts.length === 0) {
        throw new Error("No accounts available");
      }

      const address = accounts[0];
      const walletUser = {
        id: address,
        address: address,
      };
      
      // Store user in local storage
      localStorage.setItem('devhub_user', JSON.stringify(walletUser));
      setUser(walletUser);
      
      toast({
        title: "Wallet connected",
        description: "Successfully connected to your wallet",
      });
    } catch (error) {
      console.error('Wallet connection error:', error);
      toast({
        title: "Connection failed",
        description: "Failed to connect to your wallet. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('devhub_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        connectWallet,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
