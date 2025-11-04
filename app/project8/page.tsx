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
    Network,
    ShieldCheck,
    Users,
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
	{ label: "Overview", href: "#overview" },
	{ label: "Platform", href: "#about" },
	{ label: "Domains", href: "#domains" },
	{ label: "Workflow", href: "#workflow" },
	{ label: "Benefits", href: "#benefits" },
	{ label: "Contact", href: "#contact" },
]

const logos = [
	"DataPulse",
	"Flowlytics",
	"InsightOps",
	"Cortex Labs",
	"VectorIQ",
]

const audiences = [
	{
		title: "Medium to Large Enterprises",
		description:
			"Gain a 360 view across business domains and automate mission-critical processes with unified governance.",
	},
	{
		title: "Government Institutions",
		description:
			"Coordinate complex departmental structures and data flows while keeping compliance and oversight in one console.",
	},
	{
		title: "Managers and Analysts",
		description:
			"Equip leadership, analysts, and technical teams with reliable analytics and role-aware access controls.",
	},
]

const domains = [
	{
		title: "Data Management",
		description:
			"Control source data lifecycles with Blueprints, automated ingestion, and quality enforcement in Platform Mind.",
		icon: Boxes,
	},
	{
		title: "Data Analyzing",
		description:
			"Build dashboards and dynamic reports for immediate insights, forecasting, and strategic planning.",
		icon: BarChart3,
	},
	{
		title: "Structure Administration",
		description:
			"Model regions, org units, and partner networks through a transparent hierarchy that mirrors reality.",
		icon: Building2,
	},
	{
		title: "Access Control",
		description:
			"Configure granular permissions for members, groups, and services with audit-ready governance.",
		icon: ShieldCheck,
	},
]

const modules = [
	{
		name: "Topics",
		description: "Organize knowledge domains and data collections with flexible tagging and ownership.",
		Icon: Network,
		className: "lg:col-span-1",
	},
	{
		name: "Dashboards",
		description: "Visualize KPIs and performance signals with real-time refresh and narrative context.",
		Icon: BarChart3,
		className: "lg:col-span-2",
	},
	{
		name: "Blueprints",
		description: "Design reusable data structures that standardize ingestion, validation, and reuse.",
		Icon: Grid2X2,
		className: "lg:col-span-1 lg:row-span-2",
	},
	{
		name: "Regions",
		description: "Segment operations geographically or operationally while keeping oversight centralized.",
		Icon: Globe,
		className: "lg:col-span-1",
	},
	{
		name: "OrgUnits",
		description: "Mirror internal hierarchies, subsidiaries, and partner ecosystems with clarity.",
		Icon: Building2,
		className: "lg:col-span-1",
	},
	{
		name: "Members",
		description: "Manage user profiles, responsibilities, and onboarding with traceable activity history.",
		Icon: Users,
		className: "lg:col-span-1",
	},
	{
		name: "Groups",
		description: "Create collaboration units, assign roles, and tailor toolsets to each workflow stage.",
		Icon: Cable,
		className: "lg:col-span-2",
	},
]

const benefits = [
	"Centralized data ecosystem",
	"Process automation and smart workflows",
	"Secure and scalable multi-environment system",
	"Role-based collaboration and governance",
	"Modern UI/UX optimized for productivity",
]

