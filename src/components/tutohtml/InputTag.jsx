import React from "react";

export default class InputTags extends React.Component {
  render() {
    return (
      <div>
        <label>button example</label>
        <input type="button" name="hola" value="Button" />
        <br />
        <label>
          <input type="checkbox" name="checkbox" value="checkbox" /> nombre
          checkbox
        </label>
        <br />
        <label> color picker </label>
        <input type="color" />
        <br />
        <label>Date picker</label>
        <input type="date" />
        <br />
        <label>date time local picker</label>
        <input type="datetime-local" />
        <br />
        <label>input type email validation</label>
        <input type="email" />
        <br />
        <label> file selector </label>
        <input type="file" />
        <br />
        <label> image input </label>
        <input
          type="image"
          alt="image"
          width="50"
          height="50"
          src="https://www.mirai-innovation-lab.com/wp-content/uploads/2019/02/mirai_logo.png"
        />
        <br />
        <label> number type </label>
        <input type="number" />
        <br />
        <label> password hidden </label>
        <input type="password" />
        <br />
        <input type="radio" name="gender" />
        <label> radio 1 selector </label>
        <input type="radio" name="gender" />
        <label> radio 2 selector </label>
        <br />
        <label> range selector </label>
        <input type="range" />
        <br />
        <label> reset button (form usage) </label>
        <input type="reset" />
        <br />
        <label> submit button (send data) </label>
        <input type="submit" />
        <br />
        <label> celphone input </label>
        <input type="tel" />
        <br />
        <label> pure text input </label>
        <input type="text" />
        <br />
        <label> time selector </label>
        <input type="time" />
        <br />
        <label> url validation </label>
        <input type="url" />
        <br />
        <label> week type selector </label>
        <input type="week" />
        <br />
      </div>
    );
  }
}
