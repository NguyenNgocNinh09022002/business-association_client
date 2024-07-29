import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './PartnerContainer.scss';

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

const PartnersContainer = ({ type }) => {
    const [data, setData] = useState([]);
    const [rawData, setRawData] = useState([])
    const columns = [
        { Header: ' STT', accessor: 'index' },
        { Header: 'Tên thành viên', accessor: 'name' },
        { Header: 'Tên viết tắt', accessor: 'shortName' },
        ...getLateColumns(type)
    ];
    useEffect(() => {
        APIs.getFullPartners(type).then((partnersData) => {
            if (partnersData.length > 0) {
                
                if(!partnersData[0].data) setData(partnersData);
                else  {
                    setData(partnersData.map(data => {return {...data.data, method: data.method, index: data.index}}))
                    setRawData(partnersData)
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
                        <p>Admin</p>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Partners</p>
                    </div>
                </div>
                <div className="board__header">
                    <h1> QUẢN LÝ THÀNH VIÊN (PARTNERS)</h1>
                </div>
            </div>
            <div className="board__table">
                <Table columns={columns} data={data} path={'/partners'} state={type} rawData={rawData}/>
            </div>
        </div>
    );
};

export default PartnersContainer;
