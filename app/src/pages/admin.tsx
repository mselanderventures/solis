import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import NavBar, { NavBarItem } from '../components/Navigation/NavBar';
import { useWindowDimensions } from '../services/useWindowDimensions';
import SecurePage from '../layouts/SecurePage';
import AdminPageHeader from '../components/AdminPageHeader';

export default function Admin() {
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    const isMobile = width < 800;

    const items: NavBarItem[] = [
        { path: 'home', title: 'Home', iconName: 'home' },
        { path: 'deals', title: 'Deals', iconName: 'mail' },
        { path: 'locations', title: 'Locations', iconName: 'map' },
        { path: 'settings', title: 'Settings', iconName: 'settings' },
    ];

    return (
        <>
            <SecurePage header={<AdminPageHeader />}>
                <MainLayout navBar={<NavBar items={items} />}></MainLayout>
            </SecurePage>
        </>
    );
}
