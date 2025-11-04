"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  BarChart3, 
  Building2, 
  Shield, 
  Workflow, 
  GitBranch, 
  Layers,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Globe,
  Users,
  Lock,
  Zap,
  Target,
  Cpu,
  TrendingUp,
  FileText,
  Settings
} from "lucide-react";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import ShimmerButton from "@/components/ui/shimmer-button";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function MindPlatformLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Mind Platform
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-emerald-400 transition-colors">
                Home
              </a>
              <a href="#features" className="hover:text-emerald-400 transition-colors">
                All Features
              </a>
              <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                Pricing
              </a>
              <a href="#about" className="hover:text-emerald-400 transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">
                Contact
              </a>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-medium hover:opacity-90 transition-opacity">
                Get This Template
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block py-2 hover:text-emerald-400">
                Home
              </a>
              <a href="#features" className="block py-2 hover:text-emerald-400">
                All Features
              </a>
              <a href="#pricing" className="block py-2 hover:text-emerald-400">
                Pricing
              </a>
              <a href="#about" className="block py-2 hover:text-emerald-400">
                About
              </a>
              <a href="#contact" className="block py-2 hover:text-emerald-400">
                Contact
              </a>
              <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-medium">
                Get This Template
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <DotPattern
          className="absolute inset-0 opacity-30"
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedGradientText className="mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>We raised $3M in pre-seed fund</span>
            </AnimatedGradientText>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Mind Platform:
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                The Digital Brain
              </span>
              <br />
              for Your Organization
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-4xl mx-auto">
              A unified platform for data analysis, management, and visualization.
            </p>

            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Empower your organization with intelligent tools to automate processes, centralize
              operations, and make smarter decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <ShimmerButton
                className="text-lg px-8 py-4"
                shimmerColor="#10b981"
                background="linear-gradient(to right, #10b981, #06b6d4)"
              >
                <span className="font-semibold">Start Free Demo</span>
              </ShimmerButton>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group">
                <span className="font-semibold">Explore the Platform</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-sm text-gray-500">
              Trusted by Analysts, Decision-Makers, and Technical Managers for its reliability and
              integration.
            </p>
          </motion.div>

          {/* Hero Image Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20" />
              <div className="bg-gray-900/50 backdrop-blur-sm p-8">
                {/* Mock Dashboard UI */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-lg p-4 backdrop-blur-sm">
                    <Database className="w-8 h-8 text-emerald-400 mb-2" />
                    <h3 className="font-semibold mb-1">Data Sources</h3>
                    <p className="text-2xl font-bold text-emerald-400">24</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-lg p-4 backdrop-blur-sm">
                    <BarChart3 className="w-8 h-8 text-cyan-400 mb-2" />
                    <h3 className="font-semibold mb-1">Active Dashboards</h3>
                    <p className="text-2xl font-bold text-cyan-400">156</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-lg p-4 backdrop-blur-sm">
                    <Users className="w-8 h-8 text-blue-400 mb-2" />
                    <h3 className="font-semibold mb-1">Team Members</h3>
                    <p className="text-2xl font-bold text-blue-400">89</p>
                  </div>
                </div>

                {/* Mock Chart Area */}
                <div className="bg-black/30 rounded-lg p-6 border border-white/10">
                  <div className="flex items-end justify-between h-32">
                    {[40, 70, 50, 90, 60, 85, 75, 95, 80, 70, 85, 90].map((height, i) => (
                      <div key={i} className="flex-1 mx-1">
                        <div
                          className="bg-gradient-to-t from-emerald-400 to-cyan-400 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logos */}
                <div className="flex items-center justify-between mt-8 opacity-40">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="text-white/60 text-xs font-bold tracking-wider"
                    >
                      LOGO{i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Mind Platform?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Mind Platform is a comprehensive environment that allows organizations to collect,
              clean, store, and visualize data while managing structures, teams, and access
              permissions—all within a single, integrated ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">
                Access to the future of work
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The platform bridges technology and business needs, enabling faster decision-making
                and seamless data-driven collaboration. Experience AI-driven features, intelligent
                automation, seamless integrations, and real-time insights.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Collect, clean, store, and visualize data</p>
                    <p className="text-sm text-gray-500">
                      Comprehensive data lifecycle management
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">
                      Manage organizational structures and user access
                    </p>
                    <p className="text-sm text-gray-500">
                      Hierarchical access control and permissions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">
                      Centralize internal management and automation modules
                    </p>
                    <p className="text-sm text-gray-500">
                      Unified platform for all operations
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/50 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                    <TrendingUp className="w-10 h-10 text-emerald-400 mb-3" />
                    <h4 className="font-semibold mb-1">90%</h4>
                    <p className="text-sm text-gray-400">Cost-effectiveness</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                    <Zap className="w-10 h-10 text-cyan-400 mb-3" />
                    <h4 className="font-semibold mb-1">10x</h4>
                    <p className="text-sm text-gray-400">Faster Processing</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-6 backdrop-blur-sm border border-white/10 col-span-2">
                    <Target className="w-10 h-10 text-blue-400 mb-3" />
                    <h4 className="font-semibold mb-2">Analytics and Insights</h4>
                    <p className="text-sm text-gray-400">
                      Make better business through built-in business analytics tools, allowing for
                      data-driven decision-making and visualization.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Designed for{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Data-Driven Organizations
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mind Platform is built for organizations that demand excellence and centralization,
              from medium-to-large enterprises to governmental institutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Medium to Large Enterprises",
                description:
                  "For a 360° view and automation of critical business processes across departments.",
                gradient: "from-emerald-500/10 to-emerald-500/5",
                border: "border-emerald-500/20",
              },
              {
                icon: Globe,
                title: "Government Agencies/Institutions",
                description:
                  "For managing multiple data flows and complex departmental structures securely.",
                gradient: "from-cyan-500/10 to-cyan-500/5",
                border: "border-cyan-500/20",
              },
              {
                icon: Users,
                title: "Managers and Analysts",
                description:
                  "For powerful analytical tools and simplified access administration in one platform.",
                gradient: "from-blue-500/10 to-blue-500/5",
                border: "border-blue-500/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative rounded-2xl p-8 border backdrop-blur-sm bg-gradient-to-br",
                  item.gradient,
                  item.border
                )}
              >
                <item.icon className="w-12 h-12 mb-4 text-white" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Each user role benefits from customizable tools that adapt to the organization's
              hierarchy and workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section id="features" className="relative py-32 bg-gradient-to-b from-emerald-950/20 via-cyan-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Four Core{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Functional Domains
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Database,
                title: "Data Management",
                description:
                  "Manage and structure source data efficiently through Blueprints and the Platform Mind module.",
                gradient: "from-emerald-500/20",
                iconColor: "text-emerald-400",
              },
              {
                icon: BarChart3,
                title: "Data Analyzing",
                description:
                  "Create advanced dashboards and dynamic reports for insights and strategic decision-making.",
                gradient: "from-cyan-500/20",
                iconColor: "text-cyan-400",
              },
              {
                icon: Building2,
                title: "Structure Administration",
                description:
                  "Organize and oversee regional entities, organizational units, and partners through a clear hierarchy.",
                gradient: "from-blue-500/20",
                iconColor: "text-blue-400",
              },
              {
                icon: Shield,
                title: "Access Control",
                description:
                  "Manage members, groups, and user permissions securely across all organizational layers.",
                gradient: "from-purple-500/20",
                iconColor: "text-purple-400",
              },
            ].map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/50 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-300"
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity", domain.gradient)} />
                <div className="relative p-8">
                  <domain.icon className={cn("w-16 h-16 mb-4", domain.iconColor)} />
                  <h3 className="text-2xl font-bold mb-3">{domain.title}</h3>
                  <p className="text-gray-400">{domain.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Manager Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Workflow className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">
                  Scalability
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Streamline Operations with the{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Workflow Manager
                </span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The Workflow Manager allows automation of repetitive business processes and
                coordination between departments. It helps teams design, execute, and monitor
                workflows visually—ensuring smooth collaboration and faster project delivery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Data processing pipelines</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Task automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Multi-step approval processes</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-8">
                <div className="space-y-4">
                  {[
                    { label: "Trigger Event", color: "emerald" },
                    { label: "Process Data", color: "cyan" },
                    { label: "Approval Step", color: "blue" },
                    { label: "Execute Action", color: "purple" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={cn("w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-black font-bold", 
                        step.color === "emerald" && "from-emerald-400 to-emerald-500",
                        step.color === "cyan" && "from-cyan-400 to-cyan-500",
                        step.color === "blue" && "from-blue-400 to-blue-500",
                        step.color === "purple" && "from-purple-400 to-purple-500"
                      )}>
                        {i + 1}
                      </div>
                      <div className="flex-1 bg-black/50 rounded-lg p-4 border border-white/10">
                        <p className="font-semibold">{step.label}</p>
                      </div>
                      {i < 3 && (
                        <ArrowRight className="w-6 h-6 text-gray-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Version Control Section */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <GitBranch className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="font-semibold">v2.4.1</p>
                        <p className="text-sm text-gray-500">Current Version</p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <GitBranch className="w-6 h-6 text-gray-500" />
                      <div>
                        <p className="font-semibold text-gray-400">v2.4.0</p>
                        <p className="text-sm text-gray-600">Previous</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <GitBranch className="w-6 h-6 text-gray-500" />
                      <div>
                        <p className="font-semibold text-gray-400">v2.3.8</p>
                        <p className="text-sm text-gray-600">Archived</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Version Control
                </span>{" "}
                for Continuous Improvement
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Mind Platform integrates Version Control features to track changes, maintain data
                history, and ensure consistency across projects. Teams can roll back, compare, and
                synchronize updates easily—reducing errors and improving collaboration between
                analysts and developers.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This ensures comprehensive tracking of changes, a complete history, and the ability
                to instantly revert to a previous version, securing both your data and
                configurations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Platform Integration Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                One Platform. Multiple Environments.
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mind Platform supports multi-instance deployment, allowing each department or
              subsidiary to operate its own workspace—while remaining connected to the central
              ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Unification", icon: Layers, desc: "All critical enterprise data is centralized and cleaned once." },
              { title: "Deployment", icon: Cpu, desc: "Build 'Micro-Platforms' dedicated to each department or project." },
              { title: "Service", icon: Globe, desc: "Feed multiple applications from Mind Platform's secure infrastructure." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl p-8 border border-white/10"
              >
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-black/50 to-transparent rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4">Single Source of Truth</h3>
            <p className="text-gray-400 mb-6">
              For example, a company can create separate environments for HR, Finance, and
              Operations. Each environment has its own dashboards, members, and access rules. The
              central administrator can still monitor and manage all instances from one unified
              interface.
            </p>
            <p className="text-gray-400">
              This modular structure ensures flexibility, scalability, and data governance across
              the entire organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Ecosystem Section */}
      <section className="relative py-32 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore the{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Core Modules
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Interconnected modules, each serving a specific function within the ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Topics", desc: "Data organization and grouping" },
              { icon: BarChart3, title: "Dashboards", desc: "Visualization and performance tracking" },
              { icon: Layers, title: "Blueprints", desc: "Data structure design and standardization" },
              { icon: Globe, title: "Regions", desc: "Geographical or operational segmentation" },
              { icon: Building2, title: "OrgUnits", desc: "Organizational hierarchy and internal entities" },
              { icon: Users, title: "Members", desc: "User profiles and team management" },
              { icon: Lock, title: "Groups", desc: "Role-based access and collaboration units" },
              { icon: Settings, title: "Workflows", desc: "Automation and process management" },
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-gradient-to-br from-black/50 to-transparent rounded-xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105"
              >
                <module.icon className="w-10 h-10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">{module.title}</h3>
                <p className="text-sm text-gray-400">{module.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mt-12"
          >
            Each module integrates seamlessly with the others to create a fluid, intuitive experience
            for users at every level.
          </motion.p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Mind Platform?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Centralized data ecosystem",
                desc: "All your data in one secure, unified platform",
              },
              {
                icon: Workflow,
                title: "Process automation",
                desc: "Smart workflows that save time and reduce errors",
              },
              {
                icon: Shield,
                title: "Secure and scalable",
                desc: "Multi-environment system with enterprise-grade security",
              },
              {
                icon: Users,
                title: "Role-based collaboration",
                desc: "Governance tools that adapt to your organization",
              },
              {
                icon: Sparkles,
                title: "Modern UI/UX",
                desc: "Optimized for productivity and user experience",
              },
              {
                icon: TrendingUp,
                title: "Real-time insights",
                desc: "Make data-driven decisions faster than ever",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-emerald-400/30 transition-all">
                  <benefit.icon className="w-12 h-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 bg-gradient-to-b from-transparent via-emerald-950/30 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to transform your data into{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                intelligent decisions?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join hundreds of organizations already using Mind Platform to revolutionize their
              operations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShimmerButton
                className="text-lg px-8 py-4"
                shimmerColor="#10b981"
                background="linear-gradient(to right, #10b981, #06b6d4)"
              >
                <span className="font-semibold">Request a Demo</span>
              </ShimmerButton>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group">
                <span className="font-semibold">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300">
                <span className="font-semibold">Contact Our Team</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Mind Platform
                </span>
              </div>
              <p className="text-sm text-gray-400">
                The unified platform for data analysis, management, and visualization.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-emerald-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#about" className="hover:text-emerald-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#contact" className="hover:text-emerald-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Mind Platform. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
