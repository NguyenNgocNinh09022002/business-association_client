import React, { useState } from 'react';
import './Request.scss';
import { Link } from 'react-router-dom';
import { GoChevronUp, GoChevronDown, GoSearch, GoChevronLeft, GoChevronRight } from 'react-icons/go';
import ReactPaginate from 'react-paginate';

function AccordionItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className={`accordion-question ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                {question}
                <span className="accordion-question-icon">{isOpen ? <GoChevronUp /> : <GoChevronDown />}</span>
            </div>
            <div className={`accordion-answer ${isOpen ? 'open' : ''}`}>
                <div className="answer-content">
                    {answer.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

const faqData = [
    {
        question: 'Mức xử phạt xe ô tô tải chở hàng vượt quá trọng tải cho phép tham gia giao thông',
        answer: 'Căn cứ theo quy định tại Điểm a Khoản 12; Điểm đ Khoản 14; Điểm đ Khoản 15 Điều 30 Nghị định 46/2016/NĐ-CP thì chủ phương tiện sẽ bị xử lý về lỗi: Giao phương tiện hoặc để cho người làm công, người đại diện điều khiển phương tiện thực hiện hành vi vi phạm quy định tại Khoản 8 Điều 24 Nghị định này hoặc trực tiếp điều khiển phương tiện thực hiện hành vi vi phạm quy định tại Khoản 8 Điều 24 Nghị định này với hình thức xử lý như sau: \n- Phạt tiền từ 18.000.000 đồng đến 20.000.000 đồng đối với cá nhân, từ 36.000.000 đồng đến 40.000.000 đồng đối với tổ chức.\n- Ngoài việc bị phạt tiền, cá nhân, tổ chức thực hiện hành vi vi phạm còn bị áp dụng các hình thức xử phạt bổ sung sau đây: Thực hiện hành vi quy định tại Điểm a Khoản 12 Điều 30 trong trường hợp chủ phương tiện là người trực tiếp điều khiển phương tiện còn bị tước quyền sử dụng Giấy phép lái xe từ 03 tháng đến 05 tháng; Buộc phải hạ phần hàng quá tải theo hướng dẫn của lực lượng chức năng tại nơi phát hiện vi phạm.',
    },
    {
        question: 'Câu hỏi 2',
        answer: 'Đây là câu trả lời cho câu hỏi 2. Đây là câu trả lời cho câu hỏi 2.',
    },
    {
        question: 'Câu hỏi 3',
        answer: 'Đây là câu trả lời cho câu hỏi 3.',
    },
    {
        question: 'Câu hỏi 4',
        answer: 'Đây là câu trả lời cho câu hỏi 4.',
    },
    {
        question: 'Thời gian, địa điểm tiếp nhận hồ sơ đổi giấy phép lái xe tại Bình Dương',
        answer: 'Sở Giao thông vận tải trả lời như sau: \nThời gian: Sáng 7h30 đến 11h00, chiều 13h00 đến 16h30; từ thứ 2 đến thứ 6 hàng tuần;\nĐịa điểm: Quầy 13-14 tầng 1, tháp B, Trung tâm Hành chính tỉnh, phường Hòa Phú, TP. Thủ Dầu Một, tỉnh Bình Dương, số điện thoại: 0274.813136;\nThời gian đổi giấy phép lái xe không quá 05 ngày làm việc, kể từ khi nhận hồ sơ đầy đủ theo quy định;\nKhi đổi giấy phép lái xe, cơ quan cấp giấy phép lái xe cắt góc giấy phép lái xe cũ (trừ giấy phép lái xe do nước ngoài cấp), giao cho người lái xe bảo quản.',
    },
    {
        question: 'Mức xử phạt xe ô tô tải chở hàng vượt quá trọng tải cho phép tham gia giao thông',
        answer: 'Căn cứ theo quy định tại Điểm a Khoản 12; Điểm đ Khoản 14; Điểm đ Khoản 15 Điều 30 Nghị định 46/2016/NĐ-CP thì chủ phương tiện sẽ bị xử lý về lỗi: Giao phương tiện hoặc để cho người làm công, người đại diện điều khiển phương tiện thực hiện hành vi vi phạm quy định tại Khoản 8 Điều 24 Nghị định này hoặc trực tiếp điều khiển phương tiện thực hiện hành vi vi phạm quy định tại Khoản 8 Điều 24 Nghị định này với hình thức xử lý như sau: \n- Phạt tiền từ 18.000.000 đồng đến 20.000.000 đồng đối với cá nhân, từ 36.000.000 đồng đến 40.000.000 đồng đối với tổ chức.\n- Ngoài việc bị phạt tiền, cá nhân, tổ chức thực hiện hành vi vi phạm còn bị áp dụng các hình thức xử phạt bổ sung sau đây: Thực hiện hành vi quy định tại Điểm a Khoản 12 Điều 30 trong trường hợp chủ phương tiện là người trực tiếp điều khiển phương tiện còn bị tước quyền sử dụng Giấy phép lái xe từ 03 tháng đến 05 tháng; Buộc phải hạ phần hàng quá tải theo hướng dẫn của lực lượng chức năng tại nơi phát hiện vi phạm.',
    },
    {
        question: 'Câu hỏi 5',
        answer: 'Đây là câu trả lời cho câu hỏi 2. Đây là câu trả lời cho câu hỏi 2.',
    },
    {
        question: 'Câu hỏi 6',
        answer: 'Đây là câu trả lời cho câu hỏi 3.',
    },
    {
        question: 'Câu hỏi 7',
        answer: 'Đây là câu trả lời cho câu hỏi 4.',
    },
    {
        question: 'Thời gian, địa điểm tiếp nhận hồ sơ đổi giấy phép lái xe tại Bình Dương',
        answer: 'Sở Giao thông vận tải trả lời như sau: \nThời gian: Sáng 7h30 đến 11h00, chiều 13h00 đến 16h30; từ thứ 2 đến thứ 6 hàng tuần;\nĐịa điểm: Quầy 13-14 tầng 1, tháp B, Trung tâm Hành chính tỉnh, phường Hòa Phú, TP. Thủ Dầu Một, tỉnh Bình Dương, số điện thoại: 0274.813136;\nThời gian đổi giấy phép lái xe không quá 05 ngày làm việc, kể từ khi nhận hồ sơ đầy đủ theo quy định;\nKhi đổi giấy phép lái xe, cơ quan cấp giấy phép lái xe cắt góc giấy phép lái xe cũ (trừ giấy phép lái xe do nước ngoài cấp), giao cho người lái xe bảo quản.',
    },
    {
        question: 'Câu hỏi 8',
        answer: 'Đây là câu trả lời cho câu hỏi 2. Đây là câu trả lời cho câu hỏi 2.',
    },
];

function Request() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(faqData);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredData(faqData.filter((item) => item.question.toLowerCase().includes(query)));
        setCurrentPage(0);
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        window.scrollTo(0, 0);
    };

    const offset = currentPage * itemsPerPage;
    const currentPageData = filteredData.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    return (
        <div className="container">
            <div className="request">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Câu hỏi thường gặp</p>
                    </div>
                </div>
                <div className="request__header">
                    <h3>Câu hỏi thường gặp</h3>
                    <p>Dưới đây là các câu hỏi thường gặp trong hiệp hội doanh nghiệp.</p>
                </div>
                <div className="request__search">
                    <div className="request__search_input">
                        <GoSearch />
                        <input
                            type="text"
                            placeholder="Tìm kiếm tại đây..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="request__search_btn">
                        <button>Tìm kiếm</button>
                    </div>
                </div>
                <div className="request__content">
                    {currentPageData.length > 0 ? (
                        currentPageData.map((item, index) => (
                            <AccordionItem key={index} question={item.question} answer={item.answer} />
                        ))
                    ) : (
                        <div className="no__result">
                            <p>Không có kết quả</p>
                        </div>
                    )}
                </div>
                {currentPageData.length > 0 ? (
                    <ReactPaginate
                        previousLabel={<GoChevronLeft />}
                        nextLabel={<GoChevronRight />}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                ) : (
                    <div> </div>
                )}
            </div>
        </div>
    );
}

export default Request;
