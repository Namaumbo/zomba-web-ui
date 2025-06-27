import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useAnimation } from "framer-motion";

export default function Timeline() {
  const timelineData = [
    {
      year: "1978",
      title: "Foundation",
      description: "Zomba Baptist Church was founded ih 1978 ",
      icon: "🏛️",
    },
    {
      year: "2010",
      title: "Rebranding",
      description:
        "Zomba Baptist Church was founded by a small group of families committed to establishing a welcoming place of worship in our community.",
      icon: "🔄",
    },
    {
      year: "2011",
      title: "Outreach",
      description:
        "We launched several new outreach programs to better serve our local community and expanded our global missions work..",
      icon: "📜",
    },

    {
      year: "2024",
      title: "Digital Expansion",
      description:
        "As our congregation grew, we expanded our facilities to include a larger sanctuary, educational wing, and community center.",
      icon: "🏆",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6  bg-clip-text  text-white">
            Our Journey
          </h2>
          <p className="text-lg text-white">
            Brief history of Zomba Baptist Church
          </p>
        </motion.div>

        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-green-200"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-green-300 z-10"></div>

                {/* Mobile layout - single column */}
                <div className="block md:hidden w-full pl-8">
                  <Card className="bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <Badge
                          variant="outline"
                          className="text-green-700 border-green-300"
                        >
                          {item.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Desktop layout - alternating sides */}
                <div className="hidden md:flex w-full items-center">
                  {index % 2 === 0 ? (
                    // Left side content
                    <>
                      <div className="w-1/2 pr-8">
                        <Card className="bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-2xl">{item.icon}</span>
                              <Badge
                                variant="outline"
                                className="text-green-700 border-green-300"
                              >
                                {item.year}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    // Right side content
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="w-1/2 pl-8">
                        <Card className="bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-2xl">{item.icon}</span>
                              <Badge
                                variant="outline"
                                className="text-green-700 border-green-300"
                              >
                                {item.year}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
