import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import CoffeeContainer from "../components/CoffeeContainer";
import Features from "../components/Features";

const Home = () => {
    const {instagramPhoto} = useLoaderData()
    return (
        <div>
            <Banner/>

            {/* Features section  */}
            <div>
                <Features/>
            </div>

            {/* Coffee section */}
            <div className="my-28">
                <CoffeeContainer/>
            </div>

            {/* Socail  */}
            <div className="my-28 max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center">
                    <div data-aos="flip-right">
                        <p className="text-lg text-black/65">Follow Us Now</p>
                        <h3 className="font-rancho text-3xl lg:text-5xl text-primary text-shadow tracking-wide">Follow on Instagram</h3>
                    </div>
                    {/* Instagram photos  */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                        {
                            instagramPhoto.map(photo => <div data-aos="flip-up" key={photo.id}>
                                <img src={photo.url} alt="" className="h-[300px] object-cover rounded-lg" />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;