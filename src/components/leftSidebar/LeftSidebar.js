import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';     

 
function LeftSidebar() {
    return (
        <div>	
            <div className="_left_sidebar">
                <div className="_left_sidebar_main">
                    <div className='_left_sidebar_pgrs_main _mar_b16'>
                        <div className='_left_sidebar_pgrs_top d-flex'>
                            <p className='_left_sidebar_pgrs_txt1'>
                              Get Ready To  Launch
                            </p>
                            <p className='_left_sidebar_pgrs_txt2'>
                              20%
                            </p>
                        </div>
                        <div className='_left_sidebar_pgrs_line _mar_t16'>
                                <span className='_left_sidebar_pgrs_line_spn'></span>
                        </div>
                    </div>
                    <ul className="_left_sidebar_ul1">
                        <li className="_left_sidebar_li  flex _active">
                            <Link to="/" className="_left_sidebar_link">
                                <span className="_left_sidebar_icon1">
                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x={1} y={1} width={6} height={7} rx={1} stroke="#586ED1" strokeLinejoin="round" />
                                        <rect x={1} y={12} width={6} height={5} rx={1} stroke="#586ED1" strokeLinejoin="round" />
                                        <rect x={11} y={1} width={6} height={6} rx={1} stroke="#586ED1" strokeLinejoin="round" />
                                        <rect x={11} y={10} width={6} height={7} rx={1} stroke="#586ED1" strokeLinejoin="round" />
                                    </svg>
                                </span>        
                                <p className="_left_sidebar_txt">
                                    Dashboard 
                                </p>
                                <span className="_left_sidebar_num _dis_flex_all">
                                    02
                                </span>
                            </Link>
                        </li>  
                        <li className="_left_sidebar_li">
                            <Link to="/users" className="_left_sidebar_link">
                                <span className="_left_sidebar_icon1">
                                    <svg width={18} height={23} viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3416 17.3314C14.147 16.2518 13.488 15.268 12.4874 14.5632C11.4869 13.8585 10.213 13.4808 8.90314 13.5007C7.59327 13.5206 6.33675 13.9367 5.36769 14.6714C4.39862 15.406 3.7831 16.4092 3.6358 17.494" stroke="#586ED1" />
                                    <circle cx="9.00078" cy="7.2" r="2.7" stroke="#586ED1" strokeLinecap="round" />
                                    <rect x="0.5" y="0.5" width={17} height={17} rx="3.5" stroke="#586ED1" />
                                    </svg>	
                                </span>
                                <p className="_left_sidebar_txt">
                                    Users
                                </p>
                            </Link>
                        </li>
                        <li className="_left_sidebar_li">
                            <Link to="/category" className="_left_sidebar_link">
                                <span className="_left_sidebar_icon1">
                                    <svg width={18} height={23} viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3416 17.3314C14.147 16.2518 13.488 15.268 12.4874 14.5632C11.4869 13.8585 10.213 13.4808 8.90314 13.5007C7.59327 13.5206 6.33675 13.9367 5.36769 14.6714C4.39862 15.406 3.7831 16.4092 3.6358 17.494" stroke="#586ED1" />
                                    <circle cx="9.00078" cy="7.2" r="2.7" stroke="#586ED1" strokeLinecap="round" />
                                    <rect x="0.5" y="0.5" width={17} height={17} rx="3.5" stroke="#586ED1" />
                                    </svg>	
                                </span>
                                <p className="_left_sidebar_txt">
                                   Category
                                </p>
                            </Link>
                        </li>
                        <li className="_left_sidebar_li">
                            <Link to="/subcategory" className="_left_sidebar_link">
                                <span className="_left_sidebar_icon1">
                                    <svg width={18} height={23} viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3416 17.3314C14.147 16.2518 13.488 15.268 12.4874 14.5632C11.4869 13.8585 10.213 13.4808 8.90314 13.5007C7.59327 13.5206 6.33675 13.9367 5.36769 14.6714C4.39862 15.406 3.7831 16.4092 3.6358 17.494" stroke="#586ED1" />
                                    <circle cx="9.00078" cy="7.2" r="2.7" stroke="#586ED1" strokeLinecap="round" />
                                    <rect x="0.5" y="0.5" width={17} height={17} rx="3.5" stroke="#586ED1" />
                                    </svg>	
                                </span>
                                <p className="_left_sidebar_txt">
                                  Subcategory
                                </p>
                            </Link> 
                        </li>          
                        {/* <li className="_left_sidebar_li">
                            <a href className="_left_sidebar_link">
                                <span className="_left_sidebar_icon1">
                                    <svg width={20} height={17} viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 14H7C8.65685 14 10 15.3431 10 17V7C10 4.17157 10 2.75736 9.12132 1.87868C8.24264 1 6.82843 1 4 1H3C2.05719 1 1.58579 1 1.29289 1.29289C1 1.58579 1 2.05719 1 3V12C1 12.9428 1 13.4142 1.29289 13.7071C1.58579 14 2.05719 14 3 14Z" stroke="#586ED1" />
                                    <path d="M17 14H13C11.3431 14 10 15.3431 10 17V7C10 4.17157 10 2.75736 10.8787 1.87868C11.7574 1 13.1716 1 16 1H17C17.9428 1 18.4142 1 18.7071 1.29289C19 1.58579 19 2.05719 19 3V12C19 12.9428 19 13.4142 18.7071 13.7071C18.4142 14 17.9428 14 17 14Z" stroke="#586ED1" />
                                    </svg>
                                </span>
                                <p className="_left_sidebar_txt">
                                    Learning Content
                                </p>
                                <span className="_left_sidebar_icon2">
                                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L5.35355 5.35355L5 5.70711L4.64645 5.35355L5 5ZM9.35355 1.35355L5.35355 5.35355L4.64645 4.64645L8.64645 0.646446L9.35355 1.35355ZM4.64645 5.35355L0.646446 1.35355L1.35355 0.646447L5.35355 4.64645L4.64645 5.35355Z" fill="#fff" />
                                    </svg>
                                </span>                                                                
                            </a>                        
                            <ul className="_left_sidebar_ul2">
                                <li>
                                    <a href className="_left_sidebar_link2">
                                        My Courses
                                    </a>
                                </li>
                                <li>
                                    <a href className="_left_sidebar_link2">
                                      Content Library
                                    </a>
                                </li>
                                <li>
                                    <a href className="_left_sidebar_link2">
                                      Instructor
                                    </a>
                                </li>
                                <li>
                                    <a href className="_left_sidebar_link2">
                                      Share Revenue
                                    </a>
                                </li>
                                <li>
                                    <a href className="_left_sidebar_link2">
                                      Scholarship
                                    </a>
                                </li>
                                <li>
                                    <a href className="_left_sidebar_link2">
                                      Manage Access
                                    </a>
                                </li>
                                <li>
                                    <a href className="_left_sidebar_link2">
                                      Exam System
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="_left_sidebar_li">
                            <a href className="_left_sidebar_link">
                            <span className="_left_sidebar_icon1">
                                <svg width={15} height={19} viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1H5C2.79086 1 1 2.79086 1 5V13" stroke="#586ED1" />
                                <path d="M4.5 9.5C4.5 8.31558 4.50074 7.46912 4.57435 6.81625C4.64681 6.17346 4.78457 5.78051 5.01662 5.4781C5.14962 5.30477 5.30477 5.14962 5.4781 5.01662C5.78051 4.78457 6.17346 4.64681 6.81625 4.57435C7.46912 4.50074 8.31558 4.5 9.5 4.5C10.6844 4.5 11.5309 4.50074 12.1837 4.57435C12.8265 4.64681 13.2195 4.78457 13.5219 5.01662C13.6952 5.14962 13.8504 5.30477 13.9834 5.4781C14.2154 5.78051 14.3532 6.17346 14.4257 6.81625C14.4993 7.46912 14.5 8.31558 14.5 9.5V13.5C14.5 14.6844 14.4993 15.5309 14.4257 16.1837C14.3532 16.8265 14.2154 17.2195 13.9834 17.5219C13.8504 17.6952 13.6952 17.8504 13.5219 17.9834C13.2195 18.2154 12.8265 18.3532 12.1837 18.4257C11.5309 18.4993 10.6844 18.5 9.5 18.5C8.31558 18.5 7.46912 18.4993 6.81625 18.4257C6.17346 18.3532 5.78051 18.2154 5.4781 17.9834C5.30477 17.8504 5.14962 17.6952 5.01662 17.5219C4.78457 17.2195 4.64681 16.8265 4.57435 16.1837C4.50074 15.5309 4.5 14.6844 4.5 13.5V9.5Z" stroke="#586ED1" />
                                </svg>
                            </span>
                            <p className="_left_sidebar_txt">
                                Site Customization
                            </p>
                            <span className="_left_sidebar_icon2">
                                <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5L5.35355 5.35355L5 5.70711L4.64645 5.35355L5 5ZM9.35355 1.35355L5.35355 5.35355L4.64645 4.64645L8.64645 0.646446L9.35355 1.35355ZM4.64645 5.35355L0.646446 1.35355L1.35355 0.646447L5.35355 4.64645L4.64645 5.35355Z" fill="#fff" />
                                </svg>
                            </span>
                            </a>
                        </li>
                        <li className="_left_sidebar_li">
                            <a href className="_left_sidebar_link">
                            <span className="_left_sidebar_icon1">
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 7L11.9558 11.5662C11.5299 12.2051 10.5728 12.1455 10.2294 11.4587L9.77063 10.5413C9.42725 9.8545 8.47006 9.79491 8.04415 10.4338L5 15" stroke="#586ED1" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x={1} y={1} width={18} height={18} rx={2} stroke="#586ED1" />
                                </svg>
                            </span>
                            <p className="_left_sidebar_txt">
                                Sales &amp; Marketing
                            </p>
                            <span className="_left_sidebar_icon2">
                                <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5L5.35355 5.35355L5 5.70711L4.64645 5.35355L5 5ZM9.35355 1.35355L5.35355 5.35355L4.64645 4.64645L8.64645 0.646446L9.35355 1.35355ZM4.64645 5.35355L0.646446 1.35355L1.35355 0.646447L5.35355 4.64645L4.64645 5.35355Z" fill="#fff" />
                                </svg>
                            </span>
                            </a>
                        </li>
                      
                        <li className="_left_sidebar_li">
                            <a href className="_left_sidebar_link">
                            <span className="_left_sidebar_icon1">
                                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 9C17 5.22876 17 3.34315 15.8284 2.17157C14.6569 1 12.7712 1 9 1V1C5.22876 1 3.34315 1 2.17157 2.17157C1 3.34315 1 5.22876 1 9V15C1 15.9428 1 16.4142 1.29289 16.7071C1.58579 17 2.05719 17 3 17H9C12.7712 17 14.6569 17 15.8284 15.8284C17 14.6569 17 12.7712 17 9V9Z" stroke="#586ED1" />
                                <path d="M6 7L12 7" stroke="#586ED1" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 11H9" stroke="#586ED1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <p className="_left_sidebar_txt">
                                Live Chat 
                            </p>
                            <span className="_left_sidebar_icon2">
                                <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5L5.35355 5.35355L5 5.70711L4.64645 5.35355L5 5ZM9.35355 1.35355L5.35355 5.35355L4.64645 4.64645L8.64645 0.646446L9.35355 1.35355ZM4.64645 5.35355L0.646446 1.35355L1.35355 0.646447L5.35355 4.64645L4.64645 5.35355Z" fill="#fff" />
                                </svg>
                            </span>
                            </a>
                        </li>
                        <li className="_left_sidebar_li">
                            <a href className="_left_sidebar_link">
                            <span className="_left_sidebar_icon1">
                                <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.08168 10.9445C1.55298 9.99406 1.28862 9.51884 1.28862 9C1.28862 8.48116 1.55298 8.00594 2.08169 7.0555L3.18784 5.067L4.35685 3.11479C4.9156 2.18169 5.19498 1.71515 5.64431 1.45572C6.09364 1.1963 6.63737 1.18763 7.72483 1.17029L10 1.134L12.2752 1.17029C13.3626 1.18763 13.9064 1.1963 14.3557 1.45572C14.805 1.71514 15.0844 2.18169 15.6431 3.11479L16.8122 5.067L17.9183 7.0555C18.447 8.00594 18.7114 8.48116 18.7114 9C18.7114 9.51884 18.447 9.99406 17.9183 10.9445L16.8122 12.933L15.6431 14.8852C15.0844 15.8183 14.805 16.2849 14.3557 16.5443C13.9064 16.8037 13.3626 16.8124 12.2752 16.8297L10 16.866L7.72483 16.8297C6.63737 16.8124 6.09364 16.8037 5.64431 16.5443C5.19498 16.2849 4.9156 15.8183 4.35685 14.8852L3.18784 12.933L2.08168 10.9445Z" stroke="#586ED1" />
                                <circle cx={10} cy="9.00005" r="2.7" stroke="#586ED1" />
                                </svg>
                            </span>
                            <p className="_left_sidebar_txt">
                                Settings 
                            </p>
                            <span className="_left_sidebar_icon2">
                                <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5L5.35355 5.35355L5 5.70711L4.64645 5.35355L5 5ZM9.35355 1.35355L5.35355 5.35355L4.64645 4.64645L8.64645 0.646446L9.35355 1.35355ZM4.64645 5.35355L0.646446 1.35355L1.35355 0.646447L5.35355 4.64645L4.64645 5.35355Z" fill="#fff" />
                                </svg>
                            </span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default LeftSidebar;