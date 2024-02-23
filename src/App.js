// App.js

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label for="firstName">FirstName* : </label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter your first name"
            required
          />
          <br />
          <br />
          <label for="lastname">LastName* : </label>
          <input
            type="text"
            name="lastname"
            placeholder="type your lastname"
            required
          />
          <br />
          <br />
          <label for="Email">Email-Id* : </label>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
          />
          <br />
          <br />
          <label for="tel">Contact* : </label>
          <input
            type="tel"
            name="tel"
            placeholder="Enter your Mobile"
            required
          />
          <br />
          <br />
          <label for="gender">
            Gender :
            <br />
            <input type="radio" name="gender" id="male" /> Male
            <input type="radio" name="gender" id="female" /> Female
            <input type="radio" name="gender" id="other" /> Other
          </label>
          <br />
          <br />
          <label for="Subjects">Your Best Fav Subjects : </label>
          <br />
          <input type="checkbox" name="sub" id="eng" checked /> English
          <input type="checkbox" name="sub" id="hin" /> Hindi
          <input type="checkbox" name="sub" id="mar" /> Marathi
          <input type="checkbox" name="sub" id="Sci" /> Science
          <input type="checkbox" name="sub" id="sst" /> SST
          <br />
          <br />
          <label for="file">Upload Resume : </label>
          <input
            type="file"
            name="file"
            id="file"
            placeholder="Upload file"
            required
          />
          <br />
          <br />
          <label for="url">Enter URL : </label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="Enter url"
            required
          />
          <br />
          <br />
          <label>Select your choice : </label>
          <select name="select" id="select">
            <option value="" disabled selected>
              Select your Answer
            </option>

            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">Javascript</option>
            </optgroup>

            <optgroup label="Advanced">
              <option value="1">React.js</option>
              <option value="2">Express.js</option>
              <option value="3">MongoDB</option>
              <option value="4">Node.js</option>
            </optgroup>
          </select>
          <br />
          <br />
          <label for="About">About : </label>
          <br />
          <textarea
            name="about"
            id="about"
            row="40"
            cols="40"
            placeholder="about yourself"
            required
          ></textarea>
           <br /><br /> 
           <label>Submit Or Reset</label>
           <br />
           <button type="submit" value="Submit">Submit</button>
           <br />
           <button type="reset" value="reset">Reset</button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