export default function Project8Page() {
	return (
		<div className="relative overflow-hidden bg-[#050910] text-neutral-100">
			<DotPattern className="pointer-events-none opacity-10 [mask-image:radial-gradient(circle_at_top,white,transparent_65%)]" />
			<div className="absolute -top-40 left-0 h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-3xl" />
			<div className="absolute -right-48 top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
			<div className="absolute inset-x-0 bottom-0 h-[320px] bg-[radial-gradient(circle_at_bottom,_rgba(34,197,94,0.15),_transparent_65%)]" />

			<main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-12">
				<header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/50">
							<span className="text-lg font-semibold text-emerald-300">MP</span>
						</div>
						<div className="flex flex-col">
							<span className="text-lg font-semibold">Mind Platform</span>
							<span className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">Data Intelligence</span>
						</div>
					</div>
					<nav className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
						{navigation.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="rounded-full px-3 py-1 transition hover:bg-white/5 hover:text-neutral-50"
							>
								{item.label}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-2">
						<Button variant="ghost" className="text-neutral-300">
							Login
						</Button>
						<ShimmerButton shimmerColor="#34d399" background="linear-gradient(90deg,#10b981,#047857)">
							Get a Demo
						</ShimmerButton>
					</div>
				</header>

				<section id="overview" className="relative flex flex-col gap-10">
					<AnimatedGradientText className="border border-white/10 bg-white/5 text-white shadow-none backdrop-blur">
						Trusted by analysts, decision-makers, and technical managers
					</AnimatedGradientText>
					<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
									A unified platform for data analysis, management, and visualization.
								</h1>
								<p className="max-w-xl text-lg text-neutral-300">
									Empower your organization with intelligent tools to automate processes, centralize operations, and make smarter decisions.
								</p>
							</div>
							<div className="flex flex-wrap items-center gap-4">
								<ShimmerButton shimmerColor="#22c55e" background="linear-gradient(120deg,#22c55e,#0ea5e9)">
									Start Free Demo
								</ShimmerButton>
								<Button variant="outline" className="border-white/15 bg-white/5 text-neutral-100 hover:bg-white/10">
									Explore the Platform
								</Button>
								<span className="flex items-center gap-2 text-sm text-emerald-200/80">
									<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
									We raised $1M as pre-seed fund
								</span>
							</div>
						</div>
						<div className="relative">
							{/* Abstract data visualization block */}
							<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-8 shadow-[0_40px_80px_-60px_rgba(16,185,129,0.45)]">
								<div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
								<div className="absolute -bottom-24 right-0 h-52 w-52 rounded-full bg-sky-500/20 blur-3xl" />
								<div className="relative space-y-6">
									<div className="flex flex-wrap items-center justify-between gap-3">
										<Badge variant="outline" className="border-white/15 bg-white/10 text-white/90">
											Data Flow
										</Badge>
										<div className="flex items-center gap-2 text-xs text-neutral-400">
											<GitBranch className="h-4 w-4" />
											<span>Version synced</span>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-4">
										{["Collect", "Clean", "Store", "Visualize"].map((step) => (
											<div
												key={step}
												className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4"
											>
												<span className="text-sm font-medium text-emerald-200/90">
													{step}
												</span>
												<p className="text-xs text-neutral-300">
													Automated connectors, quality rules, and instant availability.
												</p>
											</div>
										))}
									</div>
									<div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-4">
										<div>
											<p className="text-sm text-neutral-400">Live insight momentum</p>
											<p className="text-2xl font-semibold text-emerald-200">+32%</p>
										</div>
										<div className="grid w-24 grid-cols-4 items-end gap-1">
											{[14, 22, 18, 32, 28, 35, 30, 40].map((value, index) => (
												<span
													key={`${value}-${index}`}
													className="block rounded-full bg-gradient-to-t from-emerald-500/20 via-emerald-400/60 to-emerald-200"
													style={{ height: `${value}px` }}
												/>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-6 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-sm text-neutral-400">
						{logos.map((logo) => (
							<span key={logo} className="tracking-[0.3em] text-xs uppercase text-neutral-500">
								{logo}
							</span>
						))}
					</div>
				</section>

				<section id="about" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-6">
						<Badge variant="outline" className="border-emerald-400/30 bg-emerald-400/10 text-emerald-200">
							What is Mind Platform?
						</Badge>
						<h2 className="text-3xl font-semibold sm:text-4xl">
							Mind Platform: The digital brain for your organization.
						</h2>
						<p className="text-neutral-300">
							Mind Platform is a comprehensive environment to collect, clean, store, and visualize data while structuring teams and access permissions in a single ecosystem. It bridges technology and business needs, enabling faster decision-making and seamless data-driven collaboration.
						</p>
						<p className="text-neutral-400">
							A unified platform for data analysis, management, and visualization, designed for organizations seeking to automate processes, centralize information, and enhance decision-making.
						</p>
						<div className="flex items-center gap-2 text-sm text-emerald-200/80">
							<Users className="h-4 w-4" />
							Trusted by analysts, decision-makers, and technical managers for its reliability and integration.
						</div>
					</div>
					<Card className="border-white/10 bg-black/40">
						<CardHeader>
							<CardTitle className="text-xl text-neutral-100">Project Goal</CardTitle>
							<CardDescription className="text-neutral-400">
								Create a comprehensive environment that enables organizations to:
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4 text-sm text-neutral-300">
							<div className="flex items-start gap-3">
								<ArrowRight className="mt-1 h-4 w-4 text-emerald-300" />
								<span>Collect, clean, store, and visualize data with shared standards.</span>
							</div>
							<div className="flex items-start gap-3">
								<ArrowRight className="mt-1 h-4 w-4 text-emerald-300" />
								<span>Manage organizational structures, hierarchy, and user access centrally.</span>
							</div>
							<div className="flex items-start gap-3">
								<ArrowRight className="mt-1 h-4 w-4 text-emerald-300" />
								<span>Automate internal management modules across departments.</span>
							</div>
						</CardContent>
					</Card>
				</section>

				<section id="audience" className="space-y-10">
					<div className="space-y-4">
						<Badge variant="outline" className="border-white/10 bg-white/5 text-emerald-100">
							Designed for data-driven organizations
						</Badge>
						<h3 className="text-3xl font-semibold">Built for teams that demand excellence and centralization.</h3>
						<p className="max-w-3xl text-neutral-300">
							From medium-to-large enterprises to public institutions, Mind Platform adapts to the hierarchy, governance, and workflows your organization already uses, delivering tailored tooling for each role.
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
							<Badge variant="outline" className="border-white/10 bg-emerald-500/10 text-emerald-100">
								Four core functional domains
							</Badge>
							<h3 className="text-3xl font-semibold">Architected to scale data intelligence end-to-end.</h3>
							<p className="max-w-2xl text-neutral-300">
								Each domain interlocks to create a resilient foundation from data onboarding to governance and actionable insight delivery.
							</p>
						</div>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						{domains.map((domain) => (
							<Card key={domain.title} className="border-white/10 bg-gradient-to-br from-white/5 to-transparent">
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

				<section id="workflow" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
					<Card className="border-white/10 bg-white/[0.03]">
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
								Automate repetitive business processes, orchestrate departmental collaboration, and monitor execution visually. Workflow Manager gives teams an end-to-end builder to design, execute, and refine workflows fast.
							</p>
							<ul className="space-y-2 text-sm text-neutral-300">
								{[
									"Data processing pipelines",
									"Task automation",
									"Multi-step approval processes",
								].map((item) => (
									<li key={item} className="flex items-start gap-2">
										<ArrowRight className="mt-1 h-4 w-4 text-emerald-200" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
					<Card className="border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10">
						<CardHeader>
							<div className="flex items-center gap-3">
								<GitBranch className="h-5 w-5 text-emerald-300" />
								<CardTitle className="text-2xl text-neutral-100">Version control for continuous improvement</CardTitle>
							</div>
						</CardHeader>
						<CardContent className="space-y-4 text-neutral-300">
							<p>
								Track changes, maintain data history, and ensure consistency across every project. Mind Platform integrates version control across data, reports, and configuration layers, enabling instant rollback and synchronization.
							</p>
							<p>
								Teams reduce errors, compare iterations, and collaborate confidently with a complete audit trail that protects both data integrity and operational logic.
							</p>
						</CardContent>
					</Card>
				</section>

				<section id="integration" className="space-y-10">
					<div className="space-y-4">
						<Badge variant="outline" className="border-white/10 bg-white/5 text-emerald-100">
							One platform, multiple environments
						</Badge>
						<h3 className="text-3xl font-semibold">
							Unlimited applications, one reliable data base.
						</h3>
						<p className="max-w-3xl text-neutral-300">
							Deploy Mind Platform as the single source of truth for the entire enterprise. Create and manage micro-platforms per department while leveraging the same cleansed, secured data core.
						</p>
					</div>
					<Card className="border-white/10 bg-white/[0.03]">
						<CardContent className="space-y-4 text-sm text-neutral-300">
							<p>
								Each department or subsidiary operates its workspace connected to the central ecosystem. Feed multiple applications and interfaces without complex migrations thanks to shared infrastructure.
							</p>
							<ul className="space-y-2">
								{[
									"Create separate environments for HR, Finance, and Operations",
									"Define dashboards, members, and access rules per environment",
									"Maintain centralized oversight for administrators across all instances",
								].map((item) => (
									<li key={item} className="flex items-start gap-2">
										<ArrowRight className="mt-1 h-4 w-4 text-emerald-200" />
										<span>{item}</span>
									</li>
								))}
							</ul>
							<p>
								The modular structure secures flexibility, governance, and scalability without duplicating data pipelines or risking inconsistencies.
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
							Interconnected modules drive a fluid experience across every level of the platform. Each module is purpose-built and seamlessly integrated for collaborative intelligence.
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
									"border border-white/10 bg-black/40 text-neutral-100",
									module.className,
								)}
								background={
									<div className="absolute inset-0 overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
										<div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
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
								className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-neutral-200"
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
								Unlock centralized governance, automated workflows, and cross-platform visibility with a demo tailored to your organization.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row">
							<ShimmerButton shimmerColor="#bbf7d0" background="linear-gradient(120deg,#34d399,#0ea5e9)">
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
