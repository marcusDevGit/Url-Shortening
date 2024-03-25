<template>
    <ul class="menu_links">
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Resources</a></li>
    </ul>
</template>
<style>
.menu_links{
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
    gap: 3rem;
}
a{
    color: var(--grayishViolet);
    font-weight: 700;
}
a:hover{
    color: var(--darkViolet);
}
@media (max-width: 768px) {
		.menu_links {
            display: flex;
			position: relative;
			margin-top: 40px;
            padding: 0;
			flex-direction: column;
			align-items: center;
		}
        a{
            color: var(--white);
        }
        a:hover{
            color: var(--white);
        }
	}
</style>