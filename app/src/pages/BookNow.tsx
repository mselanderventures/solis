import { useRouter } from 'next/router';
import React from 'react';
import SecurePage from '../layouts/SecurePage';
import { useWindowDimensions } from '../services/useWindowDimensions';

export default function Home() {
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    const isMobile = width < 800;

    return (
        <>
            <SecurePage>
                <h1
                    style={{
                        fontSize: '48px',
                        textAlign: 'left',
                        marginTop: isMobile ? '12px' : '48px',
                        marginBottom: isMobile ? '12px' : '48px',
                        marginLeft: '10%',
                        
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    Make an Appointment
                </h1>
                <iframe
                    src="https://harmonizely.com/selanderventures?view=compact"
                    style={{
                        width: isMobile ? '100%' : '70%',
                        height: isMobile ? '1400px' : '650px',
                        marginLeft: isMobile ? '0px' : '15%',
                        marginRight: isMobile ? '0px' : '15%',
                    }}
                    scrolling="yes"
                ></iframe>
            </SecurePage>
            <style jsx>{``}</style>
        </>
    );
}
