import Link from "next/link"
import {
    ArrowRight,
    BarChart3,
    Boxes,
    Building2,
    Cable,
    Filter,
    GitBranch,
    Globe,
    Grid2X2,
    Layers,
    LineChart,
    Network,
    ShieldCheck,
    Sparkles,
    Users,
    Zap,
} from "lucide-react"

import AnimatedGradientText from "@/components/ui/animated-gradient-text"
import DotPattern from "@/components/ui/dot-pattern"
import ShimmerButton from "@/components/ui/shimmer-button"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
	{ label: "Overview", href: "#hero" },
	{ label: "Platform", href: "#about" },
	{ label: "Domains", href: "#domains" },
	{ label: "Workflow", href: "#workflow" },
	{ label: "Benefits", href: "#benefits" },
	{ label: "Contact", href: "#contact" },
]

const logos = ["Hyperloop", "DataNova", "CircuitOps", "LumenEdge", "PulseOne"]

const audiences = [
	{
		title: "Medium to Large Enterprises",
		description:
			"Achieve a 360-degree operational view with automated oversight across revenue, risk, and compliance pillars.",
	},
	{
		title: "Government Institutions",
		description:
			"Coordinate complex departmental ecosystems securely while maintaining transparent reporting and governance.",
	},
	{
		title: "Managers and Analysts",
		description:
			"Equip every stakeholder with decision-ready insights and role-aware access tailored to their workflows.",
	},
]

const domains = [
	{
		title: "Data Management",
		description:
			"Model data lifecycles with reusable blueprints, automated ingestion, and lineage visibility.",
		icon: Boxes,
	},
	{
		title: "Data Analyzing",
		description:
			"Compose dynamic dashboards, narratives, and predictive signals for strategic execution.",
		icon: BarChart3,
	},
	{
		title: "Structure Administration",
		description:
			"Mirror regional entities, org units, and partner ecosystems with a transparent hierarchy.",
		icon: Building2,
	},
	{
		title: "Access Control",
		description:
			"Grant permissions, govern groups, and audit activity with enterprise-grade trust.",
		icon: ShieldCheck,
	},
]

const modules = [
	{
		name: "Topics",
		description: "Curate knowledge domains and unify data collections by business context.",
		Icon: Network,
		className: "lg:col-span-1",
	},
	{
		name: "Dashboards",
		description: "Monitor performance in real time with explainable metrics and narratives.",
		Icon: LineChart,
		className: "lg:col-span-1",
	},
	{
		name: "Blueprints",
		description: "Design repeatable schemas and validations that keep every pipeline aligned.",
		Icon: Grid2X2,
		className: "lg:col-span-1 lg:row-span-2",
	},
	{
		name: "Regions",
		description: "Segment operations geographically while retaining centralized command.",
		Icon: Globe,
		className: "lg:col-span-1",
	},
	{
		name: "OrgUnits",
		description: "Reflect internal hierarchies and partnerships with clarity and governance.",
		Icon: Layers,
		className: "lg:col-span-1",
	},
	{
		name: "Members",
		description: "Administer user profiles, onboarding, and accountability in one pane.",
		Icon: Users,
		className: "lg:col-span-1",
	},
	{
		name: "Groups",
		description: "Assemble collaboration squads, grant scoped access, and orchestrate delivery.",
		Icon: Cable,
		className: "lg:col-span-2",
	},
]

const benefits = [
	"Centralized data ecosystem",
	"Process automation and smart workflows",
	"Secure and scalable multi-environment system",
	"Role-based collaboration and governance",
	"Modern UI and UX optimized for productivity",
]

