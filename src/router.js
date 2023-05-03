import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import About from "./pages/About.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/portfolio",
			name: "portfolio",
			component: Portfolio,
		},
		{
			path: "/about",
			name: "about",
			component: About,
		},
	],
});

export { router };
