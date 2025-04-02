
import React from 'react';
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface WalletConnectButtonProps {
  onSuccess?: () => void;
}

const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({ onSuccess }) => {
  const { connectWallet, isLoading } = useAuth();

  const handleConnect = async () => {
    try {
      await connectWallet();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };

  return (
    <Button 
      onClick={handleConnect} 
      disabled={isLoading}
      className="w-full py-6 text-lg flex items-center justify-center gap-3"
    >
      <Wallet className="h-5 w-5" />
      {isLoading ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
};

export default WalletConnectButton;
