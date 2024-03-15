import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/notes" | "/notes/01" | "/notes/02" | "/notes/03" | "/notes/04" | "/notes/05" | "/notes/06" | "/notes/07" | "/notes/08" | "/notes/09" | "/notes/10" | "/notes/11" | "/notes/12" | "/notes/20" | "/notes/21" | "/notes/22" | "/notes/23" | "/notes/24" | "/notes/25" | "/notes/26" | "/notes/27" | "/notes/28" | "/notes/29" | "/notes/30" | "/notes/31" | "/projects/aleph" | "/projects/covid-gans" | "/projects/helix" | "/projects/mercurius" | "/projects/nikefree" | "/projects/surrealist-dreams" | "/projects/tracy-chapman" | "/projects-db/[project]" | "/randoms" | "/subscription" | "/subscription/thanks" | null
type LayoutParams = RouteParams & { project?: string }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.js').load>>>>>>;
export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+layout.js').load>>>>>>;