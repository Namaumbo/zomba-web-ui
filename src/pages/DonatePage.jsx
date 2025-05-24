import React from "react";
import {
  Heart,
  Users,
  BookOpen,
  Home,
  Shield,
  CreditCard,
  Smartphone,
  Building,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const DonatePage = () => {
  const impactAreas = [
    {
      icon: BookOpen,
      title: "Education Programs",
      description:
        "Supporting school church programs and educational materials",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Feeding programs and community support initiatives",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Home,
      title: "Church Maintenance",
      description: "Keeping our worship space welcoming and functional",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Youth Ministry",
      description: "Programs that nurture the next generation of believers",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200 text-lg px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Make a Difference
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your <span className="text-primary">Generosity</span> Changes
              Lives
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Every donation helps us nurture faith, build character, and
              strengthen our community. Join us in making a lasting impact
              through the power of giving.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Donation Information */}
          <div className="lg:col-span-2" id="donation-info">
            <Card className="border-purple-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b border-purple-100">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-purple-600" />
                  How to Give
                </CardTitle>
                <p className="text-gray-600">Multiple ways to support our ministry</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Bank Transfer */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Bank Transfer</h3>
                        <p className="text-gray-600">Direct bank deposit</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Bank Name:</p>
                        <p className="text-gray-900 font-semibold">Standard Bank Malawi</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Account Name:</p>
                        <p className="text-gray-900 font-semibold">Zomba Baptist Church</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Account Number:</p>
                        <p className="text-gray-900 font-semibold">9100004567890</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Branch Code:</p>
                        <p className="text-gray-900 font-semibold">001234</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Please include your name and "Donation" in the reference field
                      </p>
                    </div>
                  </div>

                  {/* Mobile Money */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Mobile Money</h3>
                        <p className="text-gray-600">Quick and convenient giving</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Airtel Money</h4>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-700">Number:</p>
                          <p className="text-gray-900 font-semibold">+265 996 123 456</p>
                          <p className="text-sm font-medium text-gray-700">Name:</p>
                          <p className="text-gray-900 font-semibold">Zomba Baptist Church</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">TNM Mpamba</h4>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-700">Number:</p>
                          <p className="text-gray-900 font-semibold">+265 884 567 890</p>
                          <p className="text-sm font-medium text-gray-700">Name:</p>
                          <p className="text-gray-900 font-semibold">Zomba Baptist Church</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* In-Person Giving */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">In-Person Giving</h3>
                        <p className="text-gray-600">During services and events</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Sunday Services</h4>
                        <p className="text-gray-700">Offering baskets are passed during our worship services</p>
                        <p className="text-sm text-gray-600 mt-1">
                          <strong>Service Times:</strong> 8:00 AM & 10:30 AM every Sunday
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Church Office</h4>
                        <p className="text-gray-700">Visit our office during business hours</p>
                        <p className="text-sm text-gray-600 mt-1">
                          <strong>Hours:</strong> Monday - Friday, 9:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Designation Options */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-gray-700" />
                      Designation Options
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">General Fund</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">Education Programs</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">Community Outreach</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">Church Maintenance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">Youth Ministry</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">Building Fund</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Tip:</strong> When making your donation, please specify which area you'd like to support
                      </p>
                    </div>
                  </div>

                  {/* Contact for Donations */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Need Assistance?</h3>
                    <p className="text-gray-700 mb-4">
                      Our finance team is here to help with any questions about giving or to provide donation receipts.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Finance Office</p>
                        <p className="text-gray-900 font-semibold">+265 993 740 261</p>
                        <p className="text-gray-900">finance@zombabaptist.org</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Pastor's Office</p>
                        <p className="text-gray-900 font-semibold">+265 888 123 456</p>
                        <p className="text-gray-900">pastor@zombabaptist.org</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Areas */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Your Impact</CardTitle>
                <p className="text-gray-600 text-sm">See how your donation makes a difference</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {impactAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center`}
                    >
                      <area.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{area.title}</h4>
                      <p className="text-xs text-gray-600">{area.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Impact */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                  <Star className="w-5 h-5 text-green-600" />
                  Recent Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">150 students received educational materials</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">50 families supported through outreach</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Church roof repairs completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Youth camp for 75 young people</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Need help with your donation or want to learn more about our programs?
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span> giving@zombabaptist.org
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span> (+265) 993 740 261
                  </p>
                </div>
           
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
      </section>
    </>
  );
};

export default DonatePage;
