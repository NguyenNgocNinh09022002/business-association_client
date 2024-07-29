import React, { useEffect, useState } from 'react';
import CkEditorComponent from '../Components/CkEditor/CkEditor';
import './AddPost.scss';
import APIs from '../../../../../APIs';

import { storage } from '../../../../../firebaseConfig';
import { ref, getDownloadURL,  uploadBytes } from 'firebase/storage';

const AddPost = () => {
    const [postTypes, setPostTypes] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    useEffect(() => {
        APIs.getMenu()
            .then((menus) => (menus.length > 0 ? menus.filter((item) => item._id == '669c7da19e21ccf15d892a07') : []))
            .then((data) => setPostTypes(data[0]?.childs))
            .catch((error) => alert(error));
    }, []);

    //handle file upload
    const [imageBlob, setImageBlob] = useState();
    const [progresspercent, setProgresspercent] = useState(0);
    const [file, setFile] = useState();

    function handleChange(event) {
        const imgPath = event.target.files[0];
        setImageBlob(imgPath);
        setFile(URL.createObjectURL(imgPath));
    }

    const handleSubmit = async (e) => {
        let pathImg = '';
        // Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType: 'image/jpeg',
        };


        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + 'img ' + imageBlob.name);
        const uploadTask = await uploadBytes(storageRef, imageBlob, metadata)
            .then((res) => console.log(res))
            .catch((err) => console.error(err));

        await getDownloadURL(storageRef)
            .then((imgPath) => {
                pathImg = imgPath;
                alert('path img: ', pathImg)
            })
            .catch((error) => alert(error));
        return pathImg;
    };

    return (
        <div className="edit_post">
            <form
                id="form"
                onSubmit={async function (e) {
                    e.preventDefault();
                    const url = imageBlob ? await handleSubmit() : "";
                    
                    document.getElementById('image').value = url;
                    document.getElementById('form').submit();
                }}
                action={APIs.addPost()}
                method="POST"
                className="container"
            >
                <div className="item_container">
                    <span className="item_title">Thể loại</span>
                    <select name="parentID" className="item_select">
                        {postTypes.map((type) => (
                            <option value={type._id} className="item_select__option">
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="item_container">
                    <span className="item_title">Tiêu đề</span>
                    <input
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
                        onInput={(event) => setDescription(event.value)}
                        className="item_input item_textarea"
                        style={{ width: '100%' }}
                        name="description"
                        rows={5}
                        value={description}
                    >
                        {description}
                    </textarea>
                </div>
                <div className="item_container">
                    <span className="item_title">Hình ảnh</span>
                    <input
                        className="item_input item_input__files"
                        id="file"
                        type="file"
                        onChange={handleChange}
                        style={{ width: '100%' }}
                        // name="fileUpload"
                    />
                </div>
                <input id="image" name="image" hidden  />
                {file && <img id='img_des' src={file} alt="uploaded file" height={200} />}
                <div className="item_container">
                    <span className="item_title">Nội dung</span>
                    <CkEditorComponent data={content} onEvent={setContent} />
                </div>
                <input name="content" value={content} hidden />
                <div className="btn_container">
                    
                    <div className="btn_item">
                        <button type="button" className="btn_cancel" onClick={()=> window.history.back()} >Hủy</button>
                    </div>
                    <div className="btn_item">
                        <button className=" btn_submit" type="submit">
                            Lưu bài viết
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddPost;
