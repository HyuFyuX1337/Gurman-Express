import { useEffect, useRef, useState } from "react";

const tabs = [
  {
    id: 1,
    title: "Холодные закуски",
  },
  {
    id: 2,
    title: "Горячие закуски",
  },
  {
    id: 3,
    title: "Мясные блюда",
  },
  {
    id: 4,
    title: "Супы",
  },
  {
    id: 5,
    title: "Рыбные блюда",
  },
  {
    id: 6,
    title: "Гриль меню",
  },
  {
    id: 7,
    title: "Фирменные блюда",
  },
  {
    id: 8,
    title: "Напитки",
  },
];

const Tabs = ({ setActiveCategory, activeCategory }) => {
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});
  const containerRef = useRef(null);

  useEffect(() => {
    const currentRef = tabRefs.current[activeCategory];
    if (currentRef) {
      setUnderlineStyle({
        left: currentRef.offsetLeft,
        width: currentRef.offsetWidth,
      });

      if (containerRef.current) {
        currentRef.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    }
  }, [activeCategory]);

  return (
    <div
      ref={containerRef}
      className="relative border-b border-white/10 gap-[20px] flex justify-between overflow-x-auto scroll-smooth no-scrollbar text-[14px] font-medium text-[#CFCFCF] py-[25px] lg:text-[18px] md:text-[16px]"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          ref={(el) => (tabRefs.current[tab.id] = el)}
          onClick={() => setActiveCategory(tab.id)}
          className={`transition-all duration-300 whitespace-nowrap ${
            activeCategory === tab.id ? "text-white" : "text-[#CFCFCF]"
          }`}
        >
          {tab.title}
        </button>
      ))}
      <span
        className="absolute bottom-0 h-[3px] bg-[#5B9A7F] rounded-full transition-all duration-300"
        style={{
          left: underlineStyle.left,
          width: underlineStyle.width,
        }}
      />
    </div>
  );
};

export default Tabs;
