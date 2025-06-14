import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  CreditCard, 
  Check, 
  X, 
  Zap,
  Crown,
  Star,
  Users,
  Mail,
  Database,
  BarChart3,
  Globe,
  Plug,
  Calendar,
  DollarSign
} from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      '1,000 emails per month',
      '5 email sequences',
      'Basic analytics',
      'Email support',
      '1 user'
    ],
    current: false
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'For growing teams with advanced needs',
    features: [
      '5,000 emails per month',
      'Unlimited sequences',
      'Advanced analytics',
      'Priority support',
      '5 users',
      'AI assistant',
      'Company research'
    ],
    current: true,
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'For large teams with custom requirements',
    features: [
      '25,000 emails per month',
      'Unlimited everything',
      'Custom integrations',
      'Dedicated support',
      'Unlimited users',
      'White-label options',
      'Advanced AI features'
    ],
    current: false
  }
];

const integrations = [
  {
    name: 'Gmail',
    description: 'Send emails directly from Gmail',
    category: 'Email',
    status: 'connected',
    icon: Mail,
    plan: 'all'
  },
  {
    name: 'Outlook',
    description: 'Microsoft Outlook integration',
    category: 'Email',
    status: 'available',
    icon: Mail,
    plan: 'all'
  },
  {
    name: 'HubSpot',
    description: 'Sync leads with HubSpot CRM',
    category: 'CRM',
    status: 'connected',
    icon: Database,
    plan: 'pro'
  },
  {
    name: 'Salesforce',
    description: 'Salesforce CRM integration',
    category: 'CRM',
    status: 'available',
    icon: Database,
    plan: 'pro'
  },
  {
    name: 'LinkedIn Sales Navigator',
    description: 'Import leads from LinkedIn',
    category: 'Lead Generation',
    status: 'available',
    icon: Users,
    plan: 'enterprise'
  },
  {
    name: 'Zapier',
    description: 'Connect with 3000+ apps',
    category: 'Automation',
    status: 'available',
    icon: Zap,
    plan: 'pro'
  }
];

const usage = {
  emails: { used: 2847, limit: 5000 },
  sequences: { used: 12, limit: null },
  users: { used: 3, limit: 5 },
  aiQueries: { used: 156, limit: 500 }
};

export function IntegrationsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Integrations & Billing</h1>
          <p className="text-gray-600">Manage your plan, billing, and third-party integrations</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-green-100 text-green-800">Professional Plan</Badge>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="billing" className="space-y-4">
        <TabsList>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="billing" className="space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>You're currently on the Professional plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Professional</h3>
                  <p className="text-gray-600">$79/month • Next billing date: Feb 15, 2024</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline">Cancel Plan</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.current ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    {plan.current && <Check className="w-5 h-5 text-green-500" />}
                  </div>
                  <div className="text-3xl font-bold">
                    {plan.price}<span className="text-lg font-normal text-gray-500">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={plan.current ? 'outline' : 'default'}
                    disabled={plan.current}
                  >
                    {plan.current ? 'Current Plan' : 'Upgrade'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Billing History */}
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>Your recent billing transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: '2024-01-15', amount: '$79.00', status: 'Paid', invoice: 'INV-001' },
                  { date: '2023-12-15', amount: '$79.00', status: 'Paid', invoice: 'INV-002' },
                  { date: '2023-11-15', amount: '$79.00', status: 'Paid', invoice: 'INV-003' },
                ].map((bill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">{bill.invoice}</p>
                        <p className="text-sm text-gray-500">{bill.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{bill.amount}</p>
                      <Badge className="bg-green-100 text-green-800">{bill.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrations.map((integration) => (
              <Card key={integration.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <integration.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        <Badge variant="outline">{integration.category}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {integration.status === 'connected' ? (
                        <Badge className="bg-green-100 text-green-800">Connected</Badge>
                      ) : (
                        <Badge variant="outline">Available</Badge>
                      )}
                      {integration.plan === 'pro' && (
                        <Crown className="w-4 h-4 text-yellow-500" />
                      )}
                      {integration.plan === 'enterprise' && (
                        <Star className="w-4 h-4 text-purple-500" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{integration.description}</p>
                  <Button 
                    variant={integration.status === 'connected' ? 'outline' : 'default'}
                    className="w-full"
                  >
                    {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Usage</CardTitle>
                <CardDescription>Monthly email sending limit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Emails sent this month</span>
                    <span>{usage.emails.used.toLocaleString()} / {usage.emails.limit.toLocaleString()}</span>
                  </div>
                  <Progress value={(usage.emails.used / usage.emails.limit) * 100} className="h-2" />
                  <p className="text-xs text-gray-500">
                    {Math.round(((usage.emails.limit - usage.emails.used) / usage.emails.limit) * 100)}% remaining
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Usage</CardTitle>
                <CardDescription>Active team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Active users</span>
                    <span>{usage.users.used} / {usage.users.limit}</span>
                  </div>
                  <Progress value={(usage.users.used / usage.users.limit) * 100} className="h-2" />
                  <p className="text-xs text-gray-500">
                    {usage.users.limit - usage.users.used} user slots available
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Assistant Usage</CardTitle>
                <CardDescription>Monthly AI query limit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>AI queries this month</span>
                    <span>{usage.aiQueries.used} / {usage.aiQueries.limit}</span>
                  </div>
                  <Progress value={(usage.aiQueries.used / usage.aiQueries.limit) * 100} className="h-2" />
                  <p className="text-xs text-gray-500">
                    {usage.aiQueries.limit - usage.aiQueries.used} queries remaining
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email Sequences</CardTitle>
                <CardDescription>Active email sequences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Active sequences</span>
                    <span>{usage.sequences.used} / Unlimited</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">Unlimited sequences available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}