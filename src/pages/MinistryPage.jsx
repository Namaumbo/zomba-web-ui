"use client";

import MinistryComponent from "../components/ministry-component";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ChevronRight, ArrowRight } from "lucide-react";

export default function MinistryPage() {
  const ministries = [
    {
      ministry: "Youth Ministry",
      coverPage: "/youthMinistry.jpg",
      description:
        "Our youth ministry is dedicated to helping young people grow in their faith through fellowship, Bible study, and service opportunities.",
      verse:
        "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity. - 1 Timothy 4:12",
      slug: "youthMinistry",
    },
    {
      ministry: "Worship Ministry",
      coverPage: "/placeholder.svg?height=600&width=800&text=Worship+Ministry",
      description:
        "The worship ministry leads our congregation in praise and worship, creating an atmosphere where people can encounter God's presence.",
      verse:
        "Worship the LORD with gladness; come before him with joyful songs. - Psalm 100:2",
      slug: "worshipMinistry",
    },
    {
      ministry: "Outreach Ministry",
      coverPage: "/evangelism.jpg",
      description:
        "Our outreach ministry serves the local community through various programs, providing practical help and sharing God's love with those in need.",
      verse:
        "For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in. - Matthew 25:35",
      slug: "outreachMinisty",
    },
    {
      ministry: "Children's Ministry",
      coverPage: "/kids.jpg",
      description:
        "The children's ministry provides a safe and fun environment where children can learn about God's love and develop a strong foundation of faith.",
      verse:
        "Start children off on the way they should go, and even when they are old they will not turn from it. - Proverbs 22:6",
      slug: "childrensMinistry",
    },
    {
      ministry: "Prayer Ministry",
      coverPage: "/prayer.jpg",
      description:
        "Our prayer ministry is committed to interceding for the needs of our church, community, and world, believing in the power of prayer to bring transformation.",
      verse:
        "Devote yourselves to prayer, being watchful and thankful. - Colossians 4:2",
      slug: "prayerMinistry",
    },
    {
      ministry: "Missions Ministry",
      coverPage: "/placeholder.svg?height=600&width=800&text=Missions+Ministry",
      description:
        "The missions ministry supports and participates in both local and global missions, sharing the gospel and meeting needs around the world.",
      verse:
        "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. - Matthew 28:19",
      slug: "missionsMinistry",
    },
  ];

  const handleMinistryClick = (ministry) => {
    console.log("Ministry clicked:", ministry);
    // Handle navigation or modal display here
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Our Ministries
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the various ways you can connect, serve, and grow through our
          church ministries.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <Link to={"/articles"} asChild>
          <Button>
            Our Articles <ChevronRight />
          </Button>
        </Link>
      </div>

      <MinistryComponent
      />
    </div>
  );
}
