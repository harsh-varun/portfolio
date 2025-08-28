import Tag from "@/components/Tag";

export default function Certificates() {
  return (
    <section id="certificates" className="py-8">
      <div className="container mx-auto">
        <div className="mt-28">
          <Tag>
            <h1>Certificates</h1>
          </Tag>
          <div className="px-8 md:px-16 lg:px-0 lg:pl-72 text-[#3d3d3d]">
            <div className="">
              <h1 className="text-4xl">2024</h1>
              <div className="ml-8 mt-2 px-4 border-l-2 flex flex-col">
                <span className="text-2xl font-bold">Big Data Computing</span>
                <span className="text-lg opacity-60">NPTEL IIT Kanpur</span>
              </div>
            </div>
            <div className="">
              <h1 className="text-4xl">2023</h1>
              <div className="ml-8 mt-2 px-4 border-l-2 flex flex-col">
                <span className="text-2xl font-bold">
                  Python for Data Science
                </span>
                <span className="text-lg opacity-60">NPTEL IIT Madras</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
