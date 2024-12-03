import { BsCupHot } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";
import Coffee from "./Coffee";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const CoffeeContainer = () => {
  const { coffeeData } = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeData);
  const [viewCoffee, setViewCoffee] = useState({});
  const { name, chef, supplier, category, details, price, photoURL } =
    viewCoffee || {};
  const modalRef = useRef();

  const handleView = (id) => {
    const viewCoffees = [...coffees].find((prevC) => prevC._id === id);
    setViewCoffee(viewCoffees);
    modalRef.current.showModal();
  };
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://espresso-emporium-server-1.onrender.com/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((prevC) => prevC._id !== id);
              setCoffees(remaining);
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Warning!",
              text: `Failed to deleted while deleting Coffee!`,
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div>
      <div className="max-w-[1920px] mx-auto bg-coffe-bg bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 ">
          <div
            data-aos="flip-right"
            className="flex flex-col items-center justify-center mb-12 space-y-2"
          >
            <p className="text-lg text-black/65">--- Sip & Savor ---</p>
            <h3 className="font-rancho text-3xl lg:text-5xl text-primary text-shadow tracking-wide">
              Our Popular Products
            </h3>
            <Link
              to={"/add-coffee"}
              className="flex items-center gap-2 px-6 py-2 border border-black/75 shadow-lg rounded-md text-shadow bg-[#E3B577] hover:bg-white/60 duration-300"
            >
              <span className="font-rancho text-xl text-white">Add Coffee</span>
              <span>
                <BsCupHot size={24} className="text-black" />
              </span>
            </Link>
          </div>

          {/* Coffee card  */}
          <div className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0">
            {coffees.map((coffee) => (
              <Coffee
                key={coffee._id}
                coffee={coffee}
                onRemove={handleRemove}
                onView={handleView}
              />
            ))}
          </div>

          {/* Modal */}
          <dialog
            ref={modalRef}
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box space-y-2">
              <img src={photoURL} alt="" className="mx-auto h-[250px]" />
              <h4 className="card-title font-raleway">
                Name: <span className="text-lg font-normal">{name}</span>
              </h4>
              <h4 className="card-title font-raleway">
                Chef: <span className="text-lg font-normal">{chef}</span>
              </h4>
              <h4 className="card-title font-raleway">
                Price: <span className="text-lg font-normal">{price}</span>
              </h4>
              <h4 className="card-title font-raleway">
                Supplier:{" "}
                <span className="text-lg font-normal">{supplier}</span>
              </h4>
              <h4 className="card-title font-raleway">
                Category:{" "}
                <span className="text-lg font-normal">{category}</span>
              </h4>
              <h4 className="card-title font-raleway">Coffee Description:</h4>
              <span className="text-lg font-normal">{details}</span>

              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={() => document.getElementById("my_modal_5").close()}
                  className="btn px-8 bg-primary text-white font-raleway"
                >
                  Close
                </button>
                <button className="bg-[#E3B577] py-2 text-lg px-8 rounded border border-black/75 text-white text-shadow font-rancho">
                  Buy Now
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default CoffeeContainer;
