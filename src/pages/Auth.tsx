
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Auth = () => {
  const navigate = useNavigate();
  const { connectWallet, isLoading } = useAuth();

  const handleConnect = async () => {
    try {
      await connectWallet();
      navigate("/");
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Stars background will render behind this component */}
      <Card className="w-full max-w-md mx-auto bg-devhub-card border-devhub-border shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-devhub-primary">
            Welcome to DevHub
          </CardTitle>
          <CardDescription>
            Connect your wallet to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-8">
          <Button 
            onClick={handleConnect} 
            disabled={isLoading}
            className="w-full py-6 text-lg flex items-center justify-center gap-3"
          >
            <Wallet className="h-5 w-5" />
            {isLoading ? "Connecting..." : "Connect Wallet"}
          </Button>
        </CardContent>
        <CardFooter className="text-center text-sm text-muted-foreground">
          By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
