import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Pagination } from 'antd';
import "./style.css"
// importacion de imagenes
import ofice from '../Images/ofice.jpg';
import a from '../Images/a.jpg';
import b from '../Images/b.jpg';
import c from '../Images/c.jpg';
import d from '../Images/d.jpg';
import e from '../Images/e.jpg';
import f from '../Images/f.jpg';

const dataAdd = [
    {
        url: a,
        thumbnailUrl: "../Images/a.jpg",
        title: 'Bill Walsh leadership lessons',
    },
    {
        url: b,
        thumbnailUrl: "../Images/b.jpg",
        title: 'PM mental models',
    },
    {
        url: c,
        thumbnailUrl: "../Images/c.jpg",
        title: 'What is Wireframing?',
    },
    {
        url: d,
        thumbnailUrl: "../Images/d.jpg",
        title: 'How collaboration makes us better designers',
    },
    {
        url: e,
        thumbnailUrl: "../Images/e.jpg",
        title: 'Our top 10 Javascript frameworks to use',
    },
    {
        url: f,
        thumbnailUrl: "../Images/f.jpg",
        title: 'Podcast: Creating a better CX Community',
    },
];


export default function Home() {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [dataSize, setDataSize] = useState();
    const [dataRecent, setDataRecet] = useState([]);
    const [dataAll, setDataAll] = useState([]); // solo se van a guardar los primeros 6 elementos de la api

    //para la paginacion y contenido de bloques por paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const fetchApi = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await response.json();

        const updatedPhotos = [...dataAdd, ...photos];

        // Calcula el índice de inicio y fin para las imágenes según la página actual.
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Actualiza el estado de las imágenes recientes basado en la página actual.
        setDataSize(updatedPhotos.length)
        setDataAll(updatedPhotos.slice(startIndex, endIndex));
        console.log(dataAll);
        setDataRecet(updatedPhotos.slice(0, 2));
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Llama a la función fetchApi para cargar las imágenes correspondientes a la página seleccionada.
    };

    useEffect(() => {
        fetchApi()

    }, [0]);

    useEffect(() => {
        fetchApi()
    }, [currentPage]);

    const onChange = (e) => {
        console.log(e);
    };

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };

    return (
        <div className='containerhome'>
            <div className='header'>
                <p className='p1'>Our blog</p>
                <h1 >Stories and interviews</h1>
                <p className='p2'>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                        <Row className='recent'>
                            {dataRecent.map((read, index) => (
                                <Col
                                    xs={24}
                                    lg={24}
                                    key={index}>
                                    <Row className='container-recent'>
                                        <Col xs={24} lg={12}>
                                            <img src={read.url} alt={read.thumbnailUrl} className='image-recent'></img>
                                        </Col>
                                        <Col xs={24} lg={12} className='text-recent'>
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
                <h2> All blog posts</h2>
                <Row>
                    <Col xs={24} lg={24}>
                        <Row>
                            {dataAll.map((read, index) => (
                                <Col
                                    xs={24}
                                    lg={8}
                                    key={index}>
                                    <Row className='container-recent' >
                                        <Col xs={24} lg={24}>
                                            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img src={read.url} alt={read.thumbnailUrl} className='image-all'></img>
                                            </Row>
                                            <Row xs={24} lg={24}>
                                                <p className='p-all-blog-author'>Alec Whitten • 17 Jan 2022</p>
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

                        <Pagination
                            current={currentPage}
                            total={dataSize}
                            pageSize={itemsPerPage}
                            onChange={handlePageChange}
                            itemRender={itemRender}
                            showSizeChanger={false}
                            className='pagination' // Añade estilos según tus preferencias.
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}