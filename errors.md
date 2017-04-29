I googled the error code and it said syntax error. The console said GET /todos 400 8.562 ms - 136, so I went to the model and realized I was missing some text.
```js
{
name: "error",
length: 92,
severity: "ERROR",
code: "42601",
position: "29",
file: "scan.l",
line: "1086",
routine: "scanner_yyerror"
}
```
I looked up the error code on postgresql.org and it said unidentified table. 

```js
{
name: "error",
length: 103,
severity: "ERROR",
code: "42P01",
position: "15",
file: "parse_relation.c",
line: "1160",
routine: "parserOpenTable"
}
```
The reference error says todo wasn't defined on line 39 in my model. I had it as quote.
```
ReferenceError: todo is not defined
    at Object.Todo.update (/Users/lisalouison/GA/hws/unit02/Todays_ToDo/models/todo.js:39:9)
    at controller.update (/Users/lisalouison/GA/hws/unit02/Todays_ToDo/controllers/todoController.js:69:10)
    at Layer.handle [as handle_request] (/Users/lisalouison/GA/hws/unit02/Todays_ToDo/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/lisalouison/GA/hws/unit02/Todays_ToDo/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/lisalouison/GA/hws/unit02/Todays_ToDo/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/lisalouison/GA/hws/unit02/Todays_ToDo/node_modules/express/lib/router/layer.js:95:5)
    at /Users/lisalouison/GA/hws/unit02/Todays_ToDo/node_modules/express/lib/router/index.js:281:22
    at param (/Users/lisalouison/GA/hws/unit02/Todays_ToDo/node_modules/express/lib/router/index.js:354:14)
    at param (/Users/lisalouison/GA/hws/unit02/Todays_ToDo/node_modules/express/lib/router/index.js:365:14)
    at Function.process_params (/Users/lisalouison/GA/hws/unit02/Todays_ToDo/node_modules/express/lib/router/index.js:410:3)
```