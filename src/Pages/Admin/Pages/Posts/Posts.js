import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import APIs from '../../../../APIs';
import './Posts.scss';

import Table from '../../Components/Table/Table'

function Posts() {
    const columns = [
        {
            Header: ' STT',
            accessor: 'index',
        },
        {
            Header: 'Tên bài viết',
            accessor: 'title',
        },
        {
             Header: 'Danh mục',
            accessor: 'postTypeName',
        },
        {
            Header: 'Ngày đăng',
            accessor: 'createdAt',
        },
       
       
    ];
    const [data, setData] = useState([])

    useEffect(()=>{
        APIs.getFullPosts().then(posts =>{
            if(posts.length >0) {
                setData(posts)
            }
        })
    },[])
    return (
        <div className="container">
            <div className="board">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Ban chấp hành</p>
                    </div>
                </div>
                <div className="board__header">
                    <h1>Ban Chấp hành Hiệp hội Nhiệm kỳ VII (2022-2027)</h1>
                </div>
                <div className="board__wrap">
                    <div className="board__wrap_date">
                        <MdOutlineCalendarToday />
                        <p>12/07/2024</p>
                    </div>
                    <div className="board__wrap_feature">
                        <Link to="" title="Chia sẻ bài viết lên facebook">
                            <AiOutlineFacebook />
                        </Link>
                        <Link to="" title="Chia sẻ bài viết lên instagram">
                            <AiOutlineInstagram />
                        </Link>
                        <Link to="" title="Chia sẻ bài viết lên zalo">
                            <SiZalo />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="board__table">
                <Table columns={columns} data={data} path={"/posts"} />
            </div>
        </div>
    );
}

export default Posts;
