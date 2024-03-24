<template>
    <ul class="menu_links">
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Resources</a></li>
    </ul>
</template>
<style scoped>
.menu_links{
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
}
a{
    color: var(--grayishviolet);
    font-weight: 700;
}
a:hover{
    color: var(--darkviolet);
}
@media (max-width: 768px) {
		.menu_links {
			position: relative;
			top: 100px;
			flex-direction: column;
			gap: 3rem;
		}
	}
</style>