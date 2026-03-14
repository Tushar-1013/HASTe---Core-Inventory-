import { useState } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/DataTable";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
const mockReceipts = [
    { id: "1", reference: "REC-00142", supplier: "SteelCo Ltd", date: "2026-03-14", products: 3, status: "done" },
    { id: "2", reference: "REC-00143", supplier: "WoodWorks Inc", date: "2026-03-13", products: 2, status: "waiting" },
    { id: "3", reference: "REC-00144", supplier: "PaintPro", date: "2026-03-12", products: 1, status: "draft" },
    { id: "4", reference: "REC-00145", supplier: "HardwarePlus", date: "2026-03-11", products: 5, status: "ready" },
];
const columns = [
    { header: "Reference", accessor: (r) => <span className="font-mono text-xs text-primary font-medium">{r.reference}</span> },
    { header: "Supplier", accessor: "supplier" },
    { header: "Date", accessor: (r) => <span className="tabular">{r.date}</span> },
    { header: "Products", accessor: (r) => <span className="tabular">{r.products}</span> },
    { header: "Status", accessor: (r) => <StatusBadge status={r.status}/> },
];
export default function Receipts() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (<div>
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Receipts</h1>
          <p className="text-muted-foreground text-sm">Incoming goods from vendors</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle">
              <Plus className="h-4 w-4 mr-1"/> New Receipt
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display">Create Receipt</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div><Label>Reference Date</Label><Input type="date"/></div>
                <div><Label>Supplier</Label><Input placeholder="Supplier name"/></div>
              </div>
              <div>
                <Label>Products</Label>
                <div className="border border-border rounded-md p-4 mt-1 space-y-3">
                  <div className="grid grid-cols-12 gap-2 items-end">
                    <div className="col-span-7">
                      <Label className="text-xs">Product</Label>
                      <Select><SelectTrigger><SelectValue placeholder="Select product"/></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stl">Steel Rods</SelectItem>
                          <SelectItem value="alu">Aluminum Sheet</SelectItem>
                          <SelectItem value="pnt">Paint - White</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-3"><Label className="text-xs">Qty</Label><Input type="number" placeholder="0"/></div>
                    <div className="col-span-2"><Button variant="outline" size="sm" className="w-full">+</Button></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">Save as Draft</Button>
                <Button onClick={() => setOpen(false)} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">Validate</Button>
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

      <DataTable columns={columns} data={mockReceipts} onRowClick={(r) => navigate(`/operations/receipts/${r.id}`)}/>
    </div>);
}
