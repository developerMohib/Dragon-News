import { useLoaderData } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';

const Blog = () => {
    const newsBlog = useLoaderData() ;
    console.log(newsBlog, 'form blog');
    return (
        <div>
            <Navbar> </Navbar>
            <h1>blog</h1>
        </div>
    );
};

export default Blog;