import './Document.scss';
import React, { useState } from 'react';
import Table from '../../Components/Table/Table';
import { Link } from 'react-router-dom';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import file__document from '../../asset/file pdf/rule__file_pdf.pdf';
import file__document2 from '../../asset/file pdf/document__file.pdf';

function Document() {
    const columns = [
        {
            Header: 'Số hiệu',
            accessor: 'sohieuvanban',
        },
        {
            Header: 'Cơ quan ban hành',
            accessor: 'coquanbanhanh',
        },
        {
            Header: 'Lĩnh vực',
            accessor: 'linhvuc',
        },
        {
            Header: 'Loại văn bản',
            accessor: 'loaivanban',
        },
        {
            Header: 'Trích yếu',
            accessor: 'trichyeu',
        },
        {
            Header: 'Ngày ban hành',
            accessor: 'ngaybanhanh',
        },
        // {
        //     Header: 'Ngày có hiệu lực',
        //     accessor: 'ngaycohieuluc',
        // },
        {
            Header: 'Tải về',
            accessor: 'taive',
        },
    ];
    const [data, setData] = useState([
        {
            sohieuvanban: '21/2024/TT-BTTTT',
            coquanbanhanh: 'Chính phủ',
            linhvuc: 'Tổ chức hành chính',
            loaivanban: 'Thông tư',
            trichyeu: 'Ban hành hướng dẫn xác định chi phí phần mềm nội bộ',
            ngaybanhanh: '26/04/2024',
            // ngaycohieuluc: '26/04/2024',
            taive: file__document,
        },
        {
            sohieuvanban: '21/2024/TT-BTTTT',
            coquanbanhanh: 'Bộ/Cơ quan ngang bộ',
            linhvuc: 'Quy chế hoạt động',
            loaivanban: 'Thông tư',
            trichyeu:
                'Về việc công bố thủ tục hành chính mới ban hành, sửa đổi, bổ sung lĩnh vực bưu chính thuộc phạm vi chức năng quản lý của Bộ Thông tin và Truyền thông',
            ngaybanhanh: '26/04/2024',
            // ngaycohieuluc: '26/04/2024',
            taive: file__document2,
        },
    ]);
    return (
        <div className="container">
            <div className="document">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Văn bản</p>
                    </div>
                </div>
                <div className="document__header">
                    <h1>Văn bản</h1>
                </div>
                <div className="document__wrap">
                    <div className="document__wrap_date">
                        <MdOutlineCalendarToday />
                        <p>12/07/2024</p>
                    </div>
                    <div className="document__wrap_feature">
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
            <div className="document__table">
                <Table columns={columns} data={data} />
            </div>
        </div>
    );
}

export default Document;
