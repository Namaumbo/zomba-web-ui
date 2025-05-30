import React from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AssociationPage() {
  const styles = {
    section:
      "relative bg-gradient-to-b from-gray-50 pt-20 to-white min-h-[calc(100dvh-5rem)] flex items-center",
    container: "",
    grid: "grid lg:grid-cols-2 gap-x-12 gap-y-8 lg:gap-y-16 lg:items-start",
    content:
      "relative z-10 items-center lg:h-full lg:justify-center lg:items-start flex flex-col space-y-8",
    titleWrapper: "relative",
    title:
      "text-4xl text-center lg:text-left font-bold tracking-tight text-gray-900 [text-wrap:balance] sm:text-6xl",
    titleAccent:
      "absolute -left-4 top-1/2 h-16 w-1 -translate-y-1/2 bg-gradient-to-b from-primary to-primary/50",
    description:
      "text-lg text-center lg:text-left leading-8 text-gray-600 [text-wrap:pretty]",
    imageContainer: "relative overflow-hidden  lg:ml-auto rounded-3xl",
    image: "aspect-[5/3] w-full rounded-3xl object-cover  ",
    pattern:
      "absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40",
    glow: "absolute -top-3 -z-10 h-72 w-72 bg-primary/17 blur-3xl lg:top-[-10%] lg:right-[20%]",
    spotlight: "absolute right-0 top-0 -z-10 h-96 w-96 bg-primary/5 blur-3xl",
    headerTitle:
      "mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
  };
  return (
    <>
      <div>
        <section className="bg-gradient-to-b from-slate-50 to-white pt-5 md:mt-20 ">
          <div className={`${styles.grid} px-4 sm:px-8 mx-auto container`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.content}
            >
              <div className="inline-block rounded-2xl bg-primary/10 px-3 py-1 text-sm text-primary mb-[1rem]">
                BACOMA
              </div>
              <div className={styles.titleWrapper}>
                <div className={styles.titleAccent} />
                <h1 className={styles.title}> Baptist Convetion of Malawi</h1>
              </div>
              <p className={styles.description}>
                The Baptist Convention of Malawi is committed to building a
                robust network of collaboration among Baptist Churches, both
                within Malawi and internationally. This initiative aims to
                strengthen ties and promote unity among congregations. By
                extending its outreach beyond national borders, the Convention
                seeks to share resources, support missionary work, and enhance
                the spiritual growth of its members.
              </p>
              <div className={styles.glow}></div>
              <Button
                className="p-8"
                onClick={() => window.open("https://www.bacoma.org", "_blank")}
              >
                Learn more
                <ArrowRight />
              </Button>
            </motion.div>{" "}
            
            
            <div className="sm:py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={styles.imageContainer}
              >
                <img
                  src="/bacoma.jpeg"
                  alt="Church worship service"
                  className={styles.image}
                />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-sm font-medium uppercase tracking-wider">
                    BACOMA
                  </span>
                  <br />
                  <span className="text-xl md:text-2xl font-bold">
                    Baptist Convetion of Malawi
                  </span>
                </div>
                <div className={styles.pattern} />
                <div className={styles.spotlight} />
              </motion.div>
            </div>
          </div>
        </section>

        <section className=" from-slate-50 to-white pt-5 mt-30  bg-slate-50 p-8 ">
          <div className={`${styles.grid} px-4 sm:px-8 mx-auto container`}>
            <div className="sm:py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={styles.imageContainer}
              >
                <img
                  src="https://www.ubiaministries.com/wp-content/uploads/2014/12/DSCF6773-e1418245218562-1200x400.jpg"
                  alt="Church worship service"
                  className={styles.image}
                />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-sm font-medium uppercase tracking-wider">
                    UBIA
                  </span>
                  <br />
                  <span className="text-xl md:text-2xl  font-bold">
                    Uniting Believers in Action
                  </span>
                </div>
                <div className={styles.pattern} />
                <div className={styles.spotlight} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.content}
            >
              <div className="inline-block rounded-2xl bg-primary/10 px-3 py-1 text-sm text-primary mb-[1rem]">
                UBIA
              </div>
              <div className={styles.titleWrapper}>
                <div className={styles.titleAccent} />
                <h1 className={styles.title}>
                  {" "}
                  Uniting Believers in Action - USA
                </h1>
              </div>
              <p className={styles.description}>
                UBIA Ministries is a Christian, non-denominational 501(c)(3)
                charitable organization. The name "UBIA" comes from Swahili and
                also stands for "Uniting Believers in Action." They work
                alongside existing ministries around the world to support
                orphans, widows, the sick, and the needy. UBIA focuses on
                encouraging self-sustainability, empowering local leaders,
                building strong partnerships, and maintaining transparency and
                accountability in all they do
              </p>
              <div className={styles.glow}></div>
              <Button
                className="p-8"
                onClick={() =>
                  window.open("https://www.ubiaministries.com", "_blank")
                }
              >
                Learn more
                <ArrowRight />
              </Button>
            </motion.div>{" "}
          </div>
        </section>

        <section className="bg-gradient-to-b from-slate-50 to-white pt-5 mt-30 ">
          <div className={`${styles.grid} px-4 sm:px-8 mx-auto container`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.content}
            >
              <div className="inline-block rounded-2xl bg-primary/10 px-3 py-1 text-sm text-primary mb-[1rem]">
                BACOMA
              </div>
              <div className={styles.titleWrapper}>
                <div className={styles.titleAccent} />
                <h1 className={styles.title}>
                  {" "}
                  Heidelberg Baptist Church - Germany
                </h1>
              </div>
              <p className={styles.description}>
                The Baptist Convention of Malawi is committed to building a
                robust network of collaboration among Baptist Churches, both
                within Malawi and internationally. This initiative aims to
                strengthen ties and promote unity among congregations. By
                extending its outreach beyond national borders, the Convention
                seeks to share resources, support missionary work, and enhance
                the spiritual growth of its members.
              </p>
              <div className={styles.glow}></div>
              <Button
                className="p-8"
                onClick={() => window.open("https://www.bacoma.org", "_blank")}
              >
                Learn more
                <ArrowRight />
              </Button>
            </motion.div>{" "}
            <div className="sm:py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={styles.imageContainer}
              >
                <img
                  src="/bacoma.jpeg"
                  alt="Church worship service"
                  className={styles.image}
                />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-sm font-medium uppercase tracking-wider">
                    BACOMA
                  </span>
                  <br />
                  <span className="text-xl md:text-2xl font-bold">
                    Baptist Convetion of Malawi
                  </span>
                </div>
                <div className={styles.pattern} />
                <div className={styles.spotlight} />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
