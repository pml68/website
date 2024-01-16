<script lang="ts">
  import '../app.scss'
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

<img src={wave1} alt="Wave 1" class="wave wave1">
<img src={wave2} alt="Wave 2" class="wave wave2">
<div class="container">
  <div class="main">
    <h1>pml68</h1>
    <p>Just your average IT student</p>
    <div class="socials">
      {#each socialsList as {link, icon}}
        <a href={link} target="_blank">
          <div class={'social-icon fa-brands ' + icon}></div>
        </a>
      {/each}
    </div>
  </div>
</div>
