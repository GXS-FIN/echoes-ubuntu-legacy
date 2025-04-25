
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-ubuntu-terracotta text-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="rounded-full bg-white p-1 mr-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#C74E34" />
              <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" fill="white" />
              <path d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z" fill="white" />
              <path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" fill="white" />
              <path d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z" fill="white" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">Echoes of Ubuntu</h1>
        </div>

        <div className="flex space-x-4">
          <Button variant="ghost" className="text-white hover:bg-ubuntu-terracotta/80">
            <Link to="/" className="flex items-center">
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-ubuntu-terracotta/80">
            <Link to="/vault" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              Family Vault
            </Link>
          </Button>
          <Button variant="outline" className="bg-white text-ubuntu-terracotta hover:bg-gray-100">
            <Link to="/login" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
