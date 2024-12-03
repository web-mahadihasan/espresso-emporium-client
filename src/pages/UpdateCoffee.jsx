import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const navigate = useNavigate();
  const updateCoffee = useLoaderData();
  const { _id, name, chef, supplier, category, details, photoURL } =
    updateCoffee || {};
  let { price } = updateCoffee || {};
  price = price.replace(/[^0-9.]/g, "");

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get("name");
    const chef = data.get("chef");
    const supplier = data.get("supplier");
    let price = data.get("price");
    price = `$ ${price}`;
    const category = data.get("category");
    const details = data.get("details");
    const photoURL = data.get("photoURL");
    const updateData = {
      name,
      chef,
      supplier,
      price,
      category,
      details,
      photoURL,
    };
    Swal.fire({
      title: "Are you sure update info?",
      text: "Your information will be update in database!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://espresso-emporium-server-1.onrender.com/update-coffee/${_id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateData),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Info Updated!",
                text: "Your Information has been Successfully Updated.",
                icon: "success",
              });
              navigate("/");
              form.reset();
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Update Unsuccessfull!",
              text: `Fetching error while updating New data! try again`,
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div data-aos="flip-left" className="max-w-7xl mx-auto px-4 py-12">
      <Link to={"/"} className="flex items-center gap-6 mb-8">
        <span>
          <GoArrowLeft />
        </span>
        <span className="font-rancho text-xl">Back to home</span>
      </Link>

      {/* Add coffee form  */}
      <div className="bg-[#F4F3F0] py-16 px-6 lg:px-20">
        <h3 className="font-rancho text-3xl lg:text-5xl text-primary text-shadow tracking-wide text-center">
          Update Coffee Info for - {name}
        </h3>
        <p className="text-lg text-black/65 text-center my-2 lg:max-w-[80%] mx-auto font-raleway">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        {/* Form  */}
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleUpdateCoffee}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 font-raleway"
          >
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                defaultValue={name}
                name="name"
                placeholder="Coffee Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>

            {/* Chef Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 font-raleway">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Coffee Chef"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C] "
              />
            </div>

            {/* Supplier Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 font-raleway">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Coffee Supplier"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>

            {/* Category Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 font-raleway">
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Coffee Category"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>

            {/* Details Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 font-raleway">
                Details
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Coffee Details"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>

            {/* Taste Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 font-raleway">
                Price
              </label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Price $"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>

            {/* Photo Field */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2 font-raleway">
                Photo
              </label>
              <input
                type="text"
                name="photoURL"
                defaultValue={photoURL}
                placeholder="Photo URL"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 ">
              <button
                type="submit"
                className="w-full py-2 bg-[#D2B48C] text-black/75 font-rancho rounded-lg border border-black/75 hover:bg-transparent text-xl text-shadow transition duration-200"
              >
                Update Coffee
              </button>
            </div>
          </form>
        </div>
        {/* Form End  */}
      </div>
    </div>
  );
};

export default UpdateCoffee;
