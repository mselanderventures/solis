/** @jsx jsx */
import React, { FC } from 'react';
import { Flex, Text, jsx, TextProps, ThemeUIStyleObject } from 'theme-ui';
import theme from '../styles/theme';

type SubTitleTitleProps = {
    children: React.ReactNode
    style?: ThemeUIStyleObject
}

export const SubTitle: FC = (props: SubTitleTitleProps) => {
    const { children, style } = props;
    return (
        <Flex
            sx={{
                width: '100%',
                lineHeight: '20px',
                marginBottom: theme.space.medium
            }}
        >
            <Text sx={{
                fontSize: 21,
                fontFamily: 'Trebuchet MS',
                color: 'black',
                fontWeight: 600,
                ...style
            }}>{children}</Text>
        </Flex>
    );
};
