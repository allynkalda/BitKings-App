import React from 'react';
import styled from 'styled-components';

export default function Faq() {


    return (
        <div>
            <div className="container">
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
            </div>
            <div className="box-container">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    )
}
