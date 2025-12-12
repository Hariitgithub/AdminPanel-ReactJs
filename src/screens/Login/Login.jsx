import React, { useState } from 'react';
import { logo } from '../../assets/img';
import { useNavigate } from 'react-router-dom';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { NUMBER } from '../redux/api/Constants';

const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        mobile: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === "mobile") {
            if (value && !/^[6-9]/.test(value)) {
                return; // prevent entering invalid first digit
            }
        }

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const continueDash = () => {
        const newErrors = {};
        if (!NUMBER.test(data.mobile) || data.mobile.length !== 10) {
            newErrors.mobile = "Enter a valid 10-digit mobile number";
        }
        if (!data.password || data.password.length < 4) {
            newErrors.password = "Password must be at least 4 characters";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            navigate("/dash-board1");
        }
    }

    return (
        <div className='d-flex ac-js w-100 bg-black'>
            <div className='login-left col-md-6 col-sm-6'>
                <div className='w-100'>
                    <img src={logo} alt='' className='login_img' />
                    <h2 className='f9 fs-sm-20 fs-md-30 fs-lg-42 fs-xl-46 fs-xxl-52 text-center white'>Restaurant Admin</h2>
                </div>
            </div>
            <div className='login-right col-md-6 col-sm-6'>
                <div className='w-60 sign-in'>
                    {/* <h4 className='f2 fs-sm-12 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 black'>Welcome To OrderZest</h4> */}
                    <h2 className='f3 fs-sm-18 fs-md-20 fs-lg-22 fs-xl-24 fs-xxl-30 mb-1 black'>Sign In</h2>
                    <div className='my-3'>
                        <p className='f2 fs-sm-12 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 black'>Enter Your Email Address</p>
                        <div className="login-inpt mt-1 d-flex align-items-center">
                            <p className="me-2 mb-0 fs-16 ps-1">+91</p>
                            <input className='login-inpt'
                                value={data.mobile}
                                onChange={handleChange}
                                name="mobile"
                                type="number"
                                placeholder="Enter mobile number"
                                maxLength={10}
                                onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                            />
                        </div>
                        {errors.mobile && <p className="err">{errors.mobile}</p>}
                    </div>
                    <div>
                        <p className='f2 fs-sm-12 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 black'>Enter Your Password</p>
                        <div className="login-inpt mt-1 d-flex align-items-center">
                            <input className='login-inpt'
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                onInput={(e) => e.target.value = e.target.value.slice(0, 30)}
                            />
                            <span
                                onClick={togglePassword}
                                className="password_color"
                                style={{ cursor: "pointer", paddingRight: "10px" }}
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </span>
                        </div>
                        {errors.password && <p className="err">{errors.password}</p>}
                    </div>
                    {/* <div className='forgot-pass'>
                            <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Forgot Password</p>
                        </div> */}

                    <button onClick={continueDash} className='f3 w-100 mt-3 add-btn'>Continue</button>

                </div>
            </div>
        </div>
    )
}

export default Login;