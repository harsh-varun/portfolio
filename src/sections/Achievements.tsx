import Tag from "@/components/Tag";

export default function Achievements() {
  return (
    <section id="achievements" className="py-8" >
      <div className="container mx-auto">
        <div className="mt-28">
          <Tag>
            <h1>Achievements</h1>
          </Tag>
          <div className="px-8 md:px-16 lg:px-0 lg:pl-72 text-[#3d3d3d]">
            <div className="">
              <h1 className="text-4xl">2024</h1>
              <div className="ml-8 mt-2 px-4 border-l-2 flex flex-col">
                <span className="text-2xl font-bold">
                  <a href="https://www.cloudskillsboost.google/public_profiles/45c827a6-d9fd-4787-9d20-2ba18c0637bd" target="_blank">
                    Ultimate Milestone
                  </a>
                </span>
                <span className="text-lg opacity-60">
                  Google Cloud Arcade Facilitator Program
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
