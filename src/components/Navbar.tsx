'use client';

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'Alert Dialog',
		href: '/docs/primitives/alert-dialog',
		description: 'A modal dialog that interrupts the user with important content and expects a response.',
	},
	{
		title: 'Hover Card',
		href: '/docs/primitives/hover-card',
		description: 'For sighted users to preview content available behind a link.',
	},
	{
		title: 'Progress',
		href: '/docs/primitives/progress',
		description:
			'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
	},
	{
		title: 'Scroll-area',
		href: '/docs/primitives/scroll-area',
		description: 'Visually or semantically separates content.',
	},
	{
		title: 'Tabs',
		href: '/docs/primitives/tabs',
		description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
	},
	{
		title: 'Tooltip',
		href: '/docs/primitives/tooltip',
		description:
			'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
	},
];

export function NavigationMenuPrimary() {
	return (
		<div className="w-full  flex justify-center items-start pt-5">
			<NavigationMenu viewport={false}>
				<NavigationMenuList className="flex gap-12 border-2 border-[#d6d1d1] rounded-3xl py-3 px-28 bg-white">
					<NavigationMenuItem>Home</NavigationMenuItem>
					<NavigationMenuItem>Projects</NavigationMenuItem>
					<NavigationMenuItem>Contact</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
