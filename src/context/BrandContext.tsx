"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Strict Types for Tasmeem System
export type UserType = 'individual' | 'company';
export type BrandTone = 'professional' | 'modern' | 'simple';
export type DesignPreset = 'modern-business' | 'clean-retail' | 'social-bold' | 'elegant-minimal';

export interface BrandProfile {
    isConfigured: boolean;
    userType: UserType;
    tone: BrandTone;
    businessName: string;
    primaryColor: string; // #Hex
    activePreset: DesignPreset;
}

const DEFAULT_PROFILE: BrandProfile = {
    isConfigured: false,
    userType: 'individual',
    tone: 'professional',
    businessName: '',
    primaryColor: '#0F172A',
    activePreset: 'modern-business'
};

interface BrandContextType {
    profile: BrandProfile;
    updateProfile: (updates: Partial<BrandProfile>) => void;
    lockProfile: (profile: BrandProfile) => void;
    resetProfile: () => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: ReactNode }) {
    const [profile, setProfile] = useState<BrandProfile>(DEFAULT_PROFILE);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem('tasmeem_brand_profile');
        if (saved) {
            try {
                setProfile(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load brand profile", e);
            }
        }
    }, []);

    const updateProfile = (updates: Partial<BrandProfile>) => {
        setProfile(prev => ({ ...prev, ...updates }));
    };

    const lockProfile = (finalProfile: BrandProfile) => {
        const locked = { ...finalProfile, isConfigured: true };
        setProfile(locked);
        localStorage.setItem('tasmeem_brand_profile', JSON.stringify(locked));
    };

    const resetProfile = () => {
        setProfile(DEFAULT_PROFILE);
        localStorage.removeItem('tasmeem_brand_profile');
    };

    return (
        <BrandContext.Provider value={{ profile, updateProfile, lockProfile, resetProfile }}>
            {children}
        </BrandContext.Provider>
    );
}

export function useBrand() {
    const context = useContext(BrandContext);
    if (context === undefined) {
        throw new Error('useBrand must be used within a BrandProvider');
    }
    return context;
}
