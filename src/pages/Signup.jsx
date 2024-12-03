import { Link, useNavigate } from "react-router";
import logo from "../assets/images/logo.png";
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createNewUser, updateUserProfile, setUser } = useAuth();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState({});

  //    Handle Image upload
  const handleImageUpload = (e) => {
    const imageLink = e.target.files[0];
    const imageData = new FormData();
    imageData.append("image", imageLink);
    fetch(
      "https://api.imgbb.com/1/upload?key=176775b308da684d8b761f7bdfe641cd",
      {
        method: "POST",
        body: imageData,
      }
    )
      .then((res) => res.json())
      .then((data) => setImageUrl(data.data?.display_url));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const gender = data.get("gender");
    const updataData = { displayName: name, photoURL: imageUrl };
    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        const userData = {
          name,
          email,
          gender,
          imageUrl,
          creationTime: result?.user?.metadata?.creationTime,
          lastSignInTime: result?.user?.metadata?.lastSignInTime,
        };
        updateUserProfile(updataData)
          .then(() => {
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
            Swal.fire({
              title: "Warning!",
              text: "Failed!!  while Creating New user! try again",
              icon: "error",
            });
          });
        console.log(result.user);
      })
      .catch((err) => {
        if ((err = "auth/email-already-in-use")) {
          setError({
            ...error,
            alreadyUsed: "Opps! Email already used, Please try Log in",
          });
        }
      });
  };
  return (
    <div className="min-h-screen my-8 max-w-7xl mx-auto px-4 flex items-center justify-center">
      <div className="w-full md:h-[700px] flex flex-col md:flex-row border items-center rounded-2xl shadow-md">
        {/* Sign up info */}
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="flex-1 bg-[#252525] h-full w-full rounded-b-2xl md:rounded-r-none md:rounded-l-2xl p-6 order-2 md:order-1"
        >
          <div>
            <img src={logo} alt="" className="mx-auto" />
            <h3 className="text-2xl text-white text-shadow font-rancho text-center">
              Espresso Emporium
            </h3>
          </div>
          <p className="text-center text-white/60 font-raleway font-bold text-2xl py-3 py-2">
            New user, <br /> Please create your account
          </p>
          {/* Error  */}
          {error?.alreadyUsed && (
            <p className="text-lg text-red-500 text-center font-medium">
              {error.alreadyUsed}
            </p>
          )}
          <div className="">
            <form
              onSubmit={handleSignup}
              className="w-full lg:max-w-[75%] mx-auto space-y-2"
            >
              <div className="*:block xl:w-[75%] mx-auto">
                <label
                  htmlFor="name"
                  className="text-white font-raleway font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="px-6 py-2 font-medium rounded bg-white/75 shadow-md border-none outline-none w-full"
                  required
                />
              </div>
              {/* Email  */}
              <div className="*:block xl:w-[75%] mx-auto">
                <label
                  htmlFor="email"
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
                  required
                />
              </div>
              {/* Password  */}
              <div className="*:block xl:w-[75%] mx-auto relative">
                <label
                  htmlFor="password"
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
                  required
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
              {/* Gender  */}
              <div className="xl:w-[75%] mx-auto">
                <p className="text-white font-raleway font-semibold">Gender</p>
                <div className="text-white font-raleway flex items-center gap-6">
                  <span>
                    <input
                      type="radio"
                      value="Male"
                      name="gender"
                      id="male"
                      required
                    />
                    <label htmlFor="male" className="ml-2">
                      Male
                    </label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      value="Female"
                      name="gender"
                      id="female"
                      required
                    />
                    <label htmlFor="female" className="ml-2">
                      Female
                    </label>
                  </span>
                </div>
              </div>
              {/* Photo  */}
              <div className="*:block font-raleway xl:w-[75%] mx-auto">
                <input
                  onChange={handleImageUpload}
                  type="file"
                  id="photo"
                  className="file-input shadow-md border-none outline-none w-full bg-white/75"
                />
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
            <div>
              <p className="text-lg font-raleway font-medium text-white text-center my-2">
                Already have an account?{" "}
                <Link to={"/auth/sign-in"} className="text-blue-400">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* Login image  */}
        <div
          data-aos="fade-right"
          data-aos-duration="300"
          className="w-full h-full flex-1 order-1 md:order-2"
        >
          <img
            src="https://i.ibb.co.com/z5pc7r2/auth-bg.png"
            alt=""
            className="h-full w-full rounded-t-2xl md:rounded-l-none  md:rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
