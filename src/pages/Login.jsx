import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function Login() {
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate();
    return (<div className="min-h-screen flex items-center justify-center bg-secondary p-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 justify-center mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
            C
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-foreground">CoreInventory</span>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-elevated">
          <h2 className="text-xl font-display font-bold text-foreground mb-1">
            {isSignup ? "Create Account" : "Welcome back"}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            {isSignup ? "Sign up to get started" : "Sign in to your account"}
          </p>

          <div className="space-y-4">
            {isSignup && (<div><Label>Full Name</Label><Input placeholder="John Doe"/></div>)}
            <div><Label>Email</Label><Input type="email" placeholder="you@company.com"/></div>
            <div><Label>Password</Label><Input type="password" placeholder="••••••••"/></div>
            <Button onClick={() => navigate("/")} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => setIsSignup(!isSignup)} className="text-primary font-medium hover:underline">
              {isSignup ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>);
}
