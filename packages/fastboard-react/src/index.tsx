export * from "@netless/fastboard-core";
export type { Theme, Language, GenericIcon } from "@netless/fastboard-ui";
export * from "./RedoUndo";
export * from "./ZoomControl";
export * from "./PageControl";
export * from "./Toolbar";
export * from "./Fastboard";

import "./style.scss";

// Caution about Export Namespace (Star)
// esbuild can not handle nested `export *`, i.e. given two files:
//
// foo: export * from './bar'
// bar: export * from 'baz' (external: baz)
//
// the result of bundling foo will be broken.
// `export * from external-module` works and only works at the entry points.
// ref: https://github.com/evanw/esbuild/issues/1737
