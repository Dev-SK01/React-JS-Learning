import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const POSTS = [
        {
            userId: 1,
            id: 1,
            title: "are or do repels provide blacked out except option criticizes",
            body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the troubles so that the whole\nof our things are but they are the matter will happen to the architect"
        },
        {
            userId: 1,
            id: 2,
            title: "who is being",
            body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing."
        },
        {
            userId: 1,
            id: 3,
            title: "she repels troubles as if she were training, whoever she is",
            body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared"
        },
        {
            userId: 1,
            id: 4,
            title: "and he is blinded",
            body: "by rejecting any and often to gain pleasure but it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
        },
        {
            userId: 1,
            id: 5,
            title: "they don't know what they hate",
            body: "let him seek forgiveness for repudiation, but there are other things, or let him flee, but he is, but there is pleasure, we can all be pleasures; there is no pain, nor"
        },]
    const [posts, setPosts] = useState(POSTS || []);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    // search feature 
    function handleSearch(e) {
        const searchData = e.target.value.toLowerCase();
        const searchRes = POSTS.filter((post) => {
            console.log(post.body.indexOf(searchData));
            if ((post.title.indexOf(searchData) !== -1 || post.body.indexOf(searchData) !== -1) && (post.title.indexOf(searchData) !== 0 || post.body.indexOf(searchData) !== 0)) {
                return post;
            }
        });
        if (searchRes.length) {
            setPosts(searchRes);
        } else {
            setPosts(POSTS);
        }
    }

    // Create new post Feature 

    function createNewPost(e) {
        e.preventDefault();
        const id = posts.length ? posts.length + 1 : 1;
        const newPost = { userId: 1, id: id, title: title, body: content };
        setPosts(() => ([...posts, newPost]))
        setContent('');
        setTitle('');
        navigate('/social/post');
    }
    // delete post feature
    function deletePost(id) {
        const findPost = posts.filter((post) => (post.id !== id));
        console.log(findPost);
        setPosts(findPost);
    }
    return (
        <DataContext.Provider value={{
            posts, setPosts, title, setTitle, handleSearch,
            createNewPost, deletePost, content, setContent
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;