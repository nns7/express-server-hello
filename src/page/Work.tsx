import { FC } from "react";

const items = [
  {
    id: 1,
    title: "草原",
    href: "#",
    description: "草原をアピールするランディングサイトを構築しました。",
    imageUrl:
      "https://1.bp.blogspot.com/-aC2jXDBJcuY/VpjBp16ShbI/AAAAAAAA25w/pL6seXQvsM0/s1600/bg_natural_sougen.jpg",
  },
  {
    id: 2,
    title: "森",
    href: "#",
    description: "森を全世界に発信するブログサイトを構築しました。",
    imageUrl:
      "https://2.bp.blogspot.com/-RkvdK3-Ucwo/WwJZee1zZ7I/AAAAAAABMFE/2ArQsb5uZr8qY-9IO3igVn5Gock0h420ACLcBGAs/s800/bg_rain_natural_mori.jpg",
  },
  {
    id: 3,
    title: "犬と女性",
    href: "#",
    description: "犬と女性です。",
    imageUrl:
      "https://3.bp.blogspot.com/-IbIA1qLx0E4/WlGoVA3wHlI/AAAAAAABJjQ/S1Fvj3hSTW0CWQ8vR7E8UmCoUxfMuZr_gCLcBGAs/s800/pet_dog_sanpo_yugata_woman.png",
  },
];

const Work: FC = () => (
  <div className="container bg-red-200 mx-auto h-screen">
    <h1 id="work" className="text-4xl font-semibold flex justify-center pb-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
      </svg>
      Work
    </h1>
    <div className="max-w-md mx-auto grid gap-6 lg:grid-cols-3 lg:max-w-7xl">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="flex flex-col rounded-lg bg-white overflow-hidden hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          <div className="flex flex-col-reverse">
            <div className="flex-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover sm:h-56"
                src={item.imageUrl}
                alt=""
                decoding="async"
                loading="lazy"
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Work;
