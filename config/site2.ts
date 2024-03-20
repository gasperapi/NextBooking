export type SiteConfig = typeof siteConfig2;

export const siteConfig2 = {
	name: "NextBooking",
	description: "ระบบจองห้องพัก",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "จองห้องพัก",
      href: "/BookingForm",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Logout",
      href: "/api/auth/signout?callbackUrl=/",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/gasperapi/NextBooking",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
