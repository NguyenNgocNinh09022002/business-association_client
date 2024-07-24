import React, { useEffect, useState } from 'react';
import CkEditorComponent from '../../Components/CkEditor/CkEditor';
import './EditPost.scss';
import APIs from '../../../../APIs';

const EditPost = () => {
    const [content, setContent] = useState('');
    const [postTypes, setPostTypes] = useState([]);

    useEffect(() => {
        APIs.getMenu()
            .then((menus) => (menus.length > 0 ? menus.filter((item) => (item._id == '669c7da19e21ccf15d892a07')) : []))
            .then((data) => setPostTypes(data[0]?.childs))
            .catch((error) => alert(error));
    }, []);

    return (
        <div className="edit_post">
            <form className="container">
                <div className="item_container">
                    <span className="item_title">Thể loại</span>
                    <select className="item_select" defaultValue="Chọn thể loại">
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
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="title"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Mô tả</span>
                    <textarea
                        className="item_input item_textarea"
                        style={{ width: '100%' }}
                        name="description"
                    ></textarea>
                </div>
                <div className="item_container">
                    <span className="item_title">Hình ảnh</span>
                    <input
                        className="item_input item_input__files"
                        id="fileUpload"
                        type="file"
                        multiple
                        style={{ width: '100%' }}
                        name="fileUpload"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Nội dung</span>
                    <CkEditorComponent data={content} onEvent={setContent} />
                </div>

                <div>
                    <button
                        type="submit"
                        onClick={() => {
                            alert(content);
                        }}
                    >
                        Save
                    </button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default EditPost;
