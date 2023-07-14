import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section class="bg-white">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class=" place-self-center lg:col-span-7 mx-auto">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl">
              GravitasHouse
            </h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl ">
              We invite you to spend two weeks with us connecting, learning, and building
            </p>
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
