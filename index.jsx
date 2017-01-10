<!DOCTYPE html>
<html>

<head>
  <title>React! React! React!</title>
  <script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>

  <style>
    #container {
      padding: 50px;
      background-color: #EEE;
    }
    #container h1 {
      font-size: 48px;
      font-family: sans-serif;
      color: #0080a8;
    }
  </style>
</head>

<body>

  <div id="container"></div>
  <script type="text/babel">
    var destination = document.querySelector("#container");
    ReactDOM.render(React.createElement(
      "h1",
      null,
      "LaneHarvey"
    ), destination);
  </script>
</body>

</html>
