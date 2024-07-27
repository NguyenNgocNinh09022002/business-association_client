import { useMyContextProvider } from "../../../../../store";

const SideBar = () => {
    var [controller, dispatch] = useMyContextProvider()
    return (
        <div style={{ width: 150 }}>
            <p>
                <a href="/admin/posts" style={{ marginLeft: 20, marginTop: 10, fontSize: 16 }}>
                    Bài viết đã đăng
                </a>
            </p>
            <p>
                <a href="/admin/posts/pending" style={{ marginLeft: 20, marginTop: 10, fontSize: 16 }}>
                    Bài viết chờ duyệt
                </a>
            </p>
            <p>
                <a href="/admin/posts/accepting" style={{ marginLeft: 20, marginTop: 10, fontSize: 16 }}>
                    Bài viết chờ đăng
                </a>
            </p>
            <p>
                <a href="/admin/posts/add" style={{ marginLeft: 20, marginTop: 10, fontSize: 16 }}>
                    Tạo bài viết mới
                </a>
            </p>
        </div>
    );
};

export default SideBar;
