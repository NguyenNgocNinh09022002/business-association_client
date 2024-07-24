import React from 'react';
import './Board.scss';
import Table from '../../Components/Table/Table';
import { Link } from 'react-router-dom';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';

function Board() {
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
            Header: ' Chức vụ doanh nghiệp',
            accessor: 'chucvudoanhnghiep',
        },
        {
            Header: 'Đơn vị công tác',
            accessor: 'donvi',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
    ];
    const data = [
        {
            stt: '1',
            hovaten: 'Trần Lệ Nguyên',
            chucvudoanhnghiep: 'Đồng sáng lậpPCT.HĐQT/Tổng Giám đốc',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'Nguyen1234@gmail.com',
        },
        {
            stt: '2',
            hovaten: 'Nguyễn Trần Lệ Nguyên',
            chucvudoanhnghiep: 'Đồng sáng lậpPCT.HĐQT/Tổng Giám đốc',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'Nguyen1234@gmail.com',
        },
        {
            stt: '3',
            hovaten: 'Lê Trần Lệ Nguyên',
            chucvudoanhnghiep: 'Đồng sáng lậpPCT.HĐQT/Tổng Giám đốc',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'Nguyen1234@gmail.com',
        },
        {
            stt: '4',
            hovaten: 'OTrần Lệ Nguyên',
            chucvudoanhnghiep: 'Đồng sáng lậpPCT.HĐQT/Tổng Giám đốc',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'Nguyen1234@gmail.com',
        },
        {
            stt: '5',
            hovaten: 'ATrần Lệ Nguyên',
            chucvudoanhnghiep: 'Đồng sáng lậpPCT.HĐQT/Tổng Giám đốc',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'Nguyen1234@gmail.com',
        },
        {
            stt: '6',
            hovaten: 'B Trần Lệ Nguyên',
            chucvudoanhnghiep: 'Đồng sáng lậpPCT.HĐQT/Tổng Giám đốc',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'Nguyen1234@gmail.com',
        },
        {
            stt: '7',
            hovaten: 'C rần Lệ Nguyên',
            chucvudoanhnghiep: 'Đồng sáng lậpPCT.HĐQT/Tổng Giám đốc',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'Nguyen1234@gmail.com',
        },
        {
            stt: '8',
            hovaten: 'D Trần Lệ Nguyên',
            chucvudoanhnghiep: 'Đồng sáng lậpPCT.HĐQT/Tổng Giám đốc',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'Nguyen1234@gmail.com',
        },
        {
            stt: '9',
            hovaten: 'W Trần Lệ Nguyên',
            chucvudoanhnghiep: 'Đồng sáng lậpPCT.HĐQT/Tổng Giám đốc',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'Nguyen1234@gmail.com',
        },
        {
            stt: '10',
            hovaten: 'D Trần Lệ Nguyên',
            chucvudoanhnghiep: 'Chủ tịch doanh nghiệp',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'Nguyen1234@gmail.com',
        },
        {
            stt: '11',
            hovaten: 'W Trần Lệ Nguyên',
            chucvudoanhnghiep: 'Đồng sáng lậpPCT.HĐQT/Tổng Giám đốc',
            donvi: 'Công ty CP Tập đoàn Kido',
            email: 'WNguyen1234@gmail.com',
        },
    ];
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
                <Table columns={columns} data={data} />
            </div>
        </div>
    );
}

export default Board;
