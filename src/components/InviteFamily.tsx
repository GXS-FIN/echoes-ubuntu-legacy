
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const InviteFamily = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('family-member');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Please enter a name.");
      return;
    }
    
    if (!email.trim()) {
      toast.error("Please enter an email address.");
      return;
    }
    
    // In a real app, this would send an invitation
    toast.success(`Invitation sent to ${name} (${email})`);
    
    // Reset form
    setEmail('');
    setName('');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-ubuntu-terracotta mb-6">Invite Family Members</h2>
      <p className="text-gray-600 mb-6">
        Add your family members to your vault so they can view, contribute, and preserve your shared legacy.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="member-name">Name</Label>
          <Input 
            id="member-name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Family member's name"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="member-email">Email Address</Label>
          <Input 
            id="member-email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="family.member@example.com"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label>Relationship</Label>
          <RadioGroup value={relation} onValueChange={setRelation} className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="family-member" id="family-member" />
              <Label htmlFor="family-member" className="cursor-pointer">Family Member</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="elder" id="elder" />
              <Label htmlFor="elder" className="cursor-pointer">Elder</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="contributor" id="contributor" />
              <Label htmlFor="contributor" className="cursor-pointer">Community Contributor</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="viewer" id="viewer" />
              <Label htmlFor="viewer" className="cursor-pointer">Viewer Only</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Label>Access Permissions</Label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="permission-stories" defaultChecked className="mr-2 rounded" />
              <Label htmlFor="permission-stories" className="text-sm">Access to Family Stories</Label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="permission-documents" defaultChecked className="mr-2 rounded" />
              <Label htmlFor="permission-documents" className="text-sm">Access to Family Documents</Label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="permission-contribute" defaultChecked className="mr-2 rounded" />
              <Label htmlFor="permission-contribute" className="text-sm">Permission to Add Content</Label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="permission-invite" className="mr-2 rounded" />
              <Label htmlFor="permission-invite" className="text-sm">Permission to Invite Others</Label>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6 flex justify-end">
          <Button type="submit" className="bg-ubuntu-terracotta hover:bg-ubuntu-terracotta/90">
            Send Invitation
          </Button>
        </div>
      </form>
      
      <div className="mt-8 border-t border-gray-100 pt-6">
        <h3 className="text-lg font-medium mb-4">Current Members</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
            <div>
              <p className="font-medium">Thabo Mbeki</p>
              <p className="text-sm text-gray-500">grandfather@example.com • Elder</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
            <div>
              <p className="font-medium">Nomsa Dlamini</p>
              <p className="text-sm text-gray-500">aunt@example.com • Family Member</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
            <div>
              <p className="font-medium">Sipho Mabaso</p>
              <p className="text-sm text-gray-500">cousin@example.com • Family Member</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteFamily;
