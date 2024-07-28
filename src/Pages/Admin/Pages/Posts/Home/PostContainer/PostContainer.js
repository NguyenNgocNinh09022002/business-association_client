import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './PostsContainer.scss';

import Table from '../../Components/Table/Table';
import APIs from '../../../../../../APIs/index';

const getLateColumns = (type) => {
    var arrCol = [];
    switch (type) {
        case 'accepting':
        case 'pending':
        case 'executing':
            arrCol = [{ Header: 'Hành động', accessor: 'method' }, { Header: 'Ngày tạo', accessor: 'createdAt' }];
            break;
        case 'public':
        default:
            arrCol = [{ Header: 'Ngày tạo', accessor: 'createdAt' }];
            break;
    }
    return arrCol;
};

const PostsContainer = ({ type }) => {
    const [data, setData] = useState([]);
    const [rawData, setRawData] = useState([])
    const columns = [
        { Header: ' STT', accessor: 'index' },
        { Header: 'Tên bài viết', accessor: 'title' },
        { Header: 'Danh mục', accessor: 'postTypeName' },
        ...getLateColumns(type)
    ];
    useEffect(() => {
        APIs.getFullPosts(type).then((posts) => {
            if (posts.length > 0) {
                
                if(!posts[0].data) setData(posts);
                else  {
                    setData(posts.map(data => {return {...data.data, method: data.method, createdAt: data.createdAt}}))
                    setRawData(posts)
                }
            }
        });
    }, []);
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
            </div>
            <div className="board__table">
                <Table columns={columns} data={data} path={'/posts'} state={type} rawData={rawData}/>
            </div>
        </div>
    );
};

export default PostsContainer;
