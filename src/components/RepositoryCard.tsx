
import React from 'react';
import { GitBranch, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface RepositoryProps {
  id: string;
  name: string;
  description: string;
  owner: {
    login: string;
  };
  language: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  private: boolean;
  updated_at: string;
}

const RepositoryCard = ({ repo }: { repo: RepositoryProps }) => {
  const formattedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-red-500',
      Solidity: 'bg-purple-500',
      Rust: 'bg-orange-500',
      default: 'bg-gray-500',
    };
    return colors[language] || colors.default;
  };

  return (
    <Link to={`/repository/${repo.id}`} className="repo-card block mb-3">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-foreground flex items-center gap-1.5">
            {repo.owner.login}/{repo.name}
            {repo.private && (
              <span className="badge badge-secondary">Private</span>
            )}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {repo.description || "No description"}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ${getLanguageColor(repo.language)}`}></span>
              <span>{repo.language}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            <Star size={14} />
            <span>{repo.stargazers_count}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <GitBranch size={14} />
            <span>{repo.forks_count}</span>
          </div>
        </div>
        
        <div>
          <span>Updated {formattedDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default RepositoryCard;
