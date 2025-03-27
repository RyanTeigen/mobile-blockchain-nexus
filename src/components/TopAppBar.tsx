
import React from 'react';
import { Search, Plus, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TopAppBarProps {
  title: string;
  showActions?: boolean;
  showBack?: boolean;
}

const TopAppBar = ({ 
  title, 
  showActions = true,
  showBack = false 
}: TopAppBarProps) => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-40 bg-devhub-background/90 backdrop-blur-sm border-b border-devhub-border">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          {showBack && (
            <button 
              onClick={() => navigate(-1)} 
              className="p-2 rounded-full hover:bg-devhub-card"
              aria-label="Go back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          )}
          <h1 className="text-lg font-medium">{title}</h1>
        </div>
        
        {showActions && (
          <div className="flex items-center gap-3">
            <button 
              className="p-2 rounded-full hover:bg-devhub-card" 
              aria-label="Search"
              onClick={() => navigate('/search')}
            >
              <Search size={20} />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-devhub-card" 
              aria-label="New"
              onClick={() => navigate('/new')}
            >
              <Plus size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopAppBar;
