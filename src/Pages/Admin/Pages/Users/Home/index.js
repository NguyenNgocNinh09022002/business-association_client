import React, { useEffect, useState } from 'react';
import Table from '../Components/Table/Table'
import './Users.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoIosAddCircle } from 'react-icons/io';
import APIs from '../../../../../APIs';


const columns = [
    {
        Header: ' STT',
        accessor: 'index',
    },
    {
        Header: 'Họ và Tên',
        accessor: 'fullName',
    },
    {
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'Quyền',
        accessor: 'description',
    },
];

function Users() {
   
    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        APIs.getUsers().then(async (data)=> {
            console.log(data);
            if(data) {
                const customData = await data.map((item, index) => {return {...item, index: index+1}})
                setUserData(customData)
            }

        })        
    },[])


    return (
        <div className="container">
            <div className="admin__user">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Admin</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Users</p>
                    </div>
                </div>
                <div className="admin__header">
                    <h1>Users</h1>
                </div>
                <Link to="/admin/users/add" className="Admin__add_icon">
                    <h6>Thêm tài khoản</h6>
                    <IoIosAddCircle />
                </Link>
                <div className="admin__table">
                    <Table columns={columns} data={userData} />
                </div>
            </div>
        </div>
    );
}

export default Users;
