import theme from '../styles/theme'
import Logo from './Logo'
import Link from 'next/link'
import { useWindowDimensions } from "../services/useWindowDimensions";
import { MenuOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Button, Space } from 'antd';
import auth from '../services/auth';

export default function PageHeader() {

    const { width, height } = useWindowDimensions();

    return (
        <>
            <header>
                <div className="navbar">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="name">
                        {auth.getCurrentUser() ? auth.getCurrentUser()["name"] : null}
                    </div>
                </div>
            </header>
            <style jsx>{`
                header {
                    border-bottom: 1px solid  ${theme.colors.secondary};
                    align-items: center;
                }
                .logo {
                    height: 38px;
                }
                a {
                    float: right;
                    display: block;
                    color: #000;
                    text-align: center;
                    padding: 8px 16px;
                    text-decoration: none;
                    font-size: 16px;
                }
                .hamburger {
                    font-size: 20px;
                    padding: 14px 16px;
                }
                .name {
                    text-align: right;
                    margin-right: 16px;
                    font-size: 20px;
                    font-weight: 600;
                }
                .navbar {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    height: 56px;
                    padding-left: 16px;
                    padding-right: 16px;
                    max-width: ${theme.maxWidth};
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
    )
}