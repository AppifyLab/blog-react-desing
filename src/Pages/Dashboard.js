import React from 'react';
import {Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import LeftSidebar from '../components/leftSidebar/LeftSidebar';
import Menu from '../components/menu/Menu';

 function Dashboard() {
    return (
        <div>  
            <Menu />
            <LeftSidebar />
            <div className="_main_content">
                <div className="_dshbrd_top _dis_flex">                              
                    <div className="_dshbrd_top_lft">
                        <h1 className="_dshbrd_top_titl _titl1">
                            Dashboard 
                        </h1>
                        <p className="_dshbrd_top_txt _mar_t16">                                               
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </p>
                    </div>                   
                    <div className="_dshbrd_top_r8">
                        <ul className="_dshbrd_top_r8_ul1 d-flex">
                            <li>
                                <Link to="/createcourse" className="_dshbrd_top_btn _btn1"> 
                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={10} cy={10} r={9} stroke="white" />
                                        <path d="M10 6L10 14" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                        <path d="M14 10L6 10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                    </svg>
                                   Create New Course
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>                                
                <div className="_dshbrd_crd1_all">
                    <div className="row _mar_t40 _dis_flex">                                                 
                    {/* CARD */}
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12"> 
                        <div className="_dshbrd_crd1 d-flex _mar_t24 _box1">                      
                            <div className="_dshbrd_crd1_lft">
                                <p className="_dshbrd_crd1_txt1 _mar_b8">
                                   Total websites
                                </p>
                                <h2 className="_dshbrd_crd1_titl _titl2">
                                   1200+
                                </h2>
                            </div>
                            <div className="_dshbrd_crd1_r8">
                                <div className="_dshbrd_crd1_crcl _dshbrd_crse_crcle _dis_flex_all">
                                <img src="../../img/dshbrd_icon1.svg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD */}
                    {/* CARD */}
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12">  
                        <div className="_dshbrd_crd1 d-flex _mar_t24 _box1">                     
                            <div className="_dshbrd_crd1_lft">
                                <p className="_dshbrd_crd1_txt1 _mar_b8">
                                  Total blogs
                                </p>
                                <h2 className="_dshbrd_crd1_titl _titl2">
                                1200+
                                <span className="_dshbrd_crd1_txt2">3.56</span>
                                </h2>
                            </div>
                            <div className="_dshbrd_crd1_r8">
                                <div className="_dshbrd_crd1_crcl _dshbrd_sle_crcle _dis_flex_all">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.3 0.599988L21.3 4.59999C22.4 5.09999 23 6.09999 23 7.19999V16.7C23 17.9 22.3 18.9 21.3 19.4L13.3 23.4C12.9 23.6 12.5 23.7 12 23.7C11.6 23.7 11.1 23.6 10.7 23.4L2.7 19.4C1.6 18.9 1 17.8 1 16.7V7.19999C1 6.09999 1.6 5.09999 2.6 4.59999L10.6 0.599988C11.5 0.199988 12.5 0.199988 13.3 0.599988ZM12 2.19999C11.9 2.19999 11.7 2.19999 11.6 2.29999L4.2 5.99999L12 9.89999L19.8 5.99999L12.4 2.29999C12.3 2.19999 12.2 2.19999 12 2.19999ZM3.5 17.7C3.2 17.5 3 17.1 3 16.8V7.59999L11 11.6V21.4L3.5 17.7ZM13 21.4L20.4 17.7C20.8 17.5 21 17.2 21 16.8V7.59999L13 11.6V21.4Z" fill="black" />
                                        <mask id="mask0_23:50" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={1} y={0} width={22} height={24}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.3 0.599988L21.3 4.59999C22.4 5.09999 23 6.09999 23 7.19999V16.7C23 17.9 22.3 18.9 21.3 19.4L13.3 23.4C12.9 23.6 12.5 23.7 12 23.7C11.6 23.7 11.1 23.6 10.7 23.4L2.7 19.4C1.6 18.9 1 17.8 1 16.7V7.19999C1 6.09999 1.6 5.09999 2.6 4.59999L10.6 0.599988C11.5 0.199988 12.5 0.199988 13.3 0.599988ZM12 2.19999C11.9 2.19999 11.7 2.19999 11.6 2.29999L4.2 5.99999L12 9.89999L19.8 5.99999L12.4 2.29999C12.3 2.19999 12.2 2.19999 12 2.19999ZM3.5 17.7C3.2 17.5 3 17.1 3 16.8V7.59999L11 11.6V21.4L3.5 17.7ZM13 21.4L20.4 17.7C20.8 17.5 21 17.2 21 16.8V7.59999L13 11.6V21.4Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_23:50)">
                                        <rect width={24} height={24} fill="#EA5455" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD */}
                    {/* CARD */}
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12">      
                        <div className="_dshbrd_crd1 d-flex _mar_t24 _box1">              
                            <div className="_dshbrd_crd1_lft">
                                <p className="_dshbrd_crd1_txt1 _mar_b8">
                                Total users
                                </p>
                                <h2 className="_dshbrd_crd1_titl _titl2">
                                1200+
                                <span className="_dshbrd_crd1_txt2">3.56</span>
                                </h2>
                            </div>
                            <div className="_dshbrd_crd1_r8">
                                <div className="_dshbrd_crd1_crcl _dshbrd_dlr_crcle _dis_flex_all">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5 11H13V6H17C17.6 6 18 5.6 18 5C18 4.4 17.6 4 17 4H13V1C13 0.4 12.6 0 12 0C11.4 0 11 0.4 11 1V4H9.5C7 4 5 6 5 8.5C5 11 7 13 9.5 13H11V18H6C5.4 18 5 18.4 5 19C5 19.6 5.4 20 6 20H11V23C11 23.6 11.4 24 12 24C12.6 24 13 23.6 13 23V20H14.5C17 20 19 18 19 15.5C19 13 17 11 14.5 11ZM9.5 11C8.1 11 7 9.9 7 8.5C7 7.1 8.1 6 9.5 6H11V11H9.5ZM13 18H14.5C15.9 18 17 16.9 17 15.5C17 14.1 15.9 13 14.5 13H13V18Z" fill="black" />
                                    <mask id="mask0_23:37" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={5} y={0} width={14} height={24}>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5 11H13V6H17C17.6 6 18 5.6 18 5C18 4.4 17.6 4 17 4H13V1C13 0.4 12.6 0 12 0C11.4 0 11 0.4 11 1V4H9.5C7 4 5 6 5 8.5C5 11 7 13 9.5 13H11V18H6C5.4 18 5 18.4 5 19C5 19.6 5.4 20 6 20H11V23C11 23.6 11.4 24 12 24C12.6 24 13 23.6 13 23V20H14.5C17 20 19 18 19 15.5C19 13 17 11 14.5 11ZM9.5 11C8.1 11 7 9.9 7 8.5C7 7.1 8.1 6 9.5 6H11V11H9.5ZM13 18H14.5C15.9 18 17 16.9 17 15.5C17 14.1 15.9 13 14.5 13H13V18Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_23:37)">
                                    <rect width={24} height={24} fill="#28C76F" />
                                    </g>
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD */}

                    {/* CARD */}
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12">  
                        <div className="_dshbrd_crd1 d-flex _mar_t24 _box1">                     
                            <div className="_dshbrd_crd1_lft">
                                <p className="_dshbrd_crd1_txt1 _mar_b8">
                                Total comments
                                </p>
                                <h2 className="_dshbrd_crd1_titl _titl2">
                                1200+
                                <span className="_dshbrd_crd1_txt2">3.56</span>
                                </h2>
                            </div>
                            <div className="_dshbrd_crd1_r8">
                                <div className="_dshbrd_crd1_crcl _dshbrd_grph_crcle _dis_flex_all">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 6V12C24 12.6 23.6 13 23 13C22.4 13 22 12.6 22 12V8.4L14.2 16.2C13.8 16.6 13.2 16.6 12.8 16.2L8.5 11.9L1.7 18.7C1.5 18.9 1.3 19 1 19C0.7 19 0.5 18.9 0.3 18.7C-0.1 18.3 -0.1 17.7 0.3 17.3L7.8 9.8C8.2 9.4 8.8 9.4 9.2 9.8L13.5 14.1L20.6 7H17C16.4 7 16 6.6 16 6C16 5.4 16.4 5 17 5H23C23.1 5 23.3 5 23.4 5.1C23.6 5.2 23.8 5.4 23.9 5.6C24 5.7 24 5.9 24 6Z" fill="black" />
                                        <mask id="mask0_23:80" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={5} width={24} height={14}>
                                        <path d="M24 6V12C24 12.6 23.6 13 23 13C22.4 13 22 12.6 22 12V8.4L14.2 16.2C13.8 16.6 13.2 16.6 12.8 16.2L8.5 11.9L1.7 18.7C1.5 18.9 1.3 19 1 19C0.7 19 0.5 18.9 0.3 18.7C-0.1 18.3 -0.1 17.7 0.3 17.3L7.8 9.8C8.2 9.4 8.8 9.4 9.2 9.8L13.5 14.1L20.6 7H17C16.4 7 16 6.6 16 6C16 5.4 16.4 5 17 5H23C23.1 5 23.3 5 23.4 5.1C23.6 5.2 23.8 5.4 23.9 5.6C24 5.7 24 5.9 24 6Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_23:80)">
                                        <rect width={24} height={24} fill="#7367F0" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD */}

                      {/* CARD */}
                      <div className="col-xl-3 col-lg-3 col-md-4 col-12">  
                        <div className="_dshbrd_crd1 d-flex _mar_t24 _box1">                     
                            <div className="_dshbrd_crd1_lft">
                                <p className="_dshbrd_crd1_txt1 _mar_b8">
                                 Published posts
                                </p>
                                <h2 className="_dshbrd_crd1_titl _titl2">
                                1200+
                                <span className="_dshbrd_crd1_txt2">3.56</span>
                                </h2>
                            </div>
                            <div className="_dshbrd_crd1_r8">
                                <div className="_dshbrd_crd1_crcl _dshbrd_grph_crcle _dis_flex_all">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 6V12C24 12.6 23.6 13 23 13C22.4 13 22 12.6 22 12V8.4L14.2 16.2C13.8 16.6 13.2 16.6 12.8 16.2L8.5 11.9L1.7 18.7C1.5 18.9 1.3 19 1 19C0.7 19 0.5 18.9 0.3 18.7C-0.1 18.3 -0.1 17.7 0.3 17.3L7.8 9.8C8.2 9.4 8.8 9.4 9.2 9.8L13.5 14.1L20.6 7H17C16.4 7 16 6.6 16 6C16 5.4 16.4 5 17 5H23C23.1 5 23.3 5 23.4 5.1C23.6 5.2 23.8 5.4 23.9 5.6C24 5.7 24 5.9 24 6Z" fill="black" />
                                        <mask id="mask0_23:80" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={5} width={24} height={14}>
                                        <path d="M24 6V12C24 12.6 23.6 13 23 13C22.4 13 22 12.6 22 12V8.4L14.2 16.2C13.8 16.6 13.2 16.6 12.8 16.2L8.5 11.9L1.7 18.7C1.5 18.9 1.3 19 1 19C0.7 19 0.5 18.9 0.3 18.7C-0.1 18.3 -0.1 17.7 0.3 17.3L7.8 9.8C8.2 9.4 8.8 9.4 9.2 9.8L13.5 14.1L20.6 7H17C16.4 7 16 6.6 16 6C16 5.4 16.4 5 17 5H23C23.1 5 23.3 5 23.4 5.1C23.6 5.2 23.8 5.4 23.9 5.6C24 5.7 24 5.9 24 6Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_23:80)">
                                        <rect width={24} height={24} fill="#7367F0" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD */}

                      {/* CARD */}
                      <div className="col-xl-3 col-lg-3 col-md-4 col-12">  
                        <div className="_dshbrd_crd1 d-flex _mar_t24 _box1">                     
                            <div className="_dshbrd_crd1_lft">
                                <p className="_dshbrd_crd1_txt1 _mar_b8">
                                  Draft posts
                                </p>
                                <h2 className="_dshbrd_crd1_titl _titl2">
                                1200+
                                <span className="_dshbrd_crd1_txt2">3.56</span>
                                </h2>
                            </div>
                            <div className="_dshbrd_crd1_r8">
                                <div className="_dshbrd_crd1_crcl _dshbrd_grph_crcle _dis_flex_all">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 6V12C24 12.6 23.6 13 23 13C22.4 13 22 12.6 22 12V8.4L14.2 16.2C13.8 16.6 13.2 16.6 12.8 16.2L8.5 11.9L1.7 18.7C1.5 18.9 1.3 19 1 19C0.7 19 0.5 18.9 0.3 18.7C-0.1 18.3 -0.1 17.7 0.3 17.3L7.8 9.8C8.2 9.4 8.8 9.4 9.2 9.8L13.5 14.1L20.6 7H17C16.4 7 16 6.6 16 6C16 5.4 16.4 5 17 5H23C23.1 5 23.3 5 23.4 5.1C23.6 5.2 23.8 5.4 23.9 5.6C24 5.7 24 5.9 24 6Z" fill="black" />
                                        <mask id="mask0_23:80" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={5} width={24} height={14}>
                                        <path d="M24 6V12C24 12.6 23.6 13 23 13C22.4 13 22 12.6 22 12V8.4L14.2 16.2C13.8 16.6 13.2 16.6 12.8 16.2L8.5 11.9L1.7 18.7C1.5 18.9 1.3 19 1 19C0.7 19 0.5 18.9 0.3 18.7C-0.1 18.3 -0.1 17.7 0.3 17.3L7.8 9.8C8.2 9.4 8.8 9.4 9.2 9.8L13.5 14.1L20.6 7H17C16.4 7 16 6.6 16 6C16 5.4 16.4 5 17 5H23C23.1 5 23.3 5 23.4 5.1C23.6 5.2 23.8 5.4 23.9 5.6C24 5.7 24 5.9 24 6Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_23:80)">
                                        <rect width={24} height={24} fill="#7367F0" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD */}
                    </div>
                </div>
                <div className="_dshbrd_tble_all _mar_t24">
                    <div className="_dshbrd_tble_lft_all _box1">
                        <div className="_dshbrd_tble_top _padd_b22">
                            <h2 className="_dshbrd_tble_titl1 _titl3 _mar_b22">
                               Users
                            </h2>
                        </div>
                        <div className="_dshbrd_tble_lft">
                            <table className="_dshbrd_tble _table_nowrap _table1">
                                <thead>
                                    <tr>
                                        <th>
                                            Id
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Username
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            Role
                                        </th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            01
                                        </td>
                                        <td>
                                            <p className="_dshbrd_tble_txt1">
                                            John day
                                            </p>
                                        </td>
                                        <td>
                                            johnday043
                                        </td>
                                        <td>
                                            johnday043@gmail.com
                                        </td>
                                        <td>
                                            Author
                                        </td>
                                        <td>
                                            <div className="_table2_edit">
                                                <span className="_dot1_box">
                                                    <svg width={4} height={14} viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.66667 3.33333C2.58333 3.33333 3.33333 2.58333 3.33333 1.66667C3.33333 0.75 2.58333 0 1.66667 0C0.75 0 0 0.75 0 1.66667C0 2.58333 0.75 3.33333 1.66667 3.33333ZM1.66667 5C0.75 5 0 5.75 0 6.66667C0 7.58333 0.75 8.33333 1.66667 8.33333C2.58333 8.33333 3.33333 7.58333 3.33333 6.66667C3.33333 5.75 2.58333 5 1.66667 5ZM1.66667 10C0.75 10 0 10.75 0 11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333C2.58333 13.3333 3.33333 12.5833 3.33333 11.6667C3.33333 10.75 2.58333 10 1.66667 10Z" fill="#707070" />
                                                    </svg>
                                                </span>
                                                {/* DROPDOWN */}
                                                <div className="_instrctr_edt_drpdwn _drpdwn1">
                                                    <ul className="_instrctr_edt_drpdwn_ul _drpdwn1_ul">
                                                    <li className="_drpdwn1_li">
                                                        <a href="new_user.html" className="_drpdwn1_link">
                                                        <span className="_drpdwn1_li_spn1">
                                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.26201 2.47559H2.39156C2.02249 2.47559 1.66855 2.6222 1.40758 2.88316C1.14661 3.14413 1 3.49808 1 3.86714V13.608C1 13.9771 1.14661 14.3311 1.40758 14.592C1.66855 14.853 2.02249 14.9996 2.39156 14.9996H12.1325C12.5015 14.9996 12.8555 14.853 13.1164 14.592C13.3774 14.3311 13.524 13.9771 13.524 13.608V8.73759" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M12.4815 1.4323C12.7583 1.1555 13.1337 1 13.5251 1C13.9166 1 14.292 1.1555 14.5688 1.4323C14.8456 1.7091 15.0011 2.08452 15.0011 2.47597C15.0011 2.86742 14.8456 3.24284 14.5688 3.51964L7.95889 10.1295L5.17578 10.8253L5.87156 8.0422L12.4815 1.4323Z" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                        Edit
                                                        </a>
                                                    </li>
                                                    <li className="_drpdwn1_li">
                                                        <span className="_drpdwn1_li_spn1">
                                                        <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.76465 10.8824L5.76465 8.41177" stroke="#707070" strokeLinecap="round" />
                                                            <path d="M9.05908 10.8824L9.05908 8.41177" stroke="#707070" strokeLinecap="round" />
                                                            <path d="M0 4.29413H14.8235V4.29413C14.3863 4.29413 14.1676 4.29413 13.9854 4.32818C13.1737 4.47992 12.5387 5.11492 12.387 5.92663C12.3529 6.1088 12.3529 6.32744 12.3529 6.76472V11C12.3529 12.8856 12.3529 13.8284 11.7672 14.4142C11.1814 15 10.2386 15 8.35294 15H6.47059C4.58497 15 3.64216 15 3.05637 14.4142C2.47059 13.8284 2.47059 12.8856 2.47059 11V6.76472C2.47059 6.32744 2.47059 6.1088 2.43653 5.92663C2.2848 5.11492 1.6498 4.47992 0.838088 4.32818C0.655916 4.29413 0.437277 4.29413 0 4.29413V4.29413Z" stroke="#707070" strokeLinecap="round" />
                                                            <path d="M5.82109 1.30519C5.91493 1.21764 6.12171 1.14027 6.40936 1.08509C6.69701 1.02991 7.04945 1 7.41202 1C7.7746 1 8.12704 1.02991 8.41469 1.08509C8.70234 1.14027 8.90912 1.21764 9.00296 1.30519" stroke="#707070" strokeLinecap="round" />
                                                        </svg>	
                                                        </span> 
                                                        Remove
                                                    </li>
                                                    </ul>
                                                </div>
                                                {/* DROPDOWN */}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            01
                                        </td>
                                        <td>
                                            <p className="_dshbrd_tble_txt1">
                                            John day
                                            </p>
                                        </td>
                                        <td>
                                            johnday043
                                        </td>
                                        <td>
                                            johnday043@gmail.com
                                        </td>
                                        <td>
                                            Author
                                        </td>
                                        <td>
                                            <div className="_table2_edit">
                                                <span className="_dot1_box">
                                                    <svg width={4} height={14} viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.66667 3.33333C2.58333 3.33333 3.33333 2.58333 3.33333 1.66667C3.33333 0.75 2.58333 0 1.66667 0C0.75 0 0 0.75 0 1.66667C0 2.58333 0.75 3.33333 1.66667 3.33333ZM1.66667 5C0.75 5 0 5.75 0 6.66667C0 7.58333 0.75 8.33333 1.66667 8.33333C2.58333 8.33333 3.33333 7.58333 3.33333 6.66667C3.33333 5.75 2.58333 5 1.66667 5ZM1.66667 10C0.75 10 0 10.75 0 11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333C2.58333 13.3333 3.33333 12.5833 3.33333 11.6667C3.33333 10.75 2.58333 10 1.66667 10Z" fill="#707070" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>  
                                    <tr>
                                        <td>
                                            01
                                        </td>
                                        <td>
                                            <p className="_dshbrd_tble_txt1">
                                            John day
                                            </p>
                                        </td>
                                        <td>
                                            johnday043
                                        </td>
                                        <td>
                                            johnday043@gmail.com
                                        </td>
                                        <td>
                                            Author
                                        </td>
                                        <td>
                                            <div className="_table2_edit">
                                                <span className="_dot1_box">
                                                    <svg width={4} height={14} viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.66667 3.33333C2.58333 3.33333 3.33333 2.58333 3.33333 1.66667C3.33333 0.75 2.58333 0 1.66667 0C0.75 0 0 0.75 0 1.66667C0 2.58333 0.75 3.33333 1.66667 3.33333ZM1.66667 5C0.75 5 0 5.75 0 6.66667C0 7.58333 0.75 8.33333 1.66667 8.33333C2.58333 8.33333 3.33333 7.58333 3.33333 6.66667C3.33333 5.75 2.58333 5 1.66667 5ZM1.66667 10C0.75 10 0 10.75 0 11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333C2.58333 13.3333 3.33333 12.5833 3.33333 11.6667C3.33333 10.75 2.58333 10 1.66667 10Z" fill="#707070" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>  
                                    <tr>
                                        <td>
                                            01
                                        </td>
                                        <td>
                                            <p className="_dshbrd_tble_txt1">
                                            John day
                                            </p>
                                        </td>
                                        <td>
                                            johnday043
                                        </td>
                                        <td>
                                            johnday043@gmail.com
                                        </td>
                                        <td>
                                            Author
                                        </td>
                                        <td>
                                            <div className="_table2_edit">
                                                <span className="_dot1_box">
                                                    <svg width={4} height={14} viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.66667 3.33333C2.58333 3.33333 3.33333 2.58333 3.33333 1.66667C3.33333 0.75 2.58333 0 1.66667 0C0.75 0 0 0.75 0 1.66667C0 2.58333 0.75 3.33333 1.66667 3.33333ZM1.66667 5C0.75 5 0 5.75 0 6.66667C0 7.58333 0.75 8.33333 1.66667 8.33333C2.58333 8.33333 3.33333 7.58333 3.33333 6.66667C3.33333 5.75 2.58333 5 1.66667 5ZM1.66667 10C0.75 10 0 10.75 0 11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333C2.58333 13.3333 3.33333 12.5833 3.33333 11.6667C3.33333 10.75 2.58333 10 1.66667 10Z" fill="#707070" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>  
                                    <tr>
                                        <td>
                                            01
                                        </td>
                                        <td>
                                            <p className="_dshbrd_tble_txt1">
                                            John day
                                            </p>
                                        </td>
                                        <td>
                                            johnday043
                                        </td>
                                        <td>
                                            johnday043@gmail.com
                                        </td>
                                        <td>
                                            Author
                                        </td>
                                        <td>
                                            <div className="_table2_edit">
                                                <span className="_dot1_box">
                                                    <svg width={4} height={14} viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.66667 3.33333C2.58333 3.33333 3.33333 2.58333 3.33333 1.66667C3.33333 0.75 2.58333 0 1.66667 0C0.75 0 0 0.75 0 1.66667C0 2.58333 0.75 3.33333 1.66667 3.33333ZM1.66667 5C0.75 5 0 5.75 0 6.66667C0 7.58333 0.75 8.33333 1.66667 8.33333C2.58333 8.33333 3.33333 7.58333 3.33333 6.66667C3.33333 5.75 2.58333 5 1.66667 5ZM1.66667 10C0.75 10 0 10.75 0 11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333C2.58333 13.3333 3.33333 12.5833 3.33333 11.6667C3.33333 10.75 2.58333 10 1.66667 10Z" fill="#707070" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                  
                <div className="_dshbrd_tble_r8 _box1 _mar_t40">
                    <div className="_dshbrd_tble_slct _box1 d-flex">
                        <p className="_dshbrd_tble_slct_txt">
                        Revenue
                        </p>
                        <span>
                        <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5L5.35355 5.35355L5 5.70711L4.64645 5.35355L5 5ZM9.35355 1.35355L5.35355 5.35355L4.64645 4.64645L8.64645 0.646446L9.35355 1.35355ZM4.64645 5.35355L0.646446 1.35355L1.35355 0.646447L5.35355 4.64645L4.64645 5.35355Z" fill="#707584" />
                        </svg>
                        </span>
                    </div>
                    <div className="_dshbrd_tble_dte _dis_flex _mar_t30">
                        <div className="_dshbrd_tble_dte_lft">
                        <div className="_dshbrd_tble_dte_all _dis_flex">
                            <div className="_dshbrd_sngl_dte_all _dis_flex">
                            <div className="_dshbrd_sngl_dte">
                                <img src="../../img/date.svg" alt="image" />
                                <p className="_dshbrd_sngl_dte_txt">
                                14 July, 2021
                                </p>
                            </div>
                            <span className="_dshbrd_sngl_dte_line" />
                            <div className="_dshbrd_sngl_dte">
                                <img src="../../img/date.svg" alt="image" />
                                <p className="_dshbrd_sngl_dte_txt">
                                14 July, 2021
                                </p>
                            </div>
                            </div>
                            <span className="_dshbrd_sngl_dte_arrow">
                            <svg width={11} height={6} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5.5 5.5L10 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>	
                            </span>
                        </div>
                        </div>
                        <div className="_dshbrd_tble_dte_r8">
                        <ul className="_dshbrd_tble_dte_list _dis_flex">
                            <li className="_active">
                            Daily
                            </li>
                            <li>
                            Weekly
                            </li>
                            <li>
                            Monthly
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                   
             
            </div>
            <Footer/>

        </div>
    )
}
export default Dashboard;


