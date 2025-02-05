<script lang="ts">
	import { getTailwindBreakpoint } from '$lib/utils';
	import { browser } from '$app/environment';
	import { SiDiscord, SiGithub, SiLinkedin } from '@icons-pack/svelte-simple-icons';
	import { ChevronsDown } from 'lucide-svelte';
	import config from '../config.json';
</script>

<main class="flex h-screen flex-col items-center justify-center space-y-2">
	<h1
		class="bg-gradient-to-r from-[#0077FF] to-[#FF00FB] bg-clip-text text-4xl font-bold uppercase italic text-transparent md:text-5xl"
	>
		Peter Jarian
	</h1>
	<h2 class="md:text-xl">IT-student and Full-stack developer</h2>

	<div class="flex flex-row space-x-4">
		<a class="hover:text-gray-700" href={config.socials.github} target="_blank"><SiGithub size={24} /></a>
		<a class="hover:text-gray-700" href={config.socials.linkedin} target="_blank"><SiLinkedin size={24} /></a>
		<a class="hover:text-gray-700" href={config.socials.discord} target="_blank"><SiDiscord size={24} /></a>
	</div>

	<div class="absolute bottom-4 animate-bounce">
		<ChevronsDown />
	</div>
</main>
