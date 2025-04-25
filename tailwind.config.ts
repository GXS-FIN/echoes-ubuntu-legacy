
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Ubuntu-inspired color palette
				ubuntu: {
					// Earthy tones
					terracotta: '#C74E34',
					amber: '#ECAA53',
					clay: '#9E5E45',
					sand: '#E2C496',
					forest: '#2C5545',
					// Accent colors
					blue: '#477B9E',
					purple: '#7D5888',
					ochre: '#C4742E'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'slide-in': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-in',
				'slide-in': 'slide-in 0.6s ease-out'
			},
			backgroundImage: {
				'ubuntu-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjMuNSAzLjIgMS4zLjkuOS0xLjEgMS0xLjEgMi44IDAgMS45IDMuNSAzLjQgMy41IDcuOSAwIDQuNS0zLjUgNi45LTYuMiA3LjktMi43IDEuMS01LjMgMS40LTcuMi40LTEuOS0uOS0yLjMtMy41LS4yLTQuNCAyLjEtLjkgNC4yLTEuOCA0LjItMy44IDAtMi0uOS0yLjMtMi44LTMuMi0xLjktLjktMy4zLTQuMy0uNC01LjIgMi45LS44IDQuNi0zLjcgNy0zLjd6IiBzdHJva2U9IiNFMkM0OTYiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9IiNFMkM0OTYiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMjIgMzBjMC0xLjUgMS01IDMtNXM0IDIgNCAzLjVjMCAxLjUtLjUgMi41LTIgMi41cy0yLTItNC0yYy0yIDAtMS0yLjUtMS0yLjVzLTEgMi41LTIgMi41Yy0xIDAgMi0yIDItMXoiIHN0cm9rZT0iI0M3NEUzNCIgc3Ryb2tlLXdpZHRoPSIuNSIgZmlsbD0iI0M3NEUzNCIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
