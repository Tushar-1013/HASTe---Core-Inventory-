import { useState } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/DataTable";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
const mockDeliveries = [
    { id: "1", reference: "DEL-00089", customer: "BuildMart", date: "2026-03-14", scheduledDate: "2026-03-16", products: 2, status: "ready" },
    { id: "2", reference: "DEL-00090", customer: "HomeFurnish Co", date: "2026-03-13", scheduledDate: "2026-03-15", products: 4, status: "draft" },
    { id: "3", reference: "DEL-00091", customer: "ConstructPro", date: "2026-03-12", scheduledDate: "2026-03-14", products: 1, status: "done" },
];
const columns = [
    { header: "Reference", accessor: (r) => <span className="font-mono text-xs text-primary font-medium">{r.reference}</span> },
    { header: "Customer", accessor: "customer" },
    { header: "Date", accessor: (r) => <span className="tabular">{r.date}</span> },
    { header: "Scheduled", accessor: (r) => <span className="tabular">{r.scheduledDate}</span> },
    { header: "Products", accessor: (r) => <span className="tabular">{r.products}</span> },
    { header: "Status", accessor: (r) => <StatusBadge status={r.status}/> },
];
export default function Delivery() {
    const [open, setOpen] = useState(false);
    return (<div>
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Delivery Orders</h1>
          <p className="text-muted-foreground text-sm">Outgoing shipments to customers</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle">
              <Plus className="h-4 w-4 mr-1"/> New Delivery
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display">Create Delivery Order</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div><Label>Delivery Date</Label><Input type="date"/></div>
                <div><Label>Scheduled Date</Label><Input type="date"/></div>
              </div>
              <div><Label>Customer</Label><Input placeholder="Customer name"/></div>
              <div>
                <Label>Products</Label>
                <div className="border border-border rounded-md p-4 mt-1 space-y-3">
                  <div className="grid grid-cols-12 gap-2 items-end">
                    <div className="col-span-7">
                      <Label className="text-xs">Product</Label>
                      <Select><SelectTrigger><SelectValue placeholder="Select"/></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="chair">Wooden Chair</SelectItem>
                          <SelectItem value="desk">Office Desk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-3"><Label className="text-xs">Qty</Label><Input type="number" placeholder="0"/></div>
                    <div className="col-span-2"><Button variant="outline" size="sm" className="w-full">+</Button></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">Save Draft</Button>
                <Button onClick={() => setOpen(false)} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">Confirm</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-2 mb-6">
        {["All", "Draft", "Waiting", "Ready", "Done"].map((f) => (<button key={f} className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors first:bg-primary first:text-primary-foreground">
            {f}
          </button>))}
      </div>

      <DataTable columns={columns} data={mockDeliveries}/>
    </div>);
}
