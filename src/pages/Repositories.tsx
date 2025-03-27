
import React, { useState } from 'react';
import TopAppBar from '@/components/TopAppBar';
import BottomNavigation from '@/components/BottomNavigation';
import RepositoryCard, { RepositoryProps } from '@/components/RepositoryCard';
import { Input } from '@/components/ui/input';
import { Filter } from 'lucide-react';
import EmptyState from '@/components/EmptyState';
import { GitBranch } from 'lucide-react';

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock repositories data
  const repositories: RepositoryProps[] = [
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
    {
      id: '3',
      name: 'developer-docs',
      description: 'Documentation for Autheo developers and community contributors',
      owner: {
        login: 'autheo',
      },
      language: 'JavaScript',
      stargazers_count: 63,
      forks_count: 21,
      watchers_count: 8,
      private: false,
      updated_at: '2023-05-10T15:32:41Z',
    },
    {
      id: '4',
      name: 'governance-portal',
      description: 'Web application for governance proposals and voting',
      owner: {
        login: 'autheo',
      },
      language: 'TypeScript',
      stargazers_count: 78,
      forks_count: 14,
      watchers_count: 9,
      private: false,
      updated_at: '2023-05-08T12:18:55Z',
    },
    {
      id: '5',
      name: 'testnet-faucet',
      description: 'Testnet faucet for distributing test tokens to developers',
      owner: {
        login: 'autheo',
      },
      language: 'JavaScript',
      stargazers_count: 42,
      forks_count: 11,
      watchers_count: 5,
      private: false,
      updated_at: '2023-05-05T09:41:23Z',
    },
  ];

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    repo.owner.login.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pb-16">
      <TopAppBar title="Repositories" />
      
      <div className="mobile-container">
        <div className="flex gap-2 mt-4 mb-6">
          <Input
            placeholder="Search repositories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <button className="p-2 bg-devhub-card border border-devhub-border rounded-md">
            <Filter size={20} />
          </button>
        </div>
        
        {filteredRepositories.length > 0 ? (
          filteredRepositories.map(repo => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))
        ) : (
          <EmptyState
            title="No repositories found"
            description={searchQuery ? `No repositories matching "${searchQuery}"` : "You don't have any repositories yet"}
            icon={<GitBranch size={24} className="text-devhub-primary" />}
            actionLabel={searchQuery ? "Clear search" : "Create repository"}
            onAction={searchQuery ? () => setSearchQuery('') : undefined}
            actionLink={!searchQuery ? "/new" : undefined}
          />
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Repositories;
