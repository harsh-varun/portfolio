import Tag from "@/components/Tag";

export default function Contact() {
  return (
    <section id="contact" className="py-8">
      <div className="container mx-auto">
        <div className="mt-28 mb-78 md:mb-96 lg:mb-28">
          <Tag>
            <h1>Contact</h1>
          </Tag>
          <div className="px-8 md:px-16 lg:px-0 lg:pl-72 flex flex-col gap-8">
            <div className="text-[#3d3d3d]">
              <h1 className="text-lg opacity-60">Email</h1>
              <div className="flex gap-4 items-center">
                <p className="text-2xl font-bold">harsh.varun01@gmail.com</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("harsh.varun01@gmail.com");
                  }}
                >
                  <div className="p-2 flex items-center rounded-md hover:bg-[#3d3d3d]/10 cursor-pointer transition-all duration-150">
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width="16"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="text-[#3d3d3d]">
              <h1 className="text-lg opacity-60">WhatsApp</h1>
              <div className="flex gap-4 items-center">
                <p className="text-2xl font-bold">(+91) 9315793725</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("9315793725");
                  }}
                >
                  <div className="p-2 flex items-center rounded-md hover:bg-[#3d3d3d]/10 cursor-pointer transition-all duration-150">
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width="16"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="text-[#3d3d3d]">
              <h1 className="text-lg opacity-60">LinkedIn</h1>
              <div className="flex gap-4 items-center">
                <div
                  
                  className="text-2xl font-bold"
                >
                  harshvarun01
                </div>
                <a
                href="https://linkedin.com/in/harshvarun01"
                target="_blank"
                >
                  <div className="p-2 flex items-center rounded-md hover:bg-[#3d3d3d]/10 cursor-pointer transition-all duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="text-[#3d3d3d]">
              <h1 className="text-lg opacity-60">Github</h1>
              <div className="flex gap-4 items-center">
                <div
                  className="text-2xl font-bold"
                >
                  harsh-varun
                </div>
                <a
                  href="https://github.com/harsh-varun"
                  target="_blank"
                >
                  <div className="p-2 flex items-center rounded-md hover:bg-[#3d3d3d]/10 cursor-pointer transition-all duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
