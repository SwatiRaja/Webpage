import React from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Posts() {
    const { posts, loadingPosts } = useSelector((state) => state.PostReducer);
    return (
        <Container>
            {loadingPosts ? (
                <div className="loader">
                    <Loader
                        type="Bars"
                        color="#00BFFF"
                        height={50}
                        width={100}
                        timeout={3000} 
                    />
                </div>
            ) : (
                posts.map((item, index) => {
                    return (
                        <Row className="posts" key={index}>
                            <Col lg={8} md={10} sm={12}>
                                <Link to={`/${item.id}`}>
                                <Card>
                                    <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.body}</Card.Text>
                                    </Card.Body>
                                </Card>
                                </Link>
                            </Col>
                        </Row>
                    );
                })
            )}
        </Container>
    );
}