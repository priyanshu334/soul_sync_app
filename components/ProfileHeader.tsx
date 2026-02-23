import { Settings, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function ProfileHeader() {
  return (
    <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl">Profile</h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Share2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxODM3NjA3fDA&ixlib=rb-4.1.0&q=80&w=400" alt="Priya Sharma" />
          <AvatarFallback>PS</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h2 className="text-2xl mb-1">Priya Sharma</h2>
          <p className="text-sm text-gray-600 mb-2">25 · Mumbai, India</p>
        </div>
      </div>
    </div>
  );
}