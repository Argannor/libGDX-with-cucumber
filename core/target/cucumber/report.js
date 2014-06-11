$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Example.feature");
formatter.feature({
  "id": "example-feature",
  "description": "Example Description",
  "name": "Example Feature",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "example-feature;example-scenario",
  "description": "",
  "name": "Example Scenario",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "this is your first cucumber test",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "you see this",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "you\u0027ll understand the purpose of life",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "ExampleCucumberSteps.mainMenuCompletelyLoaded()"
});
formatter.result({
  "duration": 172481295,
  "status": "passed"
});
formatter.match({
  "location": "ExampleCucumberSteps.clickOnShowInstructions()"
});
formatter.result({
  "duration": 31012,
  "status": "passed"
});
formatter.match({
  "location": "ExampleCucumberSteps.showInstructionsScreen()"
});
formatter.result({
  "duration": 966643,
  "status": "passed"
});
});