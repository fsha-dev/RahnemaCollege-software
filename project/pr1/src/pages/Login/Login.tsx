import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/AuthInput/AuthInput";
import personIcon from "../../assets/icons/person.svg";
import emailIcon from "../../assets/icons/gmail.svg";
import keyIcon from "../../assets/icons/key.svg";
import logo from "../../assets/rahnema-college-logo.png";

import "./login.css";

function Login() {
  return (
    <>
      <div className="relative">
        <AuthLayout />
        <Modal className="absolute top-[50%] left-[50%] translate-[-50%]">
          <div className="flex  flex-col items-center justify-center">
            <img
              src={logo}
              alt="rahnema college logo"
              className="w-[10rem] h-[6.1rem]"
            />
            <p dir="rtl" className=" font-normal   my-8">
              برای ثبت‌نام کافیه نام کاربری، ایمیل و یک رمز عبور وارد کنید:
            </p>
            <form className=" w-full h-fit flex  flex-col items-center justify-center gap-y-6">
              <Input
                placeholder="نام کاربری"
                svgIcon={personIcon}
                inputName="username"
              />
              <Input
                placeholder="ایمیل"
                svgIcon={emailIcon}
                inputName="email"
              />
              <Input
                placeholder="رمز عبور"
                svgIcon={keyIcon}
                inputName="email"
              />
              <Input
                placeholder="تکرار رمز عبور"
                svgIcon={keyIcon}
                inputName="email"
              />
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Login;
