module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/ui/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/ui/{{pascalCase name}}/styles.scss',
        templateFile: 'templates/styles.scss.hbs',
      },
      {
        type: 'add',
        path: '../src/components/ui/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/ui/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  })
}
