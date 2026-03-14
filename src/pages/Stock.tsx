import { DataTable, Column } from "@/components/DataTable";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface StockItem {
  id: string;
  product: string;
  perUnitCost: string;
  onHand: number;
  freeToUse: number;
}

const mockStock: StockItem[] = [
  { id: "1", product: "Steel Rods", perUnitCost: "₹50/kg", onHand: 2500, freeToUse: 2400 },
  { id: "2", product: "Aluminum Sheet", perUnitCost: "₹120/kg", onHand: 1200, freeToUse: 1100 },
  { id: "3", product: "Wooden Chair", perUnitCost: "₹800/pc", onHand: 85, freeToUse: 65 },
  { id: "4", product: "Office Desk", perUnitCost: "₹2500/pc", onHand: 42, freeToUse: 30 },
  { id: "5", product: "Paint - White", perUnitCost: "₹200/L", onHand: 300, freeToUse: 280 },
  { id: "6", product: "Screws M6", perUnitCost: "₹0.50/pc", onHand: 15000, freeToUse: 14800 },
];

const columns: Column<StockItem>[] = [
  { header: "Product", accessor: "product" },
  { header: "Per Unit Cost", accessor: (r) => <span className="font-mono text-xs">{r.perUnitCost}</span> },
  { header: "On Hand", accessor: (r) => <span className="tabular font-medium">{r.onHand.toLocaleString()}</span> },
  { header: "Free to Use", accessor: (r) => <span className="tabular">{r.freeToUse.toLocaleString()}</span> },
];

export default function Stock() {
  const [search, setSearch] = useState("");
  const filtered = mockStock.filter((s) => s.product.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-1">Stock</h1>
        <p className="text-muted-foreground text-sm">Current stock levels across all warehouses</p>
      </div>

      <div className="flex items-center gap-2 bg-secondary rounded-md px-3 py-2 max-w-sm mb-6">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground" />
      </div>

      <DataTable columns={columns} data={filtered} />
    </div>
  );
}
