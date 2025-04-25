
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecordStory from '../components/RecordStory';
import FamilyVault from '../components/FamilyVault';
import DocumentStorage from '../components/DocumentStorage';
import CulturalTemplates from '../components/CulturalTemplates';
import InviteFamily from '../components/InviteFamily';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-ubuntu-pattern">
          <div className="absolute inset-0 bg-ubuntu-terracotta/90"></div>
          <div className="relative container mx-auto px-4 py-20 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Echoes of Ubuntu
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-slide-in">
                Preserving the heartbeat of African heritage through digital storytelling—connecting families, communities, and generations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
                <Button size="lg" className="bg-white text-ubuntu-terracotta hover:bg-gray-100">
                  Start Your Family Vault
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-ubuntu-terracotta/80">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="section-title text-center">Preserve Your Legacy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              <div className="ubuntu-card text-center">
                <div className="w-16 h-16 rounded-full bg-ubuntu-amber/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-amber">
                    <path d="M12 2v8m0 3v1m-8 2.5c0 5 8 5 8 5s8 0 8-5M4 17.5v-2c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v2"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Record Stories</h3>
                <p className="text-gray-600">Capture family wisdom and experiences through audio, video or text stories.</p>
              </div>
              
              <div className="ubuntu-card text-center">
                <div className="w-16 h-16 rounded-full bg-ubuntu-forest/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-forest">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Store Documents</h3>
                <p className="text-gray-600">Keep important family records secure and accessible to future generations.</p>
              </div>
              
              <div className="ubuntu-card text-center">
                <div className="w-16 h-16 rounded-full bg-ubuntu-terracotta/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-terracotta">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Connect Family</h3>
                <p className="text-gray-600">Invite family members to contribute their stories and knowledge.</p>
              </div>
              
              <div className="ubuntu-card text-center">
                <div className="w-16 h-16 rounded-full bg-ubuntu-blue/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-blue">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" x2="22" y1="12" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Preserve Culture</h3>
                <p className="text-gray-600">Keep cultural practices, languages, and traditions alive for future generations.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main App Interface */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-10">Start Preserving Your Family Legacy</h2>
            
            <Tabs defaultValue="record" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
                <TabsTrigger value="record">Record Story</TabsTrigger>
                <TabsTrigger value="vault">Family Vault</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="invite">Invite Family</TabsTrigger>
              </TabsList>
              
              <TabsContent value="record">
                <RecordStory />
              </TabsContent>
              
              <TabsContent value="vault">
                <FamilyVault />
              </TabsContent>
              
              <TabsContent value="documents">
                <DocumentStorage />
              </TabsContent>
              
              <TabsContent value="templates">
                <CulturalTemplates />
              </TabsContent>
              
              <TabsContent value="invite">
                <InviteFamily />
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center">Our Community</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Hear from families who are using Echoes of Ubuntu to preserve their stories and cultural heritage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="ubuntu-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-ubuntu-clay flex items-center justify-center text-white font-bold text-xl">
                    MN
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Mandla Nkosi</h4>
                    <p className="text-sm text-gray-500">Cape Town, South Africa</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "I've been recording my grandfather's stories about our ancestral land and traditional farming practices. Now my children can learn these precious teachings even after he's gone."
                </p>
              </div>
              
              <div className="ubuntu-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-ubuntu-forest flex items-center justify-center text-white font-bold text-xl">
                    ZM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Zinhle Mthembu</h4>
                    <p className="text-sm text-gray-500">Durban, South Africa</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Our family has stored all our important health records and traditional remedies in one secure place. It's helping us track health patterns across generations."
                </p>
              </div>
              
              <div className="ubuntu-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-ubuntu-amber flex items-center justify-center text-white font-bold text-xl">
                    TK
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Themba Khumalo</h4>
                    <p className="text-sm text-gray-500">Johannesburg, South Africa</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "We've reconnected with family members across South Africa and preserved our isiZulu language heritage. The cultural templates made it easy to start collecting our stories."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 px-4 bg-ubuntu-clay text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Preserve Your Family's Legacy?</h2>
            <p className="text-xl mb-8">
              Start recording and preserving your family stories, documents, and cultural heritage today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-ubuntu-clay hover:bg-gray-100">
                Create Your Family Vault
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-ubuntu-clay/80">
                Learn How It Works
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
