import { Search } from "lucide-react";
import SideBarComponent from "../components/SideBarComponent";
import SearchCompoent from "../components/SearchCompoent";
import Link from "next/link";
import CardComponent from "../components/CardComponent";
export default function Home() {
  return (
    <div className="w-full p-4 border-3">
      <div className="flex ">
        <SideBarComponent />
        <div className="w-full">
          <SearchCompoent />
          <div className="border-2 rounded-2xl mt-20 h-screen p-4">
            <button className="bg-gray-50 p-3 rounded-2xl text-2xl">
              Homepage
            </button>
            <hr className="mt-2" />

            <div className="border-2 w-full h-[90%] flex justify-center items-center gap-4 mt-4">
              <Link href={"/book"}>
                <CardComponent
                  img={
                    "https://i.pinimg.com/736x/a3/25/a1/a325a16a9897d88d89ea3b0ab88393cd.jpg"
                  }
                  title={"Book"}
                  description={"Book"}
                />
              </Link>

              <Link href={"/cartoon"}>
                <div className="w-[250px] relative  rounded-md  h-[500px] border hover:s  hadow-lg transition duration-200 ease-in-out">
                  <button className="absolute bg-gray-300 rounded-lg left-2 top-2 p-1 ">
                    Cartoon
                  </button>
                  <img
                    className="w-full h-full object-cover"
                    src={
                      "https://i.pinimg.com/736x/7b/58/3b/7b583bb3992f25f2cd578cb8dd979513.jpg"
                    }
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
