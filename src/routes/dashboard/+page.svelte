<script>
    import {getName} from '../../services/userDetails'
   let name= getName();
</script>

{#if name === ''}
<h1 class= "text-lg text-center mt-10">Login First</h1>
{:else}
<h1 class= "text-lg text-center mt-10">{name} dashboard</h1>
{/if}