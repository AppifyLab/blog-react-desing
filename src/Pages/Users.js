import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import LeftSidebar from '../components/leftSidebar/LeftSidebar';
import TopSearch from '../components/searchbox/TopSearch';
import Menu from '../components/menu/Menu';
import { Input, Select, Button,Upload, Modal} from 'antd';



function Users() {
const [visible, setVisible] = useState(false);
const { TextArea  } = Input;
const onSearch = value => console.log(value);
const { Option } = Select;
const { Dragger } = Upload;

    return (
        <div>
            <Menu />
            <LeftSidebar />
                <div className="_main_content">
                    <div className="_dshbrd_top _dis_flex">                              
                        <div className="_dshbrd_top_lft">
                            <h1 className="_dshbrd_top_titl _titl1">
                                Users
                            </h1>
                            <p className="_dshbrd_top_txt _mar_t16">                                               
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                            </p>
                        </div>  
                        <div class="_dshbrd_top_r8">
                            <ul class="_dshbrd_top_r8_ul1 d-flex">
                                <li>
                                    <Button className="_dshbrd_top_btn _btn1" onClick={() => setVisible(true)}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={10} cy={10} r={9} stroke="white" />
                                            <path d="M10 6L10 14" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                            <path d="M14 10L6 10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                        </svg>
                                        Add New User
                                    </Button>
                                </li>
                                <Modal
                        centered
                        visible={visible}
                        onOk={() => setVisible(false)}
                        onCancel={() => setVisible(false)}
                        width={1000}
                        okButtonProps={{
                          children: "Custom OK"
                        }}
                        cancelButtonProps={{
                          children: "Custom cancel"
                        }}
                        okText="Create User"
                        cancelText="Back"
                      >
                        <div className="row justify-content-center">
                          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="_instrctr_new">
                              <h2 className="_instrctr_new_titl1 _titl3">
                                Add New User
                              </h2>
                              <div className="_instrctr_new_main _mar_t35">
                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="_instrctr_new_itm _mar_b24">
                                      <label className="_instrctr_new_titl2 _titl4 _mar_b14">
                                         Name
                                      </label>

                                      <Input type="text" placeholder="Name" className="_inpt1" />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="_instrctr_new_itm _mar_b24">
                                      <label className="_instrctr_new_titl2 _titl4 _mar_b14">
                                        Email
                                      </label>
                                      <Input type="text" placeholder="Email" className="_inpt1" />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="_instrctr_new_itm _mar_b24">
                                      <label className="_instrctr_new_titl2 _titl4 _mar_b14">
                                        User Type
                                      </label>
                                      <div className="_ant_select_itm">
                                           <Select defaultValue="User Type">
                                            <Option className="_drpdwn1_li" value="jack">Jack</Option>
                                            <Option className="_drpdwn1_li" value="lucy">Lucy</Option>
                                            <Option className="_drpdwn1_li" value="Yiminghe">yiminghe</Option>
                                          </Select>
                                        </div>
                                    </div>
                                  </div>
                                 
                                 
                                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="_instrctr_new_itm _mar_b24">
                                      <label className="_instrctr_new_titl2 _titl4 _mar_b14">
                                        Designation
                                      </label>
                                      <Input type="text" placeholder="Designation" className="_inpt1" />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="_instrctr_new_itm _mar_b24">
                                      <label className="_instrctr_new_titl2 _titl4 _mar_b14">
                                        Bio
                                      </label>
                                      <TextArea rows={6} className="_inpt1 _textarea1 _modal_textarea" />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="_instrctr_new_itm _mar_b16">
                                      <label className="_instrctr_new_titl2 _titl4 _mar_b14">
                                        Add Image
                                      </label>
                                      <div className="_1popUp_upld _dis_flex_all _box1">
                                      <Dragger className='ccc'>
                                            <div className='_1popUp_upld_top'>
                                                <img src='../../img/upload.svg' className='_box1_upld_img' />
                                                <p className="_1popUp_upld_txt">Image</p>
                                            </div>
                                        </Dragger>   
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </Modal> 
                             </ul>
                        </div>        
                    </div>   
                    <div className="_dshbrd_filter_all _dis_flex _mar_t40">
                        <div className="_top_srch_box1_all d-flex">
                            {/* <div className="_top_srch_box1">
                                <input type="text" placeholder="Search item by keyword.." className="_inpt1 _top_srch_box1_inpt" />
                                <span className="_top_srch_box1_icon">
                                    <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={6} cy={6} r={5} stroke="#707584" strokeWidth="1.2" />
                                        <path d="M13.5 13.5L11 11" stroke="#707584" strokeWidth="1.2" strokeLinecap="round" />
                                    </svg>	
                                </span>
                            </div>
                            <div className="_top_srch_filtr _box1 _mar_l24 _dis_flex_all">
                                <img src="../../img/filter1.svg" alt="icon" className="_dshbrd_filtr_icon" />
                            </div> */}
                            <TopSearch/>
                        </div>
                    </div>
                    <div className="_tble1_crd_all _mar_t24">
                        <table className="_instrctr_tble _table2 _table_nowrap">
                            <thead>
                                <tr>
                                    <th>
                                       ID
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
                                        1
                                    </td>
                                    <td className='_table2_usr_td'>
                                       <div className='_dshbrd_tbl_usr_all d-flex'>
                                           <div className='_dshbrd_tbl_usr_lft'>
                                               <img src='../../img/man.jpg' alt='image' className='_dshbrd_tbl_usr_img' />
                                           </div>
                                           <div className='_dshbrd_tbl_usr_info _mar_l8'>
                                               <h3 className='_dshbrd_tbl_usr_titl _titl4'>
                                                 Ruben Septimus
                                               </h3>
                                               <p className='_dshbrd_tbl_usr_txt1 _mar_t5'>
                                                   support@course.com
                                               </p>
                                           </div>
                                       </div>
                                    </td>
                                    <td>
                                        support@cours54
                                    </td>
                                    <td>
                                       support@course.com
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
                                        1
                                    </td>
                                    <td className='_table2_usr_td'>
                                       <div className='_dshbrd_tbl_usr_all d-flex'>
                                           <div className='_dshbrd_tbl_usr_lft'>
                                               <img src='../../img/man.jpg' alt='image' className='_dshbrd_tbl_usr_img' />
                                           </div>
                                           <div className='_dshbrd_tbl_usr_info _mar_l8'>
                                               <h3 className='_dshbrd_tbl_usr_titl _titl4'>
                                                 Ruben Septimus
                                               </h3>
                                               <p className='_dshbrd_tbl_usr_txt1 _mar_t5'>
                                                   support@course.com
                                               </p>
                                           </div>
                                       </div>
                                    </td>
                                    <td>
                                        support@cours54
                                    </td>
                                    <td>
                                       support@course.com
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
                                        1
                                    </td>
                                    <td className='_table2_usr_td'>
                                       <div className='_dshbrd_tbl_usr_all d-flex'>
                                           <div className='_dshbrd_tbl_usr_lft'>
                                               <img src='../../img/man.jpg' alt='image' className='_dshbrd_tbl_usr_img' />
                                           </div>
                                           <div className='_dshbrd_tbl_usr_info _mar_l8'>
                                               <h3 className='_dshbrd_tbl_usr_titl _titl4'>
                                                 Ruben Septimus
                                               </h3>
                                               <p className='_dshbrd_tbl_usr_txt1 _mar_t5'>
                                                   support@course.com
                                               </p>
                                           </div>
                                       </div>
                                    </td>
                                    <td>
                                        support@cours54
                                    </td>
                                    <td>
                                       support@course.com
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
                                        1
                                    </td>
                                    <td className='_table2_usr_td'>
                                       <div className='_dshbrd_tbl_usr_all d-flex'>
                                           <div className='_dshbrd_tbl_usr_lft'>
                                               <img src='../../img/man.jpg' alt='image' className='_dshbrd_tbl_usr_img' />
                                           </div>
                                           <div className='_dshbrd_tbl_usr_info _mar_l8'>
                                               <h3 className='_dshbrd_tbl_usr_titl _titl4'>
                                                 Ruben Septimus
                                               </h3>
                                               <p className='_dshbrd_tbl_usr_txt1 _mar_t5'>
                                                   support@course.com
                                               </p>
                                           </div>
                                       </div>
                                    </td>
                                    <td>
                                        support@cours54
                                    </td>
                                    <td>
                                       support@course.com
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
            <Footer />
        </div>
    )
}
export default Users;