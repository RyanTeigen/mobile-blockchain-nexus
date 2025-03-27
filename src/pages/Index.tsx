
import React from 'react';
import TopAppBar from '@/components/TopAppBar';
import BottomNavigation from '@/components/BottomNavigation';
import TaskCard, { TaskProps } from '@/components/TaskCard';
import RepositoryCard, { RepositoryProps } from '@/components/RepositoryCard';
import { Button } from '@/components/ui/button';
import { GitBranch, Bell, CheckCircle, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock data for the dashboard
  const recentRepositories: RepositoryProps[] = [
    {
      id: '1',
      name: 'smart-contracts',
      description: 'Collection of ERC standards and utility contracts for Autheo platform',
      owner: {
        login: 'autheo',
      },
      language: 'Solidity',
      stargazers_count: 127,
      forks_count: 48,
      watchers_count: 15,
      private: false,
      updated_at: '2023-05-15T10:24:32Z',
    },
    {
      id: '2',
      name: 'blockchain-sdk',
      description: 'Official SDK for interacting with the Autheo blockchain',
      owner: {
        login: 'autheo',
      },
      language: 'TypeScript',
      stargazers_count: 94,
      forks_count: 27,
      watchers_count: 11,
      private: false,
      updated_at: '2023-05-12T08:14:22Z',
    },
  ];

  const recentTasks: TaskProps[] = [
    {
      id: '1',
      title: 'Fix gas optimization in token contract',
      status: 'in_progress',
      priority: 'high',
      due_date: '2023-05-18T00:00:00Z',
      assignee: 'you',
      repository: 'autheo/smart-contracts',
    },
    {
      id: '2',
      title: 'Add documentation for new API endpoints',
      status: 'todo',
      priority: 'medium',
      due_date: '2023-05-22T00:00:00Z',
      assignee: 'you',
      repository: 'autheo/developer-docs',
    },
  ];

  return (
    <div className="pb-16">
      <TopAppBar title="Autheo DevHub" />
      
      <div className="mobile-container">
        {/* Stats overview */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-devhub-card rounded-lg border border-devhub-border p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Repositories</p>
                <h2 className="text-2xl font-semibold mt-1">12</h2>
              </div>
              <div className="h-10 w-10 rounded-full bg-devhub-primary/10 flex items-center justify-center">
                <GitBranch size={20} className="text-devhub-primary" />
              </div>
            </div>
          </div>
          
          <div className="bg-devhub-card rounded-lg border border-devhub-border p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Notifications</p>
                <h2 className="text-2xl font-semibold mt-1">5</h2>
              </div>
              <div className="h-10 w-10 rounded-full bg-devhub-primary/10 flex items-center justify-center">
                <Bell size={20} className="text-devhub-primary" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="bg-devhub-card rounded-lg border border-devhub-border p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Tasks</p>
                <h2 className="text-2xl font-semibold mt-1">8</h2>
              </div>
              <div className="h-10 w-10 rounded-full bg-devhub-primary/10 flex items-center justify-center">
                <CheckCircle size={20} className="text-devhub-primary" />
              </div>
            </div>
          </div>
          
          <div className="bg-devhub-card rounded-lg border border-devhub-border p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Pull Requests</p>
                <h2 className="text-2xl font-semibold mt-1">3</h2>
              </div>
              <div className="h-10 w-10 rounded-full bg-devhub-primary/10 flex items-center justify-center">
                <Code size={20} className="text-devhub-primary" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Tasks section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium">Recent Tasks</h2>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link to="/tasks">View All</Link>
            </Button>
          </div>
          
          {recentTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
        
        {/* Repositories section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium">Recent Repositories</h2>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link to="/repositories">View All</Link>
            </Button>
          </div>
          
          {recentRepositories.map(repo => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
