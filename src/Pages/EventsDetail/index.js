import './EventsDetail.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { AiOutlineFacebook } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import parse from 'html-react-parser';
import ScrollToTopButton from '../../Components/ScrollToTopButton';
import APIs from '../../APIs';
import StarRating from '../../Components/StarRating'


function EventsDetail() {
    document.head.innerHTML += ` <meta name="referrer" content="no-referrer">`;

    const [fontSize, setFontSize] = useState(16); // Default font size
    const [postData, setPostData] = useState({});
    const [commentsData, setCommentsData] = useState([]);
    const [isReading, setIsReading] = useState(false);
    const [headTitle, setHeadTitle] = useState([]);
    const [nameInput, setNameInput] = useState();
    const [contentInput, setContentInput] = useState();
    const [responceString, setResponseString] = useState();

    useEffect(() => {
        const audioEl = document.getElementById('play-audio');

        if (isReading) {
            const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${postData.title}`;
            audioEl.src = url;
            audioEl.play();
        } else {
            audioEl.pause();
        }
    }, [isReading]);

    const call = async () => {
        const urlPath = decodeURI(document.location.pathname);
        await APIs.getPost(urlPath).then((data) => {
            if (data) {
                setPostData(data);
                APIs.getComments(data._id).then((data) => setCommentsData(data));
            }
        });
    };

    useEffect(() => {
        call();
    }, []);

    useEffect(()=>{
        if(responceString && postData._id) {
            APIs.getComments(postData._id).then((data) => setCommentsData(data));
        }
    } ,[responceString])

    const increaseFontSize = () => {
        setFontSize((prevSize) => prevSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize((prevSize) => (prevSize > 10 ? prevSize - 2 : prevSize)); // Minimum font size of 10
    };

    const resetFontSize = () => {
        setFontSize(16);
    };

    const lineHeight = `${fontSize * 2}px`;


    const RenderStringToJSX = ({string}) => {
        return (
            parse(`<div>${string}</div>`)
        )

    }

    
    return (
        <div className="container">
            <ScrollToTopButton />
            <div className="eventDetail">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>{headTitle[0]}</p>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>{headTitle[1]}</p>
                    </div>
                </div>
                {postData._id && <StarRating eventId={postData._id} />}
                <div id='item-i' className="eventDetail__title">
                <div id='title-general'>
                <h1>{postData.title}</h1>
                </div>
                </div>
                <div className="eventDetail__wrap">
                    <div className="eventDetail__wrap_date">
                        <MdOutlineCalendarToday />
                        <p>{new Date(postData.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="eventDetail__wrap_feature">
                        <p className="eventDetail__wrap_feature_font_size">Cỡ chữ: </p>
                        <p className="font_minus" onClick={decreaseFontSize} title="giảm cỡ chữ">
                            A-
                        </p>
                        <p className="font__default" onClick={resetFontSize} title="cỡ chữ mặc định">
                            A
                        </p>
                        <p className="font__plus" onClick={increaseFontSize} title="tăng cỡ chữ">
                            A+
                        </p>
                        <Link to="" title="Chia sẻ bài viết lên facebook">
                            <AiOutlineFacebook />
                        </Link>
                        <Link to="" title="Chia sẻ bài viết lên zalo">
                            <SiZalo />
                        </Link>

                        <button
                            onClick={() => setIsReading(!isReading)}
                            style={{ border: 0, paddingLeft: 5, paddingRight: 5, backgroundColor: '#fff' }}
                        >
                            <HiMiniSpeakerWave />
                        </button>
                        <audio id="play-audio"></audio>
                    </div>
                </div>
                <div className="eventDetail__content" style={{ fontSize: `${fontSize}px`, lineHeight }}>
                    <div className="eventDetail__content_header">{postData.description}</div>
                    {/* <div className="eventDetail__content_text">{postData.content}</div> */}
                    <RenderStringToJSX string={postData.content} />
                </div>
                <div className="commentSection">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            const commentName = document.getElementById('commentName').value;
                            const commentContent = document.getElementById('commentContent').value;
                            fetch(APIs.postComment(postData._id), {
                                method: 'POST',
                                body: JSON.stringify({ name: commentName, content: commentContent }),
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })
                                .then((result) => {
                                    setNameInput('');
                                    setContentInput('');
                                    setResponseString('Bình luận thành công');
                                    setTimeout(() => setResponseString(''), 5000);
                                })
                                .catch((error) => alert(error));
                        }}
                    >
                        <div className="commentSection__wrap">
                            <h2>Bình luận: </h2>
                        </div>
                        <div style={{ textAlign: 'center', color: 'red', marginBottom: 5 }}>{responceString}</div>
                        <input
                            id="commentName"
                            type="text"
                            name="name"
                            value={nameInput}
                            onInput={(event) => {
                                setNameInput(event.value);
                            }}
                            placeholder="Nhập tên..."
                            style={{ width: '100%', height: 30 }}
                            className="comment__name"
                        />
                        <textarea
                            id="commentContent"
                            value={contentInput}
                            name="content"
                            onInput={(event) => {
                                setContentInput(event.value);
                            }}
                            placeholder="Nhập nội dung bình luận..."
                        >
                            {contentInput}
                        </textarea>
                        <div className="comment__button">
                            <button type="submit">Gửi bình luận</button>
                        </div>
                    </form>
                    {commentsData?.map((comment) => (
                        <div className="commentSection__display">
                            <div className="commentSection__display_content">
                                <div className="commentSection__display_name">
                                    <p>{comment.name}</p>
                                </div>
                                <div className="commentSection__display_text">
                                    <p> {comment.content}</p>
                                </div>
                            </div>
                            <div className="commentSection__display_time">
                                <p className="commentSection__display_time_date">
                                    {new Date(comment.createdAt).toLocaleDateString()}
                                </p>
                                {/* <p className="commentSection__display_time_hour">21:50</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EventsDetail;
