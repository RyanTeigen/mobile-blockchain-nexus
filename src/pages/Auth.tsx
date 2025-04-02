
import React from 'react';
import { useNavigate } from "react-router-dom";
import AuthCard from "@/components/auth/AuthCard";
import WalletConnectButton from "@/components/auth/WalletConnectButton";

const Auth = () => {
  const navigate = useNavigate();

  const handleConnectSuccess = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Stars background will render behind this component */}
      <AuthCard 
        title="Welcome to DevHub"
        description="Connect your wallet to continue"
        footer="By connecting your wallet, you agree to our Terms of Service and Privacy Policy."
      >
        <WalletConnectButton onSuccess={handleConnectSuccess} />
      </AuthCard>
    </div>
  );
};

export default Auth;
