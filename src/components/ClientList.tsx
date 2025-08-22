import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Plus, 
  Mail,
  Phone,
  Edit,
  MoreHorizontal
} from "lucide-react";

const ClientList = () => {
  const clients = [
    {
      id: 1,
      name: "Acme Corporation",
      email: "contact@acme.com",
      phone: "+1 (555) 123-4567",
      totalInvoiced: "$12,500",
      pendingAmount: "$2,500",
      initials: "AC"
    },
    {
      id: 2,
      name: "Tech Solutions Ltd",
      email: "hello@techsolutions.com",
      phone: "+1 (555) 987-6543",
      totalInvoiced: "$8,900",
      pendingAmount: "$1,800",
      initials: "TS"
    },
    {
      id: 3,
      name: "Design Co",
      email: "team@designco.com",
      phone: "+1 (555) 456-7890",
      totalInvoiced: "$15,600",
      pendingAmount: "$3,200",
      initials: "DC"
    },
    {
      id: 4,
      name: "StartupXYZ",
      email: "info@startupxyz.com",
      phone: "+1 (555) 321-9876",
      totalInvoiced: "$4,750",
      pendingAmount: "$0",
      initials: "SX"
    },
    {
      id: 5,
      name: "Global Industries",
      email: "contact@globalind.com",
      phone: "+1 (555) 654-3210",
      totalInvoiced: "$22,300",
      pendingAmount: "$4,750",
      initials: "GI"
    },
    {
      id: 6,
      name: "Creative Agency",
      email: "hello@creative-agency.com",
      phone: "+1 (555) 789-0123",
      totalInvoiced: "$9,800",
      pendingAmount: "$2,100",
      initials: "CA"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground">Manage your client relationships and contact information.</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300">
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search clients..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <Card key={client.id} className="hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {client.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{client.name}</CardTitle>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="mr-2 h-4 w-4" />
                  {client.email}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="mr-2 h-4 w-4" />
                  {client.phone}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Total Invoiced</div>
                  <div className="font-semibold text-success">{client.totalInvoiced}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Pending</div>
                  <div className="font-semibold text-warning">{client.pendingAmount}</div>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  New Invoice
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClientList;