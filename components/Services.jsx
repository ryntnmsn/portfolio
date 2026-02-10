export default function Services() {
  const services = [
    {
      name: "Web design",
      icon: "/portfolio/assets/web.png",
    },
    {
      name: "UI/ UX design",
      icon: "/portfolio/assets/uiux.png",
    },
    {
      name: "Graphics design",
      icon: "/portfolio/assets/graphics.png",
    },
    {
      name: "Video Editing",
      icon: "/portfolio/assets/videoediting.png",
    },
  ];
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>

      <div className="grid grid-cols-auto gap-6 my-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-slate-100 hover:-translate-y-1 duration-500 dark:hover:bg-slate-800 dark:hover:shadow-white"
          >
            <img src={service.icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
