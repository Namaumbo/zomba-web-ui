// src/pages/ArticleDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  Clock,
  User,
  Calendar,
  Heart,
  BookOpen,
  Users,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getArticle } from "../lib/api";
import ReactMarkdown from "react-markdown";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const article = {
  content: `    
  <h1>Introduction</h1>
    <p>Mental health is not just about what we think or how we act. It also includes how we feel inside — deep in our hearts. The heart is the center of our emotions. It holds joy, sadness, fear, love, anger, and peace. When our hearts are hurting, our whole lives can feel heavy.</p>
    <p>In Christianity, the heart is a very important place. The Bible speaks often about the heart. God wants our hearts to be full of love, peace, and healing. In this article, we will look at how the Christian faith can help bring healing to our emotions, especially when our hearts are broken or troubled.</p>
    <br/>
    <h2><b>What Does the Bible Say About the Heart?</h2>
    <p>The Bible says in Proverbs 4:23 (NIV):</p>
        <br/>

    <blockquote>
        <i>"Above all else, guard your heart, for everything you do flows from it."</i>
    </blockquote>
        <br/>

    <p>This verse teaches us something powerful. Our heart is like a well. If the well is clean, the water that comes out is good. But if the well is dirty, everything we do, say, and feel can be affected.</p>
    <p>When we don't deal with painful emotions, like hurt from the past, disappointment, rejection, or fear, those feelings stay in our hearts and begin to affect how we live. God through His Word invites us to bring those deep feelings to Him so He can begin to heal us.</p>
    <br/>

    <h2><b>Understanding Emotional Health</b></h2>
    <p>Emotional health means being able to feel and express our emotions in a healthy way. It also means being able to face difficult emotions — like sadness or anger — without being controlled by them.</p>
    <p>But emotional wounds are real. These may come from:</p>
        <br/>

    <ul>
        <li>Childhood trauma</li>
        <li>Abandonment or rejection</li>
        <li>Loss of loved ones</li>
        <li>Betrayal by friends or family</li>
        <li>Abuse or neglect</li>
        <li>Constant fear or anxiety</li>
    </ul>
        <br/>

    <p>When these painful things happen and we do not have space to express or heal from them, they can leave wounds in our hearts. Just like physical wounds, emotional wounds need care and time to heal.</p>
 <br/>
    <h2"><b>Jesus Understands a Broken Heart</b></h2>
     <br/>
    <p>One of the most comforting truths in Christianity is that Jesus understands our pain. He felt emotions deeply. He cried when His friend Lazarus died. He felt abandoned on the cross. He was betrayed by His close friend Judas. He knows what it means to hurt emotionally.</p>
    <p>Isaiah 61:1 (NIV) says:</p> <blockquote>"The Lord has sent me to bind up the brokenhearted..."</blockquote>
    <p>Jesus came to bring healing — not just to our bodies or minds, but also to our hearts. This verse shows that God cares about our emotional pain and wants to bring comfort.</p>
 <br/>
    <h2>How Can We Begin Healing the Heart?</h2>
    <p>Here are a few steps we can take, based on both Christian faith and mental health practices:</p>
    <ol>
        <li>
            <strong>Be Honest About What You Feel</strong><br />
            <p>Many people grow up thinking it's wrong to feel sad or angry. But the truth is, emotions are not bad. They are signals telling us what's going on inside. The Psalms are full of hearts crying out to God, being honest about their pain.</p>
            <p>Take time to sit with your emotions. Write them down. Talk to someone you trust. And talk to God honestly in prayer.</p>
        </li>
        <li>
         <br/>
            <strong>Invite God into Your Pain</strong><br />
             
            <p>Don't try to carry pain alone. Jesus says in Matthew 11:28 (NIV):</p>
            <blockquote>"Come to me, all you who are weary and burdened, and I will give you rest."</blockquote>
            <p>You can say something like, "Lord, this hurt is too much for me. Please help me carry it." As you pray this way, you open your heart to the healing presence of God.</p>
        </li>
        <li>
         <br/>
            <strong>Forgive</strong><br />
            <p>Sometimes, our hearts are heavy because we are holding on to bitterness or anger. Forgiveness doesn't mean pretending it didn't hurt. It means choosing to let go of the pain so it doesn't control us.</p>
            <p>Jesus teaches us to forgive, not to excuse bad behavior, but to free our hearts from the chains of anger.</p>
        </li>
        <li>
         <br/>
            <strong>Connect with Safe People</strong><br />
            <p>Healing also comes through healthy relationships. God uses people to bring comfort. Find a friend, pastor, counselor, or family member you trust. Speak openly. Sometimes just being heard brings great healing.</p>
        </li>
        <li>
         <br/>
            <strong>Practice Gratitude and Worship</strong><br />
            <p>Even when life is hard, there is always something to thank God for. Gratitude helps lift heavy hearts. So does worship — it reminds us that we are not alone and that God is still good.</p>
            <p>Try starting or ending each day by saying three things you are grateful for, even if they are small.</p>
        </li>
    </ol>
 <br/>
    <h2>When the Heart is Sick</h2>
    <p>The Bible also says in Proverbs 13:12 (NIV):</p>
    <blockquote>
        "Hope deferred makes the heart sick, but a longing fulfilled is a tree of life."
    </blockquote>
    <p>Sometimes, the pain of waiting too long for a breakthrough can make our hearts feel sick. But God sees your waiting. And He has not forgotten you. Keep bringing your heart to Him, even when the answers don't come quickly.</p>
    <p>God is gentle. He works with us slowly, kindly, and with deep love.</p>
 <br/>
    <h2>A Prayer for Healing the Heart</h2>
    <p>Here is a simple prayer you can use if your heart is feeling heavy:</p>
    <blockquote>
     <br/>
        "Lord Jesus, I bring my heart to You. You see all the pain, the sadness, the anger, and the fear inside. I invite You into these deep places. Please heal what is broken. Help me to feel Your love and peace. Teach me to forgive, to hope again, and to trust You with my heart. Amen."
    </blockquote>
     <br/>

    <h2>Final Thoughts</h2>
    <p>Healing the heart is a journey. It doesn't happen all at once. But every small step matters. As you continue to walk with God, as you pray, reflect, and allow safe people to walk with you, your heart can become whole again.</p>
    <p>In Christianity, we believe that God not only sees our pain but joins us in it — and slowly brings us to a place of peace. Let your heart rest in that truth today.</p>
       <br/>
       <p>Julie T. soko</p>
    `,
  image: "/uploads/articles/article.png",
  title:
    "Healing the Heart: Christianity and Emotional Well-being Series: Christianity and Mental Health",
};
export default function ArticleDetailPage() {
  const { slug } = useParams();
  // const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchArticle = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await getArticle(slug);
  //       const data = response.data;
  //       setArticle(data[0]);
  //     } catch (e) {
  //       console.error("Failed to fetch article:", e);
  //       setError("Could not load article. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchArticle();
  // }, [slug]);

  // if (loading) {
  //   return (
  //     <div className="container mx-auto px-4 py-12 text-center">
  //       <p className="text-lg">Loading article...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="container mx-auto px-4 py-12 text-center text-red-600">
  //       <p className="text-lg">{error}</p>
  //       <Button asChild className="mt-4">
  //         <Link to="/articles">{"<-"} Back to Articles</Link>
  //       </Button>
  //     </div>
  //   );
  // }

  // if (!article) {
  //   return (
  //     <div className="container mx-auto px-4 py-12 text-center">
  //       <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
  //       <p className="text-muted-foreground mb-6">
  //         The article you are looking for does not exist or has been moved.
  //       </p>
  //       <Button asChild>
  //         <Link to="/articles">{"<-"} Back to Articles</Link>
  //       </Button>
  //     </div>
  //   );
  // }
  // const getStrapiImageUrl = (imageObject) => {
  //   return imageObject.startsWith("/")
  //     ? `http://localhost:1337${imageObject}`
  //     : imageObject;
  // };

  return (
    <div className="container  mx-auto flex gap-2 flex-col md:flex-row">
      <div className="px-4 py-12 max-w-6xl">
        <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 ">
          <BookOpen className="w-3 h-3 mr-1" />
          Church News and Ministry
        </Badge>
        <div className="relative text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text  ">
            Healing the Heart: Christianity and Emotional Well-being Series:
            Christianity and Mental Health{" "}
          </h1>
        </div>

        <div className="relative h-[700px] w-full rounded-xl overflow-hidden mb-8 shadow-2xl">
          {/* <img
            src={getStrapiImageUrl(article?.imgURL?.formats?.medium?.url)}
            alt={article.title}
            className="object-cover w-full h-full"
          /> */}
          <img
            src={article.image}
            alt={article.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground justify-center">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>Julie T. Soko</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon size={16} />
            <span>19- July 2025</span>{" "}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            5mins
          </div>
        </div>

        <div className="gap-2 mb-2 bg-teal-50 p-4 rounded-lg">
          <p className="text-muted-foreground relative font-italic">
            {/* {article.excerpt} */}
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <Badge className="w-fit" variant="secondary">
            {/* {article.category} */}
          </Badge>
          {/* Assuming 'category' is a string field */}
        </div>
        <div
          className="prose prose-lg max-w-none mx-auto text-gray-700 dark:text-gray-300 text-justify"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/articles">{"<"}- Back to All Articles</Link>
          </Button>
        </div>
      </div>
      <aside className="lg:col-span-1 mt-6 pt-4">
        <div className="sticky top-40 space-y-6 ">
          {/* Author Card */}
          <Card className="border-purple-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" />
                About the Author
              </h3>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JS
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Julie T. Soko</p>
                  <p className="text-sm text-gray-600">
                    sychotherapist and faith-based counsellor based in Zomba,
                    Malawi.
                  </p>
                </div>
                <p className="text-sm text-gray-700">
                  She is the managing editor of Essential Grace Magazine, and
                  has published several books online. Julie is a member of Zomba
                  Baptist Church.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <Card className="border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Related Articles
              </h3>
              {/* <div className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    Building Character Through Faith
                  </h4>
                  <p className="text-xs text-gray-600">
                    How our programs shape young minds
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    Community Outreach Programs
                  </h4>
                  <p className="text-xs text-gray-600">
                    Serving our local community
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    Youth Ministry Updates
                  </h4>
                  <p className="text-xs text-gray-600">
                    Latest news from our youth programs
                  </p>
                </div>
              </div> */}
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          {/* <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Stay Connected</h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to our newsletter for the latest updates on church
                programs and community events.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </aside>
    </div>
  );
}
