import Link from "next/link";
import { IPost } from "./page";

const Postcard = ({ data }: { data: IPost }) => {
    return (
      <div className="relative flex flex-col items-center justify-center p-4 m-4 border rounded-lg shadow-lg">
        <h2 className="text-3xl text-cyan-400 font-medium text-center">{data.title}</h2>
        <p>{data.body}</p>
        <div className="absolute bottom-2 right-2 w-full flex justify-end">
            <Link href={`/post/${data.id}`} className="flex items-center justify-center">
                <button className="bg-black text-white px-2 py-1 rounded-xl">Details</button>
            </Link>
        </div>
      </div>
    )
  }
export default Postcard;