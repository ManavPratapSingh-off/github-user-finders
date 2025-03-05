import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";

export default function Home () {
    return (
        <>
        <SearchBar/>
        <div className="flex justify-center items-center w-[100%] h-[90vh]">
            <UserCard/>
        </div>
        </>
    )
}