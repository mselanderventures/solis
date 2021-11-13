import React from 'react';
import { Flex, Text } from 'theme-ui';
import theme from '../styles/theme';

export default function LogoWide(props: any) {
    const height = props.height || '100%';
    return (
        <Flex sx={{
            alignItems: 'center'
        }}>
            {/* <img src={'./noodles-blue.png'} height={height} {...props} /> */}
            <Text style={{ fontSize: 35, marginLeft: theme.space.medium }} color={theme.colors.primary}>
                <Text sx={{ fontWeight: 800}}>Squad</Text>
                Eats
            </Text>
        </Flex>
    );
}
