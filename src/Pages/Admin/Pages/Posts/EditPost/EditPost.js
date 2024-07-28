import React, { useEffect, useState } from 'react';
import CkEditorComponent from '../Components/CkEditor/CkEditor';
import './EditPost.scss';
import APIs from '../../../../../APIs';
import { ref, getDownloadURL,  uploadBytes } from 'firebase/storage';
import { storage } from '../../../../../firebaseConfig';

const EditPost = () => {
    const [content, setContent] = useState('');
    const [postTypes, setPostTypes] = useState([]);
    const [postData, setPostData] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [file, setFile] = useState();
   const [_id, set_Id] = useState();
    useEffect(() => {
        APIs.getMenu()
            .then((menus) => (menus.length > 0 ? menus.filter((item) => item._id == '669c7da19e21ccf15d892a07') : []))
            .then((data) => setPostTypes(data[0]?.childs))
            .catch((error) => alert(error));
    }, []);

    useEffect(() => {
        const path = document.location.pathname.split('/');

        const state = document.location.search.substring(7);
        if(state == 'pending' || state == 'accepting') setIsVisible(true)
        APIs.getPostByID(path[path.length - 1])
            .then((data) => {
                if (!!data) {
                    console.log(data)
                    setPostData(data);
                    setContent(data.content);
                    setTitle(data.title)
                    setDescription(data.description)
                    setFile(data.attachments[0].image)
                    set_Id(data.postID);
                }
            })

            .catch((error) => alert('lỗi: ', error));
    }, []);

    const configButton = () => {
       const state = document.location.search.substring(7);
       switch (state) {
           case 'pending':
               return (
                   <div className="btn_container">
                       <div className="btn_item">
                           <button className="btn_cancel" type='button' >Hủy</button>
                       </div>
                       <div className="btn_item">
                           <button onClick={(e) => {e.preventDefault(); APIs.agreePost({postsID:postData._id, state: state})}} className="btn_submit" type='submit' >Duyệt bài viết</button>
                       </div>
                   </div>
               );
               break;
           case 'accepting':
               return (
                   <div className="btn_container">
                       <div className="btn_item">
                           <button type='button' className="btn_cancel" >Hủy</button>
                       </div>
                       <div className="btn_item">
                           <button type="submit" onClick={(e) => {e.preventDefault(); APIs.agreePost({postsID:postData._id, state: state})}}  className="btn_submit"  >Đăng bài viết</button>
                       </div>
                   </div>
               );
               break;
           default:
               return (
                   <div className="btn_container">
                       <div className="btn_item">
                           <button type='button' className="btn_cancel"  >Hủy</button>
                       </div>
                       <div className="btn_item">
                           <button type='submit'  className=" btn_submit" >Lưu bài viết</button>
                       </div>
                   </div>
               );
               break;
       }
    }

 

    function handleChange(event) {
        const imgPath = event.target.files[0];
        console.log(event.target.files[0].Blob);
        setFile(URL.createObjectURL(imgPath));
        setImage(imgPath);
    }
    
    const handleSubmit = async (e) => {
        let pathImg = "";
        // Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType: 'image/jpeg',
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + 'img ' + image?.name);
        const uploadTask = await uploadBytes(storageRef, image, metadata)
            .then((res) => console.log(res))
            .catch((err) => console.error(err));

        await getDownloadURL(storageRef)
            .then( (imgPath) => {
                pathImg = imgPath;
            })
            .catch((error) => alert(error));
        return pathImg;
    };

    return (
        <div className="edit_post">
            <form id='form'
             onSubmit={async function (e) {
                    e.preventDefault();
                    // image = undefined || blob
                    // file = "" ||  imagePath || urlPath 

                    // und "" => false false => false => image ""
                    // un img => false true => false => img img
                    // bb "" => true false => false => bb hand
                    // bb img => true true => true  => both hand
                    // bb url => true true => true=> both hand

                     if(!image)  {
                        document.getElementById('image').value = file;
                        document.getElementById('form').submit();
                     } else {
                        const url = await handleSubmit();
                        document.getElementById('image').value = url;
                        document.getElementById('form').submit();
                     }
                    // if(image) {
                    //     document.getElementById('form').submit();
                    //     return;
                    // }
                    // const url = (file || file == "") && !image ? file : await handleSubmit().then(data => data);
                    // alert('url: ', url)
                   
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
                    {file && <img src={  file} alt="uploaded file"  />}
                    <input id="image" name="image" hidden />
                    <input id="_id" name="_id" hidden value={_id} />
                </div>
               
                <div className="item_container">
                    <span className="item_title">Nội dung</span>
                    <CkEditorComponent disabled={isVisible} data={content} onEvent={setContent} />
                </div>
                <input name='content' value={content} hidden />
               {configButton()}
            </form>
        </div>
    );
};

export default EditPost;
