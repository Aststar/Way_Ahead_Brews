
import React from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  logo: React.FC<{ className?: string }>;
}

export interface StoryItem {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  accentColor: string;
  logo: React.FC<{ className?: string }>;
  bgElements: React.FC<{ className?: string }>[];
}

export interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: React.FC<{ className?: string }>;
}
