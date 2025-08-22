import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import InvoiceList from "@/components/InvoiceList";
import ClientList from "@/components/ClientList";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "invoices":
        return <InvoiceList />;
      case "clients":
        return <ClientList />;
      case "payments":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Payments</h1>
            <p className="text-muted-foreground">Payment tracking coming soon...</p>
          </div>
        );
      case "reports":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Reports</h1>
            <p className="text-muted-foreground">Financial reports coming soon...</p>
          </div>
        );
      case "settings":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
            <p className="text-muted-foreground">Application settings coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
