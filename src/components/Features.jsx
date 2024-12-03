import featuresOne from '../assets/images/icons/1.png';
import featuresTwo from '../assets/images/icons/2.png';
import featuresThree from '../assets/images/icons/3.png';
import featuresFour from '../assets/images/icons/4.png';


const Features = () => {

    const features = [
        {
            img: featuresOne,
            title: "Awesome Aroma",
            description: "You will definitely be a fan of the design & aroma of your coffee"
        },
        {
            img: featuresTwo,
            title: "High Quality",
            description: "We served the coffee to you maintaining the best quality"
        },
        {
            img: featuresThree,
            title: "Pure Grades",
            description: "The coffee is made of the green coffee beans which you will love"
        },
        {
            img: featuresFour,
            title: "Proper Roasting",
            description: "Your coffee is brewed by first roasting the green coffee beans"
        },
    ]
    return (
        <div className="w-full bg-[#ECEAE3]">
            <div className="py-12 max-w-7xl mx-auto px-4 gap-6 grid grid-cols-2 md:grid-cols-4">
                {
                    features.map((feature, idx) => 
                        <div data-aos="fade-up" key={idx} className='space-y-2'>
                            <img src={feature.img} alt="" className='w-14 cursor-pointer'/>
                            <h4 className='text-2xl font-rancho'>{feature.title}</h4>
                            <p className='font-raleway text-black/75'>{feature.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Features;