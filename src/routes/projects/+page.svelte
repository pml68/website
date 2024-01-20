<script lang="ts">
  import '$lib/assets/css/projects.scss'

  import { base } from "$app/paths"
  import { projects } from '$lib/projects.json'

  type Project = {
    iconLink: string,
    link: string,
    title: string,
    description: string
  }

  const projectsList: Project[] = projects
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class="spacer">
  <div class="home">
    Take me back <a href={base + '/'}><b>home</b></a>
  </div>
</div>
<div class="project-container">
  {#each projectsList as {iconLink, link, title, description}}
    <a href={link} target="_blank">
      <div class="project">
        <img src={iconLink} alt={title + ' icon'} class="project-icon">
        <div class="content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  {/each}
</div>
