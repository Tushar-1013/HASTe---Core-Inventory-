import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { DataTable, Column } from "@/components/DataTable";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface WarehouseItem {
  id: string;
  name: string;
  shortCode: string;
  address: string;
  locations: number;
}

const mockWarehouses: WarehouseItem[] = [
  { id: "1", name: "Main Warehouse", shortCode: "MW", address: "123 Industrial Area, Block A", locations: 12 },
  { id: "2", name: "Production Floor", shortCode: "PF", address: "123 Industrial Area, Block B", locations: 6 },
];

interface LocationItem {
  id: string;
  name: string;
  warehouse: string;
  type: string;
}

const mockLocations: LocationItem[] = [
  { id: "1", name: "Rack A", warehouse: "Main Warehouse", type: "Storage" },
  { id: "2", name: "Rack B", warehouse: "Main Warehouse", type: "Storage" },
  { id: "3", name: "Receiving Dock", warehouse: "Main Warehouse", type: "Input" },
  { id: "4", name: "Assembly Line 1", warehouse: "Production Floor", type: "Production" },
];

const whColumns: Column<WarehouseItem>[] = [
  { header: "Name", accessor: "name" },
  { header: "Code", accessor: (r) => <span className="font-mono text-xs text-primary">{r.shortCode}</span> },
  { header: "Address", accessor: "address" },
  { header: "Locations", accessor: (r) => <span className="tabular">{r.locations}</span> },
];

const locColumns: Column<LocationItem>[] = [
  { header: "Location", accessor: "name" },
  { header: "Warehouse", accessor: "warehouse" },
  { header: "Type", accessor: "type" },
];

export default function Warehouse() {
  const [whOpen, setWhOpen] = useState(false);

  return (
    <div>
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Warehouse Settings</h1>
          <p className="text-muted-foreground text-sm">Manage warehouses and locations</p>
        </div>
        <Dialog open={whOpen} onOpenChange={setWhOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle">
              <Plus className="h-4 w-4 mr-1" /> Add Warehouse
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle className="font-display">Add Warehouse</DialogTitle></DialogHeader>
            <div className="space-y-4 pt-2">
              <div><Label>Name</Label><Input placeholder="e.g. Main Warehouse" /></div>
              <div><Label>Short Code</Label><Input placeholder="e.g. MW" className="font-mono" /></div>
              <div><Label>Address</Label><Input placeholder="Full address" /></div>
              <Button onClick={() => setWhOpen(false)} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Create</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <h2 className="text-lg font-display font-semibold mb-4">Warehouses</h2>
      <DataTable columns={whColumns} data={mockWarehouses} />

      <h2 className="text-lg font-display font-semibold mb-4 mt-10">Locations</h2>
      <DataTable columns={locColumns} data={mockLocations} />
    </div>
  );
}
