import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function Profile() {
    return (<div className="max-w-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-1">My Profile</h1>
        <p className="text-muted-foreground text-sm">Manage your account settings</p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-display font-bold">
          IM
        </div>
        <div>
          <p className="font-display font-semibold text-foreground">Inventory Manager</p>
          <p className="text-sm text-muted-foreground">admin@coreinventory.com</p>
        </div>
      </div>

      <div className="space-y-4">
        <div><Label>Full Name</Label><Input defaultValue="Inventory Manager"/></div>
        <div><Label>Email</Label><Input type="email" defaultValue="admin@coreinventory.com"/></div>
        <div><Label>Role</Label><Input defaultValue="Inventory Manager" disabled className="bg-secondary"/></div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Save Changes</Button>
      </div>
    </div>);
}
