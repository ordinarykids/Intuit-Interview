export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/notes": [4,[2]],
		"/notes/01": [5,[2]],
		"/notes/02": [6,[2]],
		"/notes/03": [7,[2]],
		"/notes/04": [8,[2]],
		"/notes/05": [9,[2]],
		"/notes/06": [10,[2]],
		"/notes/07": [11,[2]],
		"/notes/08": [12,[2]],
		"/notes/09": [13,[2]],
		"/notes/10": [14,[2]],
		"/notes/11": [15,[2]],
		"/notes/12": [16,[2]],
		"/notes/20": [17,[2]],
		"/notes/21": [18,[2]],
		"/notes/22": [19,[2]],
		"/notes/23": [20,[2]],
		"/notes/24": [21,[2]],
		"/notes/25": [22,[2]],
		"/notes/26": [23,[2]],
		"/notes/27": [24,[2]],
		"/notes/28": [25,[2]],
		"/notes/29": [26,[2]],
		"/notes/30": [27,[2]],
		"/notes/31": [28,[2]],
		"/projects-db/[project]": [36],
		"/projects/aleph": [29],
		"/projects/covid-gans": [30],
		"/projects/helix": [31],
		"/projects/mercurius": [32],
		"/projects/nikefree": [33],
		"/projects/surrealist-dreams": [34],
		"/projects/tracy-chapman": [35],
		"/randoms": [37],
		"/subscription": [38],
		"/subscription/thanks": [39]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';