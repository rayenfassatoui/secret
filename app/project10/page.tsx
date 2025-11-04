import { Background } from "./components/Background";
import { FeatureSection } from "./components/FeatureSection";
import { HeroSection } from "./components/HeroSection";
import { LogoStrip } from "./components/LogoStrip";
import { Navbar } from "./components/Navbar";

export default function Page() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-[#05090a] text-white">
			<Background />
			<Navbar />
			<main>
				<HeroSection />
				<LogoStrip />
				<FeatureSection />
			</main>
			<footer className="relative z-10 border-t border-white/10 bg-black/60 py-10 text-center text-xs text-white/40">
				© {new Date().getFullYear()} Index. All rights reserved.
			</footer>
		</div>
	);
}
