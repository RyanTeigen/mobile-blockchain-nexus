
import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface TaskProps {
  id: string;
  title: string;
  status: 'todo' | 'in_progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  due_date?: string;
  assignee?: string;
  repository: string;
}

const TaskCard = ({ task }: { task: TaskProps }) => {
  const getPriorityBadge = () => {
    switch (task.priority) {
      case 'high':
        return <span className="badge bg-red-500/20 text-red-500">High</span>;
      case 'medium':
        return <span className="badge bg-yellow-500/20 text-yellow-500">Medium</span>;
      case 'low':
        return <span className="badge bg-green-500/20 text-green-500">Low</span>;
      default:
        return null;
    }
  };

  const getStatusIcon = () => {
    switch (task.status) {
      case 'done':
        return <CheckCircle size={18} className="text-green-500" />;
      case 'in_progress':
        return <Clock size={18} className="text-yellow-500" />;
      case 'todo':
      default:
        return <Circle size={18} className="text-muted-foreground" />;
    }
  };

  const formattedDate = task.due_date 
    ? new Date(task.due_date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    : null;

  return (
    <Link to={`/task/${task.id}`} className="repo-card block mb-3">
      <div className="flex gap-3">
        <div className="mt-0.5">{getStatusIcon()}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{task.title}</h3>
            {getPriorityBadge()}
          </div>
          
          <p className="text-sm text-muted-foreground mt-1">
            {task.repository}
          </p>
          
          <div className="flex items-center justify-between mt-3 text-xs">
            {task.assignee && (
              <div className="text-muted-foreground">
                Assigned to: <span className="text-devhub-primary">{task.assignee}</span>
              </div>
            )}
            
            {formattedDate && (
              <div className={`flex items-center gap-1.5 ${
                new Date(task.due_date!) < new Date() && task.status !== 'done' 
                  ? 'text-red-500' 
                  : 'text-muted-foreground'
              }`}>
                <Clock size={14} />
                <span>Due {formattedDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TaskCard;
