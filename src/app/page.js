import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <section class="bg-white">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class=" place-self-center lg:col-span-7 mt-20 mx-auto">
            <div className="text-lg text-pink-400 mb-4">
              <div className="inline-block pr-10">
                <MdLocationOn className="text-2xl inline-block mr-[1px] mb-1" />
                <div className="inline-block">pandhandle, sf</div>
              </div>
              <div className="inline-block">
                <MdDateRange className="text-2xl inline-block mb-1 mr-[2px]" />
                <div className="inline-block">~late december</div>
              </div>
            </div>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl">
              gravitashouse
            </h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl ">
              we invite you to spend two weeks with us connecting, learning, and
              building.
            </p>

            <div className="flex pt-6">
              <button className="bg-black text-white rounded-md px-4 py-2 mr-4 hover:bg-opacity-80">
                apply now (~10 mins)
              </button>
              <button className="bg-white text-black border-dashed border-2 border-black rounded-md px-4 py-2 hover:border-solid">
                not sure yet?
              </button>
            </div>
          </div>

          <div className="relative hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/sfhill.jpeg"
              alt="First Image"
              width={320}
              height={400}
              className="-rotate-[3deg] rounded-[12px] z"
            />
            <Image
              src="/gg.jpg"
              alt="Second Image"
              width={320}
              height={400}
              className="z absolute rotate-[5deg] rounded-[25px] top-20 mt-10  ml-20 left-20"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
