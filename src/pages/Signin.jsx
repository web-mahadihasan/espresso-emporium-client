import { Link, useNavigate } from "react-router";
import logo from "../assets/images/logo.png";
import { FiEye } from "react-icons/fi";
import { FaFacebookF, FaRegEyeSlash, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setUser, signInWithSocial } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const googleProvier = new GoogleAuthProvider();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("User Successfully sing in");
        navigate("/");
      })
      .catch((err) => {
        if ((err = "auth/invalid-credential")) {
          setError({
            ...error,
            invalid: "Invalid email or password! try again",
          });
        }
        console.log(err);
      });
  };
  const handleSocialSingin = (provider) => {
    signInWithSocial(provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        const userData = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
          gender: result?.user?.gender || null,
          creationTime: result?.user?.metadata?.creationTime,
          lastSignInTime: result?.user?.metadata?.lastSignInTime,
        };
        fetch("https://espresso-emporium-server-1.onrender.com/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("Successfully create new user");
              navigate("/");
            }
            console.log(data);
          });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Warning!",
          text: "Failed!!  while Creating New user! try again",
          icon: "error",
        });
      });
  };
  return (
    <div className="min-h-screen my-8 max-w-7xl mx-auto px-4 flex items-center justify-center">
      <div className="w-full md:h-[700px] flex flex-col md:flex-row border items-center rounded-2xl shadow-md">
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="w-full h-full flex-1"
        >
          <img
            src="https://i.ibb.co.com/z5pc7r2/auth-bg.png"
            alt=""
            className="h-full w-full rounded-t-2xl md:rounded-r-none  md:rounded-l-2xl"
          />
        </div>

        {/* Sign up info */}
        <div
          data-aos="fade-right"
          data-aos-duration="300"
          className="flex-1 bg-[#252525] h-full w-full rounded-b-2xl md:rounded-l-none md:rounded-r-2xl p-6"
        >
          <div>
            <img src={logo} alt="" className="mx-auto" />
            <h3 className="text-2xl text-white text-shadow font-rancho text-center">
              Espresso Emporium
            </h3>
          </div>
          <p className="text-center text-white/60 font-raleway font-bold text-2xl py-3">
            Welcome back, <br /> Please sign in to your account
          </p>
          {/* Error  */}
          {error?.invalid && (
            <p className="text-lg text-red-500 text-center font-medium">
              {error.invalid}
            </p>
          )}
          <div className="">
            <form
              onSubmit={handleSignup}
              className="w-full lg:max-w-[75%] mx-auto space-y-2"
            >
              {/* Email  */}
              <div className="*:block xl:w-[75%] mx-auto">
                <label
                  htmlFor=""
                  className="text-white font-raleway font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="px-6 py-2 font-medium rounded bg-white/75 shadow-md border-none outline-none w-full"
                />
              </div>
              {/* Password  */}
              <div className="*:block xl:w-[75%] mx-auto relative">
                <label
                  htmlFor=""
                  className="text-white font-raleway font-semibold"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="px-6 py-2 rounded bg-white/75 shadow-md border-none outline-none w-full"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-9 right-2 text-black"
                >
                  {showPassword ? (
                    <FiEye size={18} className="text-black" />
                  ) : (
                    <FaRegEyeSlash size={18} className="text-black" />
                  )}
                </div>
              </div>
              {/* Remember & Forgot  */}
              <div className="text-white flex justify-between items-center lg:w-[75%] mx-auto">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success bg-white mr-2"
                  />
                  <span className="label-text text-white font-raleway font-medium">
                    Remember me
                  </span>
                </label>
                <p className="text-blue-500 font-raleway font-medium cursor-pointer">
                  Forgot Password?
                </p>
              </div>
              <div className="xl:w-[75%] mx-auto pt-3">
                <button
                  type="submit"
                  className="text-white font-raleway  py-2 bg-[#E3B577] border border-[#E3B577] font-semibold text-shadow w-full rounded hover:bg-transparent focus:bg-transparent duration-500"
                >
                  Signup
                </button>
              </div>
            </form>
            {/* Anoter option  */}
            <div className="divider divider-neutral text-white font-raleway w-full lg:w-[55%] mx-auto">
              Or Log in with social
            </div>
            {/* Social Sign in  */}
            <div className="my-3 text-center space-x-3 md:space-x-6">
              <button
                onClick={() => handleSocialSingin(googleProvier)}
                className="px-6 rounded py-2 border border-[#E3B577]"
              >
                <FcGoogle size={28} />
              </button>
              <button className="px-6 rounded py-2 border border-[#E3B577]">
                <FaFacebookF size={28} className="text-blue-600" />
              </button>
              <button className="px-6 rounded py-2 border border-[#E3B577]">
                <FaTwitter size={28} className="text-blue-400" />
              </button>
            </div>
            <div>
              <p className="text-lg font-raleway font-medium text-white text-center my-2">
                Don't have any account?{" "}
                <Link to={"/auth/sign-up"} className="text-blue-500">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
