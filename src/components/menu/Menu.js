import React from 'react';
import { Link } from 'react-router-dom';
function Menu() {
    return (
        <div>	  
            <div className='_menu d-flex'>
                <div className="_menu_lft d-flex">  
                    <div className="_menu_logo">
                        <Link to ='/' className='_menu_logo_link'>
                            <img src="../../img/logo.svg" alt="image" className="_logo_img" />
                        </Link>
                    </div>   
                    <div className="_menu_grph _dis_flex">
                        <img src="../../img/menu_graph.svg" alt="image" />
                        <p className="_menu_lft_txt1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </p>
                    </div>
                </div>                                 
                <div className="_menu_r8 _dis_flex">         
                    <div className="_menu_mode _dis_flex_all">
                        <img src="../../img/white_mode.svg" alt="image" />         
                    </div>
                    <div className="_menu_srch _mar_l24">
                        <input type="text" placeholder="Search..." className="_menu_srch_inpt" />
                        <img src="../../img/search_icon.svg" alt="image" className="_menu_srch_icon" />
                    </div>
                    <div className="_menu_lnge_all _mar_l24 _dis_flex">
                        <div className="_menu_cntry _dis_flex_all">
                            <img src="../../img/flag.png" alt="image" />
                        </div>
                        <div className="_menu_lnge">
                            <p className="_menu_lnge_txt">
                            English
                            <span>
                                <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5L5.35355 5.35355L5 5.70711L4.64645 5.35355L5 5ZM9.35355 1.35355L5.35355 5.35355L4.64645 4.64645L8.64645 0.646446L9.35355 1.35355ZM4.64645 5.35355L0.646446 1.35355L1.35355 0.646447L5.35355 4.64645L4.64645 5.35355Z" fill="#707584" />
                                </svg>
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="_menu_msg _dis_flex_all _mar_l24">
                        <img src="../../img/message.svg" alt="image" className="_menu_msg_img" />
                        <span className="_menu_noti_num">
                            2
                        </span>
                    </div>
                    <div className="_menu_noti _dis_flex_all _mar_l24">
                        <img src="../../img/notification.svg" alt="image" className="_menu_noti_img" />
                        <span className="_menu_noti_num">
                            2
                        </span>
                        <div className="_menu_noti_drpdwn _box_shdw1" style={{display: 'none'}}>
                            <div className="_menu_noti_drpdwn_top d-flex">
                                <p className="_menu_noti_drpdwn_txt1">
                                    You have Notification
                                </p>
                                <p className="_menu_noti_drpdwn_txt2 _dis_flex_all">
                                    2
                                </p>
                            </div>
                            <ul className="_menu_noti_drpdwn_ul">
                                <li className="_active">
                                    <a href className="_menu_noti_drpdwn_lnk">
                                    <div className="_menu_noti_drpdwn_usr _mar_r8">
                                        <img src="../../img/man.jpg" alt="image" className="_menu_noti_drpdwn_img" />
                                    </div>
                                    <div className="_menu_noti_drpdwn_info">
                                        <h2 className="_menu_noti_drpdwn_titl1 _2text_overflow _titl4">
                                        New Review Recived
                                        </h2>
                                        <p className="_menu_noti_drpdwn_txt3 _mar_t8">
                                        1 Hour Ago
                                        </p>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <a href className="_menu_noti_drpdwn_lnk">
                                    <div className="_menu_noti_drpdwn_usr _mar_r8">
                                        <img src="../../img/man.jpg" alt="image" className="_menu_noti_drpdwn_img" />
                                    </div>
                                    <div className="_menu_noti_drpdwn_info">
                                        <h2 className="_menu_noti_drpdwn_titl1 _2text_overflow _titl4">
                                        New Review Recived
                                        </h2>
                                        <p className="_menu_noti_drpdwn_txt3">
                                        1 Hour Ago
                                        </p>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <a href className="_menu_noti_drpdwn_lnk">
                                    <div className="_menu_noti_drpdwn_usr _mar_r8">
                                        <img src="../../img/man.jpg" alt="image" className="_menu_noti_drpdwn_img" />
                                    </div>
                                    <div className="_menu_noti_drpdwn_info">
                                        <h2 className="_menu_noti_drpdwn_titl1 _2text_overflow _titl4">
                                        New Review Recived
                                        </h2>
                                        <p className="_menu_noti_drpdwn_txt3 _mar_t8">
                                        1 Hour Ago
                                        </p>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <a href className="_menu_noti_drpdwn_lnk">
                                    <div className="_menu_noti_drpdwn_usr _mar_r8">
                                        <img src="../../img/man.jpg" alt="image" className="_menu_noti_drpdwn_img" />
                                    </div>
                                    <div className="_menu_noti_drpdwn_info">
                                        <h2 className="_menu_noti_drpdwn_titl1 _2text_overflow _titl4">
                                        New Review Recived
                                        </h2>
                                        <p className="_menu_noti_drpdwn_txt3 _mar_t8">
                                        1 Hour Ago
                                        </p>
                                    </div>
                                    </a>
                                </li>
                            </ul>
                        </div>      
                    </div>

                    <div className="_menu_user _mar_l24">
                        <div className='_menu_user_pic'>
                            <img src="../../img/man.jpg" alt="image" className="_menu_user_img" />
                        </div>

                        {/* DROPDOWN */}
                        <div className="_menu_usr_drpdwn _box_shdw1" style={{display: 'none'}}> 
                            <a href className="_menu_user_lnk d-flex">
                                <img src="../../img/man.jpg" alt="image" className="_menu_usr_drpdwn_img _mar_r12" />
                                <h2 className="_menu_usr_drpdwn_titl1 _titl4 ">
                                    Seth C. Robinson
                                </h2>
                            </a>
                            <ul className="_menu_usr_drpdwn_ul">
                                <li className="_active">
                                    <a href className="_menu_usr_drpdwn_lnk">
                                       Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href className="_menu_usr_drpdwn_lnk">
                                      Account Details
                                    </a>
                                </li>
                                <li>
                                    <a href className="_menu_usr_drpdwn_lnk">
                                      Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* DROPDOWN */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;