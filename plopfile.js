export default function (plop) {
  plop.setGenerator("component", {
    description: "Creating new react components",
    prompts: [
      {
        type: "input",
        name: "name",
      },
    ],
    actions: () => [
      {
        type: "add",
        templateFile: "plop-templates/component/index.hbs",
        path: "src/components/generated/{{pascalCase name}}/index.ts",
      },
      {
        type: "add",
        templateFile: "plop-templates/component/component.hbs",
        path: "src/components/generated/{{pascalCase name}}/{{pascalCase name}}.tsx",
      },
      {
        type: "add",
        templateFile: "plop-templates/component/style.hbs",
        path: "src/components/generated/{{pascalCase name}}/{{pascalCase name}}.module.scss",
      },
    ],
  });
}
