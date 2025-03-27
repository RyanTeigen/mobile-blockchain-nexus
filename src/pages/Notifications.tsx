
import React, { useState } from 'react';
import TopAppBar from '@/components/TopAppBar';
import BottomNavigation from '@/components/BottomNavigation';
import NotificationCard, { NotificationProps } from '@/components/NotificationCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmptyState from '@/components/EmptyState';
import { Bell } from 'lucide-react';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock notifications data
  const notifications: NotificationProps[] = [
    {
      id: '1',
      type: 'PR',
      title: 'Pull request #42: Improve gas optimization for token swaps',
      repository: 'autheo/smart-contracts',
      time: '2 hours ago',
      read: false,
      url: '/notifications/1',
    },
    {
      id: '2',
      type: 'mention',
      title: 'Alex mentioned you in comment: "Can you check this implementation?"',
      repository: 'autheo/blockchain-sdk',
      time: '4 hours ago',
      read: false,
      url: '/notifications/2',
    },
    {
      id: '3',
      type: 'issue',
      title: 'New issue #15: Documentation is missing for recursive calls',
      repository: 'autheo/developer-docs',
      time: 'Yesterday',
      read: true,
      url: '/notifications/3',
    },
    {
      id: '4',
      type: 'commit',
      title: 'New commit f8c234: Fix pagination in governance votes',
      repository: 'autheo/governance-portal',
      time: '2 days ago',
      read: true,
      url: '/notifications/4',
    },
    {
      id: '5',
      type: 'merge',
      title: 'Pull request #37 was merged by Sarah',
      repository: 'autheo/testnet-faucet',
      time: '3 days ago',
      read: true,
      url: '/notifications/5',
    },
  ];

  const filteredNotifications = activeTab === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="pb-16">
      <TopAppBar title="Notifications" />
      
      <div>
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b border-devhub-border">
            <div className="mobile-container">
              <TabsList className="grid w-full grid-cols-2 my-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">
                  Unread
                  {unreadCount > 0 && (
                    <span className="ml-1.5 bg-devhub-primary text-white text-xs px-1.5 py-0.5 rounded-full">
                      {unreadCount}
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <TabsContent value="all" className="mt-0">
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <NotificationCard key={notification.id} notification={notification} />
              ))
            ) : (
              <EmptyState
                title="No notifications"
                description="You don't have any notifications yet"
                icon={<Bell size={24} className="text-devhub-primary" />}
              />
            )}
          </TabsContent>
          
          <TabsContent value="unread" className="mt-0">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map(notification => (
                <NotificationCard key={notification.id} notification={notification} />
              ))
            ) : (
              <EmptyState
                title="No unread notifications"
                description="You're all caught up!"
                icon={<Bell size={24} className="text-devhub-primary" />}
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Notifications;
