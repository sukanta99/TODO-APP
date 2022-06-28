import React, { useState, useEffect } from 'react';
import { Row,Col,Button,Divider } from 'antd';

const Footer = (
    { tasksRemaining, removeCompleted, type,_type }
    ) => {
        
    return (
        <>
            <Row className="gutter-row" >
                <Divider plain></Divider>
                <Col style={{ display: "inline-flex", width: '100%', marginTop: "28px" }} >
                    <div className="header" style={{ width: '20%' }}>{tasksRemaining !== 0 ? tasksRemaining + 'items left' : ''}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '60%', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                            <Button onClick={(e)=>{e.preventDefault();_type('')
                            }} size='small'>All</Button>
                            <Button onClick={(e)=>{e.preventDefault();_type('All')
                            }} size='small'>Active</Button>
                            <Button onClick={(e)=>{e.preventDefault();_type('Complete')
                            }} size='small'>Completed</Button>
                        </div>
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                        <Button onClick={removeCompleted} type="link" >Clear Completed</Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Footer;