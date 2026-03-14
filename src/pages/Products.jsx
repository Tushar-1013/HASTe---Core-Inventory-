import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
const mockProducts = [
    { id: "1", name: "Steel Rods", sku: "STL-001", category: "Raw Material", uom: "kg", stock: 2500 },
    { id: "2", name: "Aluminum Sheet", sku: "ALU-002", category: "Raw Material", uom: "kg", stock: 1200 },
    { id: "3", name: "Wooden Chair", sku: "FUR-010", category: "Finished Goods", uom: "pcs", stock: 85 },
    { id: "4", name: "Office Desk", sku: "FUR-011", category: "Finished Goods", uom: "pcs", stock: 42 },
    { id: "5", name: "Paint - White", sku: "PNT-003", category: "Consumables", uom: "liters", stock: 300 },
    { id: "6", name: "Screws M6", sku: "HDW-020", category: "Hardware", uom: "pcs", stock: 15000 },
];
const columns = [
    { header: "SKU", accessor: (r) => <span className="font-mono text-xs text-primary font-medium">{r.sku}</span> },
    { header: "Product Name", accessor: "name" },
    { header: "Category", accessor: "category" },
    { header: "UoM", accessor: "uom" },
    { header: "Stock", accessor: (r) => (<span className={`tabular font-medium ${r.stock < 50 ? "text-destructive" : ""}`}>{r.stock.toLocaleString()}</span>) },
];
export default function Products() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const filtered = mockProducts.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()));
    return (<div>
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Products</h1>
          <p className="text-muted-foreground text-sm">{mockProducts.length} products in inventory</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle">
              <Plus className="h-4 w-4 mr-1"/> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-display">Create Product</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div><Label>Product Name</Label><Input placeholder="e.g. Steel Rods"/></div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>SKU / Code</Label><Input placeholder="e.g. STL-001" className="font-mono"/></div>
                <div>
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select"/></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="raw">Raw Material</SelectItem>
                      <SelectItem value="finished">Finished Goods</SelectItem>
                      <SelectItem value="consumables">Consumables</SelectItem>
                      <SelectItem value="hardware">Hardware</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>Unit of Measure</Label><Input placeholder="e.g. kg, pcs"/></div>
                <div><Label>Initial Stock</Label><Input type="number" placeholder="0"/></div>
              </div>
              <Button onClick={() => setOpen(false)} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Create Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 bg-secondary rounded-md px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground"/>
          <input type="text" placeholder="Search by name or SKU..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"/>
        </div>
        <Select>
          <SelectTrigger className="w-40"><SelectValue placeholder="Category"/></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="raw">Raw Material</SelectItem>
            <SelectItem value="finished">Finished Goods</SelectItem>
            <SelectItem value="consumables">Consumables</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable columns={columns} data={filtered}/>
    </div>);
}
