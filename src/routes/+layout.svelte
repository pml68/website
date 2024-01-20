<script lang="ts">
  import '../app.scss'

  import wave1 from '$lib/assets/wave1.svg'
  import wave2 from '$lib/assets/wave2.svg'
</script>

<img src={wave1} alt="Wave 1" class="wave wave1">
<img src={wave2} alt="Wave 2" class="wave wave2">
<div class="container">
  <slot/>
</div>
