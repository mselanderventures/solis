import theme from '../styles/theme';
import { useWindowDimensions } from '../services/useWindowDimensions';
import { useRouter } from 'next/router';
import React from 'react';
import { Flex } from 'theme-ui';
import LogoWide from './LogoWide';

export default function AdminPageHeader() {
    const { width, height } = useWindowDimensions();
    const router = useRouter();

    return (
        <>
                <Flex sx={{
                    height: 80,
                    paddingLeft: 16,
                    paddingRight: 16,
                    backgroundColor: 'white',
                    boxShadow: theme.shadows.verySubtle,
                    overflow: 'visible',
                    zIndex: 200,
                    position: "relative",
                    alignContent: 'center'
                    
                }}>
                    <Flex sx={{
                        height: 80,
                        alignContent: 'center',
                        alignItems: 'center'
                    }}>
                        <LogoWide height={40}/>
                    </Flex>
                </Flex>
        </>
    );
}

const HEADER_ITEMS = [
    {
        name: 'Business Login',
        path: '/login',
    },
];
