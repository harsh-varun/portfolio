import Tag from "@/components/Tag";

export default function Academic() {
  return (
    <section id="academics" className="py-8">
      <div className="container mx-auto">
        <div className="mt-28">
          <Tag>
            <h1>Academics</h1>
          </Tag>
          <div className="px-8 md:px-16 lg:px-0 lg:pl-72 text-[#3d3d3d]">
            <div className="">
              <h1 className="text-4xl">2024</h1>
              <div className="ml-8 mt-2 px-4 border-l-2 flex flex-col">
                <span className="text-2xl font-bold">BA Mathematics</span>
                <span className="text-lg opacity-60">
                  Dr. BR Ambedkar University Delhi
                </span>
              </div>
            </div>
            <div className="">
              <h1 className="text-4xl">2021</h1>
              <div className="ml-8 mt-2 px-4 border-l-2 flex flex-col">
                <span className="text-2xl font-bold">Intermediate</span>
                <span className="text-lg opacity-60">
                  Central Board of Secondary Education
                </span>
              </div>
            </div>
            <div className="">
              <h1 className="text-4xl">2019</h1>
              <div className="ml-8 mt-2 px-4 border-l-2 flex flex-col">
                <span className="text-2xl font-bold">High School</span>
                <span className="text-lg opacity-60">
                  Central Board of Secondary Education
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
