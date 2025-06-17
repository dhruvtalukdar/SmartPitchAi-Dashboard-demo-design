import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Mail, 
  Building2, 
  Bot, 
  BarChart3, 
  Settings, 
  CreditCard,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { UserMenu } from './UserMenu';

const navigation = [
  { 
    name: 'Overview', 
    href: '/', 
    icon: Home, 
    allowedRoles: [UserRole.Member, UserRole.Manager, UserRole.Admin] 
  },
  { 
    name: 'Leads', 
    href: '/leads', 
    icon: Users, 
    allowedRoles: [UserRole.Member, UserRole.Manager, UserRole.Admin] 
  },
  { 
    name: 'Email Sequences', 
    href: '/email-sequences', 
    icon: Mail, 
    allowedRoles: [UserRole.Member, UserRole.Manager, UserRole.Admin] 
  },
  { 
    name: 'Company Research', 
    href: '/company-research', 
    icon: Building2, 
    allowedRoles: [UserRole.Member, UserRole.Manager, UserRole.Admin] 
  },
  { 
    name: 'AI Assistant', 
    href: '/ai-assistant', 
    icon: Bot, 
    allowedRoles: [UserRole.Member, UserRole.Manager, UserRole.Admin] 
  },
  { 
    name: 'Analytics', 
    href: '/analytics', 
    icon: BarChart3, 
    allowedRoles: [UserRole.Manager, UserRole.Admin] 
  },
  { 
    name: 'Settings', 
    href: '/settings', 
    icon: Settings, 
    allowedRoles: [UserRole.Admin] 
  },
  { 
    name: 'Integrations', 
    href: '/integrations', 
    icon: CreditCard, 
    allowedRoles: [UserRole.Admin] 
  },
];

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const { user, hasRole } = useAuth();

  if (!user) return null;

  const allowedNavigation = navigation.filter(item => 
    hasRole(item.allowedRoles)
  );

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900">LeadFlow</span>
            <div className="text-xs text-gray-500">{user.organizationName}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <UserMenu />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-gray-900">LeadFlow</span>
                      <div className="text-xs text-gray-500">{user.organizationName}</div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                  {allowedNavigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200',
                          isActive
                            ? 'bg-blue-50 text-blue-700 shadow-sm'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        )
                      }
                    >
                      <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                      {item.name}
                    </NavLink>
                  ))}
                </nav>

                {/* User Profile */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">
                        {user.avatar || `${user.firstName[0]}${user.lastName[0]}`}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user.firstName} {user.lastName}
                      </p>
                      <div className="flex items-center space-x-1">
                        <Badge variant="outline" className="text-xs">
                          {user.role}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}