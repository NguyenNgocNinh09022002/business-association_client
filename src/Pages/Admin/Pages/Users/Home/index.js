import React, { useEffect, useState } from 'react';
import Table from '../../../../../Components/Table/Table';
import './Users.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoIosAddCircle } from 'react-icons/io';

function Users() {
    const columns = [
        {
            Header: ' STT',
            accessor: 'stt',
        },
        {
            Header: 'Họ và Tên',
            accessor: 'hovaten',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Quyền',
            accessor: 'quyen',
        },
    ];
    const data = [
        {
            stt: '1',
            hovaten: 'Trần Lệ Nguyên',
            email: 'Nguyen1234@gmail.com',
            quyen: 'Nguyen1234@gmail.com',
        },
    ];
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
                <Link to="/admin/createUser" className="Admin__add_icon">
                    <h6>Thêm tài khoản</h6>
                    <IoIosAddCircle />
                </Link>
                <div className="admin__table">
                    <Table columns={columns} data={data} />
                    {/* <Table columns={columns} data={data} path={'/posts'} /> */}
                </div>
            </div>
        </div>
    );
}

export default Users;
