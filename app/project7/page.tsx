import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Database,
    BarChart3,
    Building2,
    Shield,
    GitBranch,
    Workflow,
    Globe,
    Users,
    CheckCircle2,
    ArrowRight,
    Zap,
    Lock,
    TrendingUp,
    Layers
} from "lucide-react";

export default function MindPlatformLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-semibold">Mind Platform</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#architecture" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Architecture
            </Link>
            <Link href="#benefits" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Benefits
            </Link>
            <Link href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
              Login
            </Button>
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl" />
        
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-1">
              Mind Platform: The Digital Brain for Your Organization
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              A unified platform for data analysis, management, and visualization
            </h1>
            
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Empower your organization with intelligent tools to automate processes, centralize operations, and make smarter decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 group">
                Start Free Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800 px-8">
                Explore the Platform
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Trusted by Analysts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Decision-Makers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Technical Managers</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-black p-8 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-xl" />
              <div className="relative grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 flex items-center justify-center"
                  >
                    <BarChart3 className="w-8 h-8 text-zinc-600" />
                  </div>
                ))}
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About Platform */}
      <section className="py-20 px-4 bg-zinc-950/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              About
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">What is Mind Platform?</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Mind Platform is a comprehensive environment that allows organizations to collect, clean, store, and visualize data while managing structures, teams, and access permissions—all within a single, integrated ecosystem.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              The platform bridges technology and business needs, enabling faster decision-making and seamless data-driven collaboration.
            </p>
          </div>

          {/* Key Goals */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Database, title: "Collect & Visualize", desc: "Collect, clean, store, and visualize data effortlessly" },
              { icon: Building2, title: "Manage Structures", desc: "Manage organizational structures and user access" },
              { icon: Zap, title: "Centralize & Automate", desc: "Centralize internal management and automation modules" }
            ].map((goal, i) => (
              <Card key={i} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                    <goal.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">{goal.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              Target Audience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Designed for Data-Driven Organizations</h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Mind Platform is built for organizations that demand excellence and centralization, from medium-to-large enterprises to governmental institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-emerald-500/50 transition-all hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-emerald-400" />
                </div>
                <CardTitle className="text-2xl">Medium to Large Enterprises</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">
                  For a 360° view and automation of critical business processes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-cyan-500/50 transition-all hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-cyan-400" />
                </div>
                <CardTitle className="text-2xl">Government Agencies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">
                  For managing multiple data flows and complex departmental structures.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-blue-500/50 transition-all hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-blue-400" />
                </div>
                <CardTitle className="text-2xl">Managers & Analysts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">
                  For powerful analytical tools and simplified access administration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section id="architecture" className="py-20 px-4 bg-zinc-950/50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              Architecture
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Four Core Functional Domains</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Database,
                title: "Data Management",
                desc: "Manage and structure source data efficiently through Blueprints and the Platform Mind module.",
                color: "emerald"
              },
              {
                icon: BarChart3,
                title: "Data Analyzing",
                desc: "Create advanced dashboards and dynamic reports for insights and strategic decision-making.",
                color: "cyan"
              },
              {
                icon: Building2,
                title: "Structure Administration",
                desc: "Organize and oversee regional entities, organizational units, and partners through a clear hierarchy.",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Access Control",
                desc: "Manage members, groups, and user permissions securely across all organizational layers.",
                color: "purple"
              }
            ].map((domain, i) => (
              <Card key={i} className="bg-zinc-900/50 border-zinc-800 group hover:border-zinc-700 transition-all">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-${domain.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <domain.icon className={`w-8 h-8 text-${domain.color}-400`} />
                  </div>
                  <CardTitle className="text-2xl">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 leading-relaxed">{domain.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Manager */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <Badge variant="outline" className="border-emerald-700 text-emerald-400">
                Workflow Manager
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Streamline Operations with the Workflow Manager</h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                The Workflow Manager allows automation of repetitive business processes and coordination between departments.
              </p>
              <p className="text-zinc-400">
                It helps teams design, execute, and monitor workflows visually—ensuring smooth collaboration and faster project delivery.
              </p>
              
              <div className="space-y-3 pt-4">
                {["Data processing pipelines", "Task automation", "Multi-step approval processes"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8">
                <Workflow className="w-full h-64 text-zinc-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version Control */}
      <section className="py-20 px-4 bg-zinc-950/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8">
                <GitBranch className="w-full h-64 text-zinc-700" />
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-xl" />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <Badge variant="outline" className="border-cyan-700 text-cyan-400">
                Version Control
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Version Control for Continuous Improvement</h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Mind Platform integrates Version Control features to track changes, maintain data history, and ensure consistency across projects.
              </p>
              <p className="text-zinc-400">
                Teams can roll back, compare, and synchronize updates easily—reducing errors and improving collaboration between analysts and developers.
              </p>
              
              <Card className="bg-zinc-900/50 border-zinc-800 mt-6">
                <CardContent className="pt-6">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    This ensures comprehensive tracking of changes, a complete history, and the ability to instantly revert to a previous version, securing both your data and configurations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Platform Integration */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              Multi-Platform
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">One Platform. Multiple Environments.</h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Unlimited Applications, One Reliable Database
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Unification", desc: "All critical enterprise data is centralized and cleaned once.", icon: Database },
                    { title: "Deployment", desc: "Build dedicated platforms for each department using the same central data.", icon: Layers },
                    { title: "Service", desc: "Feed multiple applications directly from Mind Platform's secure infrastructure.", icon: Globe }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-zinc-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Example Use Case</h3>
              <div className="space-y-3 text-zinc-400">
                <p>• A company can create separate environments for HR, Finance, and Operations.</p>
                <p>• Each environment has its own dashboards, members, and access rules.</p>
                <p>• The central administrator can still monitor and manage all instances from one unified interface.</p>
              </div>
              <p className="text-zinc-400 mt-6 italic">
                This modular structure ensures flexibility, scalability, and data governance across the entire organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Ecosystem */}
      <section id="features" className="py-20 px-4 bg-zinc-950/50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              Ecosystem
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Explore the Core Modules</h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Mind Platform consists of interconnected modules, each serving a specific function within the ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Topics", desc: "Data organization and grouping" },
              { name: "Dashboards", desc: "Visualization and performance tracking" },
              { name: "Blueprints", desc: "Data structure design and standardization" },
              { name: "Regions", desc: "Geographical or operational segmentation" },
              { name: "OrgUnits", desc: "Organizational hierarchy and internal entities" },
              { name: "Members", desc: "User profiles and team management" },
              { name: "Groups", desc: "Role-based access and collaboration units" },
              { name: "Integration", desc: "Seamless module connectivity" }
            ].map((module, i) => (
              <Card key={i} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg">{module.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">{module.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Mind Platform?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Database, title: "Centralized Data Ecosystem", desc: "All your data in one secure, accessible location" },
              { icon: Zap, title: "Process Automation", desc: "Smart workflows that save time and reduce errors" },
              { icon: Lock, title: "Secure & Scalable", desc: "Multi-environment system with enterprise-grade security" },
              { icon: Users, title: "Role-Based Collaboration", desc: "Governance tools for teams of any size" },
              { icon: TrendingUp, title: "Modern UI/UX", desc: "Optimized interface for maximum productivity" },
              { icon: Globe, title: "Multi-Platform Ready", desc: "Deploy anywhere, manage from one place" }
            ].map((benefit, i) => (
              <Card key={i} className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-emerald-500/30 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                    <benefit.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl" />
            
            <div className="relative space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent">
                Ready to transform your data into intelligent decisions?
              </h2>
              
              <p className="text-xl text-zinc-400">
                Join leading organizations that trust Mind Platform
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-10 group">
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800 px-10">
                  Get Started
                </Button>
                <Button size="lg" variant="ghost" className="text-zinc-400 hover:text-white px-10">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-black py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">M</span>
                </div>
                <span className="text-lg font-semibold">Mind Platform</span>
              </div>
              <p className="text-sm text-zinc-400">
                The digital brain for your organization
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#architecture" className="hover:text-white transition-colors">Architecture</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="bg-zinc-800 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-400">
              © 2025 Mind Platform. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}