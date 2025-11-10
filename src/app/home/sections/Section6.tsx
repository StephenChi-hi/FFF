"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Section6() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    const indices = [0, 1, 2];
    let i = 0;

    const interval = setInterval(() => {
      setFlippedIndex(indices[i]);
      setTimeout(() => setFlippedIndex(null), 3500);
      i = (i + 1) % indices.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      id: 0,
      frontColor: "bg-yellow-400",
      backColor: "bg-green-500",
      frontText: {
        title: "Makers and Fabricators",
        body: "Perfect for anyone passionate about 3D printing, CNC machining, or digital fabrication, looking to bring creative ideas to life through hands-on making.",
      },
      backText: {
        title: "Innovative Crafters",
        body: "Hands-on creators merging creativity and craftsmanship to build the future.",
      },
    },
    {
      id: 1,
      frontColor: "bg-blue-500",
      backColor: "bg-orange-500",
      frontText: {
        title: "Innovators and Engineers",
        body: "For technical minds ready to turn prototypes into real products.",
      },
      backText: {
        title: "Tech Pioneers",
        body: "Driving innovation through engineering and impactful design.",
      },
    },
    {
      id: 2,
      frontColor: "bg-purple-600",
      backColor: "bg-pink-500",
      frontText: {
        title: "Creative Builders",
        body: "For creators mastering woodworking, metalwork, or electronics.",
      },
      backText: {
        title: "Design Visionaries",
        body: "Blending art and skill to push creative boundaries.",
      },
    },
  ];

  const gray = "bg-gray-200";

  return (
    <section className="w-full py-24 bg-white ">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        {/* Left Text Section */}
        <div className="md:w-1/3 relative">
          <div className=" absolute container left-[100px] flex flex-col w-[700px]">
            <p className="text-[16px] text-g font-medium  uppercase mb-[24px]">
              Who Should Join FEC?
            </p>
            <h2 className="text-2xl md:text-3xl  font-semibold text-b leading-snug">
              For Professionals Dedicated to Advancing Research, Technological
              Innovation, & Educational Excellence
            </h2>{" "}
          </div>
        </div>

        {/* Right Brick Flex Layout */}
        <div className="flex flex-row gap-[20px] flex-1 justify-end w-full">
          {/* Column 1 */}
          <div className="flex flex-col w-[] gap-[20px] flex-1 ">
            <div className={`h-[180px] rounded-[15px] `} />
            <div className={`h-[160px] rounded-[15px] ${gray}`} />
            <AnimatedCard
              card={cards[0]}
              isFlipped={flippedIndex === cards[0].id}
              height="h-[220px]"
            />
            <div className={`h-[160px] rounded-t-[15px] ${gray}`} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-[20px] flex-1 mt-8">
            <div className={`h-[50px] rounded-b-[15px] ${gray}`} />

            <AnimatedCard
              card={cards[1]}
              isFlipped={flippedIndex === cards[1].id}
              height="h-[240px]"
            />
            <AnimatedCard
              card={cards[2]}
              isFlipped={flippedIndex === cards[2].id}
              height="h-[200px]"
            />
            <div className={`h-[58px] rounded-t-[15px] ${gray}`} />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-[20px] flex-1- w-[32px] mt-16">
            <div className={`h-[140px] rounded-l-[15px] ${gray}`} />
            <div className={`h-[340px] rounded-l-[15px] ${gray}`} />
            <div className={`h-[300px] rounded-l-[15px] ${gray}`} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCard({
  card,
  isFlipped,
  height = "h-[200px]",
}: {
  card: any;
  isFlipped: boolean;
  height?: string;
}) {
  return (
    <motion.div
      className={`relative w-full ${height}-  h-[350px] rounded-[15px] cursor-pointer [transform-style:preserve-3d]`}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Front */}
      <div
        className={`absolute inset-0 ${card.frontColor} text-white p-[20px] rounded-[15px] flex flex-col justify-center backface-hidden`}
      >
        <div className=" relative h-full">
          <div className=" top-[0px] absolute ">
            <h3 className="font-semibold text-base mb-2 ">
              {card.frontText.title}
            </h3>
          </div>
          <div className=" bottom-[0px] absolute ">
            {" "}
            <hr />
            <p className="text-sm leading-snug opacity-90 mt-[15px]">
              {card.frontText.body}
            </p>
          </div>
        </div>
      </div>

      {/* Back */}
      <div
        className={`absolute inset-0 ${card.backColor} text-white p-[20px] rounded-[15px] flex flex-col justify-center [transform:rotateY(180deg)] backface-hidden`}
      >
        <div className=" relative h-full">
          <div className=" top-[0px] absolute ">
            <h3 className="font-semibold text-base mb-2 ">
              {card.backText.title}
            </h3>
          </div>
          <div className=" bottom-[0px] absolute ">
            {" "}
            <hr />
            <p className="text-sm leading-snug opacity-90 mt-[15px]">
              {card.backText.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
