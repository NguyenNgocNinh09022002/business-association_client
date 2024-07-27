import React, { useEffect, useState } from 'react';
import CkEditorComponent from '../../Components/CkEditor/CkEditor';
import './EditPost.scss';
import APIs from '../../../../APIs';
import { ref, getDownloadURL,  uploadBytes } from 'firebase/storage';
import { storage } from '../../../../firebaseConfig';

const EditPost = () => {
    const [content, setContent] = useState('');
    const [postTypes, setPostTypes] = useState([]);
    const [postData, setPostData] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        APIs.getMenu()
            .then((menus) => (menus.length > 0 ? menus.filter((item) => item._id == '669c7da19e21ccf15d892a07') : []))
            .then((data) => setPostTypes(data[0]?.childs))
            .catch((error) => alert(error));
    }, []);

    useEffect(() => {
        const path = document.location.pathname.split('/');
        APIs.getPostByID(path[path.length - 1])
            .then((data) => {
                if (!!data) {
                    console.log(data)
                    setPostData(data);
                    setContent(data.content);
                    setTitle(data.title)
                    setDescription(data.description)
                    setImage(data.attachments[0]?.image)
                }
            })

            .catch((error) => alert('lỗi: ', error));
    }, []);



    const [file, setFile] = useState();

    function handleChange(event) {
        const imgPath = event.target.files[0];
        console.log(event.target.files[0].Blob);
        setFile(URL.createObjectURL(imgPath));
    }
    
    const handleSubmit = async (e) => {
        let pathImg = "";
        // Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType: 'image/jpeg',
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + 'img ' + file?.name);
        const uploadTask = await uploadBytes(storageRef, file, metadata)
            .then((res) => console.log(res))
            .catch((err) => console.error(err));

        await getDownloadURL(storageRef)
            .then( (imgPath) => {
                pathImg = imgPath
            })
            .catch((error) => alert(error));
        return pathImg;
    };

    return (
        <div className="edit_post">
            <form id='form'
             onSubmit={async function (e) {
                    e.preventDefault();
                    if(image) {
                        document.getElementById('form').submit();
                        return;
                    }
                    const url = await handleSubmit();
                    document.getElementById('image').value = url;
                    document.getElementById('form').submit();
                }}
             className="container" method='POST'   action={APIs.updatePost(postData)}>
                <div className="item_container">
                    <span className="item_title">Thể loại</span>
                    <select disabled={isVisible} name='parentID' className="item_select">
                        {postTypes.map((type) => (
                            <option
                                value={type._id}
                                selected={type._id == postData.parentID ? 'selected' : null}
                                className="item_select__option"
                            >
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="item_container">
                    <span className="item_title">Tiêu đề</span>
                    <input disabled={isVisible}
                        onInput={(event) => setTitle(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={title}
                        name="title"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Mô tả</span>
                    <textarea
                        disabled={isVisible}
                        onInput={(event) => setDescription(event.value)}
                        className="item_input item_textarea"
                        style={{ width: '100%' }}
                        name="description"
                        rows={5}
                        value={description}
                    >
                        {postData?.description}
                    </textarea>
                </div>
                <div className="item_container">
                    <span className="item_title">Hình ảnh</span>
                    <input
                        disabled={isVisible}
                        className="item_input item_input__files"
                        id="fileUpload"
                        type="file"
                        onChange={handleChange}
                        style={{ width: '100%' }}
                        // name="fileUpload"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title"></span>
                    {image && <img src={image} alt="uploaded file"  />}
                    <input id="image" name="image" hidden value={image} />
                </div>
               
                <div className="item_container">
                    <span className="item_title">Nội dung</span>
                    <CkEditorComponent disabled={isVisible} data={content} onEvent={setContent} />
                </div>
                <input name='content' value={content} hidden />
                <div className="btn_container">
                    <div className="btn_item">
                        <input  className=" btn_submit" type="submit" onClick={() => {}} value={'Lưu bài viết'} />
                    </div>
                    <div className="btn_item">
                        <input type="button" className="btn_cancel" value={'Hủy'} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditPost;
