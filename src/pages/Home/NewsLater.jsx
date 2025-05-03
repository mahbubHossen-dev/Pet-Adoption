import { useRef } from "react";
import Swal from "sweetalert2";

function NewsLater() {
    const newsRef = useRef()
    const handleNewslater = () => {
        if(newsRef.current.value == '')
            return Swal.fire({
                title: "Write Something First!",
                icon: "warning"
              });

        Swal.fire({
            title: "Good job!",
            text: "Send Success!",
            icon: "success"
          });
    }

    return (
        <div className="border-2 border-white  bg-opacity-25 rounded-2xl mx-auto w-3/4 p-6  bg-orange-500 my-24 ">
            <div  className="rounded-2xl  text-center py-16 space-y-4 bg-orange-500">
                    <h1 className="text-2xl font-medium">Subscribe to our Newsletter</h1>
                    <p>Get the latest updates and news right in your inbox!</p>
                    <div className="space-x-3">
                        <input ref={newsRef} className="w-[350px] rounded-xl bg-transparent outline-none border border-[#FCB98B] p-2 placeholder:text-white" type="text" placeholder="Enter Your Email"/>
                        <button onClick={handleNewslater} className="rounded-xl px-4 py-2 border border-[#FCB98B]" >Submit</button>
                    </div>
            </div>
        </div>
    );
}

export default NewsLater;