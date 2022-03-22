import React from 'react';

function TeForgotPassword() {
    return (
        <div>
            <div className='_login_layout'>
                <div className='_login_row'>
                    <div className='_Tlogin_lft'>
                        <a href='' className='_Tlogin_logo_link'>
                            <img src='../../img/login_logo.svg' className='_Tlogin_logo' alt='image' />
                        </a>
                       
                        <div className='_Tlogin_lft_pic _mar_t60'>
                            <img src='../../img/login_lft2.svg' className='_Tlogin_lft_img2' alt='image' />
                        </div>

                        <div className='_Tlogin_lft_shape1'>
                           <img src="../../img/login_shape1.svg" className="_Tlogin_lft_shape1_img" alt="image" />
                        </div>
                        <div className='_Tlogin_lft_shape2'>
                           <img src="../../img/login_shape2.svg" alt="image" className="_Tlogin_lft_shape2_img" />
                        </div>
                    </div>
                
                    <div className='_Tlogin_r8'>
                        <div className='_Tlogin_r8_iner'>
                            <h2 className='_Tlogin_titl2 _mar_t8'>
                               Forgot Password
                            </h2>
                           <p className='_Tfrgt_pass_txt _mar_t16'>
                             Lorem ipsum dolor sit amet, consectetur adipiscing sit amet, consectetur adipiscing.
                           </p>
                            <div className='_Tlogin_inpt_itm _mar_t24'>
                                <p className='_Tlogin_inpt_txt'>
                                    Email
                                </p>
                                <input type="text" placeholder='Email' className='_inpt1' />
                            </div>
                           
                            <button className='_Tlogin_btn1 _btn1 _mar_t45'>
                               Recover Password
                            </button>
                            <button className='_Tlogin_btn1 _mar_t16 _btn2'>
                               Cancel
                            </button>
                        </div>
                        <div className='_Tlogin_r8_shape1'>
                            <img src="../../img/login_shape3.svg" alt="image" className="_Tlogin_r8_shape1_img" />
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
export default TeForgotPassword;