import React, { useEffect, useState } from 'react';
import CkEditorComponent from '../../Components/CkEditor/CkEditor';
import './EditPost.scss';
import APIs from '../../../../APIs';

const EditPost = () => {
    const [content, setContent] = useState('');
    const [postTypes, setPostTypes] = useState([]);
    const [postData, setPostData] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

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
                    setPostData(data);
                    setContent(data.content);
                    setTitle(data.title)
                    setDescription(data.description)
                }
            })

            .catch((error) => alert('lỗi: ', error));
    }, []);

    return (
        <div className="edit_post">
            <form className="container" method='POST' action={APIs.updatePost(postData?._id)}>
                <div className="item_container">
                    <span className="item_title">Thể loại</span>
                    <select name='parentID' className="item_select">
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
                        value={postData?.description}
                    >
                        {postData?.description}
                    </textarea>
                </div>
                <div className="item_container">
                    <span className="item_title">Hình ảnh</span>
                    <input
                        className="item_input item_input__files"
                        id="fileUpload"
                        type="file"
                        multiple
                        style={{ width: '100%' }}
                        // name="fileUpload"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Nội dung</span>
                    <CkEditorComponent data={content} onEvent={setContent} />
                </div>
                <input name='content' value={content} hidden />
                <div className="btn_container">
                    <div className="btn_item">
                        <input className=" btn_submit" type="submit" onClick={() => {}} value={'Lưu bài viết'} />
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
