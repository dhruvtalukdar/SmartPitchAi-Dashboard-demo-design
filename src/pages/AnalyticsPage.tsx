import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Mail, 
  Users, 
  Target,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const metrics = [
  {
    title: 'Total Emails Sent',
    value: '12,459',
    change: '+23%',
    trend: 'up',
    period: 'vs last month'
  },
  {
    title: 'Open Rate',
    value: '24.8%',
    change: '+2.1%',
    trend: 'up',
    period: 'vs last month'
  },
  {
    title: 'Reply Rate',
    value: '8.4%',
    change: '+0.8%',
    trend: 'up',
    period: 'vs last month'
  },
  {
    title: 'Bounce Rate',
    value: '2.1%',
    change: '-0.3%',
    trend: 'down',
    period: 'vs last month'
  }
];

const topSequences = [
  {
    name: 'Cold Outreach V2',
    sent: 1234,
    opened: 345,
    replied: 89,
    openRate: 28.0,
    replyRate: 7.2,
    status: 'active'
  },
  {
    name: 'Follow-up Sequence',
    sent: 856,
    opened: 267,
    replied: 72,
    openRate: 31.2,
    replyRate: 8.4,
    status: 'active'
  },
  {
    name: 'Re-engagement Campaign',
    sent: 523,
    opened: 98,
    replied: 23,
    openRate: 18.7,
    replyRate: 4.4,
    status: 'paused'
  }
];

const leadSources = [
  { source: 'LinkedIn', count: 456, percentage: 35 },
  { source: 'Cold Email', count: 389, percentage: 30 },
  { source: 'Referral', count: 267, percentage: 20 },
  { source: 'Website', count: 145, percentage: 11 },
  { source: 'Other', count: 52, percentage: 4 }
];

const recentActivity = [
  {
    date: '2024-01-16',
    emails: 123,
    opens: 34,
    replies: 8,
    openRate: 27.6,
    replyRate: 6.5
  },
  {
    date: '2024-01-15',
    emails: 156,
    opens: 45,
    replies: 12,
    openRate: 28.8,
    replyRate: 7.7
  },
  {
    date: '2024-01-14',
    emails: 189,
    opens: 52,
    replies: 15,
    openRate: 27.5,
    replyRate: 7.9
  },
  {
    date: '2024-01-13',
    emails: 98,
    opens: 28,
    replies: 7,
    openRate: 28.6,
    replyRate: 7.1
  }
];

export function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Track your email performance and lead generation metrics</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="flex items-center text-sm">
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {metric.change}
                </span>
                <span className="text-gray-500 ml-1">{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sequences">Sequences</TabsTrigger>
          <TabsTrigger value="leads">Lead Sources</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Performance Trends</CardTitle>
                <CardDescription>Daily email metrics over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Email performance chart</p>
                  <p className="text-sm">Interactive charts coming soon</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>Lead progression through your sequences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Emails Sent</span>
                    <span className="text-sm text-gray-500">12,459</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Emails Opened</span>
                    <span className="text-sm text-gray-500">3,090 (24.8%)</span>
                  </div>
                  <Progress value={24.8} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Replies Received</span>
                    <span className="text-sm text-gray-500">1,047 (8.4%)</span>
                  </div>
                  <Progress value={8.4} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Leads Qualified</span>
                    <span className="text-sm text-gray-500">342 (2.7%)</span>
                  </div>
                  <Progress value={2.7} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sequences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sequence Performance</CardTitle>
              <CardDescription>Detailed metrics for each email sequence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSequences.map((sequence, index) => (
                  <div key={sequence.name} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium text-gray-900">{sequence.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span>{sequence.sent} sent</span>
                          <span>{sequence.opened} opened</span>
                          <span>{sequence.replied} replied</span>
                        </div>
                      </div>
                      <Badge variant={sequence.status === 'active' ? 'default' : 'secondary'}>
                        {sequence.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Open Rate</span>
                          <span>{sequence.openRate}%</span>
                        </div>
                        <Progress value={sequence.openRate} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Reply Rate</span>
                          <span>{sequence.replyRate}%</span>
                        </div>
                        <Progress value={sequence.replyRate} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leads" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lead Sources</CardTitle>
              <CardDescription>Where your leads are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leadSources.map((source) => (
                  <div key={source.source} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">{source.source}</span>
                        <div className="text-sm text-gray-500">{source.count} leads</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-24">
                        <Progress value={source.percentage} className="h-2" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-12 text-right">
                        {source.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Daily email activity breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.date} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{activity.date}</div>
                        <div className="text-sm text-gray-500">
                          {activity.emails} emails sent • {activity.opens} opens • {activity.replies} replies
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                          <span>{activity.openRate}%</span>
                        </div>
                        <div className="flex items-center">
                          <Target className="w-4 h-4 text-blue-500 mr-1" />
                          <span>{activity.replyRate}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}