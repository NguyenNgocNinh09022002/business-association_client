import React, { useEffect, useState } from 'react';
import './EditPartner.scss';
import APIs from '../../../../../APIs';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../../firebaseConfig';

const EditPartner = () => {
    const [name, setName] = useState('');
    const [shortName, setShortName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [userName, setUserserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [role, setRole] = useState('');
    const [baRole, setBaRole] = useState('');
    const [partnerData, setPartnerData] = useState({});

    const [image, setImage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [file, setFile] = useState();
    const [_id, set_Id] = useState();

    useEffect(() => {
        const path = document.location.pathname.split('/');

        const state = document.location.search.substring(7);
        if (state == 'pending' || state == 'accepting') setIsVisible(true);
        APIs.getPartnerByID(path[path.length - 1])
            .then((data) => {
                if (!!data) {
                    console.log(data);
                    setName(data.name);
                    setShortName(data.shortName);
                    setAddress(data.address);
                    setEmail(data.email);
                    setPhone(data.phone);
                    setWebsite(data.website);
                    setUserserName(data.human.name);
                    setUserEmail(data.human.email);
                    setRole(data.human.role);
                    setBaRole(data.human.baRole);
                    setPartnerData(data);
                    setFile(data.logo);
                    set_Id(data.partnerID);
                }
            })

            .catch((error) => alert('lỗi: ', error));
    }, []);

    const configButton = () => {
        const state = document.location.search.substring(7);
        switch (state) {
            case 'pending':
                return (
                    <div className="btn_container">
                        <div className="btn_item">
                            <button onClick={()=> window.history.back()} className="btn_cancel" type="button">
                                Hủy
                            </button>
                        </div>
                        <div className="btn_item">
                            <button
                                onClick={async (e) => {
                                    e.preventDefault();
                                    APIs.agreePartner({ partnerID: partnerData._id, state: state }).then(data => {
                                        document.location.href = 'http://localhost:3000/admin/partners/accepting';
                                    })
                                    
                                }}
                                className="btn_submit"
                                type="submit"
                            >
                                Duyệt bài viết
                            </button>
                        </div>
                    </div>
                );
                break;
            case 'accepting':
                return (
                    <div className="btn_container">
                        <div className="btn_item">
                            <button type="button" onClick={()=> window.history.back()} className="btn_cancel">
                                Hủy
                            </button>
                        </div>
                        <div className="btn_item">
                            <button
                                type="submit"
                                onClick={ async (e) => {
                                    e.preventDefault();
                                    await APIs.agreePartner({ partnerID: partnerData._id, state: state });
                                    document.location.href = 'http://localhost:3000/admin/partners';
                                }}
                                className="btn_submit"
                            >
                                Đăng thành viên
                            </button>
                        </div>
                    </div>
                );
                break;
            default:
                return (
                    <div className="btn_container">
                        <div className="btn_item">
                            <button type="button" className="btn_cancel">
                                Hủy
                            </button>
                        </div>
                        <div className="btn_item">
                            <button type="submit" className=" btn_submit">
                                Lưu bài viết
                            </button>
                        </div>
                    </div>
                );
                break;
        }
    };

    function handleChange(event) {
        const imgPath = event.target.files[0];
        console.log(event.target.files[0].Blob);
        setFile(URL.createObjectURL(imgPath));
        setImage(imgPath);
    }

    const handleSubmit = async (e) => {
        let pathImg = '';
        // Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType: 'image/jpeg',
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + 'img ' + image?.name);
        const uploadTask = await uploadBytes(storageRef, image, metadata)
            .then((res) => console.log(res))
            .catch((err) => console.error(err));

        await getDownloadURL(storageRef)
            .then((imgPath) => {
                pathImg = imgPath;
            })
            .catch((error) => alert(error));
        return pathImg;
    };

    return (
        <div className="edit_partner">
            <form
                id="form"
                onSubmit={async function (e) {
                    e.preventDefault();

                    if (!image) {
                        document.getElementById('logo').value = file;
                        document.getElementById('form').submit();
                    } else {
                        const url = await handleSubmit();
                        document.getElementById('logo').value = url;
                        document.getElementById('form').submit();
                    }
                    // if(image) {
                    //     document.getElementById('form').submit();
                    //     return;
                    // }
                    // const url = (file || file == "") && !image ? file : await handleSubmit().then(data => data);
                    // alert('url: ', url)
                }}
                className="container"
                method="POST"
                action={APIs.updatePartner(partnerData)}
            >
                <div className="item_container">
                    <span className="item_title">Tên thành viên</span>
                    <input
                        disabled={isVisible}
                        onInput={(event) => setName(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={name}
                        name="name"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Tên viết tắt</span>
                    <input
                        disabled={isVisible}
                        onInput={(event) => setShortName(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={shortName}
                        name="shortName"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Địa chỉ</span>
                    <input
                        disabled={isVisible}
                        onInput={(event) => setAddress(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={address}
                        name="address"
                    />
                </div>

                <div className="item_container">
                    <span className="item_title">Email</span>
                    <input
                        disabled={isVisible}
                        onInput={(event) => setEmail(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={email}
                        name="email"
                    />
                </div>

                <div className="item_container">
                    <span className="item_title">Số điện thoại</span>
                    <input
                        disabled={isVisible}
                        onInput={(event) => setPhone(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={phone}
                        name="phone"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Website</span>
                    <input
                        disabled={isVisible}
                        onInput={(event) => setWebsite(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={website}
                        name="website"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Tên người đại diện</span>
                    <input
                        disabled={isVisible}
                        onInput={(event) => setUserserName(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={userName}
                        name="userName"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Email người đại diện</span>
                    <input
                        disabled={isVisible}
                        onInput={(event) => setUserEmail(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={userEmail}
                        name="userEmail"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Chức vụ công ty</span>
                    <input
                        disabled={isVisible}
                        onInput={(event) => setRole(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={role}
                        name="role"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Chức vụ hiệp hội</span>
                    <input
                        disabled={isVisible}
                        onInput={(event) => setBaRole(event.value)}
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        value={baRole}
                        name="baRole"
                    />
                </div>

                <div className="item_container">
                    <span className="item_title">Hình ảnh</span>
                    <input
                        disabled={isVisible}
                        className="item_input item_input__files"
                        id="fileUpload"
                        type="file"
                        onChange={handleChange}
                        style={{ width: '100%' }}
                        // name="fileUpload"
                    />
                </div>
                <div className="item_container">
                    {file && <img src={file} alt="uploaded file" style={{ width: 300, height: 300, margin: 'auto' }} />}
                    <input id="logo" name="logo" hidden />
                    <input id="_id" name="_id" hidden value={_id} />
                </div>

                {configButton()}
            </form>
        </div>
    );
};

export default EditPartner;
