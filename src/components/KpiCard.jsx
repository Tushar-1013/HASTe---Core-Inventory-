import { motion } from "framer-motion";
export function KpiCard({ title, value, subtitle, icon: Icon, trend }) {
    return (<motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }} className="bg-card border border-border rounded-lg p-5 shadow-subtle hover:shadow-elevated transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
        <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary"/>
        </div>
      </div>
      <p className="text-3xl font-display font-bold text-foreground tabular">{value}</p>
      {subtitle && (<p className="text-xs text-muted-foreground mt-1">
          {trend === "up" && <span className="text-success">↑ </span>}
          {trend === "down" && <span className="text-destructive">↓ </span>}
          {subtitle}
        </p>)}
    </motion.div>);
}
