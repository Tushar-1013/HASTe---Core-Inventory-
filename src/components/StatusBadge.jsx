import { cn } from "@/lib/utils";
const statusStyles = {
    draft: "bg-secondary text-muted-foreground",
    waiting: "bg-warning/10 text-warning",
    ready: "bg-primary/10 text-primary",
    done: "bg-success/10 text-success",
    canceled: "bg-destructive/10 text-destructive",
};
export function StatusBadge({ status }) {
    return (<span className={cn("inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium uppercase tracking-wider font-mono", statusStyles[status])}>
      {status}
    </span>);
}
