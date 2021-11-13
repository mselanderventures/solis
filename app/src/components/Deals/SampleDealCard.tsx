import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Upload, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC } from 'react';
import { Flex } from 'theme-ui';
import theme from '../../styles/theme';

type SampleDealCardProps = {
    imageUrl: string
    profileImageUrl: string
    titleString: string
    substring: string
}

const SampleDealCard: FC<SampleDealCardProps> = (props: SampleDealCardProps) => {
    const { imageUrl, titleString, substring, profileImageUrl } = props
    return (
        <>
            <Card
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    height: 235,
                    boxShadow: theme.shadows.subtle,
                }}
                cover={
                    <Flex
                        sx={{
                            flexGrow: 1,
                            height: 160,
                            backgroundColor: '#DCDCDC',
                        }}
                    >
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                width={'100%'}
                                height={160}
                                style={{
                                    alignSelf: 'stretch',
                                }}
                                alt="avatar"
                            />
                        )}
                    </Flex>
                }
                bodyStyle={{
                    padding: theme.space.large,
                    paddingTop: '26px',
                }}
            >
                <Image
                    src={
                        profileImageUrl
                    }
                    width={50}
                    height={50}
                    style={{
                        borderRadius: 25,
                        borderColor: 'white',
                        border: '2px solid white',
                        overflow: 'hidden',
                        position: 'absolute',
                        backgroundColor: 'red',
                        top: 130,
                    }}
                />
                <Meta title={titleString} description={substring} />
            </Card>
        </>
    );
};

export default SampleDealCard
