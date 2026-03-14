import { Package, ArrowDownToLine, Truck, AlertTriangle, BarChart3 } from "lucide-react";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { DataTable, Column } from "@/components/DataTable";
import { useNavigate } from "react-router-dom";

const kpis = [
  { title: "Total Products", value: 248, icon: Package, subtitle: "+12 this week", trend: "up" as const },
  { title: "Low Stock Items", value: 14, icon: AlertTriangle, subtitle: "3 out of stock", trend: "down" as const },
  { title: "Pending Receipts", value: 8, icon: ArrowDownToLine, subtitle: "5 awaiting validation" },
  { title: "Pending Deliveries", value: 5, icon: Truck, subtitle: "2 ready to ship" },
  { title: "Internal Transfers", value: 3, icon: BarChart3, subtitle: "Scheduled today" },
];

interface RecentActivity {
  id: string;
  type: string;
  reference: string;
  date: string;
  status: "draft" | "waiting" | "ready" | "done" | "canceled";
}

const recentData: RecentActivity[] = [
  { id: "1", type: "Receipt", reference: "REC-00142", date: "2026-03-14", status: "done" },
  { id: "2", type: "Delivery", reference: "DEL-00089", date: "2026-03-14", status: "ready" },
  { id: "3", type: "Receipt", reference: "REC-00143", date: "2026-03-13", status: "waiting" },
  { id: "4", type: "Delivery", reference: "DEL-00090", date: "2026-03-13", status: "draft" },
  { id: "5", type: "Transfer", reference: "TRF-00031", date: "2026-03-12", status: "done" },
];

const columns: Column<RecentActivity>[] = [
  { header: "Reference", accessor: (r) => <span className="font-mono text-xs text-primary font-medium">{r.reference}</span> },
  { header: "Type", accessor: "type" },
  { header: "Date", accessor: (r) => <span className="tabular">{r.date}</span> },
  { header: "Status", accessor: (r) => <StatusBadge status={r.status} /> },
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-1">Dashboard</h1>
        <p className="text-muted-foreground text-sm">
          Inventory overview — <span className="text-primary font-medium">12 active</span> operations today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-display font-semibold text-foreground">Recent Activity</h2>
        <div className="flex gap-2">
          {["All", "Receipts", "Delivery"].map((f) => (
            <button
              key={f}
              className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors first:bg-primary first:text-primary-foreground"
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <DataTable columns={columns} data={recentData} onRowClick={(row) => {
        if (row.type === "Receipt") navigate("/operations/receipts");
        else if (row.type === "Delivery") navigate("/operations/delivery");
      }} />
    </div>
  );
}
