<script lang="ts">
  import '../app.scss'
  import { base } from '$app/paths'

  import wave1 from '$lib/assets/wave1.svg'
  import wave2 from '$lib/assets/wave2.svg'

  import { socials } from '$lib/socials.json'

  type Social = {
    link: string,
    icon: string
  }

  const socialsList: Social[] = socials
</script>

<svelte:head>
  <title>pml68</title>
</svelte:head>

<div class="main">
  <h1>pml68</h1>
  <p>Just your average IT student</p>
  <div class="socials">
    {#each socialsList as {link, icon}}
      <a href={link} target="_blank">
        <i class={'social-icon ' + icon}></i>
      </a>
    {/each}
  </div>
  <br>
  <div class="projects">
    Check out my projects <a href={base + '/projects'}><b>here</b></a>
  </div>
</div>
