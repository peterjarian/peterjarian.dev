<script>
	import { SiDiscord, SiGithub, SiLinkedin } from '@icons-pack/svelte-simple-icons';
</script>

<main class="flex h-screen flex-col items-center justify-center space-y-1">
	<h1
		class="bg-gradient-to-r from-[#0077FF] to-[#FF00FB] bg-clip-text text-4xl font-bold uppercase italic text-transparent md:text-5xl"
	>
		Peter Jarian
	</h1>
	<h2 class="md:text-xl">IT-student and Full-stack developer</h2>

	<div class="flex flex-row space-x-4">
		<SiGithub size={32} />
		<SiLinkedin />
		<SiDiscord />
	</div>
</main>
