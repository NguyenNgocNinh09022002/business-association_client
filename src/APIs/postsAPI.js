const serverHost = 'http://localhost:4000';

const getPost = async (path) => {
    let postData = await fetch(`${serverHost}/posts/${path}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return postData;
};

const getPosts = async (path) => {
    let postsData = await fetch(`${serverHost}/posts/${path}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return postsData.length > 0 ? postsData : [];
};

const getFullPosts = async (type) => {
    let postsData = await fetch(`${serverHost}/admin/posts/${type}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(`Lỗi khi getFullPosts: ${error}`));
    return postsData?.length > 0 ? postsData : [];
};

const getPostByID = async (id) => {
    let postData = await fetch(`${serverHost}/posts/postByID?q=${id}`, { method: 'GET' })
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(`Lỗi khi getPostByID: ${error}`));
    
    return postData;
};


const addPost = () => {
    return `${serverHost}/posts/store`;
}

const updatePost = (postData) => {
    return `${serverHost}/posts/${postData._id}?_method=PUT`
}

const deletePost = async (postID) => {
    alert('sẽ xóa')
    const data = await fetch(`${serverHost}/posts/${postID}`, {method:'DELETE'}).then(res => console.log(res)).catch(error => alert(error))
    return data
}

const agreePost = async ({postsID, state}) => {
    const data = await fetch(`${serverHost}/posts/agree/${state}/${postsID}`, {method:'PUT'}).then(res => res).catch(error => alert(error))
    return data
}

export { getFullPosts, getPost,  getPosts, getPostByID, updatePost, deletePost, addPost, agreePost  }