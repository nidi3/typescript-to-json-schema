import * as ts from "typescript";
import { NodeParser, Context } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";

export class ParenthesizedNodeParser implements SubNodeParser {
    public constructor(
        private typeChecker: ts.TypeChecker,
        private childNodeParser: NodeParser,
    ) {
    }

    public supportsNode(node: ts.ParenthesizedTypeNode): boolean {
        return node.kind === ts.SyntaxKind.ParenthesizedType;
    }
    public createType(node: ts.ParenthesizedTypeNode, context: Context): BaseType {
        return this.childNodeParser.createType(node.type, context);
    }
}
