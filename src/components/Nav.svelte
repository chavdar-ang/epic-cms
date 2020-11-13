<script>
    import { url, isActive } from "@roxi/routify";
</script>

<style>
    .current {
        color: red;
    }
</style>

<ul>
    <li>
        <a href="{$url('./index')}" class:current={$isActive('./index')}>Home</a>
    </li>

    <li>
        <a href="{$url('./about')}" class:current={$isActive('/about')}>About</a>
    </li>
</ul>