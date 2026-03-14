import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReceiptDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Receipts
      </button>

      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold text-foreground">REC-0014{id}</h1>
            <StatusBadge status="waiting" />
          </div>
          <p className="text-muted-foreground text-sm">Supplier: SteelCo Ltd</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Print</Button>
          <Button variant="outline">Cancel</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Validate</Button>
        </div>
      </div>

      <Tabs defaultValue="products">
        <TabsList className="bg-secondary">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="info">Info</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="mt-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Product</th>
                  <th className="text-left px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Ordered</th>
                  <th className="text-left px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Received</th>
                  <th className="text-left px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">UoM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-3">Steel Rods</td>
                  <td className="px-4 py-3 tabular">100</td>
                  <td className="px-4 py-3 tabular">100</td>
                  <td className="px-4 py-3">kg</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3">Aluminum Sheet</td>
                  <td className="px-4 py-3 tabular">50</td>
                  <td className="px-4 py-3 tabular">45</td>
                  <td className="px-4 py-3">kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="info" className="mt-6">
          <div className="grid grid-cols-2 gap-6 max-w-lg">
            <div><p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Reference Date</p><p className="text-sm">2026-03-14</p></div>
            <div><p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Supplier</p><p className="text-sm">SteelCo Ltd</p></div>
            <div><p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Warehouse</p><p className="text-sm">Main Warehouse</p></div>
            <div><p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Location</p><p className="text-sm">Rack A</p></div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
