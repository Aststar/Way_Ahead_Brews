
import { Product, StoryItem, ProcessStep } from '../types.ts';
import React from 'react';
import { Hop, Leaf, Droplets, Package } from 'lucide-react';

const createIcon = (IconComponent: React.ElementType) => {
    return (props: { className?: string }) => React.createElement(IconComponent, props);
};

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement('path', { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })
  )
);

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "currentColor" },
        React.createElement('path', { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" })
    )
);

const StrawberryIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M12 2C9.5 2 7 3.67 7 6.25S9.5 11.5 12 14s5-3 5-7.75S14.5 2 12 2zm-2 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" })
    )
);

const PilsnerLogo: React.FC<{ className?: string }> = ({ className }) => React.createElement(HeartIcon, { className });
const IpaLogo: React.FC<{ className?: string }> = ({ className }) => React.createElement(StarIcon, { className });
const WhiteLogo: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 100 100", fill: "currentColor" },
        React.createElement('rect', { x: "20", y: "20", width: "25", height: "60" }),
        React.createElement('rect', { x: "55", y: "20", width: "25", height: "60" })
    )
);
const StrawberryLogo: React.FC<{ className?: string }> = ({ className }) => React.createElement(StrawberryIcon, { className });

export const products: Product[] = [
  {
    id: 'gid://shopify/Product/1',
    title: 'Way Ahead Pilsner',
    description: 'Crisp, clean, and refreshing. A classic pilsner with a modern twist.',
    price: 12.99,
    imageUrl: '/images/cans/Front Can Mockup-WayAhead-Can-03-01-Pil.png',
    logo: PilsnerLogo,
  },
  {
    id: 'gid://shopify/Product/2',
    title: 'Way Ahead Hazy IPA',
    description: 'Juicy, hoppy, and full-bodied. All the haze without the booze.',
    price: 14.99,
    imageUrl: '/images/cans/Front Can Mockup-WayAhead-Can-03-01-IPA.png',
    logo: IpaLogo,
  },
  {
    id: 'gid://shopify/Product/3',
    title: 'Way Ahead Belgian White',
    description: 'Smooth and spicy with notes of coriander and orange peel.',
    price: 13.99,
    imageUrl: '/images/cans/Front Can Mockup-WayAhead-Can-03-01-Wit.png',
    logo: WhiteLogo,
  },
  {
    id: 'gid://shopify/Product/4',
    title: 'Way Ahead Strawberry',
    description: 'A fruity and light beverage perfect for a sunny day.',
    price: 13.99,
    imageUrl: '/images/cans/Front Can Mockup-WayAhead-Can-03-01-Straw.png',
    logo: StrawberryLogo,
  },
];

export const brandStories: StoryItem[] = [
  {
    id: 'pilsner',
    title: 'The Heart of the Craft',
    description: 'Our pilsner is a labor of love. Crafted for crisp refreshment, it’s the perfect companion for any occasion, celebrating connection and good times. Pure heart in every sip.',
    bgColor: 'bg-green-500',
    accentColor: 'text-[#ec1c24]',
    logo: PilsnerLogo,
    bgElements: [HeartIcon, HeartIcon, HeartIcon],
  },
  {
    id: 'ipa',
    title: 'Reach for the Stars',
    description: 'Boldly going where no NA beer has gone before. Our Hazy IPA is packed with stellar hop flavor, a universe of aroma in every can. It’s an adventure for your taste buds.',
    bgColor: 'bg-blue-600',
    accentColor: 'text-[#ec1c24]',
    logo: IpaLogo,
    bgElements: [StarIcon, StarIcon, StarIcon],
  },
  {
    id: 'white',
    title: 'A New Perspective',
    description: 'Inspired by Belgian tradition, redefined for today. Our Belgian White is about seeing things differently, with parallel notes of spice and citrus creating a unique harmony.',
    bgColor: 'bg-sky-400',
    accentColor: 'text-[#ec1c24]',
    logo: WhiteLogo,
    bgElements: [WhiteLogo, WhiteLogo, WhiteLogo],
  },
  {
    id: 'strawberry',
    title: 'Taste of Sunshine',
    description: 'Sweet, vibrant, and bursting with freshness. Our Strawberry brew is like a perfect summer day, bottled. A delightful escape that’s purely delicious and purely fun.',
    bgColor: 'bg-pink-400',
    accentColor: 'text-white',
    logo: StrawberryLogo,
    bgElements: [StrawberryIcon, StrawberryIcon, StrawberryIcon],
  },
];

export const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "Blending",
        description: "We start with the finest ingredients, blending natural flavors, premium hops, and grains to create the perfect base.",
        icon: createIcon(Hop)
    },
    {
        id: 2,
        title: "Molecular Magic",
        description: "Our proprietary process gently removes alcohol while preserving the rich, full-bodied taste you'd expect from a craft beer.",
        icon: createIcon(Leaf)
    },
    {
        id: 3,
        title: "Carbonation",
        description: "Next, we infuse our brew with crisp, bubbly carbonation for that satisfying fizziness and a perfect foamy head.",
        icon: createIcon(Droplets)
    },
    {
        id: 4,
        title: "Canning",
        description: "Finally, each can is filled and sealed, locking in the freshness and flavor, ready for you to enjoy.",
        icon: createIcon(Package)
    }
];
