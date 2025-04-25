
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Share, FileText } from 'lucide-react';

interface StoryCardProps {
  title: string;
  author: string;
  date: string;
  description: string;
  type: 'audio' | 'video' | 'text';
  isPrivate?: boolean;
}

const StoryCard = ({ title, author, date, description, type, isPrivate = true }: StoryCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'audio':
        return (
          <div className="w-12 h-12 rounded-full bg-ubuntu-amber/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-amber">
              <path d="M12 2v8m0 3v1m-8 2.5c0 5 8 5 8 5s8 0 8-5M4 17.5v-2c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v2"></path>
            </svg>
          </div>
        );
      case 'video':
        return (
          <div className="w-12 h-12 rounded-full bg-ubuntu-blue/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-blue">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>
        );
      case 'text':
      default:
        return (
          <div className="w-12 h-12 rounded-full bg-ubuntu-forest/20 flex items-center justify-center">
            <FileText className="h-6 w-6 text-ubuntu-forest" />
          </div>
        );
    }
  };

  return (
    <Card className="ubuntu-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-4">
            {getIcon()}
            <div>
              <CardTitle className="text-lg font-bold">{title}</CardTitle>
              <CardDescription className="text-sm text-gray-500">
                By {author} • {date}
                {isPrivate && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    Private
                  </span>
                )}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-4">
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between">
        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-ubuntu-terracotta">
          <MessageSquare className="h-4 w-4 mr-1" />
          Comment
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-ubuntu-terracotta">
          <Share className="h-4 w-4 mr-1" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
