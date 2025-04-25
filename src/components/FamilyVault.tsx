
import React, { useState } from 'react';
import StoryCard from './StoryCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FamilyVault = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock data for stories
  const stories = [
    {
      id: 1,
      title: "Grandfather's Wisdom on Farming",
      author: "Themba Ndlovu",
      date: "April 15, 2025",
      description: "My grandfather shares his knowledge about traditional farming techniques that have been passed down through generations in our family.",
      type: 'audio' as const,
      isPrivate: true
    },
    {
      id: 2,
      title: "Our Family's Migration Story",
      author: "Lindiwe Zulu",
      date: "April 10, 2025",
      description: "How our family moved from the Eastern Cape to Johannesburg in the 1970s and the challenges we faced during that time.",
      type: 'video' as const,
      isPrivate: true
    },
    {
      id: 3,
      title: "Traditional Medicine Knowledge",
      author: "Dr. Sarah Molefe",
      date: "April 5, 2025",
      description: "My grandmother was a traditional healer. This is the story of how she used indigenous plants for healing various ailments.",
      type: 'text' as const,
      isPrivate: false
    },
    {
      id: 4,
      title: "Learning isiZulu as a Child",
      author: "Bongani Khumalo",
      date: "March 28, 2025",
      description: "My journey of learning isiZulu as a child and how it connected me with my cultural roots and identity.",
      type: 'audio' as const,
      isPrivate: true
    }
  ];

  // Filter stories based on search query and type
  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         story.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || story.type === filterType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-ubuntu-terracotta">Family Vault</h2>
        <p className="text-gray-600 mt-2">Access your family's stories, wisdom, and documents</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-grow">
            <Input
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full sm:w-48">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="text">Text</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Tabs defaultValue="stories" className="w-full">
        <div className="px-6 pt-6">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="stories">Stories</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
        </div>

        <div className="p-6">
          <TabsContent value="stories">
            {filteredStories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredStories.map(story => (
                  <StoryCard
                    key={story.id}
                    title={story.title}
                    author={story.author}
                    date={story.date}
                    description={story.description}
                    type={story.type}
                    isPrivate={story.isPrivate}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No stories found matching your search.</p>
                <Button variant="outline">Clear Filters</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="documents">
            <div className="text-center py-12 space-y-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-400">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <p className="text-gray-500">Store important family documents securely.</p>
              <p className="text-gray-400">Birth certificates, family records, medical history and more.</p>
              <Button className="bg-ubuntu-terracotta hover:bg-ubuntu-terracotta/90">Upload Documents</Button>
            </div>
          </TabsContent>

          <TabsContent value="templates">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium">Family Migration History</h3>
                <p className="text-sm text-gray-500 mt-2">Record how your family moved from one place to another</p>
              </div>
              <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium">Traditional Recipes</h3>
                <p className="text-sm text-gray-500 mt-2">Document family recipes passed down through generations</p>
              </div>
              <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium">Grandparent Memories</h3>
                <p className="text-sm text-gray-500 mt-2">Interview questions for capturing grandparents' stories</p>
              </div>
              <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium">Family Medical History</h3>
                <p className="text-sm text-gray-500 mt-2">Record important health information for future generations</p>
              </div>
              <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium">Cultural Traditions</h3>
                <p className="text-sm text-gray-500 mt-2">Document your family's unique cultural practices</p>
              </div>
              <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium">Language Heritage</h3>
                <p className="text-sm text-gray-500 mt-2">Preserve native language words, phrases and sayings</p>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FamilyVault;
