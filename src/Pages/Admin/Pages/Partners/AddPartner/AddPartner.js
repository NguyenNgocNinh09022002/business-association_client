import React, { useEffect, useState } from 'react';
import './AddPartner.scss';
import APIs from '../../../../../APIs';
import { ref, getDownloadURL,  uploadBytes } from 'firebase/storage';
import { storage } from '../../../../../firebaseConfig';

const AddPartner = () => {
    const [image, setImage] = useState('');
    const [file, setFile] = useState();
   



    function handleChange(event) {
        const imgPath = event.target.files[0];
        console.log(event.target.files[0].Blob);
        setFile(URL.createObjectURL(imgPath));
        setImage(imgPath);
    }
    
    const handleSubmit = async (e) => {
        let pathImg = "";
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
            .then( (imgPath) => {
                pathImg = imgPath;
            })
            .catch((error) => alert(error));
        return pathImg;
    };

    return (
        <div className="add_partner">
            <form id='form'
             onSubmit={async function (e) {
                    e.preventDefault();

                     if(!image)  {
                        document.getElementById('logo').value = file;
                       await document.getElementById('form').submit();
                       setTimeout(()=> {document.location.href = 'http://localhost:3000/admin/partners/pending';}, 2000) 
                     } else {
                        const url = await handleSubmit();
                        document.getElementById('logo').value = url;
                        document.getElementById('form').submit();
                        setTimeout(()=> {document.location.href = 'http://localhost:3000/admin/partners/pending';}, 2000) 


                     }
                    // if(image) {
                    //     document.getElementById('form').submit();
                    //     return;
                    // }
                    // const url = (file || file == "") && !image ? file : await handleSubmit().then(data => data);
                    // alert('url: ', url)
                   
                }}
             className="container" method='POST'   action={APIs.addPartner()}>
                <div className="item_container">
                    <span className="item_title">Tên thành viên</span>
                    <input 
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="name"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Tên viết tắt</span>
                    <input 
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="shortName"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Địa chỉ</span>
                    <input 
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="address"
                    />
                </div>

                <div className="item_container">
                    <span className="item_title">Email</span>
                    <input 
                        className="item_input item_input__title"
                        type="email"
                        style={{ width: '100%' }}
                        name="email"
                    />
                </div>

                <div className="item_container">
                    <span className="item_title">Số điện thoại</span>
                    <input 
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="phone"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Website</span>
                    <input 
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="website"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Tên người đại diện</span>
                    <input 
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="userName"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Email người đại diện</span>
                    <input 
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="userEmail"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Chức vụ công ty</span>
                    <input 
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="role"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Chức vụ hiệp hội</span>
                    <input 
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="baRole"
                    />
                </div>
                
                
                <div className="item_container">
                    <span className="item_title">Hình ảnh</span>
                    <input
                        
                        className="item_input item_input__files"
                        id="fileUpload"
                        type="file"
                        onChange={handleChange}
                        style={{ width: '100%' }}
                        // name="fileUpload"
                    />
                </div>
                <div className="item_container">
                    {file && <img src={  file} alt="uploaded file" style={{width: 300, height: 300, margin:'auto' }} />}
                    <input id="logo" name="logo" hidden />
                </div>
                <div className="btn_container">
                    <div className="btn_item">
                        <button className=" btn_submit" type="submit">
                            Lưu bài viết
                        </button>
                    </div>
                    <div className="btn_item">
                        <button onClick={()=> window.history.back()}  type="button" className="btn_cancel">Hủy</button>
                    </div>
                </div>
               
              
            </form>
        </div>
    );
};

export default AddPartner;
