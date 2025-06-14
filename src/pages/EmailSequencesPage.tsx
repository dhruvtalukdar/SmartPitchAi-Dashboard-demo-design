import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Play, 
  Pause, 
  MoreHorizontal,
  Mail,
  Calendar,
  Users,
  TrendingUp,
  Edit,
  Copy,
  Trash2
} from 'lucide-react';

const sequences = [
  {
    id: 1,
    name: 'Cold Outreach V2',
    status: 'active',
    leads: 156,
    steps: 5,
    replyRate: 28.5,
    openRate: 65.2,
    persona: 'VP of Engineering',
    createdDate: '2024-01-10',
    lastModified: '2024-01-15'
  },
  {
    id: 2,
    name: 'Follow-up Sequence',
    status: 'active',
    leads: 89,
    steps: 3,
    replyRate: 24.3,
    openRate: 58.7,
    persona: 'CTO',
    createdDate: '2024-01-08',
    lastModified: '2024-01-12'
  },
  {
    id: 3,
    name: 'Re-engagement Campaign',
    status: 'paused',
    leads: 67,
    steps: 4,
    replyRate: 19.8,
    openRate: 45.3,
    persona: 'Product Manager',
    createdDate: '2024-01-05',
    lastModified: '2024-01-10'
  },
  {
    id: 4,
    name: 'Enterprise Outreach',
    status: 'draft',
    leads: 0,
    steps: 6,
    replyRate: 0,
    openRate: 0,
    persona: 'C-Suite Executive',
    createdDate: '2024-01-16',
    lastModified: '2024-01-16'
  }
];

const templates = [
  {
    id: 1,
    name: 'Cold Introduction',
    subject: 'Quick question about {company_name}',
    category: 'Cold Outreach',
    usage: 234
  },
  {
    id: 2,
    name: 'Follow-up #1',
    subject: 'Following up on my previous email',
    category: 'Follow-up',
    usage: 189
  },
  {
    id: 3,
    name: 'Social Proof',
    subject: 'How {similar_company} increased their ROI by 40%',
    category: 'Social Proof',
    usage: 156
  }
];

export function EmailSequencesPage() {
  const [activeTab, setActiveTab] = useState('sequences');

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Email Sequences</h1>
          <p className="text-gray-600">Create and manage automated email campaigns</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Copy className="w-4 h-4 mr-2" />
            Clone Sequence
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New Sequence
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Active Sequences</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">1,567</div>
            <div className="text-sm text-gray-600">Emails Sent</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">24.8%</div>
            <div className="text-sm text-gray-600">Avg Reply Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">58.3%</div>
            <div className="text-sm text-gray-600">Avg Open Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="sequences">Sequences</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="sequences" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sequences.map((sequence) => (
              <Card key={sequence.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{sequence.name}</CardTitle>
                      <CardDescription>
                        Target: {sequence.persona} • {sequence.steps} steps
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={sequence.status === 'active' ? 'default' : 
                                   sequence.status === 'paused' ? 'secondary' : 'outline'}>
                        {sequence.status}
                      </Badge>
                      <Button size="sm" variant="ghost">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {sequence.leads} leads
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      {sequence.openRate}% open rate
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {sequence.replyRate}% reply rate
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Reply Rate</span>
                      <span>{sequence.replyRate}%</span>
                    </div>
                    <Progress value={sequence.replyRate} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {sequence.status === 'active' ? (
                        <Button size="sm" variant="outline">
                          <Pause className="w-4 h-4 mr-1" />
                          Pause
                        </Button>
                      ) : (
                        <Button size="sm">
                          <Play className="w-4 h-4 mr-1" />
                          Activate
                        </Button>
                      )}
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch checked={sequence.status === 'active'} />
                      <span className="text-sm text-gray-600">Auto-send</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>Reusable email templates for your sequences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {templates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{template.name}</h4>
                      <p className="text-sm text-gray-600">{template.subject}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="outline">{template.category}</Badge>
                        <span className="text-sm text-gray-500">Used {template.usage} times</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Copy className="w-4 h-4 mr-1" />
                        Clone
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sequence Performance</CardTitle>
              <CardDescription>Detailed analytics for your email sequences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-gray-500">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Analytics dashboard coming soon...</p>
                <p className="text-sm">Track open rates, click-through rates, and more</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}