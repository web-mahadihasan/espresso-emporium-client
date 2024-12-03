import { IoEye, IoTrashOutline } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router";
import "./coffee.css"

const Coffee = ({coffee = {}, onRemove, onView}) => {
    const {_id, name, chef, supplier, price, photoURL} = coffee || {}

   
    return (
        <>
        <div data-aos="zoom-in-up" className="rounded-lg card-side bg-[#F5F4F1] shadow-md coffee-card">
            <figure className="coffee-card-img">
                <img className="max-h-[220px] md:max-h-[240px] object-contain"
                src={photoURL}
                alt="Movie"/>
            </figure>
            <div className="card-body coffee-card-text">
                <h4 className="card-title font-raleway">Name: <span className="text-lg font-normal">{name}</span></h4>
                <h4 className="card-title font-raleway">Chef: <span className="text-lg font-normal">{chef}</span></h4>
                <h4 className="card-title font-raleway">Price: <span className="text-lg font-normal">{price}</span></h4>
                <h4 className="card-title font-raleway">Supplier: <span className="text-lg font-normal">{supplier}</span></h4>
            </div>
            <div className="coffee-card-action text-center space-y-3 h-full">
                <button onClick={() => onView(_id)} className="p-2 bg-[#D2B48C] rounded w-fit text-white"><IoEye size={20}/></button>
                <Link to={`/update-coffee/${_id}`}><button className="p-2 bg-[#3C393B] rounded w-fit text-white"><MdModeEditOutline size={20}/></button></Link>
                <button onClick={() => onRemove(_id)} className="p-2 bg-[#EA4744] rounded w-fit text-white"><IoTrashOutline size={20}/></button>
            </div>
        </div>

        
        </>
    );
};

export default Coffee;