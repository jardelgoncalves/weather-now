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
        path: '../src/components/ui/{{pascalCase name}}/styles.module.scss',
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

  plop.setGenerator('layout', {
    description: 'Create a layout',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/layout/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/layout.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/layout/{{pascalCase name}}/styles.module.scss',
        templateFile: 'templates/styles.scss.hbs',
      },
      {
        type: 'add',
        path: '../src/components/layout/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/layout/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  })
}
