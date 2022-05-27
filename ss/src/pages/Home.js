import { useDispatch } from "react-redux";
import { getPosts } from "../store/posts/actions";
import { Container } from "react-bootstrap";
import Posts from "../components/Posts";
import { useEffect } from "react";

export default function Home() {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container className="home">
            <Posts />
        </Container>
    );
}