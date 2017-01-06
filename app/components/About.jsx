var React = require('react');

var About = (props)  => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.</p>
      <p>Below you can find some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - JavaScript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Search for temperature by city name
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a> - Responsive front-end framework
        </li>
      </ul>
    </div>
  )
};

module.exports = About;