export default function Project9Page() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-[#05070f] text-neutral-100">
			<DotPattern className="pointer-events-none opacity-20 [mask-image:radial-gradient(circle_at_top,white,transparent_70%)]" />
			<div className="absolute left-[-10%] top-[-10%] h-[480px] w-[480px] rounded-full bg-emerald-500/20 blur-3xl" />
			<div className="absolute right-[-20%] top-40 h-[620px] w-[620px] rounded-full bg-sky-500/15 blur-3xl" />
			<div className="absolute inset-x-0 bottom-[-30%] h-[520px] bg-[radial-gradient(circle_at_bottom,_rgba(34,197,94,0.2),_transparent_70%)]" />

			<main className="relative mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-10 lg:px-16">
				<header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-3">
						<div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/60 bg-emerald-500/20">
							<Sparkles className="h-5 w-5 text-emerald-300" />
						</div>
						<div className="flex flex-col">
							<span className="text-lg font-semibold tracking-tight">Mind Platform</span>
							<span className="text-xs uppercase tracking-[0.32em] text-emerald-200/80">Data Intelligence</span>
						</div>
					</div>
					<nav className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
						{navigation.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-neutral-50"
							>
								{item.label}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-2">
						<Button variant="ghost" className="text-neutral-300">
							Login
						</Button>
						<ShimmerButton shimmerColor="#22d3ee" background="linear-gradient(120deg,#22d3ee,#10b981)">
							Get a Demo
						</ShimmerButton>
					</div>
				</header>

				<section id="hero" className="relative grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
					<div className="space-y-10">
						<AnimatedGradientText className="border border-white/10 bg-white/5 text-white shadow-none backdrop-blur">
							Trusted by analysts, decision-makers, and technical managers
						</AnimatedGradientText>
						<div className="space-y-6">
							<h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
								A unified platform for data analysis, management, and visualization.
							</h1>
							<p className="max-w-xl text-lg text-neutral-300">
								Empower your organization with intelligent tools to automate processes, centralize operations, and make smarter decisions.
							</p>
						</div>
						<div className="flex flex-wrap items-center gap-4">
							<ShimmerButton shimmerColor="#34d399" background="linear-gradient(135deg,#34d399,#0ea5e9)">
								Start Free Demo
							</ShimmerButton>
							<Button variant="outline" className="border-white/20 bg-white/5 text-neutral-100 hover:bg-white/15">
								Explore the Platform
							</Button>
							<span className="flex items-center gap-2 text-sm text-emerald-200/80">
								<Zap className="h-4 w-4" />
								We raised $1M as pre-seed fund
							</span>
						</div>
					</div>
					<div className="relative">
						<div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-emerald-500/20 via-transparent to-sky-500/20 blur-3xl" />
						<div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/50 p-8 shadow-[0_60px_120px_-80px_rgba(34,197,94,0.6)]">
							<div className="grid gap-6">
								<div className="flex items-center justify-between">
									<Badge variant="outline" className="border-white/15 bg-white/10 text-white/90">
										Live Intelligence
									</Badge>
									<span className="flex items-center gap-2 text-xs text-neutral-400">
										<GitBranch className="h-4 w-4" />
										Version synced
									</span>
								</div>
								<div className="grid gap-4 md:grid-cols-2">
									<Card className="border-white/10 bg-white/5 p-0">
										<CardContent className="space-y-4 p-5">
											<div className="flex items-center justify-between text-xs text-neutral-400">
												<span>Pipeline Health</span>
												<span className="text-emerald-300">+6.8%</span>
											</div>
											<div className="grid grid-cols-6 items-end gap-1">
												{[12, 20, 16, 28, 24, 34].map((value) => (
													<span
														key={`bar-${value}`}
														className="block rounded-full bg-gradient-to-t from-emerald-600/25 via-emerald-400/80 to-emerald-200"
														style={{ height: `${value + 20}px` }}
													/>
												))}
											</div>
										</CardContent>
									</Card>
									<Card className="border-white/10 bg-white/[0.04] p-0">
										<CardContent className="space-y-4 p-5">
											<div className="flex items-center gap-3">
												<div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
													<LineChart className="h-5 w-5" />
												</div>
												<div className="flex flex-col text-sm">
													<span className="text-neutral-300">Insight Momentum</span>
													<span className="text-lg font-semibold text-white">+32%</span>
												</div>
											</div>
											<p className="text-xs text-neutral-400">
												Intelligent alerts surface anomalies instantly across the data fabric.
											</p>
										</CardContent>
									</Card>
								</div>
								<div className="grid gap-4 sm:grid-cols-2">
									{["Collect", "Clean", "Store", "Visualize"].map((step) => (
										<div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4">
											<span className="text-sm font-medium text-emerald-200/90">
												{step}
											</span>
											<p className="mt-2 text-xs text-neutral-300">
												Automated connectors, rigorous quality checks, and instant availability across teams.
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="flex flex-wrap items-center gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
					{logos.map((logo) => (
						<span key={logo}>{logo}</span>
					))}
				</section>

				<section id="about" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-6">
						<Badge variant="outline" className="border-emerald-400/30 bg-emerald-400/15 text-emerald-100">
							What is Mind Platform?
						</Badge>
						<h2 className="text-3xl font-semibold sm:text-4xl">
							Mind Platform: The digital brain for your organization.
						</h2>
						<p className="text-neutral-300">
							Mind Platform is a comprehensive environment that enables teams to collect, clean, store, and visualize data while managing structures, teams, and access permissions within a single ecosystem.
						</p>
						<p className="text-neutral-400">
							It bridges technology and business needs so leadership can accelerate decision-making, orchestrate collaboration, and automate operations end-to-end.
						</p>
						<div className="flex items-center gap-2 text-sm text-emerald-200/80">
							<Users className="h-4 w-4" />
							Trusted by analysts, decision-makers, and technical managers for its reliability and integration.
						</div>
					</div>
					<Card className="border-white/10 bg-black/50">
						<CardHeader>
							<CardTitle className="text-xl text-neutral-100">Project Goal</CardTitle>
							<CardDescription className="text-neutral-400">
								Create a comprehensive environment that enables organizations to:
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4 text-sm text-neutral-300">
							{[
								"Collect, clean, store, and visualize data across every domain",
								"Manage organizational structures, roles, and user access centrally",
								"Centralize automation modules to orchestrate internal operations",
							].map((statement) => (
								<div key={statement} className="flex items-start gap-3">
									<ArrowRight className="mt-1 h-4 w-4 text-emerald-300" />
									<span>{statement}</span>
								</div>
							))}
						</CardContent>
					</Card>
				</section>

				<section id="audience" className="space-y-10">
					<div className="space-y-4">
						<Badge variant="outline" className="border-white/10 bg-white/10 text-emerald-100">
							Designed for data-driven organizations
						</Badge>
						<h3 className="text-3xl font-semibold">
							Built for teams that demand excellence and centralization.
						</h3>
						<p className="max-w-3xl text-neutral-300">
							Whether you are scaling across departments or governing national infrastructures, Mind Platform adapts to your hierarchy and workflow with precise, customizable tooling.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{audiences.map((audience) => (
							<Card key={audience.title} className="border-white/10 bg-white/[0.04]">
								<CardHeader>
									<CardTitle className="text-lg text-neutral-100">{audience.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-neutral-300">{audience.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section id="domains" className="space-y-12">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
						<div className="space-y-3">
							<Badge variant="outline" className="border-emerald-400/30 bg-emerald-500/10 text-emerald-100">
								Four core functional domains
							</Badge>
							<h3 className="text-3xl font-semibold">Architected to scale intelligence end-to-end.</h3>
							<p className="max-w-2xl text-neutral-300">
								Each domain interlocks to build a resilient foundation, from data onboarding to governed decision-making.
							</p>
						</div>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						{domains.map((domain) => (
							<Card key={domain.title} className="border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent">
								<CardHeader>
									<div className="flex items-center gap-3">
										<domain.icon className="h-5 w-5 text-emerald-300" />
										<CardTitle className="text-lg text-neutral-100">{domain.title}</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-neutral-300">{domain.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section id="workflow" className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
					<Card className="border-white/10 bg-white/[0.04]">
						<CardHeader>
							<div className="flex items-center gap-3">
								<Filter className="h-5 w-5 text-emerald-300" />
								<CardTitle className="text-2xl text-neutral-100">
									Streamline operations with the Workflow Manager
								</CardTitle>
							</div>
						</CardHeader>
						<CardContent className="space-y-4 text-neutral-300">
							<p>
								Automate repetitive business processes and coordinate departments visually. Build, execute, and monitor workflows faster with a drag-and-compose experience.
							</p>
							<ul className="space-y-2 text-sm">
								{["Data processing pipelines", "Task automation", "Multi-step approval processes"].map((item) => (
									<li key={item} className="flex items-start gap-2">
										<ArrowRight className="mt-1 h-4 w-4 text-emerald-200" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
					<Card className="border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/15">
						<CardHeader>
							<div className="flex items-center gap-3">
								<GitBranch className="h-5 w-5 text-emerald-300" />
								<CardTitle className="text-2xl text-neutral-100">Version control for continuous improvement</CardTitle>
							</div>
						</CardHeader>
						<CardContent className="space-y-4 text-neutral-300">
							<p>
								Track every change across data, reports, and configurations with integrated version control. Roll back instantly, compare iterations, and synchronize updates without friction.
							</p>
							<p>
								Maintain a complete history that protects data integrity, accelerates collaboration, and keeps every delivery aligned.
							</p>
						</CardContent>
					</Card>
				</section>

				<section id="integration" className="space-y-10">
					<div className="space-y-4">
						<Badge variant="outline" className="border-white/10 bg-white/10 text-emerald-100">
							One platform. Multiple environments.
						</Badge>
						<h3 className="text-3xl font-semibold">
							Unlimited applications, one reliable data base.
						</h3>
						<p className="max-w-3xl text-neutral-300">
							Deploy Mind Platform as the single source of truth. Spin up micro-platforms for each department or subsidiary while staying connected to the same secure, cleansed core data.
						</p>
					</div>
					<Card className="border-white/10 bg-white/[0.03]">
						<CardContent className="space-y-4 text-sm text-neutral-300">
							<p>
								Each environment operates autonomously yet remains governed centrally, eliminating fragmented migrations and duplicate pipelines.
							</p>
							<ul className="space-y-2">
								{[
									"Create dedicated environments for HR, Finance, and Operations",
									"Define dashboards, members, and access rules per workspace",
									"Retain unified oversight for administrators across every instance",
								].map((item) => (
									<li key={item} className="flex items-start gap-2">
										<ArrowRight className="mt-1 h-4 w-4 text-emerald-200" />
										<span>{item}</span>
									</li>
								))}
							</ul>
							<p>
								This modular architecture guarantees data governance, scalability, and service reliability across the entire organization.
							</p>
						</CardContent>
					</Card>
				</section>

				<section id="ecosystem" className="space-y-10">
					<div className="space-y-4">
						<Badge variant="outline" className="border-emerald-400/30 bg-emerald-400/10 text-emerald-100">
							Explore the core modules
						</Badge>
						<p className="max-w-2xl text-neutral-300">
							Interconnected modules power collaboration across every layer. Each module is purpose-built and seamlessly integrated for unified intelligence.
						</p>
					</div>
					<BentoGrid className="auto-rows-[18rem] gap-5">
						{modules.map((module) => (
							<BentoCard
								key={module.name}
								name={module.name}
								description={module.description}
								Icon={module.Icon}
								href="#"
								cta="Discover"
								className={cn(
									"border border-white/10 bg-black/50 text-neutral-100",
									module.className,
								)}
								background={
									<div className="absolute inset-0 overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-transparent" />
										<div className="absolute -bottom-12 right-0 h-44 w-44 rounded-full bg-emerald-500/20 blur-3xl" />
									</div>
								}
							/>
						))}
					</BentoGrid>
				</section>

				<section id="benefits" className="space-y-6">
					<h3 className="text-3xl font-semibold">Why choose Mind Platform?</h3>
					<div className="grid gap-4 sm:grid-cols-2">
						{benefits.map((benefit) => (
							<div
								key={benefit}
								className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-neutral-200"
							>
								<ArrowRight className="h-4 w-4 text-emerald-300" />
								<span>{benefit}</span>
							</div>
						))}
					</div>
				</section>

				<section id="contact" className="overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 via-black/60 to-sky-500/20 p-10">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
						<div className="space-y-4">
							<h3 className="text-3xl font-semibold text-white">
								Ready to transform your data into intelligent decisions?
							</h3>
							<p className="max-w-xl text-neutral-200">
								Experience unified governance, cross-platform visibility, and automation tailored to your organization.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row">
							<ShimmerButton shimmerColor="#bbf7d0" background="linear-gradient(135deg,#34d399,#0ea5e9)">
								Request a Demo
							</ShimmerButton>
							<Button variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20">
								Get Started
							</Button>
							<Button variant="ghost" className="text-emerald-100 hover:bg-white/10">
								Contact Our Team
							</Button>
						</div>
					</div>
					<div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-white/20 pt-6 text-xs text-neutral-300">
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "About", href: "#about" },
								{ label: "Features", href: "#domains" },
								{ label: "Pricing", href: "#benefits" },
								{ label: "Support", href: "#workflow" },
								{ label: "Login", href: "#" },
							].map((link) => (
								<Link key={link.label} href={link.href} className="hover:text-white">
									{link.label}
								</Link>
							))}
						</div>
						<div className="flex items-center gap-4 text-neutral-400">
							<Link href="#" className="hover:text-white">
								LinkedIn
							</Link>
							<Link href="#" className="hover:text-white">
								GitHub
							</Link>
							<Link href="mailto:info@mindplatform.ai" className="hover:text-white">
								Email
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
