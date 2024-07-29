
const SideBar = () => {
    return (
        <div style={{ width: 150 }}>
            <p>
                <a href="/admin/partners" style={{ marginLeft: 20, marginTop: 10, fontSize: 16 }}>
                    Thành viên 
                </a>
            </p>
            <p>
                <a href="/admin/partners/pending" style={{ marginLeft: 20, marginTop: 10, fontSize: 16 }}>
                    Thành viên chờ duyệt
                </a>
            </p>
            <p>
                <a href="/admin/partners/accepting" style={{ marginLeft: 20, marginTop: 10, fontSize: 16 }}>
                    Thành viên chờ đăng
                </a>
            </p>
            <p>
                <a href="/admin/partners/add" style={{ marginLeft: 20, marginTop: 10, fontSize: 16 }}>
                    Tạo thành viên mới
                </a>
            </p>
        </div>
    );
};

export default SideBar;
