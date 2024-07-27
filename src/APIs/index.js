const serverHost = 'http://localhost:4000';

const getMenu = async () => {
    var data = [];
    data = await fetch(`${serverHost}/menus`)
        .then((responce) => responce.json())
        .then((values) => (values?.length > 0 ? values : []))
        .catch((error) => console.log('lỗi khi get menu:', error));

    let parentData = await data.filter((item) => !item.parentID);
    parentData = await parentData.map((item) => {
        item.childs = data.filter((child) => child.parentID == item._id);
        return item;
    });
    return parentData.length > 0 ? parentData : [];
};

const getMenuItem = async (path) => {
    const pathArr = path.split('/');
    const pathName = pathArr[pathArr.length - 1];

    let menuItem = await fetch(`${serverHost}/menus/${pathName}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return menuItem?.name ?? '';
};

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

const getPartners = async () => {
    let partnersData = await fetch(`${serverHost}/partners`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return partnersData?.length > 0 ? partnersData : [];
};

const getPartner = async (path) => {
    const pathArr = path.split('/');
    const pathName = pathArr[pathArr.length - 1];
    let partnersData = await fetch(`${serverHost}/partners/${pathName}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return partnersData.name ? partnersData : {};
};

const getComments = async (postID) => {
    const commentsData = await fetch(`${serverHost}/comments/${postID}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return commentsData.length > 0 ? commentsData : [];
};

const postComment = (postID) => {
    return `${serverHost}/comments/${postID}?_method=POST`;
};

const search = async (query) => {
    const searchResult = await fetch(`${serverHost}/search${query}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return searchResult.length > 0 ? searchResult : [];
};

export default {
    getMenu,
    getMenuItem,

    getPost,
    getPosts,
    getFullPosts,
    getPostByID,
    addPost,
    updatePost,

    getPartners,
    getPartner,

    getComments,
    postComment,
    search,
};
