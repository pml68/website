<script lang="ts">
  import '../app.scss'

  import WaveLeft from '$lib/assets/wave1.svg?url'
  import WaveRight from '$lib/assets/wave2.svg?url'
</script>

<img src={WaveLeft} alt="" class="wave wave1" />
<img src={WaveRight} alt="" class="wave wave2" />

<div class="container">
  <slot/>
</div>
