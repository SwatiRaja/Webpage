import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { getPostDetails } from "../store/posts/actions";
import PostDetails from "../components/PostDetails";
import { useDispatch } from "react-redux";

function SinglePost() {
    let dispatch = useDispatch();
    let params = useParams();

    useEffect(() => {
        dispatch(getPostDetails(params.id));
    }, [dispatch, params.id]);

    return (
        <Container className="single-post">
            <PostDetails />
        </Container>
    );
}

export default SinglePost;