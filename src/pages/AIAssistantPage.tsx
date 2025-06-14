import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Send, 
  Bot, 
  User, 
  Copy,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
  Mail,
  Users,
  Building2,
  BarChart3
} from 'lucide-react';

const suggestedPrompts = [
  {
    id: 1,
    title: 'Write a cold email',
    description: 'Generate a personalized cold email for a specific lead',
    icon: Mail,
    prompt: 'Write a cold email to a VP of Engineering at a fintech startup'
  },
  {
    id: 2,
    title: 'Analyze LinkedIn profile',
    description: 'Get insights from a LinkedIn profile URL',
    icon: Users,
    prompt: 'Analyze this LinkedIn profile and suggest talking points'
  },
  {
    id: 3,
    title: 'Research company',
    description: 'Get detailed company information and insights',
    icon: Building2,
    prompt: 'Research TechCorp Solutions and suggest an outreach strategy'
  },
  {
    id: 4,
    title: 'Follow-up email',
    description: 'Create a follow-up email for unresponsive leads',
    icon: BarChart3,
    prompt: 'Write a follow-up email for someone who hasn\'t replied in 2 weeks'
  }
];

const initialMessages = [
  {
    id: 1,
    type: 'assistant',
    content: 'Hello! I\'m your AI assistant for lead generation and outreach. I can help you write emails, research companies, analyze LinkedIn profiles, and create personalized outreach strategies. What would you like to work on today?',
    timestamp: new Date().toISOString()
  }
];

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: messages.length + 2,
        type: 'assistant',
        content: generateAIResponse(content),
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (prompt: string): string => {
    if (prompt.toLowerCase().includes('email')) {
      return `Here's a personalized cold email draft:

**Subject: Quick question about [Company Name]'s engineering challenges**

Hi [First Name],

I noticed [Company Name] recently raised Series B funding - congratulations! I saw your background in scaling engineering teams and wanted to reach out.

We help fintech companies like yours reduce deployment time by 60% while maintaining security compliance. Companies like [Similar Company] have seen significant improvements in their release cycles.

Would you be interested in a 15-minute call to discuss how this might apply to your current infrastructure?

Best regards,
[Your Name]

*Feel free to customize this template based on your specific value proposition and the recipient's background.*`;
    }
    
    if (prompt.toLowerCase().includes('linkedin')) {
      return `I'd be happy to analyze a LinkedIn profile for you! Please share the LinkedIn URL and I'll provide:

• Key background insights
• Mutual connections or interests
• Conversation starters
• Personalization opportunities
• Recommended outreach timing

Once you share the profile, I can give you specific talking points and suggest the best approach for your outreach.`;
    }
    
    if (prompt.toLowerCase().includes('research') || prompt.toLowerCase().includes('company')) {
      return `For company research, I can help you gather:

**Company Overview:**
• Industry and market position
• Recent news and funding
• Key decision makers
• Technology stack
• Growth indicators

**Outreach Strategy:**
• Best contact points
• Timing recommendations
• Value proposition alignment
• Personalization opportunities

Please share the company name or website, and I'll provide a comprehensive research report with actionable insights for your outreach.`;
    }
    
    return `I understand you're looking for help with "${prompt}". I can assist with:

• **Email Writing**: Cold emails, follow-ups, and nurture sequences
• **Company Research**: Detailed insights and outreach strategies  
• **LinkedIn Analysis**: Profile insights and conversation starters
• **Personalization**: Tailored messaging based on prospect data
• **Strategy Planning**: Outreach timing and sequence optimization

What specific aspect would you like to focus on? The more details you provide, the better I can help you create effective outreach campaigns.`;
  };

  const handleSuggestedPrompt = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
          <p className="text-gray-600">Get help with email writing, research, and outreach strategies</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">GPT-4 Powered</Badge>
          <Badge variant="secondary">Online</Badge>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 flex gap-6">
        {/* Suggested Prompts Sidebar */}
        <div className="w-80 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Start</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {suggestedPrompts.map((prompt) => (
                <div
                  key={prompt.id}
                  className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleSuggestedPrompt(prompt.prompt)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-50 rounded-md">
                      <prompt.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-gray-900">{prompt.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{prompt.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5" />
                  <p className="text-gray-600">Be specific about your target audience and goals</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5" />
                  <p className="text-gray-600">Include company or contact details for better personalization</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5" />
                  <p className="text-gray-600">Ask for specific formats like "email subject lines" or "LinkedIn messages"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <Card className="flex-1 flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg">AI Assistant</CardTitle>
                <p className="text-sm text-gray-600">Ready to help with your outreach</p>
              </div>
            </div>
          </CardHeader>
          
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>
                        {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div className="prose prose-sm max-w-none">
                        <pre className="whitespace-pre-wrap font-sans">{message.content}</pre>
                      </div>
                      {message.type === 'assistant' && (
                        <div className="flex items-center space-x-2 mt-2 pt-2 border-t border-gray-200">
                          <Button size="sm" variant="ghost" onClick={() => copyToClipboard(message.content)}>
                            <Copy className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <ThumbsUp className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <ThumbsDown className="w-3 h-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>
                        <Bot className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask me anything about lead generation, email writing, or company research..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                disabled={isLoading}
              />
              <Button onClick={() => handleSendMessage(inputValue)} disabled={isLoading || !inputValue.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}