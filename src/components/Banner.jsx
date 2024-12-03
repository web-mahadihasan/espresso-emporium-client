
const Banner = () => {
  return (
    <div className="min-h-[500px] -z-0 lg:min-h-[750px] flex justify-center items-center bg-banner-1 bg-cover bg-center bg-no-repeat bg-opacity-60">
      <div className="lg:grid grid-cols-2 max-w-7xl mx-auto px-4">
        <div className="hidden lg:flex"></div>
        <div data-aos="fade-left" className="font-rancho text-white">
            <h1 className="text-4xl md:text-5xl lg:text-[55px]">Would you like a Cup of Delicious Coffee?</h1>
            <p className="font-raleway mt-4">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
            moments and make them memorable.
            </p>
            <button className="mt-6 px-6 py-2 bg-[#E3B577] text-black/85 rounded-sm hover:bg-transparent border-2 border-[#E3B577] hover:border-white hover:text-white duration-300">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
