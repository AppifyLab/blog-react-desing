import React from 'react';

function Registration() {
    return (
        <div>
        <div className='_login_layout'>
            <div className='_login_row'>
                <div className='_Tlogin_lft'>
                    <a href='' className='_Tlogin_logo_link'>
                        <img src='../../img/login_logo.svg' className='_Tlogin_logo' alt='image' />
                    </a>
                    <h1 className='_Tlogin_titl1 _mar_t24'>
                         Get Onboard!
                    </h1>
                    <p className='_Tlogin_txt1 _mar_t16'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr.
                    </p>
                    <div className='_Tlreg_lft_pic _mar_t60'>
                        <img src='../../img/registration.svg' className='_Tlreg_lft_img' alt='image' />
                    </div>

                    <div className='_Treg_plan'>
                        <p className='_Treg_plan_txt'>
                           Your Plan
                        </p>
                        <div className='_Treg_plan_box d-flex'>
                            <div className='_Treg_plan_lft d-flex'>
                                <div className='_Treg_plan_pic'>
                                   <img src='../../img/regi_plan.svg' className='_Treg_plan_img' alt='image' />
                                </div>
                                <div className='_Treg_plan_info'>
                                    <h2 className='_Treg_plan_titl1'>
                                        Starter
                                    </h2>
                                    <p className='_Treg_plan_txt'>
                                        <span>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle opacity="0.1" cx="7" cy="8" r="7" fill="white"/>
                                                <path d="M3 7L6.21391 9.41043C6.65027 9.7377 7.26839 9.65492 7.60326 9.22437L14 1" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                                            </svg>
                                        </span>
                                        7 Days Free Trial
                                    </p>
                                </div>
                            </div>

                            <div className='_Treg_plan_r8'>
                                <p className='_Treg_plan_r8_txt1'>
                                  $20
                                    <span>/month</span>
                                </p>
                                <p className='_Treg_plan_r8_txt2 _mar_t16'>
                                   ($240 Billed Annually)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='_Tlogin_lft_shape1'>
                       <img src="../../img/login_shape1.svg" className="_Tlogin_lft_shape1_img" alt="image" />
                    </div>
                    <div className='_Tlogin_lft_shape2'>
                       <img src="../../img/login_shape2.svg" alt="image" className="_Tlogin_lft_shape2_img" />
                    </div>
                </div>
                
                <div className='_Tlogin_r8_all'>
                    <div className='_Tlogin_r8'>
                        <div className='_Tlogin_r8_iner'>
                            <p className='_Tlogin_r8_txt1'>
                                Welcome back
                            </p>
                            <h2 className='_Tlogin_titl2 _mar_t8'>
                                Sign in to your account
                            </h2>
                            <ul className='_Tlogin_scl d-flex _mar_t40'>
                                <li>
                                    <a href='' className='_Tlogin_scl_lnk'>
                                        <span className='_Tlogin_scl_box _dis_flex_all'>
                                            <img src='../../img/google.svg' className='_Tlogin_scl_icon' />
                                        </span>
                                        Google
                                    </a>
                                </li>
                                <li>
                                    <a href='' className='_Tlogin_scl_lnk'>
                                        <span className='_Tlogin_scl_box _dis_flex_all'>
                                            <img src='../../img/facebook.svg' className='_Tlogin_scl_icon' />
                                        </span>
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                            <div className='_Tlogin_inpt_itm _mar_t24'>
                                <p className='_Tlogin_inpt_txt'>
                                    Email
                                </p>
                                <input type="text" placeholder='Email' className='_inpt1' />
                            </div>
                            <div className='_Tlogin_inpt_itm _mar_t24'>
                                <p className='_Tlogin_inpt_txt'>
                                Full Name
                                </p>
                                <input type="text" placeholder='Full Name' className='_inpt1' />
                            </div>
                            <div className='_Tlogin_inpt_itm _mar_t16'>
                                <p className='_Tlogin_inpt_txt'>
                                    Password
                                </p>
                                <input type="password" placeholder='Password' className='_inpt1' />
                                <span className='_Tlogin_pass_see'>
                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6.9987" cy="5.00065" r="2.16667" stroke="#918f8f"/>
                                        <path d="M12.1679 3.94822C12.5638 4.39757 12.7618 4.62225 12.7618 5C12.7618 5.37775 12.5638 5.60243 12.1679 6.05178C11.1235 7.2369 9.2 9 7 9C4.8 9 2.87655 7.2369 1.83215 6.05178C1.43615 5.60243 1.23816 5.37775 1.23816 5C1.23816 4.62225 1.43615 4.39757 1.83215 3.94822C2.87655 2.7631 4.8 1 7 1C9.2 1 11.1235 2.7631 12.1679 3.94822Z" stroke="#918f8f"/>
                                    </svg>
                                </span>
                            </div>
                            <button className='_Tlogin_btn1 _btn1 _mar_t45'>
                                Start 14 Days Free Trial
                            </button>
                            <div className='_Tlogin_inpt_btm _mar_t40'>
                                <p className='_Tlogin_inpt_btm_txt'>
                                Already have an account? <a href='' className=''>Sign In</a>
                                </p>
                            </div>
                        </div>
                        <div className='_Tlogin_r8_shape1'>
                            <img src="../../img/login_shape3.svg" alt="image" className="_Tlogin_r8_shape1_img" />
                        </div>
                    </div>
                </div>
                <div className='_Tlogin_mdl_shape'>
                     <img src="../../img/Tlogin_mdl_shape.svg" alt="image" className="_Tlogin_mdl_shape_img" />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Registration;