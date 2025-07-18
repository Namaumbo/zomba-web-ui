"use client";

const galleryImages = [
  {
    src: "/youthMinistry.jpg",
    alt: "Ministry activity 1",
    height: 300,
    title: "Youth Gathering",
    description: "Building community through faith and fellowship",
    span: "lg:row-span-2",
  },
  {
    src: "/WhatsApp Image 2025-01-27 at 17.21.17.jpeg",
    alt: "Ministry activity 2",
    height: 200,
    title: "Outreach Program",
    description: "Serving our local communities with love.",
  },
  {
    src: "/celebration2.jpeg",
    alt: "Ministry activity 3",
    height: 350,
    title: "Praise Night",
    description: "An evening of music, worship, and testimony.",
    span: "lg:col-span-2",
  },

  {
    src: "/GA.jpg",
    alt: "Ministry activity 5",
    height: 200,
    title: "Bible Study",
    description: "Growing in knowledge and understanding.",
  },
  {
    src: "/youth4.jpeg",
    alt: "Ministry activity 6",
    height: 300,
    title: "Community Service",
    description: "Hands-on projects that make a difference.",
  },

  {
    src: "/WhatsApp Image 2025-01-27 at 17.21.17.jpeg",
    alt: "Ministry activity 4",
    height: 350,
    title: "Youth Camp",
    description: "Deepening faith through retreats and fun",
  },
  {
    src: "/womens.jpeg",
    alt: "Ministry activity 4",
    height: 200,
    title: "Youth Camp",
    description: "Deepening faith through retreats and fun",
  },
  {
    src: "/womens1.jpeg",
    alt: "Ministry activity 4",
    height: 200,
    title: "Youth Camp",
    description: "Deepening faith through retreats and fun",
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-18 at 10.36.28.jpeg",
    alt: "Ministry activity 4",
    height: 200,
    title: "Youth Camp",
    description: "Deepening faith through retreats and fun",
  },
];

const galleryImages2 = [
  {
    src: "/uploads/WhatsApp Image 2025-07-18 at 10.36.27.jpeg",
    alt: "Ministry activity 1",
    height: 300,
    title: "Youth Gathering",
    description: "Building community through faith and fellowship",
    span: "lg:row-span-2",
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-18 at 15.06.00.jpeg",
    alt: "Ministry activity 2",
    height: 200,
    title: "Outreach Program",
    description: "Serving our local communities with love.",
  },
  {
    src: "/youngLady1.jpeg",
    alt: "Ministry activity 3",
    height: 350,
    title: "Praise Night",
    description: "An evening of music, worship, and testimony.",
    span: "lg:col-span-2",
  },

  {
    src: "/GA.jpg",
    alt: "Ministry activity 5",
    height: 200,
    title: "Bible Study",
    description: "Growing in knowledge and understanding.",
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-18 at 11.44.37.jpeg",
    alt: "Ministry activity 6",
    height: 300,
    title: "Community Service",
    description: "Hands-on projects that make a difference.",
  },

  {
    src: "/uploads/WhatsApp Image 2025-07-18 at 15.06.10.jpeg",
    alt: "Ministry activity 4",
    height: 350,
    title: "Youth Camp",
    description: "Deepening faith through retreats and fun",
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-18 at 11.44.35.jpeg",
    alt: "Ministry activity 4",
    height: 200,
    title: "Youth Camp",
    description: "Deepening faith through retreats and fun",
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-18 at 11.44.36.jpeg",
    alt: "Ministry activity 4",
    height: 200,
    title: "Youth Camp",
    description: "Deepening faith through retreats and fun",
  },
  {
    src: "/womens1.jpeg",
    alt: "Ministry activity 4",
    height: 200,
    title: "Youth Camp",
    description: "Deepening faith through retreats and fun",
  },
];
export default function GalleryPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <section className="w-full md:py-8 bg-slate-50">
        <div className="container mx-auto max-w-8xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Church Gallery
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="max-w-3xl text-slate-600 text-lg">
              {` Moments captured from our various service
                projects, and gatherings.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {galleryImages?.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl ${
                  item.span || ""
                }`}
              >
                <img
                  src={`${item.src}?height=${
                    item.height
                  }&width=500&text=Ministry+Photo+${index + 1}`}
                  alt={`Ministry activity ${index + 1}`}
                  width={400}
                  height={item.height}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-8xl px-4 md:px-6">
        <PicRack galleryImages={galleryImages2} />
      </div>
    </div>
  );
}

function PicRack({ galleryImages }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
      {galleryImages?.map((item, index) => (
        <div
          key={index}
          className={`group relative overflow-hidden rounded-xl ${
            item.span || ""
          }`}
        >
          <img
            src={`${item.src}?height=${
              item.height
            }&width=500&text=Ministry+Photo+${index + 1}`}
            alt={`Ministry activity ${index + 1}`}
            width={400}
            height={item.height}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}
