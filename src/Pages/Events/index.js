import { Link } from 'react-router-dom';
import './Events.scss';
import React, { useEffect, useState } from 'react';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import img_event from '../../asset/image/event_img/khai-mac-dien-dan-kinhtees-tphcm-nam-2023.jpg';
import ScrollToTopButton from '../../Components/ScrollToTopButton';
import APIs from '../../APIs';

function Events() {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState('');
    const [urlPath, setUrlPath] = useState([])

    useEffect(()=>{
        const urlPath = decodeURI(document.location.pathname);
        setUrlPath(urlPath);
        APIs.getMenuItem(urlPath).then(data => setTitle(data))
        APIs.getPosts(urlPath).then(data => setEvents(data))
    },[])
    return (
        <div className="event">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Sự kiện</p>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>{title}</p>
                </div>
            </div>
            <div className="event__header">
                <h2>{title}</h2>
            </div>
            {events.map((event, index) => (
                <div className="event_item" key={index}>
                    <div className="path">
                        <h4>
                        <Link to={urlPath+"/"+event.slug}>{title}</Link>
                        </h4>
                    </div>
                    <div className="event_header">
                        <Link to={urlPath+"/"+event.slug}>{event.title}</Link>
                    </div>
                    {/* <div className="posted">
                        <p>
                            POSTED ON {event.date} BY {event.author}
                        </p>
                    </div> */}
                    <div className="event__content">
                        <div className="event__content_pic">
                            <Link to={urlPath+"/"+event.slug}>
                                <img src={event.attachments[0].image} alt="khai mạc diễn đàn" />
                            </Link>
                        </div>
                        <div className="event__content_text">
                            <div className="event__content_text_content">
                                <p>{event.description}</p>
                            </div>
                            <Link to={urlPath+"/"+event.slug} style={{ textDecoration: 'none' }}>
                                <button type="submit">
                                    CONTINUE READING
                                    <p>
                                        <HiOutlineArrowLongRight className="arrow_icon" />
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="posted">
                        <p>Posted in Diễn đàn Kinh tế TP. Hồ Chí Minh</p>
                    </div> */}
                </div>
            ))}
            <div className="pagination"></div>
            <ScrollToTopButton />
        </div>
    );
}

export default Events;
