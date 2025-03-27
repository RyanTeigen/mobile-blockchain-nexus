
import React from 'react';
import { useParams } from 'react-router-dom';
import TopAppBar from '@/components/TopAppBar';
import BottomNavigation from '@/components/BottomNavigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GitBranch, Star, GitFork, Eye, Code, CheckCircle, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import TaskCard, { TaskProps } from '@/components/TaskCard';

const Repository = () => {
  const { id } = useParams();
  
  // Mock repository data (would be fetched based on ID in a real app)
  const repository = {
    id,
    name: 'smart-contracts',
    description: 'Collection of ERC standards and utility contracts for Autheo platform',
    owner: {
      login: 'autheo',
    },
    language: 'Solidity',
    languageColor: 'bg-purple-500',
    stargazers_count: 127,
    forks_count: 48,
    watchers_count: 15,
    private: false,
    updated_at: '2023-05-15T10:24:32Z',
    created_at: '2022-08-10T14:22:11Z',
    contributors: [
      { name: 'Alex Johnson', login: 'alexj' },
      { name: 'Maria Garcia', login: 'mgarcia' },
      { name: 'Sam Lee', login: 'samlee' },
    ],
  };

  // Mock tasks data
  const tasks: TaskProps[] = [
    {
      id: '1',
      title: 'Fix gas optimization in token contract',
      status: 'in_progress',
      priority: 'high',
      due_date: '2023-05-18T00:00:00Z',
      assignee: 'Alex Johnson',
      repository: 'autheo/smart-contracts',
    },
    {
      id: '2',
      title: 'Implement EIP-4337 account abstraction',
      status: 'todo',
      priority: 'medium',
      due_date: '2023-05-25T00:00:00Z',
      assignee: 'Maria Garcia',
      repository: 'autheo/smart-contracts',
    },
    {
      id: '3',
      title: 'Write tests for staking contract',
      status: 'done',
      priority: 'medium',
      due_date: '2023-05-10T00:00:00Z',
      assignee: 'Sam Lee',
      repository: 'autheo/smart-contracts',
    },
  ];

  // Mock code snippets
  const codeSnippets = [
    {
      id: '1',
      name: 'Token.sol',
      path: 'contracts/Token.sol',
      language: 'Solidity',
      lastCommit: '2 days ago',
    },
    {
      id: '2',
      name: 'Staking.sol',
      path: 'contracts/Staking.sol',
      language: 'Solidity',
      lastCommit: '5 days ago',
    },
    {
      id: '3',
      name: 'Governance.sol',
      path: 'contracts/Governance.sol',
      language: 'Solidity',
      lastCommit: '1 week ago',
    },
  ];

  const formattedDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="pb-16">
      <TopAppBar title={repository.name} showBack={true} />
      
      <div className="mobile-container">
        <div className="py-4">
          <h1 className="text-xl font-semibold flex items-center">
            {repository.owner.login}/{repository.name}
            {repository.private && (
              <span className="badge badge-secondary ml-2">Private</span>
            )}
          </h1>
          
          <p className="text-muted-foreground mt-2">{repository.description}</p>
          
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-1.5">
              <span className={`h-3 w-3 rounded-full ${repository.languageColor}`}></span>
              <span className="text-sm">{repository.language}</span>
            </div>
            
            <div className="flex items-center gap-1 ml-4">
              <Star size={16} />
              <span className="text-sm">{repository.stargazers_count}</span>
            </div>
            
            <div className="flex items-center gap-1 ml-4">
              <GitFork size={16} />
              <span className="text-sm">{repository.forks_count}</span>
            </div>
            
            <div className="flex items-center gap-1 ml-4">
              <Eye size={16} />
              <span className="text-sm">{repository.watchers_count}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-6">
            <div className="flex -space-x-2">
              {repository.contributors.map((contributor, index) => (
                <Avatar key={index} className="border-2 border-devhub-background h-8 w-8">
                  <AvatarFallback className="text-xs bg-devhub-primary">
                    {contributor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            
            <Button>
              <GitBranch size={16} className="mr-2" />
              Clone
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-muted-foreground">
            <p>Created on {formattedDate(repository.created_at)}</p>
            <p>Last updated on {formattedDate(repository.updated_at)}</p>
          </div>
        </div>
        
        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="code">
              <Code size={16} className="mr-2" />
              Code
            </TabsTrigger>
            <TabsTrigger value="tasks">
              <CheckCircle size={16} className="mr-2" />
              Tasks
            </TabsTrigger>
            <TabsTrigger value="docs">
              <FileText size={16} className="mr-2" />
              Docs
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="code" className="mt-4">
            <div className="space-y-3">
              {codeSnippets.map(file => (
                <div 
                  key={file.id} 
                  className="bg-devhub-card rounded-lg border border-devhub-border p-4 hover:border-devhub-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{file.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{file.path}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock size={14} />
                      <span>{file.lastCommit}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full mt-4">
                View All Files
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="tasks" className="mt-4">
            <div className="space-y-3">
              {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
              
              <Button variant="outline" className="w-full mt-4">
                Create New Task
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="docs" className="mt-4">
            <div className="bg-devhub-card rounded-lg border border-devhub-border p-4">
              <h3 className="font-medium mb-2">README.md</h3>
              <div className="prose prose-sm prose-invert max-w-none">
                <h1>Autheo Smart Contracts</h1>
                <p>This repository contains the core smart contracts used in the Autheo platform.</p>
                <h2>Installation</h2>
                <div className="code-block mt-2">
                  <code>npm install @autheo/smart-contracts</code>
                </div>
                <h2>Usage</h2>
                <p>Import the contracts in your Solidity files:</p>
                <div className="code-block mt-2">
                  <code>import "@autheo/smart-contracts/Token.sol";</code>
                </div>
                <h2>Documentation</h2>
                <p>For full documentation, visit <a href="#" className="text-devhub-primary">docs.autheo.dev</a></p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Repository;
