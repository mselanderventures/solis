import React from 'react';
import { Fade } from 'react-reveal';
import theme from '../../styles/theme';

export default function Reviews() {
    return (
        <>
            <div className="reviews-section">
                <div className="reviews-section-content">
                    <h1
                        style={{
                            fontSize: '48px',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: '12px',
                            marginBottom: '0px',
                            fontFamily: 'Montserrat, sans-serif',
                        }}
                    >
                        Hear from our customers
                    </h1>
                    <div className="reviews">
                        <Fade>
                            <div className="review">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc eget placerat nulla.
                                    Mauris ut leo ultrices, auctor erat eu,
                                    efficitur metus. Suspendisse sit amet tortor
                                    sapien. Suspendisse tellus quam, gravida
                                    tempus feugiat et, consectetur ut augue.
                                    Aenean pulvinar velit et ultrices
                                    consectetur. Integer nec aliquet sem, quis
                                    tempor massa. Nullam consequat, tortor eget
                                    rhoncus facilisis, lorem neque maximus
                                    lacus, vitae interdum leo enim molestie
                                    odio.
                                </p>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="review">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc eget placerat nulla.
                                    Mauris ut leo ultrices, auctor erat eu,
                                    efficitur metus. Suspendisse sit amet tortor
                                    sapien. Suspendisse tellus quam, gravida
                                    tempus feugiat et, consectetur ut augue.
                                    Aenean pulvinar velit et ultrices
                                    consectetur. Integer nec aliquet sem, quis
                                    tempor massa. Nullam consequat, tortor eget
                                    rhoncus facilisis, lorem neque maximus
                                    lacus, vitae interdum leo enim molestie
                                    odio.
                                </p>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="review">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc eget placerat nulla.
                                    Mauris ut leo ultrices, auctor erat eu,
                                    efficitur metus. Suspendisse sit amet tortor
                                    sapien. Suspendisse tellus quam, gravida
                                    tempus feugiat et, consectetur ut augue.
                                    Aenean pulvinar velit et ultrices
                                    consectetur. Integer nec aliquet sem, quis
                                    tempor massa. Nullam consequat, tortor eget
                                    rhoncus facilisis, lorem neque maximus
                                    lacus, vitae interdum leo enim molestie
                                    odio.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .reviews-section {
                    margin-top: 96px;
                    padding-top: 112px;
                    padding-bottom: 96px;
                    background-color: #ff7700;
                    background-image: url('desktop.jpeg');
                    background-size: cover;
                }
                .reviews-section-content {
                    max-width: ${theme.maxWidth};
                    margin-left: auto;
                    margin-right: auto;
                }
                .reviews {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }
                .review {
                    margin: 10px;
                    padding: 20px;
                    background-color: #dadce0;
                    opacity: 0.5;
                    border-radius: 5px;
                    font-family: 'Montserrat', sans-serif;
                }
            `}</style>
        </>
    );
}
