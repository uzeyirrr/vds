'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, ChevronDown } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';

import { useScroll } from '@/components/ui/use-scroll';

interface MegaMenuLink {
	label: string;
	href: string;
	description?: string;
}

interface MegaMenuItem {
	label: string;
	href: string;
	hasMegaMenu?: boolean;
	megaMenuContent?: {
		title: string;
		links: MegaMenuLink[];
	}[];
}

export function Header() {
	const [open, setOpen] = React.useState(false);
	const [hoveredMenu, setHoveredMenu] = React.useState<string | null>(null);
	const [expandedMenu, setExpandedMenu] = React.useState<string | null>(null);

	const scrolled = useScroll(10);

	const menuItems: MegaMenuItem[] = [
		{
			label: 'Ana sayfa',
			href: '/',
		},
		{
			label: 'Tedavilerimiz',
			href: '/tedavilerimiz',
			hasMegaMenu: true,
			megaMenuContent: [
				{
					title: 'Tedavilerimiz',
					links: [
						{ label: 'Diş İmplantları', href: '/tedavilerimiz/dis-implantlari', description: 'Eksik dişler için kalıcı çözüm' },
						{ label: 'Diş Dolgusu Tedavisi', href: '/tedavilerimiz/dis-dolgusu-tedavisi', description: 'Çürük dişler için dolgu uygulamaları' },
						{ label: 'Kök Kanalı Tedavisi', href: '/tedavilerimiz/kok-kanali-tedavisi', description: 'Diş kurtarma tedavisi' },
						{ label: 'Diş Kaplama Çeşitleri', href: '/tedavilerimiz/dis-kaplama-cesitleri', description: 'Zirkonyum, porselen ve metal kaplamalar' },
						{ label: 'Diş Tedavi Rotası Planlama', href: '/tedavilerimiz/dis-tedavi-rotasi-planlama', description: 'Kişiye özel tedavi planlaması' },
					],
				},
			],
		},
		{
			label: 'Hakkımızda',
			href: '/hakkimizda',
			hasMegaMenu: true,
			megaMenuContent: [
				{
					title: 'Hakkımızda',
					links: [
						{ label: 'Klinik', href: '/hakkimizda/klinik', description: 'Klinik hakkında bilgiler' },
						{ label: 'Hakkımızda', href: '/hakkimizda', description: 'Hakkımızda bilgileri' },
						{ label: 'Ekibimiz', href: '/hakkimizda/ekibimiz', description: 'Tüm ekibimiz' },
					],
				},
			],
		},
		{
			label: 'Sağlık Rehberi',
			href: '/blog',
		},
		{
			label: 'Bize Ulaşın',
			href: '/iletisim',
		},
	];

	React.useEffect(() => {
		if (open) {
			// Disable scroll
			document.body.style.overflow = 'hidden';
		} else {
			// Re-enable scroll
			document.body.style.overflow = '';
		}

		// Cleanup when component unmounts (important for Next.js)
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow':
						scrolled && !open,
					'bg-background/90': open,
				},
			)}
		>
			<nav
				className={cn(
					'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
					{
						'md:px-2': scrolled,
					},
				)}
			>
				<a href="/" className="flex items-center">
					<Image 
						src="/logo.webp" 
						alt="Logo" 
						width={120} 
						height={40}
						className="h-8 w-auto"
					/>
				</a>

				<div className="hidden items-center gap-1 md:flex relative">
					{menuItems.map((item, i) => {
						const columnCount = item.megaMenuContent?.length || 0;
						const maxLinksPerColumn = Math.max(...(item.megaMenuContent?.map(col => col.links.length) || [0]));
						// İçeriğe göre dinamik genişlik: her kolon için ~200px, min 400px, max 800px
						const menuWidth = columnCount > 0 
							? Math.min(Math.max(columnCount * 200, 400), 800)
							: 400;
						
						return (
							<div
								key={i}
								className="relative"
								onMouseEnter={() => item.hasMegaMenu && setHoveredMenu(item.label)}
								onMouseLeave={(e) => {
									// Mega menu'ya geçiş yapılıyorsa kapatma
									const relatedTarget = e.relatedTarget as HTMLElement;
									if (relatedTarget && (
										relatedTarget.closest(`[data-mega-menu="${item.label}"]`) ||
										relatedTarget.closest(`[data-menu-bridge="${item.label}"]`)
									)) {
										return;
									}
									setHoveredMenu(null);
								}}
							>
								<a
									className={cn(
										buttonVariants({ variant: 'ghost' }),
										'flex items-center gap-1'
									)}
									href={item.href}
								>
									{item.label}
									{item.hasMegaMenu && (
										<ChevronDown className={cn(
											'h-3 w-3 transition-transform',
											hoveredMenu === item.label && 'rotate-180'
										)} />
									)}
								</a>
								
								{/* Görünmez köprü - mega menu ile buton arasındaki boşluğu kapatır */}
								{item.hasMegaMenu && hoveredMenu === item.label && (
									<div 
										data-menu-bridge={item.label}
										className="absolute top-full left-0 right-0 h-2 z-40"
										onMouseEnter={() => setHoveredMenu(item.label)}
									/>
								)}
								
								{/* Mega Menu */}
								{item.hasMegaMenu && hoveredMenu === item.label && (
									<div 
										data-mega-menu={item.label}
										className={cn(
											"absolute top-full bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50",
											// Sağdan taşmayı önlemek için: son menülerde sağa hizala
											i >= menuItems.length - 2 ? "right-0" : "left-0"
										)}
										style={{ 
											width: `${menuWidth}px`,
											top: 'calc(100% + 8px)'
										}}
										onMouseEnter={() => setHoveredMenu(item.label)}
										onMouseLeave={() => setHoveredMenu(null)}
									>
										<div className={cn(
											"grid gap-6",
											columnCount === 1 ? "grid-cols-1" : 
											columnCount === 2 ? "grid-cols-2" :
											columnCount === 3 ? "grid-cols-3" : "grid-cols-4"
										)}>
											{item.megaMenuContent?.map((column, colIdx) => (
												<div key={colIdx} className="min-w-0">
													<h3 className="font-semibold text-gray-900 mb-3 text-sm">
														{column.title}
													</h3>
													<ul className="space-y-2">
														{column.links.map((link, linkIdx) => (
															<li key={linkIdx}>
																<a
																	href={link.href}
																	className="block p-2 rounded-md hover:bg-green-50 transition-colors group"
																>
																	<div className="font-medium text-gray-900 group-hover:text-green-600 text-sm">
																		{link.label}
																	</div>
																	{link.description && (
																		<div className="text-xs text-gray-500 mt-1 line-clamp-2">
																			{link.description}
																		</div>
																	)}
																</a>
															</li>
														))}
													</ul>
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						);
					})}
					<Button size="icon" variant="outline" aria-label="Dil değiştir">
						<Globe className="h-4 w-4" />
					</Button>

					<Button>Randevu Al</Button>
				</div>

				<Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<div
				className={cn(
					'bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-4',
					)}
				>
					<div className="grid gap-y-1">
						{menuItems.map((item) => (
							<div key={item.label}>
								{item.hasMegaMenu ? (
									<>
										<button
											onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
											className={buttonVariants({
												variant: 'ghost',
												className: 'justify-between w-full',
											})}
										>
											<span>{item.label}</span>
											<ChevronDown className={cn(
												'h-4 w-4 transition-transform',
												expandedMenu === item.label && 'rotate-180'
											)} />
										</button>
										{expandedMenu === item.label && item.megaMenuContent && (
											<div className="ml-4 mt-1 space-y-2 pb-2 border-l-2 border-green-100 pl-3">
												{item.megaMenuContent.flatMap((column) => 
													column.links.map((link, linkIdx) => (
														<a
															key={`${column.title}-${linkIdx}`}
															href={link.href}
															onClick={() => setOpen(false)}
															className="block text-sm text-gray-700 hover:text-green-600 py-2 px-2 rounded-md hover:bg-green-50 transition-colors font-medium"
														>
															{link.label}
														</a>
													))
												)}
											</div>
										)}
									</>
								) : (
									<a
										className={buttonVariants({
											variant: 'ghost',
											className: 'justify-start w-full',
										})}
										href={item.href}
										onClick={() => setOpen(false)}
									>
										{item.label}
									</a>
								)}
							</div>
						))}
					</div>
					<div className="flex flex-col gap-2">
						<Button variant="outline" className="w-full" aria-label="Dil değiştir">
							<Globe className="h-4 w-4 mr-2" />
							<span>Dil</span>
						</Button>
						<Button className="w-full">Randevu Al</Button>
					</div>
				</div>
			</div>
		</header>
	);
}

