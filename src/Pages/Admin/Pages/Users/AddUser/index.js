import React, { useEffect, useState } from 'react';
import './AddUsers.scss';

const AddUsers = () => {
    return (
        <div className="add_users">
            <form className="container">
                <div className="item_container">
                    <span className="item_title">Quyền</span>
                    <select name="parentID" className="item_select">
                        {/* {postTypes.map((type) => (
                            <option value={type._id} className="item_select__option">
                                {type.name}
                            </option>
                        ))} */}
                    </select>
                </div>
                <div className="item_container">
                    <span className="item_title">Tên đăng nhập</span>
                    <input
                        // onInput={(event) => setTitle(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        // value={title}
                        name="title"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Email</span>
                    <input
                        className="item_input item_input__title"
                        id="file"
                        type="email"
                        // onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Mật khẩu</span>
                    <input
                        className="item_input item_input__files"
                        id="file"
                        type="password"
                        // onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                </div>
                <div className="btn_container">
                    <div className="btn_item">
                        <button className=" btn_submit" type="submit">
                            Tạo tài khoản
                        </button>
                    </div>
                    <div className="btn_item">
                        <input type="button" className="btn_cancel" value={'Hủy'} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUsers;
