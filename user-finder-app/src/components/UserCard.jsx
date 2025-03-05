import { useState } from "react";

export default function UserCard () {

    const [username, setUsername] = useState("");

    

    const endPoint = `https://api.github.com/search/users?q=${username}`;

    return (
        
        <>
        <div className="flex items-center justify-evenly bg-white w-[45em] h-[20em] border rounded-md border-black">
            <div className="w-3/10"><img/></div>    
                
            <div className="flex-col justify-center items-evenly w-6/10">
                <h3>Hello!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt quis adipisci eligendi nobis architecto facilis! Tempore saepe commodi corrupti ducimus quia, deserunt tempora quisquam eveniet exercitationem est nemo vitae.</p>
            </div>
        </div>
        </>
    )
}