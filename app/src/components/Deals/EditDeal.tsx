/** @jsx jsx */
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Card,
    Form,
    Input,
    Radio,
    Slider,
    Image,
    Upload,
    message,
} from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC, useState } from 'react';
import { Flex, Text, jsx } from 'theme-ui';
import { useForm } from '../../services/useForm';
import theme from '../../styles/theme';


export type EditDealProps = {
    dealId?: string;
};

export const EditDeal: FC<EditDealProps> = (props: EditDealProps) => {
    const { dealId } = props;

    const {
        form,
        errors,
        setErrors,
        values,
        handleSubmit,
        handleValuesChanged,
    } = useForm(
        () => null,
        () => null
    );

    const prefix =
        !values['type'] || values['type'] == 'free'
            ? 'Free'
            : values['type'] == 'percent'
            ? `${values['percent-off'] || '10'}% Off`
            : `$${values['dollar-off'] || '1'} Off`;

    const titleString = `${prefix} ${
        values['name'] ? values['name'] : '_________'
    }`;
    const subString = values['req'] || '';



    const [imageUrl, setImageUrl] = useState('');

    const handleImageChange = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) =>
                setImageUrl(imageUrl)
            );
        }
    };

    return (
        <Flex
            sx={{
                flexDirection: 'row',
            }}
        >
            <Flex>
                <Form
                    form={form}
                    onValuesChange={handleValuesChanged}
                    onFinish={handleSubmit}
                    layout="vertical"
                    style={{
                        width: 400,
                    }}
                >
                    <Form.Item
                        validateStatus={errors['name'] ? 'error' : 'success'}
                        help={errors['name']}
                        name="name"
                        label="Discounted Item Name"
                    >
                        <Input size="large" placeholder="e.g. 4-pc Nuggets" />
                    </Form.Item>

                    <Form.Item
                        name="type"
                        label="Deal Type"
                        validateStatus={errors['type'] ? 'error' : 'success'}
                        help={errors['type']}
                    >
                        <Radio.Group
                            buttonStyle="solid"
                            defaultValue="free"
                            style={{
                                paddingTop: theme.space.small,
                            }}
                        >
                            <Radio.Button value="free" defaultChecked>
                                Free
                            </Radio.Button>
                            <Radio.Button value="percent">
                                % Discount
                            </Radio.Button>
                            <Radio.Button value="dollar">
                                $ Discount
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    {values['type'] == 'percent' && (
                        <Form.Item name="percent-off" label="Percent Off">
                            <Slider
                                min={10}
                                max={100}
                                marks={{
                                    10: '10',
                                    15: '15',
                                    20: '20',
                                    25: '25',
                                    50: '50',
                                    75: '75',
                                    100: '100',
                                }}
                            />
                        </Form.Item>
                    )}

                    {values['type'] == 'dollar' && (
                        <Form.Item name="dollar-off" label="Dollars Off">
                            <Slider min={1} max={20} />
                        </Form.Item>
                    )}

                    <Form.Item name="squad-size" label="Group Size Required">
                        <Slider
                            min={2}
                            max={10}
                            step={null}
                            marks={{
                                2: '2',
                                3: '3',
                                4: '4',
                                5: '5',
                                6: '6',
                                7: '7',
                                8: '8',
                                9: '9',
                                10: '10',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        validateStatus={errors['req'] ? 'error' : 'success'}
                        help={errors['req']}
                        name="req"
                        label="Additional Requirement"
                    >
                        <Input
                            size="large"
                            placeholder="e.g. the purchase of a meal"
                        />
                    </Form.Item>
                </Form>
            </Flex>
            <Flex
                sx={{
                    padding: theme.space.large,
                    paddingRight: 0,
                    justifyContent: 'center',
                    flexGrow: 1,
                }}
            >
                <Card
                    style={{
                        width: 300,
                        height: 235,
                        boxShadow: theme.shadows.subtle,
                    }}
                    cover={
                        <Flex
                            sx={{
                                width: 300,
                                height: 160,
                                backgroundColor: '#DCDCDC',
                            }}
                        >
                            <Upload
                                name="avatar"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleImageChange}
                            >
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        width={300}
                                        height={160}
                                        style={{
                                            alignSelf: 'stretch',
                                        }}
                                        alt="avatar"
                                    />
                                ) : (
                                    <Flex
                                        sx={{
                                            width: 300,
                                            height: 160,
                                            backgroundColor: 'DCDCDC',
                                            border: 'dashed gray',
                                            borderWidth: 2,
                                            justifyContent: 'center',
                                            verticalAlign: 'center',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                border: `${theme.colors.primary} dashed`,
                                            },
                                        }}
                                    >
                                        {false ? (
                                            <LoadingOutlined />
                                        ) : (
                                            <PlusOutlined />
                                        )}
                                        <Flex
                                            style={{
                                                marginLeft: theme.space.small,
                                            }}
                                        >
                                            Upload
                                        </Flex>
                                    </Flex>
                                )}
                            </Upload>
                        </Flex>
                    }
                    bodyStyle={{
                        padding: theme.space.large,
                        paddingTop: '26px',
                    }}
                >
                    <Image
                        src={
                            'https://crueltyfreereviews.b-cdn.net/wp-content/uploads/2018/11/Wendys-Logo-Vegan-Options.jpg'
                        }
                        width={50}
                        height={50}
                        style={{
                            borderRadius: 25,
                            borderColor: 'white',
                            border: '2px solid white',
                            overflow: 'hidden',
                            position: 'absolute',
                            top: 130,
                        }}
                    />
                    <Meta title={titleString} description={subString} />
                </Card>
            </Flex>
        </Flex>
    );
};


export function beforeUpload(file) {
    const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}