import { parse as babelParse } from "@babel/parser";
import { ParserOptions } from "@babel/parser";

const BABEL_PARSER_OPTIONS: ParserOptions = {
  sourceType: "module",// 指示分析代码的模式。可以是"script", "module"或"unambiguous"之一。默认为"script"。 "unambiguous"将使@babel/parser尝试根据存在的ES6导入或导出语句进行猜测。带有ES6 import和export的文件被视为"module"，否则是"script"。
  allowImportExportEverywhere: true, //默认情况下，import 和export 声明只能出现在程序的顶层。如果将此选项设置为true，则允许在任何允许使用语句的地方使用它们。
  allowReturnOutsideFunction: true, //:默认情况下，在类和对象方法之外不允许super 使用。将此设置为true以接受此类代码。
  startLine: 1, //默认情况下，被解析的第一行代码被视为第1行。您可以提供一个行号作为替代。有助于与其他源工具集成。
  tokens: true, //将所有解析的令牌添加到File 节点上的tokens属性
  plugins: [
    "asyncGenerators",
    "bigInt",
    "classPrivateMethods",
    "classPrivateProperties",
    "classProperties",
    "decorators-legacy",
    "doExpressions",
    "dynamicImport",
    "exportDefaultFrom",
    "exportNamespaceFrom",
    "functionBind",
    "functionSent",
    "importMeta",
    "jsx",
    "logicalAssignment",
    "nullishCoalescingOperator",
    "numericSeparator",
    "objectRestSpread",
    "optionalCatchBinding",
    "optionalChaining",
    "partialApplication",
    ["pipelineOperator", { proposal: "minimal" }],
    "placeholders",
    "throwExpressions",
    "topLevelAwait",
    "typescript",
  ],
};

export function parse(code) {
  const ast = babelParse(code, BABEL_PARSER_OPTIONS);
  return ast;
}
