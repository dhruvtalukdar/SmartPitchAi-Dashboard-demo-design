import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Mail, 
  TrendingUp, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Plus
} from 'lucide-react';

const stats = [
  {
    title: 'Total Leads',
    value: '1,234',
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Emails Sent',
    value: '8,945',
    change: '+8%',
    trend: 'up',
    icon: Mail,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Reply Rate',
    value: '23.4%',
    change: '+2.1%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    title: 'Active Sequences',
    value: '47',
    change: '-3',
    trend: 'down',
    icon: Activity,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'lead_added',
    message: 'New lead added: Sarah Johnson from TechCorp',
    time: '2 minutes ago',
    status: 'success'
  },
  {
    id: 2,
    type: 'email_reply',
    message: 'Reply received from Michael Chen at StartupXYZ',
    time: '15 minutes ago',
    status: 'success'
  },
  {
    id: 3,
    type: 'sequence_started',
    message: 'Email sequence "Cold Outreach V2" started for 5 leads',
    time: '1 hour ago',
    status: 'info'
  },
  {
    id: 4,
    type: 'lead_qualified',
    message: 'Lead qualified: Emma Davis moved to "Interested" stage',
    time: '2 hours ago',
    status: 'success'
  },
];

const topSequences = [
  {
    name: 'Cold Outreach V2',
    leads: 156,
    replyRate: 28.5,
    status: 'active'
  },
  {
    name: 'Follow-up Sequence',
    leads: 89,
    replyRate: 24.3,
    status: 'active'
  },
  {
    name: 'Re-engagement Campaign',
    leads: 67,
    replyRate: 19.8,
    status: 'paused'
  },
];

export function HomePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your leads.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center text-sm">
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                <span className="text-gray-500 ml-1">from last week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your lead generation efforts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Sequences */}
        <Card>
          <CardHeader>
            <CardTitle>Top Sequences</CardTitle>
            <CardDescription>Best performing email sequences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSequences.map((sequence, index) => (
                <div key={sequence.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">{sequence.name}</span>
                      <Badge variant={sequence.status === 'active' ? 'default' : 'secondary'}>
                        {sequence.status}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{sequence.replyRate}%</span>
                  </div>
                  <Progress value={sequence.replyRate} className="h-2" />
                  <p className="text-xs text-gray-500">{sequence.leads} leads</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle>AI Suggestions</CardTitle>
          <CardDescription>Recommendations to improve your lead generation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900">Follow Up Needed</h4>
              <p className="text-sm text-blue-700 mt-1">12 leads haven't been contacted in 3+ days</p>
              <Button variant="outline" size="sm" className="mt-2">
                Review Leads
              </Button>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900">Sequence Optimization</h4>
              <p className="text-sm text-green-700 mt-1">Your "Cold Outreach V2" can be improved</p>
              <Button variant="outline" size="sm" className="mt-2">
                Optimize
              </Button>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-900">New Opportunities</h4>
              <p className="text-sm text-purple-700 mt-1">5 companies similar to your best leads found</p>
              <Button variant="outline" size="sm" className="mt-2">
                Explore
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}