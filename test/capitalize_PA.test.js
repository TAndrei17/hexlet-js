import assert from 'power-assert';
import capitalize from '../capitalize.js';

const _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"InterpreterDirective":[],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments","typeParameters","typeArguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation","decorators"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments","typeParameters","typeArguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"ParenthesizedExpression":["expression"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right","decorators"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType","typeParameters"],"ClassBody":["body"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation","decorators"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi","typeParameters"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AwaitExpression":["argument"],"Import":[],"BigIntLiteral":[],"ExportNamespaceSpecifier":["exported"],"OptionalMemberExpression":["object","property"],"OptionalCallExpression":["callee","arguments","typeParameters","typeArguments"],"ClassProperty":["key","value","typeAnnotation","decorators"],"ClassAccessorProperty":["key","value","typeAnnotation","decorators"],"ClassPrivateProperty":["key","value","decorators","typeAnnotation"],"ClassPrivateMethod":["key","params","body","decorators","returnType","typeParameters"],"PrivateName":["id"],"StaticBlock":["body"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"DeclareClass":["id","typeParameters","extends","mixins","implements","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","mixins","implements","body"],"DeclareModule":["id","body"],"DeclareModuleExports":["typeAnnotation"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareOpaqueType":["id","typeParameters","supertype"],"DeclareVariable":["id"],"DeclareExportDeclaration":["declaration","specifiers","source"],"DeclareExportAllDeclaration":["source"],"DeclaredPredicate":["value"],"ExistsTypeAnnotation":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InferredPredicate":[],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","mixins","implements","body"],"InterfaceTypeAnnotation":["extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"EmptyTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumberLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"ObjectTypeAnnotation":["properties","indexers","callProperties","internalSlots"],"ObjectTypeInternalSlot":["id","value","optional","static","method"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value","variance"],"ObjectTypeProperty":["key","value","variance"],"ObjectTypeSpreadProperty":["argument"],"OpaqueType":["id","typeParameters","supertype","impltype"],"QualifiedTypeIdentifier":["id","qualification"],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"SymbolTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound","default","variance"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"UnionTypeAnnotation":["types"],"Variance":[],"VoidTypeAnnotation":[],"EnumDeclaration":["id","body"],"EnumBooleanBody":["members"],"EnumNumberBody":["members"],"EnumStringBody":["members"],"EnumSymbolBody":["members"],"EnumBooleanMember":["id"],"EnumNumberMember":["id","init"],"EnumStringMember":["id","init"],"EnumDefaultedMember":["id"],"IndexedAccessType":["objectType","indexType"],"OptionalIndexedAccessType":["objectType","indexType"],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXSpreadChild":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"JSXFragment":["openingFragment","children","closingFragment"],"JSXOpeningFragment":[],"JSXClosingFragment":[],"Noop":[],"Placeholder":[],"V8IntrinsicIdentifier":[],"ArgumentPlaceholder":[],"BindExpression":["object","callee"],"ImportAttribute":["key","value"],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"RecordExpression":["properties"],"TupleExpression":["elements"],"DecimalLiteral":[],"ModuleExpression":["body"],"TopicReference":[],"PipelineTopicExpression":["expression"],"PipelineBareFunction":["callee"],"PipelinePrimaryTopicReference":[],"TSParameterProperty":["parameter"],"TSDeclareFunction":["id","typeParameters","params","returnType"],"TSDeclareMethod":["decorators","key","typeParameters","params","returnType"],"TSQualifiedName":["left","right"],"TSCallSignatureDeclaration":["typeParameters","parameters","typeAnnotation"],"TSConstructSignatureDeclaration":["typeParameters","parameters","typeAnnotation"],"TSPropertySignature":["key","typeAnnotation","initializer"],"TSMethodSignature":["key","typeParameters","parameters","typeAnnotation"],"TSIndexSignature":["parameters","typeAnnotation"],"TSAnyKeyword":[],"TSBooleanKeyword":[],"TSBigIntKeyword":[],"TSIntrinsicKeyword":[],"TSNeverKeyword":[],"TSNullKeyword":[],"TSNumberKeyword":[],"TSObjectKeyword":[],"TSStringKeyword":[],"TSSymbolKeyword":[],"TSUndefinedKeyword":[],"TSUnknownKeyword":[],"TSVoidKeyword":[],"TSThisType":[],"TSFunctionType":["typeParameters","parameters","typeAnnotation"],"TSConstructorType":["typeParameters","parameters","typeAnnotation"],"TSTypeReference":["typeName","typeParameters"],"TSTypePredicate":["parameterName","typeAnnotation"],"TSTypeQuery":["exprName","typeParameters"],"TSTypeLiteral":["members"],"TSArrayType":["elementType"],"TSTupleType":["elementTypes"],"TSOptionalType":["typeAnnotation"],"TSRestType":["typeAnnotation"],"TSNamedTupleMember":["label","elementType"],"TSUnionType":["types"],"TSIntersectionType":["types"],"TSConditionalType":["checkType","extendsType","trueType","falseType"],"TSInferType":["typeParameter"],"TSParenthesizedType":["typeAnnotation"],"TSTypeOperator":["typeAnnotation"],"TSIndexedAccessType":["objectType","indexType"],"TSMappedType":["typeParameter","typeAnnotation","nameType"],"TSLiteralType":["literal"],"TSExpressionWithTypeArguments":["expression","typeParameters"],"TSInterfaceDeclaration":["id","typeParameters","extends","body"],"TSInterfaceBody":["body"],"TSTypeAliasDeclaration":["id","typeParameters","typeAnnotation"],"TSInstantiationExpression":["expression","typeParameters"],"TSAsExpression":["expression","typeAnnotation"],"TSSatisfiesExpression":["expression","typeAnnotation"],"TSTypeAssertion":["typeAnnotation","expression"],"TSEnumDeclaration":["id","members"],"TSEnumMember":["id","initializer"],"TSModuleDeclaration":["id","body"],"TSModuleBlock":["body"],"TSImportType":["argument","qualifier","typeParameters"],"TSImportEqualsDeclaration":["id","moduleReference"],"TSExternalModuleReference":["expression"],"TSNonNullExpression":["expression"],"TSExportAssignment":["expression"],"TSNamespaceExportDeclaration":["id"],"TSTypeAnnotation":["typeAnnotation"],"TSTypeParameterInstantiation":["params"],"TSTypeParameterDeclaration":["params"],"TSTypeParameter":["constraint","default"]}';
const _powerAssertRecorder = (function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value, espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { const capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value, events: capturedValues }, source }; }; return PowerAssertRecorder; }());
const _rec = new _powerAssertRecorder();
const _rec2 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(_rec._capt(capitalize('hello'), 'arguments/0/left') === 'Hello', 'arguments/0'), {
  content: "assert(capitalize('hello') === 'Hello')",
  filepath: 'test/capitalize.test.js',
  line: 4,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"CallExpression","callee":{"type":"Identifier","name":"capitalize","range":[7,17]},"arguments":[{"type":"StringLiteral","value":"hello","range":[18,25]}],"range":[7,26]},"right":{"type":"StringLiteral","value":"Hello","range":[31,38]},"range":[7,38]}],"range":[0,39]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"capitalize","range":[7,17]},{"type":{"label":"("},"range":[17,18]},{"type":{"label":"string"},"value":"hello","range":[18,25]},{"type":{"label":")"},"range":[25,26]},{"type":{"label":"==/!=/===/!=="},"value":"===","range":[27,30]},{"type":{"label":"string"},"value":"Hello","range":[31,38]},{"type":{"label":")"},"range":[38,39]}]',
  visitorKeys: _powerAssertVisitorKeys,
}));
assert(_rec2._expr(_rec2._capt(_rec2._capt(capitalize(''), 'arguments/0/left') === 'Hex', 'arguments/0'), {
  content: "assert(capitalize('') === 'Hex')",
  filepath: 'test/capitalize.test.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"CallExpression","callee":{"type":"Identifier","name":"capitalize","range":[7,17]},"arguments":[{"type":"StringLiteral","value":"","range":[18,20]}],"range":[7,21]},"right":{"type":"StringLiteral","value":"Hex","range":[26,31]},"range":[7,31]}],"range":[0,32]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"capitalize","range":[7,17]},{"type":{"label":"("},"range":[17,18]},{"type":{"label":"string"},"value":"","range":[18,20]},{"type":{"label":")"},"range":[20,21]},{"type":{"label":"==/!=/===/!=="},"value":"===","range":[22,25]},{"type":{"label":"string"},"value":"Hex","range":[26,31]},{"type":{"label":")"},"range":[31,32]}]',
  visitorKeys: _powerAssertVisitorKeys,
}));
console.log('Тесты прошли!');
