
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const RecordStory = () => {
  const [recording, setRecording] = useState(false);
  const [storyTitle, setStoryTitle] = useState('');
  const [storyDescription, setStoryDescription] = useState('');
  const [storyLanguage, setStoryLanguage] = useState('english');
  const [isPrivate, setIsPrivate] = useState(true);

  const startRecording = () => {
    setRecording(true);
    toast.info("Recording started. Please speak clearly.");
    // In a real implementation, this would activate device recording
  };

  const stopRecording = () => {
    setRecording(false);
    toast.success("Recording saved successfully!");
    // In a real implementation, this would stop the recording and save the file
  };

  const handleSubmitText = (e: React.FormEvent) => {
    e.preventDefault();
    if (storyTitle.trim() === '') {
      toast.error("Please provide a title for your story.");
      return;
    }
    toast.success("Your story has been saved to your family vault!");
    setStoryTitle('');
    setStoryDescription('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-ubuntu-terracotta mb-6">Record Your Story</h2>
      
      <Tabs defaultValue="audio" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="audio">Audio Story</TabsTrigger>
          <TabsTrigger value="video">Video Story</TabsTrigger>
          <TabsTrigger value="text">Text Story</TabsTrigger>
        </TabsList>
        
        <div className="mb-4">
          <Label htmlFor="storyTitle">Story Title</Label>
          <Input 
            id="storyTitle" 
            value={storyTitle} 
            onChange={(e) => setStoryTitle(e.target.value)} 
            placeholder="Enter a title for your story" 
            className="mt-1"
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="storyLanguage">Language</Label>
          <Select value={storyLanguage} onValueChange={setStoryLanguage}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="isizulu">isiZulu</SelectItem>
              <SelectItem value="isixhosa">isiXhosa</SelectItem>
              <SelectItem value="afrikaans">Afrikaans</SelectItem>
              <SelectItem value="setswana">Setswana</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <TabsContent value="audio">
          <div className="space-y-4">
            <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
              {!recording ? (
                <Button 
                  onClick={startRecording} 
                  className="bg-ubuntu-terracotta hover:bg-ubuntu-terracotta/90"
                >
                  Start Recording
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <p>Recording in progress...</p>
                  <Button 
                    onClick={stopRecording} 
                    variant="destructive"
                  >
                    Stop Recording
                  </Button>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="audioPrivate" 
                checked={isPrivate} 
                onChange={() => setIsPrivate(!isPrivate)} 
                className="rounded border-gray-300"
              />
              <Label htmlFor="audioPrivate">Keep this story private to my family</Label>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="video">
          <div className="space-y-4">
            <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
              {!recording ? (
                <Button 
                  onClick={startRecording} 
                  className="bg-ubuntu-terracotta hover:bg-ubuntu-terracotta/90"
                >
                  Start Video Recording
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-12 bg-gray-900 rounded flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
                    </div>
                  </div>
                  <p>Video recording in progress...</p>
                  <Button 
                    onClick={stopRecording} 
                    variant="destructive"
                  >
                    Stop Recording
                  </Button>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="videoPrivate" 
                checked={isPrivate} 
                onChange={() => setIsPrivate(!isPrivate)} 
                className="rounded border-gray-300"
              />
              <Label htmlFor="videoPrivate">Keep this story private to my family</Label>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="text">
          <form onSubmit={handleSubmitText} className="space-y-4">
            <div>
              <Label htmlFor="storyText">Your Story</Label>
              <Textarea 
                id="storyText" 
                value={storyDescription} 
                onChange={(e) => setStoryDescription(e.target.value)} 
                placeholder="Write your story here..." 
                className="mt-1 h-36"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="textPrivate" 
                checked={isPrivate} 
                onChange={() => setIsPrivate(!isPrivate)} 
                className="rounded border-gray-300"
              />
              <Label htmlFor="textPrivate">Keep this story private to my family</Label>
            </div>
            <Button 
              type="submit" 
              className="bg-ubuntu-terracotta hover:bg-ubuntu-terracotta/90 w-full"
            >
              Save Story
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecordStory;
