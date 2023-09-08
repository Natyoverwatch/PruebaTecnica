import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import "./style.css"
// importacion de imagenes
import ofice from '../Images/ofice.jpg';

export default function Home() {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [dataRecent, setDataRecet] = useState([]);
    const [dataAll, setDataAll] = useState([]); // solo se van a guardar los primeros 6 elementos de la api

    const fetchApi = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await response.json();
        setDataRecet(photos.slice(0, 2));
        setDataAll(photos.slice(2, 8));
    }
    useEffect(() => {
        fetchApi()

    }, [0]);

    const onChange = (e) => {
        console.log(e);
    };
    return (
        <div className='containerhome'>
            <div className='header'>
                <p className='p1'>Our blog</p>
                <h1 >Stories and interviews</h1>
                <p className='p2'>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            </div>
            <div >
                <Form
                    name="basic"
                    layout="inline"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    className="login"
                >
                    <Form.Item
                        name="Usuario"
                    >
                        <Input
                            placeholder="Enter your email"
                            allowClear onChange={onChange}
                            className='loginform' />
                        <p className='p-login'>We care about your data in our <a href="http://"> privacy policy </a></p>
                    </Form.Item>
                    <Form.Item >
                        <Button
                            type="default"
                            htmlType="submit"
                            className='button-login'
                            onClick={() => console.log({ usuario }, { contraseña })}
                        >
                            Subscribe
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="recent-blogs">
                <h2> Recent blog posts</h2>
                <Row>
                    <Col xs={24} lg={12}>
                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={ofice} className='image-1'></img>
                        </Row>
                        <Row xs={24} lg={24}>
                            <p className='p-recent-blog-author' style={{ width: '100%' }}>Olivia Rhye • 20 Jan 2022</p>
                            <h3 className='h3-recent-blog-title'>UX review presentations</h3>
                            <p className='p-recent-blog-paragraph'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                            <div className='items'>
                                <div className='button-item1'>
                                    <p className='p-item1'>Desing</p>
                                </div>
                                <div className='button-item2'>
                                    <p className='p-item2'>Research</p>
                                </div>
                                <div className='button-item3'>
                                    <p className='p-item3'>Presentation</p>
                                </div>
                            </div>
                        </Row>

                    </Col>
                    <Col xs={24} lg={12}>
                        <Row>
                            {dataRecent.map((read, index) => (
                                <Col
                                    xs={24}
                                    lg={24}
                                    key={index}>
                                    <Row style={{ margin: '1em 0 1em 2em' }}>
                                        <Col xs={24} lg={12}>
                                            <img src={read.url} alt={read.thumbnailUrl} className='image-recent'></img>
                                        </Col>
                                        <Col xs={24} lg={12} style={{ paddingLeft: '3em' }}>
                                            <p className='p-recent-blog-author'>Phoenix Baker • 19 Jan 2022</p>
                                            <h3 className='h3-recent-blog-title'>{read.title}</h3>
                                            <p className='p-recent-blog-paragraph'>Lorem ipsum dolor sit amet. Sed numquam consequatur sed accusantium neque ea...</p>
                                            <div className='items'>
                                                <div className='button-item1'>
                                                    <p className='p-item1'>Desing</p>
                                                </div>
                                                <div className='button-item2'>
                                                    <p className='p-item2'>Research</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className="all-blogs">
                <h2> Recent blog posts</h2>
                <Row>
                    <Col xs={24} lg={24}>
                        <Row>
                            {dataAll.map((read, index) => (
                                <Col
                                    xs={24}
                                    lg={8}
                                    key={index}>
                                    <Row style={{ margin: '1em 0 1em 2em' }}>
                                        <Col xs={24} lg={24}>
                                            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img src={read.url} alt={read.thumbnailUrl} className='image-all'></img>
                                            </Row>
                                            <Row xs={24} lg={24}>
                                                <p className='p-recent-blog-author'>Alec Whitten • 17 Jan 2022</p>
                                                <h3 className='h3-recent-blog-title'>{read.title}</h3>
                                                <p className='p-recent-blog-paragraph'>Lorem ipsum dolor sit amet. Sed numquam consequatur sed accusantium neque ea...</p>
                                                <div className='items'>
                                                    <div className='button-item1'>
                                                        <p className='p-item1'>Desing</p>
                                                    </div>
                                                    <div className='button-item2'>
                                                        <p className='p-item2'>Research</p>
                                                    </div>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}