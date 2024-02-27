<script lang="ts">
  import '../app.scss'
  import { base } from '$app/paths'
  import { socials } from '$lib/socials.json'

  import SteamIcon from '$lib/assets/steam.svg?src'
  import GithubIcon from '$lib/assets/github.svg?src'
  import DevIcon from '$lib/assets/dev.svg?src'
  import TelegramIcon from '$lib/assets/telegram.svg?src'
  import EnvelopeIcon from '$lib/assets/envelope.svg?src'

  type Social = {
    link: string,
    icon: string
  }

  const socialsList: Social[] = socials

  const insertIcon: Function = (element: HTMLElement, icon: string) => {
    element.innerHTML = eval(`${icon}Icon`)
  }
</script>

<svelte:head>
  <title>pml68</title>
</svelte:head>

<div class="main">
  <h1>pml68</h1>
  <p>Just your average IT student</p>
  <div class="socials">
    {#each socialsList as {link, icon}}
      <a use:insertIcon={icon} href={link} target="_blank" class="icon"></a>
    {/each}
  </div>
  <div class="projects">
    Check out my projects <a href={base + '/projects'}><b>here</b></a>
  </div>
</div>
