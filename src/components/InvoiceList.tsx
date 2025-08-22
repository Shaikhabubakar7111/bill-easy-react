import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  Download,
  Edit,
  Eye
} from "lucide-react";

const InvoiceList = () => {
  const invoices = [
    { 
      id: "INV-001", 
      client: "Acme Corporation", 
      amount: "$2,500.00", 
      status: "paid", 
      date: "2024-01-15",
      dueDate: "2024-02-15"
    },
    { 
      id: "INV-002", 
      client: "Tech Solutions Ltd", 
      amount: "$1,800.00", 
      status: "pending", 
      date: "2024-01-14",
      dueDate: "2024-02-14"
    },
    { 
      id: "INV-003", 
      client: "Design Co", 
      amount: "$3,200.00", 
      status: "overdue", 
      date: "2024-01-10",
      dueDate: "2024-02-10"
    },
    { 
      id: "INV-004", 
      client: "StartupXYZ", 
      amount: "$950.00", 
      status: "paid", 
      date: "2024-01-12",
      dueDate: "2024-02-12"
    },
    { 
      id: "INV-005", 
      client: "Global Industries", 
      amount: "$4,750.00", 
      status: "draft", 
      date: "2024-01-16",
      dueDate: "2024-02-16"
    },
    { 
      id: "INV-006", 
      client: "Creative Agency", 
      amount: "$2,100.00", 
      status: "pending", 
      date: "2024-01-13",
      dueDate: "2024-02-13"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'success';
      case 'pending': return 'warning';
      case 'overdue': return 'destructive';
      case 'draft': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
          <p className="text-muted-foreground">Manage and track all your invoices.</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300">
          <Plus className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search invoices..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Invoices Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="font-semibold">{invoice.id}</div>
                    <div className="text-sm text-muted-foreground">{invoice.client}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className="font-medium">{invoice.amount}</div>
                    <div className="text-sm text-muted-foreground">Due: {invoice.dueDate}</div>
                  </div>
                  
                  <Badge variant={getStatusColor(invoice.status) as any} className="min-w-16 justify-center">
                    {invoice.status}
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceList;