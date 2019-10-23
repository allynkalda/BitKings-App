import React from 'react';
import styled from 'styled-components';

export default function Section1() {

    const Container = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `;


    return (
        <div>
            <Container>
            <div className="sub-container">
                    <div className="circle-container">
                        <div className="circle">
                        <div className="step">1</div>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="text">
                    Register and access to BitKings real balance.
                    </div>
                </div>
                <div className="sub-container">
                    <div className="circle-container">
                        <div className="circle">
                        <div className="step">2</div>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="text">Text</div>
                </div>
                <div className="sub-container">
                    <div className="circle-container">
                        <div className="circle">
                        <div className="step">3</div>
                        </div>
                        <div className="line last"></div>
                    </div>
                    <div className="text">Text</div>
                </div>
        </Container>
        </div>
    )
}
