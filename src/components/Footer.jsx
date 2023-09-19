const Footer = () => {
    return (
        <div className="bg-slate-700 flex p-20 text-white">
            <div className="w-1/3 ">
                <h2 className="text-2xl font-bold pb-10">LOGO HERE</h2>
                <h3 className="font-bold text-md mb-5">Opening Hours:</h3>

                <p className="font-bold">MON TO FRI</p>
                <p>7:00 am to 10:00 pm</p>

                <p className="mt-5 font-bold text-md">SAT TO SUN</p>
                <p>10:00 am to 9:00 pm</p>
            </div>

            <div className="w-1/3">
                <h2 className="text-2xl font-bold pb-10">FOLLOW US</h2>
            </div>

            <div className="w-1/3">
                <h2 className="text-2xl font-bold pb-10">OUR LOCATION</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15473.203447020056!2d121.22832519938659!3d14.177148480166721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd61e97c5a1dc9%3A0xeca1526b6921fc1f!2sDanielito&#39;s%20Home%20Kitchen!5e0!3m2!1sen!2sph!4v1694852180224!5m2!1sen!2sph"
                    width="200"
                    height="150"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    
                ></iframe>
            </div>

            
        </div>
    )
}

export default Footer;