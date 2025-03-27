
import React from 'react';
import { GitPullRequest, GitCommit, MessageSquare, GitMerge } from 'lucide-react';
import { Link } from 'react-router-dom';

export type NotificationType = 'PR' | 'issue' | 'mention' | 'commit' | 'merge';

export interface NotificationProps {
  id: string;
  type: NotificationType;
  title: string;
  repository: string;
  time: string;
  read: boolean;
  url: string;
}

const NotificationCard = ({ notification }: { notification: NotificationProps }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'PR':
        return <GitPullRequest size={18} className="text-green-500" />;
      case 'issue':
        return <MessageSquare size={18} className="text-blue-500" />;
      case 'mention':
        return <MessageSquare size={18} className="text-purple-500" />;
      case 'commit':
        return <GitCommit size={18} className="text-yellow-500" />;
      case 'merge':
        return <GitMerge size={18} className="text-pink-500" />;
      default:
        return <MessageSquare size={18} />;
    }
  };

  return (
    <Link 
      to={notification.url} 
      className={`block p-4 border-b border-devhub-border ${!notification.read ? 'bg-devhub-primary/5' : ''}`}
    >
      <div className="flex gap-3">
        <div className="mt-0.5">{getIcon()}</div>
        <div className="flex-1">
          <p className="text-sm font-medium">{notification.repository}</p>
          <h3 className={`text-base ${!notification.read ? 'font-medium' : ''}`}>
            {notification.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
        </div>
        {!notification.read && (
          <div className="h-2 w-2 rounded-full bg-devhub-primary mt-2"></div>
        )}
      </div>
    </Link>
  );
};

export default NotificationCard;
