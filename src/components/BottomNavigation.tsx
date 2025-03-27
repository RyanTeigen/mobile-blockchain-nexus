
import React from 'react';
import { Home, GitBranch, Bell, User, MoreHorizontal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: GitBranch, path: '/repositories', label: 'Repos' },
    { icon: Bell, path: '/notifications', label: 'Notifications' },
    { icon: User, path: '/profile', label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-devhub-card border-t border-devhub-border z-50">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${pathname === item.path ? 'active' : ''}`}
            aria-label={item.label}
          >
            <item.icon size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
