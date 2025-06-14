import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Building2, 
  Users, 
  Globe, 
  MapPin,
  DollarSign,
  Calendar,
  TrendingUp,
  Mail,
  Loader2,
  ExternalLink,
  User,
  Briefcase
} from 'lucide-react';

const sampleCompany = {
  name: 'TechCorp Solutions',
  domain: 'techcorp.com',
  industry: 'Software Development',
  size: '501-1000 employees',
  location: 'San Francisco, CA',
  founded: '2015',
  funding: '$50M Series B',
  description: 'TechCorp Solutions is a leading provider of enterprise software solutions, specializing in cloud infrastructure and data analytics platforms.',
  keyPeople: [
    {
      name: 'Sarah Johnson',
      title: 'CEO & Co-founder',
      linkedin: 'linkedin.com/in/sarahjohnson',
      email: 'sarah@techcorp.com'
    },
    {
      name: 'Michael Chen',
      title: 'CTO',
      linkedin: 'linkedin.com/in/michaelchen',
      email: 'michael@techcorp.com'
    },
    {
      name: 'Emma Davis',
      title: 'VP of Sales',
      linkedin: 'linkedin.com/in/emmadavis',
      email: 'emma@techcorp.com'
    }
  ],
  techStack: ['React', 'Node.js', 'AWS', 'MongoDB', 'Redis', 'Docker'],
  recentNews: [
    {
      title: 'TechCorp Raises $50M Series B Funding',
      date: '2024-01-10',
      source: 'TechCrunch',
      url: '#'
    },
    {
      title: 'New Partnership with Enterprise Cloud Provider',
      date: '2024-01-05',
      source: 'Business Wire',
      url: '#'
    }
  ],
  socialMedia: {
    linkedin: 'linkedin.com/company/techcorp',
    twitter: 'twitter.com/techcorp',
    website: 'techcorp.com'
  }
};

export function CompanyResearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setHasResults(true);
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Company Research</h1>
          <p className="text-gray-600">Research companies and generate personalized outreach sequences</p>
        </div>
        <Button size="sm">
          <Mail className="w-4 h-4 mr-2" />
          Generate Sequence
        </Button>
      </div>

      {/* Search Section */}
      <Card>
        <CardHeader>
          <CardTitle>Company Lookup</CardTitle>
          <CardDescription>Enter a company name or website URL to get detailed insights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Enter company name or website URL (e.g., techcorp.com)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Search className="w-4 h-4 mr-2" />
              )}
              Research
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {hasResults && (
        <div className="space-y-6">
          {/* Company Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{sampleCompany.name}</CardTitle>
                  <CardDescription>{sampleCompany.description}</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit Website
                  </Button>
                  <Button size="sm">
                    <Mail className="w-4 h-4 mr-1" />
                    Generate Sequence
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Industry:</span>
                    <Badge variant="outline">{sampleCompany.industry}</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Size:</span>
                    <span className="text-sm font-medium">{sampleCompany.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Location:</span>
                    <span className="text-sm font-medium">{sampleCompany.location}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Founded:</span>
                    <span className="text-sm font-medium">{sampleCompany.founded}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Funding:</span>
                    <span className="text-sm font-medium">{sampleCompany.funding}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Website:</span>
                    <span className="text-sm font-medium">{sampleCompany.domain}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Tech Stack:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {sampleCompany.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Information */}
          <Tabs defaultValue="people" className="space-y-4">
            <TabsList>
              <TabsTrigger value="people">Key People</TabsTrigger>
              <TabsTrigger value="news">Recent News</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="people">
              <Card>
                <CardHeader>
                  <CardTitle>Key People</CardTitle>
                  <CardDescription>Decision makers and key contacts at {sampleCompany.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sampleCompany.keyPeople.map((person, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{person.name}</h4>
                            <p className="text-sm text-gray-600">{person.title}</p>
                            <p className="text-sm text-gray-500">{person.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            LinkedIn
                          </Button>
                          <Button size="sm">
                            <Mail className="w-4 h-4 mr-1" />
                            Add to Sequence
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="news">
              <Card>
                <CardHeader>
                  <CardTitle>Recent News</CardTitle>
                  <CardDescription>Latest news and updates about {sampleCompany.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sampleCompany.recentNews.map((news, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{news.title}</h4>
                            <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                              <span>{news.source}</span>
                              <span>•</span>
                              <span>{news.date}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Read More
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Generated Insights</CardTitle>
                  <CardDescription>Personalized recommendations for outreach</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-medium text-blue-900">Timing Opportunity</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Recent Series B funding suggests expansion phase - ideal time for enterprise solutions.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium text-green-900">Tech Stack Alignment</h4>
                      <p className="text-sm text-green-700 mt-1">
                        Their React/Node.js stack aligns well with modern development practices - emphasize scalability.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h4 className="font-medium text-purple-900">Outreach Recommendation</h4>
                      <p className="text-sm text-purple-700 mt-1">
                        Lead with recent funding news and focus on scaling infrastructure solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* Empty State */}
      {!hasResults && !isLoading && (
        <Card>
          <CardContent className="text-center py-12">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Start Your Research</h3>
            <p className="text-gray-600 mb-6">
              Enter a company name or website URL above to get detailed insights, key contacts, and AI-powered outreach recommendations.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline">
                <Briefcase className="w-4 h-4 mr-2" />
                View Sample Report
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}