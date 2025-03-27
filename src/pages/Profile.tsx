
import React from 'react';
import TopAppBar from '@/components/TopAppBar';
import BottomNavigation from '@/components/BottomNavigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, LogOut, Moon, Sun, Github, Shield, Wallet, Clock, Compass, Bell } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Profile = () => {
  // Mock user data
  const user = {
    name: 'Alex Johnson',
    username: 'alex_blockchain',
    avatar: '',
    bio: 'Blockchain developer | Web3 enthusiast | Contributing to open-source projects',
    joinedDate: 'May 2022',
    contributions: 1248,
    followers: 86,
    following: 42,
  };

  return (
    <div className="pb-16">
      <TopAppBar title="Profile" />
      
      <div className="mobile-container">
        <div className="flex flex-col items-center mt-4">
          <Avatar className="h-24 w-24 border-4 border-devhub-border">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-2xl bg-devhub-primary">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <h1 className="text-xl font-medium mt-4">{user.name}</h1>
          <p className="text-muted-foreground">@{user.username}</p>
          
          <p className="text-sm text-center mt-3 max-w-xs">
            {user.bio}
          </p>
          
          <div className="flex gap-4 mt-5">
            <div className="text-center">
              <p className="text-lg font-medium">{user.contributions}</p>
              <p className="text-xs text-muted-foreground">Contributions</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">{user.followers}</p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">{user.following}</p>
              <p className="text-xs text-muted-foreground">Following</p>
            </div>
          </div>
          
          <Button className="mt-5 w-full">
            Edit Profile
          </Button>
        </div>
        
        <Card className="mt-8 bg-devhub-card border-devhub-border">
          <CardHeader className="pb-3">
            <CardTitle>Wallet</CardTitle>
            <CardDescription>Connect your blockchain wallets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-devhub-primary/10 flex items-center justify-center">
                    <Wallet size={18} className="text-devhub-primary" />
                  </div>
                  <div>
                    <p className="font-medium">MetaMask</p>
                    <p className="text-xs text-muted-foreground">0x71C...87FB</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Disconnect</Button>
              </div>
              
              <Button variant="outline" className="w-full">
                Connect Another Wallet
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 space-y-4">
          <div className="text-muted-foreground text-sm font-medium uppercase">
            Settings
          </div>
          
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <div className="flex items-center gap-3 py-2">
                <Settings size={18} />
                <span>Preferences</span>
              </div>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <div className="flex items-center gap-3 py-2">
                <Shield size={18} />
                <span>Security</span>
              </div>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <div className="flex items-center gap-3 py-2">
                <Moon size={18} />
                <span>Appearance</span>
              </div>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <div className="flex items-center gap-3 py-2">
                <Bell size={18} />
                <span>Notifications</span>
              </div>
            </Button>
          </div>
          
          <Separator className="my-4 bg-devhub-border" />
          
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <div className="flex items-center gap-3 py-2">
                <Compass size={18} />
                <span>Application Catalog</span>
              </div>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <div className="flex items-center gap-3 py-2">
                <Clock size={18} />
                <span>Activity Log</span>
              </div>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <div className="flex items-center gap-3 py-2">
                <Github size={18} />
                <span>GitHub Integration</span>
              </div>
            </Button>
          </div>
          
          <Separator className="my-4 bg-devhub-border" />
          
          <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-500/10" asChild>
            <div className="flex items-center gap-3 py-2">
              <LogOut size={18} />
              <span>Sign Out</span>
            </div>
          </Button>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Profile;
