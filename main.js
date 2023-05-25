const source = document.getElementById('myID').innerHTML;
const template = Handlebars.compile(source);
const customValues = {
    name: 'User',
  };

  const htmlInput = template(customValues);
  document.getElementById('htmlSection').innerHTML = htmlInput;
  {{#if argument}}
  // Код для включения, если предоставленный аргумент является истинным
{{/if}}
{{#if argument}}
  // Код для включения, если предоставленный аргумент является истинным
{{else}}
  // Код для включения, если предоставленный аргумент ложный
{{/if}}
