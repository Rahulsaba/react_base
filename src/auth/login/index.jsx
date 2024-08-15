import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Button, ButtonLoader, Input, Links, Loader } from "@/path";
import { registerOptions } from '@/helpers/schema/authSchema'
import DocumentTitle from '@/helpers/DocumentTitle';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import logo from '@/assets/logo.svg';
import { userLogin } from '@/auth/features/authAction/authAction';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';


export default function Login() {
    var title = 'Login';
    DocumentTitle(title);
    var dispatch = useDispatch();
    const navigate = useNavigate();
    const [passwordIcon, setPasswordIcon] = useState(!1);
    const { loading, error, success, userToken } = useSelector((state) => state.auth)

    const { control, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault();
        dispatch(userLogin(data));
    };
    
        if (userToken) navigate('/home');
   
    return (
        <>
            <div className="min-h-screen mx-auto w-100 flex_main login_bg" >
                <form className="flex flex-col gap-4 p-10 bg-white rounded-lg bo b sm:p-5 w-96" onSubmit={handleSubmit(onSubmit)} >
                    <div className="flex justify-center">
                        {/* https://www.bluemizzle.com/assets/images/logo.png */}
                        <img
                            src={logo}
                            alt="logo"
                            width={200}
                        />
                    </div>
                    <div>
                        <Controller
                            name="email"
                            control={control}
                            rules={registerOptions?.email}
                            defaultValue=""
                            render={({ field }) =>
                                <Input field={field}
                                    className={``}
                                    errors={errors?.email?.message}
                                    placeholder="email@email.com"
                                    type="email"
                                />}
                        />
                    </div>
                    <div className="relative">
                        <Controller
                            name="password"
                            control={control}
                            rules={registerOptions?.password}
                            defaultValue=""
                            render={({ field }) =>
                                <Input field={field}
                                    className={''}
                                    errors={errors?.password?.message}
                                    placeholder="Enter Password"
                                    type={passwordIcon && 'text' || 'password'}
                                />}
                        />
                        <span
                            onClick={() => (setPasswordIcon((params) => (!params)))}
                            className="absolute right-0 flex h-3 pr-3 text-gray-500 cursor-pointer inset-y-9">
                            {
                                passwordIcon ? <Eye size={22} className='text-main_color' /> : <EyeSlash size={23} />
                            }
                        </span>
                    </div>
                    <div className='flex_between'>
                        <div className="flex_main gap-1.5">
                            <input type="checkbox" id="remember" name="remember" className="accent-main_color" />
                            <label htmlFor="remember" className='font-medium text-8125 font-inter '> Remember me</label>
                        </div>
                        <div>
                            <Links path={'/password'} content='Forget Password ?' className='' />
                        </div>
                    </div>
                    <Button
                        Children={`Login`}
                        button_css={''}
                        loading={loading}
                    />
                    <p className='font-medium text-center text-text_secondary font-inter text-8125'>
                        Need an account?
                        <span>
                            <Links path={'/register'} content=' Sign up' className='' />
                        </span>
                    </p>
                </form>
            </div>
        </>
    )
}