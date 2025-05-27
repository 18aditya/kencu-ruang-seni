
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
				'2xl': '1280px'
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
					DEFAULT: '#A91E22', // Kencu Red
					foreground: '#FBFAF7'
				},
				secondary: {
					DEFAULT: '#1E1E1E', // Charcoal Black
					foreground: '#FBFAF7'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#8C8C8C', // Muted Gray
					foreground: '#1E1E1E'
				},
				accent: {
					DEFAULT: '#C9A25C', // Brass Gold
					foreground: '#1E1E1E'
				},
				popover: {
					DEFAULT: '#FBFAF7',
					foreground: '#1E1E1E'
				},
				card: {
					DEFAULT: '#FBFAF7',
					foreground: '#1E1E1E'
				},
				// Custom gallery colors
				beige: '#F5EFE6', // Warm Beige
				'off-white': '#FBFAF7',
				'kencu-red': '#A91E22',
				'brass-gold': '#C9A25C',
				'charcoal': '#1E1E1E',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
				'dm-sans': ['DM Sans', 'sans-serif'],
			},
			fontSize: {
				'h1': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
				'h2': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
				'h3': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
				'body': ['18px', { lineHeight: '1.6' }],
			},
			spacing: {
				'section': '80px',
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
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'zoom-in': {
					'0%': {
						transform: 'scale(1)'
					},
					'100%': {
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'zoom-in': 'zoom-in 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;