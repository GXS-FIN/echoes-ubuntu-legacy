
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const DocumentStorage = () => {
  const [documentType, setDocumentType] = useState('');
  const [documentTitle, setDocumentTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (limit to 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File is too large. Please upload a file smaller than 10MB.");
        return;
      }
      setSelectedFile(file);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!documentTitle.trim()) {
      toast.error("Please enter a document title.");
      return;
    }
    
    if (!documentType) {
      toast.error("Please select a document type.");
      return;
    }
    
    if (!selectedFile) {
      toast.error("Please select a file to upload.");
      return;
    }
    
    // In a real app, this would upload the file to your backend
    toast.success("Document uploaded successfully!");
    
    // Reset the form
    setDocumentTitle('');
    setDocumentType('');
    setSelectedFile(null);
    
    // Also need to reset the file input
    const fileInput = document.getElementById('document-file') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-ubuntu-terracotta mb-6">Upload Family Documents</h2>
      <p className="text-gray-600 mb-6">
        Securely store important family documents, certificates, and health records for future generations.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="document-title">Document Title</Label>
          <Input 
            id="document-title" 
            value={documentTitle}
            onChange={(e) => setDocumentTitle(e.target.value)}
            placeholder="Birth certificate, vaccination record, etc."
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="document-type">Document Type</Label>
          <Select value={documentType} onValueChange={setDocumentType}>
            <SelectTrigger id="document-type" className="mt-1">
              <SelectValue placeholder="Select document type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medical">Medical Record</SelectItem>
              <SelectItem value="certificate">Certificate</SelectItem>
              <SelectItem value="identification">Identification</SelectItem>
              <SelectItem value="legal">Legal Document</SelectItem>
              <SelectItem value="photo">Historic Photo</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="document-file">Upload File</Label>
          <div className="mt-1">
            <Input 
              id="document-file" 
              type="file" 
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Accepted formats: PDF, JPG, PNG, DOC, DOCX. Maximum size: 10MB.
          </p>
        </div>
        
        <div className="border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-500 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Your documents are encrypted and can only be accessed by invited family members.
          </p>
          
          <Button 
            type="submit" 
            className="bg-ubuntu-terracotta hover:bg-ubuntu-terracotta/90 w-full"
          >
            Upload Document
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DocumentStorage;
