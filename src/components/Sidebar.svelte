<script>
    let entities = ['articles', 'users']


</script>

<ul>
    {#each entities as item}
        <li>
            <a href="/crud/{item}">{item}</a>
        </li>
    {/each}
</ul>