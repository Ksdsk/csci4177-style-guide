import Image from "next/image";
// https://tailwindcss.com/
// https://react-icons.github.io/react-icons/
import { FaUpload } from "react-icons/fa6";

export default function Home() {

  const lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id enim accumsan, placerat nibh euismod, rhoncus orci. Aliquam posuere, sem nec facilisis ultricies, purus dolor sodales tellus, et tristique nulla quam ut quam. Quisque magna lacus, ornare sed tortor sit amet, euismod pulvinar ante. Etiam vehicula ac ex et pulvinar. Cras tristique quis augue id molestie. Integer id condimentum elit. Maecenas tincidunt sem id diam lacinia mollis. Sed quis aliquet mauris, sed tempor enim. Curabitur hendrerit lacus eu blandit pretium. Nullam mi tortor, sagittis vitae imperdiet at, imperdiet sed nibh. Maecenas semper ultricies ipsum, et commodo nisl ultricies ac. Fusce interdum purus orci, eu auctor tellus lacinia sed. Duis auctor ipsum nec urna pellentesque, consectetur gravida erat aliquam. Integer imperdiet egestas erat pellentesque vulputate. Phasellus in porttitor justo, a efficitur mauris. Cras iaculis rhoncus magna, scelerisque iaculis felis efficitur eu. Cras pharetra mi lorem, vitae dapibus orci laoreet at."

  return (
    <div className="border border-black flex flex-col gap-6">

      <div className="w-full bg-amber-50 shadow-md flex justify-between content-center text-black">
        <div className="flex gap-6 p-3">
          <Image src={"/bread.png"} alt="logo" width={50} height={0}/>
        <button className="">Logo</button>
        <form>
          <input type="text"/>
        </form>

        <FaUpload />
        </div>
        

        <div className="flex gap-6">
          <button className="">Job Listing</button>
          <button className="">Saved Interview</button>
          <button className="">Settings</button>
          <button className="">Profile</button>
        </div>
      </div>


      
      <div className="container p-12 flex flex-col gap-6 border-b-2 border-black">
        {/* Texts */}
        <div>
          <h1 className="text-5xl font-bold">Heading 1</h1>
          <h2 className="text-3xl font-bold">Heading 2</h2>
          <h3 className="text-xl font-semibold">Heading 3</h3>
          <p className="">{lipsum}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-6 w-36">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 ease-linear transition">Accept</button>
          <button className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 ease-linear transition">Reject</button>
          <button className="bg-yellow-600 text-white p-3 rounded-xl hover:bg-yellow-700 ease-linear transition">Retry / Secondary</button>
        </div>
      </div>

      


      <div className="container p-12 flex flex-col gap-6 bg-stone-900 text-stone-300">
        {/* Texts */}
        <div>
          <h1 className="text-5xl font-bold">Heading 1</h1>
          <h2 className="text-3xl font-bold">Heading 2</h2>
          <h3 className="text-xl font-semibold">Heading 3</h3>
          <p className="">{lipsum}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-6 w-36">
          <button className="bg-blue-600/60 text-white p-3 rounded-xl hover:bg-blue-700 ease-linear transition">Accept</button>
          <button className="bg-red-600/60 text-white p-3 rounded-xl hover:bg-red-700 ease-linear transition">Reject</button>
          <button className="bg-yellow-600/60 text-white p-3 rounded-xl hover:bg-yellow-700 ease-linear transition">Retry / Secondary</button>
        </div>
      </div>

    </div>
  );
}
