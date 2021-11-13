import theme from '../styles/theme';
import Logo from './Logo';
import Link from 'next/link';
import { useWindowDimensions } from '../services/useWindowDimensions';
import { MenuOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, Space } from 'antd';
import { useRouter } from 'next/router';

export default function PageHeader() {
    const { width, height } = useWindowDimensions();
    const router = useRouter();

    function getHeaderItems() {
        return HEADER_ITEMS;
    }

    const headerItems = getHeaderItems();
    const reverseHeaderItems = headerItems.slice().reverse();

    const menu = (
        <>
            <Menu>
                <Menu.Item key={'download-now'}>
                    <a className="dowload-now" href={""}>
                        Download Now
                    </a>
                </Menu.Item>
                {reverseHeaderItems.map((item) => {
                    return (
                        <Menu.Item key={item.path}>
                            <a className="dropdown-item" href={item.path}>
                                {item.name}
                            </a>
                        </Menu.Item>
                    );
                })}
            </Menu>
            <style jsx>{`
                .dropdown-item {
                    color: red;
                    text-align: left;
                    padding: 14px 32px;
                    text-decoration: none;
                    font-size: 16px;
                }
                .dropdown-item:hover {
                    color: red;
                    text-align: left;
                    padding: 14px 32px;
                    text-decoration: none;
                    font-size: 16px;
                }
                .download-now {
                    background-color: 'white';
                }
            `}</style>
        </>
    );

    return (
        <>
            <header>
                <div className="navbar">
                    <div className="logo">
                        <Logo height={50}/>
                    </div>
                    {width < 400 ? <div></div> : <div className="name"></div>}
                    <div></div>
                    {width < 800 ? (
                        <div>
                            <Dropdown overlay={menu} placement="bottomRight">
                                <div className="hamburger header-item">
                                    <MenuOutlined
                                        style={{ fontSize: '30px' }}
                                    />
                                </div>
                            </Dropdown>
                        </div>
                    ) : (
                        <div className="header-container">
                            {headerItems.map((item, index) => {
                                if (index == 0) {
                                    <div
                                        onClick={() => {
                                            router.push(item.path);
                                        }}
                                        className="header-item callout"
                                    >
                                        <div className="helper">
                                            <a>{item.name}</a>
                                        </div>
                                    </div>;
                                }
                                return (
                                    <div
                                        onClick={() => {
                                            router.push(item.path);
                                        }}
                                        className="header-item"
                                    >
                                        <div className="helper">
                                            <a>{item.name}</a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </header>
            <style jsx>{`
                header {
                    align-items: center;
                }
                .header-container {
                    height: 100%;
                }
                .logo {
                    height: 50px;
                }
                .header-item {
                    padding: 8px 16px;
                    float: right;
                    height: 100%;
                }
                .header-item:hover {
                    background-color: #1095e6;
                    color: black;
                    cursor: pointer;
                }
                .helper {
                    margin-top: 14px;
                }
                .callout {
                    background-color: blue;
                }
                a {
                    color: #fff;
                    text-align: center;
                    text-decoration: none;
                    font-size: 18px;
                    height: 100%;
                    top:50%;
                    bottom:50%;
                    margin-top:54px;
                }
                .hamburger {
                    font-size: 20px;
                    padding: 14px 16px;
                }
                .navbar {
                    display: grid;
                    grid-template-columns: auto auto auto 1fr;
                    align-items: center;
                    height: 80px;
                    padding-left: 16px;
                    padding-right: 16px;
                    max-width: ${width > 800 ? theme.maxWidth : null} ;
                    margin-left: auto;
                    margin-right: auto;
                }
                .name {}
                }
                h1 {
                    float: right;
                    display: block;
                    color: #000;
                    text-align: center;
                    padding: 8px 16px;
                    text-decoration: none;
                    margin: 0px;

                }
            `}</style>
        </>
    );
}

const HEADER_ITEMS = [
    {
        name: 'Business Login',
        path: '/login',
    },
];
