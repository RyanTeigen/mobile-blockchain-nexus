
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ 
  title, 
  description, 
  children, 
  footer 
}) => {
  return (
    <Card className="w-full max-w-md mx-auto bg-devhub-card border-devhub-border shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-devhub-primary">
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-8">
        {children}
      </CardContent>
      {footer && (
        <CardFooter className="text-center text-sm text-muted-foreground">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthCard;
