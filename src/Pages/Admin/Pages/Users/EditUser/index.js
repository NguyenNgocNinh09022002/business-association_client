import React, { useEffect, useReducer, useState } from 'react';
import './EditUser.scss';
import APIs from '../../../../../APIs';

const EditUser = () => {

    const [userRole, setUserRole] = useState('admin_1')
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('')

    const urlArr = document.location.pathname.split('/');
    const userID = urlArr[urlArr.length - 1];

    useEffect(()=>{
        
     
        APIs.getUser(userID).then(data => {
            if(data.fullName) {
                setFullName(data.fullName);
                setEmail(data.email);
                setPassword(data.password);
                setUserRole(data.role);
                const selectNode = document.getElementById('select').options
               
                for(let i = 0 ; i< selectNode.length; i++)
                    
                    if(selectNode[i].value == data.description) {
                       selectNode[i].selected = true;
                       break;
                    }
            }
        })
    }, [])
   
    return (
        <div className="add_users">
            <form className="container" action={APIs.upDateUser(userID)} method="POST">
                <div className="item_container">
                    <span className="item_title">Quyền</span>
                    <select id='select'
                        onChange={(e) => setUserRole(e.target.options[e.target.selectedIndex].id)}
                        name="description"
                        className="item_select"
                        defaultValue={description}
                    >
                        <option
                            style={{ marginTop: 10, marginBottom: 10 }}
                            id="admin_1"
                            value={'Tạo mới, chỉnh sửa tin tức, đối tác'}
                        >
                            Tạo mới, chỉnh sửa tin tức, đối tác
                        </option>
                        <option
                            style={{ marginTop: 10, marginBottom: 10 }}
                            id='admin_2'
                            value={'Duyệt bài đã tạo, thay đổi nội dung tin tức, đối tác'}
                        >
                            Duyệt bài đã tạo, thay đổi nội dung tin tức, đối tác
                        </option>
                        <option 
                            id='admin_3'
                            value={'Đăng bài, cập nhật thông tin thay đổi/tạo mới lên website'}>
                                Đăng bài, cập nhật thông tin thay đổi/tạo mới lên website
                        </option>
                    </select>
                </div>
                <div className="item_container">
                    <span className="item_title">Tên đăng nhập</span>
                    <input
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="fullName"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Email</span>
                    <input
                        className="item_input item_input__title"
                        type="email"
                        style={{ width: '100%' }}
                        name="email"

                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Mật khẩu</span>
                    <input
                        className="item_input item_input__files"
                        type="password"
                        style={{ width: '100%' }}
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}

                    />
                </div>
                <input name='role' value={userRole} hidden />
                <div className="btn_container">
                    <div className="btn_item">
                        <button type="button" className="btn_cancel">
                            Hủy
                        </button>
                    </div>
                    <div className="btn_item">
                        <button className=" btn_submit" type="submit">
                            Cập nhật thông tin
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
