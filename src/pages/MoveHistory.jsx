import { DataTable } from "@/components/DataTable";
import { Search } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
const mockMoves = [
    { id: "1", reference: "MOV-00201", product: "Steel Rods", from: "Vendor", to: "Main Warehouse", qty: 100, date: "2026-03-14", type: "Receipt" },
    { id: "2", reference: "MOV-00202", product: "Steel Rods", from: "Main Warehouse", to: "Production Rack", qty: 50, date: "2026-03-14", type: "Transfer" },
    { id: "3", reference: "MOV-00203", product: "Wooden Chair", from: "Main Warehouse", to: "Customer", qty: 20, date: "2026-03-13", type: "Delivery" },
    { id: "4", reference: "MOV-00204", product: "Paint - White", from: "Vendor", to: "Main Warehouse", qty: 200, date: "2026-03-13", type: "Receipt" },
    { id: "5", reference: "MOV-00205", product: "Steel Rods", from: "Main Warehouse", to: "Adjustment", qty: -3, date: "2026-03-12", type: "Adjustment" },
];
const columns = [
    { header: "Reference", accessor: (r) => <span className="font-mono text-xs text-primary font-medium">{r.reference}</span> },
    { header: "Product", accessor: "product" },
    { header: "From", accessor: "from" },
    { header: "To", accessor: "to" },
    { header: "Qty", accessor: (r) => <span className={`tabular font-medium ${r.qty < 0 ? "text-destructive" : ""}`}>{r.qty > 0 ? `+${r.qty}` : r.qty}</span> },
    { header: "Date", accessor: (r) => <span className="tabular">{r.date}</span> },
    { header: "Type", accessor: "type" },
];
export default function MoveHistory() {
    const [search, setSearch] = useState("");
    const filtered = mockMoves.filter((m) => m.product.toLowerCase().includes(search.toLowerCase()) || m.reference.toLowerCase().includes(search.toLowerCase()));
    return (<div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-1">Move History</h1>
        <p className="text-muted-foreground text-sm">Complete ledger of all stock movements</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 bg-secondary rounded-md px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground"/>
          <input type="text" placeholder="Search moves..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"/>
        </div>
        <Select>
          <SelectTrigger className="w-36"><SelectValue placeholder="Type"/></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="receipt">Receipt</SelectItem>
            <SelectItem value="delivery">Delivery</SelectItem>
            <SelectItem value="transfer">Transfer</SelectItem>
            <SelectItem value="adjustment">Adjustment</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable columns={columns} data={filtered}/>
    </div>);
}
