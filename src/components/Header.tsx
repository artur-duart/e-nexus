import { Logo } from './Logo'

export function Header() {
	return (
		<header className="w-full py-5 flex items-center justify-center bg-blue-900 border-b border-gray-300">
			<Logo />
		</header>
	)
}
