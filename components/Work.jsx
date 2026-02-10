export default function Work() {
  const work = [
    {
      name: "Web Development",
      icon: "/portfolio/assets/web_bh.jpg",
      description: "Bagong Henerasyon Website",
      link: "https://bagonghenerasyon.ph/",
    },
    {
      name: "UI/UX",
      icon: "/portfolio/assets/ui_bh.jpg",
      description: "Bagong Henerasyon Web Design",
      link: "",
    },
    {
      name: "Web Development",
      icon: "/portfolio/assets/web_shopadc.jpg",
      description: "Shop Atelier Debbi Co (Ecommerce)",
      link: "https://shop.atelierdebbieco.com/",
    },
    {
      name: "Web Development",
      icon: "/portfolio/assets/web_pret.jpg",
      description: "Pret-a-porter Debbi Co (Ecommerce)",
      link: "https://pretaporterdebbieco.com/",
    },
    {
      name: "Web Development",
      icon: "/portfolio/assets/web_adc.jpg",
      description: "Atelier Debbie Co (Lookbook)",
      link: "https://atelierdebbieco.com/",
    },
    {
      name: "Web Development",
      icon: "/portfolio/assets/web_dhq.jpg",
      description: "https://designhq.net/",
      link: "",
    },
    {
      name: "Web Development",
      icon: "/portfolio/assets/web_cbf.jpg",
      description: "Camp Big Falcon",
      link: "https://campbigfalcon.com/",
    },
    {
      name: "Web Development",
      icon: "/portfolio/assets/web_progrowth.jpg",
      description: "Progrowth Accounting Limited",
      link: "https://progrowth-accounting.co.uk/",
    },
    {
      name: "Web Development",
      icon: "/portfolio/assets/web_k8.jpg",
      description: "K8 Airdrop",
      link: "https://k8airdrop.com/",
    },
    {
      name: "Wireframe",
      icon: "/portfolio/assets/ui_arkfnb.jpg",
      description: "ARK FnB Wire Framing",
      link: "",
    },
    {
      name: "UI/UX",
      icon: "/portfolio/assets/ui_arkv1.jpg",
      description: "ARK FnB V1",
      link: "",
    },
    {
      name: "UI/UX",
      icon: "/portfolio/assets/ui_arkfnbv2.jpg",
      description: "ARK FnB V2",
      link: "",
    },
    {
      name: "UI/UX",
      icon: "/portfolio/assets/ui_nosh.jpg",
      description: "NOSH",
      link: "",
    },
    {
      name: "UI/UX",
      icon: "/portfolio/assets/ui_apollo.jpg",
      description: "Apollo Creatives",
      link: "",
    },
    {
      name: "UI/UX",
      icon: "/portfolio/assets/ui_k8news.jpg",
      description: "K8 News",
      link: "",
    },

    {
      name: "Graphics",
      icon: "/portfolio/assets/graphics.jpg",
      description: "K8 Play-to-earn",
      link: "",
    },
    {
      name: "Graphics",
      icon: "/portfolio/assets/graphics_2.jpg",
      description: "K8 Play-to-earn",
      link: "",
    },
    {
      name: "Graphics",
      icon: "/portfolio/assets/graphics_3.jpg",
      description: "K8 Play-to-earn",
      link: "",
    },
    {
      name: "Graphics",
      icon: "/portfolio/assets/graphics_4.jpg",
      description: "K8 Play-to-earn",
      link: "",
    },
    {
      name: "Graphics",
      icon: "/portfolio/assets/graphics_5.jpg",
      description: "K8",
      link: "",
    },
    {
      name: "Graphics",
      icon: "/portfolio/assets/graphics_6.jpg",
      description: "K8",
      link: "",
    },
    {
      name: "Graphics",
      icon: "/portfolio/assets/graphics_07.jpg",
      description: "K8",
      link: "",
    },
    {
      name: "Graphics",
      icon: "/portfolio/assets/graphics_08.jpg",
      description: "K8",
      link: "",
    },
    {
      name: "Graphics",
      icon: "/portfolio/assets/graphics_09.jpg",
      description: "K8",
      link: "",
    },
  ];
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {work.map((work, index) => {
          const Card = (
            <div
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${work.icon})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{work.name}</h2>
                  <p className="text-sm text-gray-700">{work.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-purple-500 transition">
                  <img src="/portfolio/assets/send-icon.png" alt="" className="w-5" />
                </div>
              </div>
            </div>
          );

          return work.link ? (
            <a key={index} href={work.link} target="_blank" rel="nofollow">
              {Card}
            </a>
          ) : (
            <div key={index}>{Card}</div>
          );
        })}
      </div>
    </div>
  );
}
