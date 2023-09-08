export default {
	contextSeparator: " ", // "_",
	createOldCatalogs: false, // true
	defaultNamespace: "translation",
	defaultValue: "",
	indentation: 2,
	keepRemoved: false,
	keySeparator: false, // ".",
	lineEnding: "auto",
	locales: ["ru", "uz_cyrl", "uz_latn"],
	namespaceSeparator: ":",
	output: "src/assets/locales/$LOCALE/$NAMESPACE.json",
	pluralSeparator: "_",
	input: undefined,
	sort: true, // false
	verbose: false,
	failOnWarnings: false,
	failOnUpdate: false,
	customValueTemplate: null,
	resetDefaultValueLocale: null,
	i18nextOptions: null,
	yamlOptions: null
	// lexers: {
	// 	hbs: ["HandlebarsLexer"],
	// 	handlebars: ["HandlebarsLexer"],

	// 	htm: ["HTMLLexer"],
	// 	html: ["HTMLLexer"],

	// 	mjs: ["JavascriptLexer"],
	// 	js: ["JavascriptLexer"], // if you're writing jsx inside .js files, change this to JsxLexer
	// 	ts: ["JavascriptLexer"],
	// 	jsx: ["JsxLexer"],
	// 	tsx: ["JsxLexer"],

	// 	default: ["JavascriptLexer"]
	// },
};
// module.exports = {
// 	locales: ["ru", "uz_cyrl", "uz_latn"], // ["cyril", "ru", "latin"]
// 	namespaceSeparator: false,
// 	keySeparator: false,
// 	useKeysAsDefaultValue: true,
// 	output: "src/assets/locales/$LOCALE/$NAMESPACE.json",
// 	createOldCatalogs: false,
// 	sort: true
// };
