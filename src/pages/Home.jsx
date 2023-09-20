import Header from "../components/home/Header";
import Button from "../components/Button";
import img1 from "../assets/header.jpg";
import Bg from "../assets/bg.jpg";

const highlights = [
    { category: "CHEF RECOMMENDED", title: "STEAK SANDWICH ON CIABATTA BREAD", description: "100% Irish steak fried with mushrooms and onions on a bed of garlic ciabatta bread and side salad also with hand cut chips." }, 
    { category: "NEW", title: "FRESH TRADITIONAL COD & CHIPS", description: "Battered to order fillet of cod served with homemade tartar sauce, served with mushy peas or side. Served with mashed potatoes and a selection of vegetables" },
    { category: "NEW", title: "DEEP FRIED BREAD CRUMBED BRIE", description: "Brie coated in breadcrumbs and fried until golden, served with a warm cranberry citrus compote. Served with mashed potatoes and a selection of vegetables" }
]

const Home = () => {
    return (
        <div>
            <Header />
            <div className="bg-slate-800 flex justify-center">
                <div className="p-20 flex max-w-screen-2xl">
                    <div className="text-center w-1/2 bg-white p-16">
                        <h2 className="text-3xl">Our Menu</h2>
                        <h3 className="my-5 font-bold">FOOD VARIETIES</h3>
                        <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis voluptatibus sequi, reiciendis, voluptate architecto dolorum magni sed eveniet eos quidem quae autem accusamus deserunt, quisquam possimus quos atque! Unde, omnis?</p>
                        <Button text="View Menu"/>
                    </div>
                    <img src={img1} className="w-1/2" />
                </div>
            </div>

            <div 
                className="bg-slate-500 flex justify-center items-center"
                style={{backgroundImage: `url(${Bg})`}}
            >
                <div className="bg-white max-w-screen-md p-20 flex flex-col justify-center items-center my-40">
                    <h2 className="text-3xl">Highlights</h2>
                    <p className="py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, minima!</p>

                    {highlights.map(highlight => {
                        return (
                            <div className="flex items-center my-1.5">
                                <img src={img1} className="w-1/5 mr-10 border rounded-lg"/>
                                <div>
                                    <p className="font-bold text-xs bg-yellow-700 inline-block text-white p-1">{highlight.category}</p>
                                    <h3 className="font-bold my-1">{highlight.title}</h3>
                                    <p>{highlight.description}</p>
                                    
                                </div>
                            </div>
                        )
                })  }
                    <Button text="View Full Menu"/>
                </div>
            </div>

            <div className="flex">
                <img src={img1} className="w-1/2 object-none" />
                <div className="w-1/2 p-32 text-center bg-black">
                    <h2 className="text-3xl text-white">Experience</h2>
                    <h3 className="py-3 font-bold text-yellow-400">Memorable</h3>
                    <p className="pb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, numquam est aliquid laudantium aspernatur beatae odio sunt reprehenderit dicta, itaque inventore voluptatum facilis dolorem maiores blanditiis quod et minima? Iure.</p>
                    <Button text="Online Reservation" color="white"/>
                </div>
            </div>

            <div className="text-center py-20">
                <h2 className="text-5xl">Book your Table</h2>
                <h3 className="py-3 font-bold text-yellow-600">Reservation</h3>
                <p className="w-96 text-center inline-block">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia atque amet ea quaerat nobis. Fugit, velit. Culpa optio fugit omnis.</p>

                <div className="flex justify-center gap-20 my-10">
                    <input type="date" name="" id="" className="border border-black" />

                    <select className="border border-black">
                        <option value="">7:00 am</option>
                        <option value="">8:00 am</option>
                        <option value="">9:00 am</option>
                        <option value="">10:00 am</option>
                    </select>

                    <select className="border border-black">
                        <option value="">1 person</option>
                        <option value="">2 people</option>
                        <option value="">3 people</option>
                        <option value="">4 people</option>
                        <option value="">5 people</option>
                    </select>
                    
                </div>
                <Button text="Find a Table"/>
            </div>
        </div>
    )
}

export default Home;