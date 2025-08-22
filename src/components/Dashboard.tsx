import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  FileText, 
  Users, 
  Clock,
  Plus,
  Eye
} from "lucide-react";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$24,680",
      icon: DollarSign,
      trend: "+12.5%",
      trendUp: true
    },
    {
      title: "Pending Invoices",
      value: "8",
      icon: Clock,
      trend: "-2",
      trendUp: false
    },
    {
      title: "Total Clients",
      value: "42",
      icon: Users,
      trend: "+3",
      trendUp: true
    },
    {
      title: "This Month",
      value: "$8,420",
      icon: FileText,
      trend: "+18%",
      trendUp: true
    }
  ];

  const recentInvoices = [
    { id: "INV-001", client: "Acme Corp", amount: "$2,500", status: "paid", date: "2024-01-15" },
    { id: "INV-002", client: "Tech Solutions", amount: "$1,800", status: "pending", date: "2024-01-14" },
    { id: "INV-003", client: "Design Co", amount: "$3,200", status: "overdue", date: "2024-01-10" },
    { id: "INV-004", client: "StartupXYZ", amount: "$950", status: "paid", date: "2024-01-12" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'success';
      case 'pending': return 'warning';
      case 'overdue': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your billing overview.</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300">
          <Plus className="mr-2 h-4 w-4" />
          New Invoice
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs flex items-center ${
                metric.trendUp ? 'text-success' : 'text-destructive'
              }`}>
                {metric.trend} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Invoices */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Invoices</CardTitle>
          <Button variant="outline" size="sm">
            <Eye className="mr-2 h-4 w-4" />
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInvoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <span className="font-semibold">{invoice.id}</span>
                    <span className="text-sm text-muted-foreground">{invoice.client}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium">{invoice.amount}</span>
                  <Badge variant={getStatusColor(invoice.status) as any}>
                    {invoice.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground w-20 text-right">
                    {invoice.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;