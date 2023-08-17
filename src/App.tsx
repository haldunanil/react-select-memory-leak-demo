import Select from "react-select";

import "./App.css";

function App() {
  return (
    <>
      <h1>react-select memory leak</h1>
      <div>
        <p>To test:</p>
        <ol style={{ textAlign: "left" }}>
          <li>
            Open the performance tab in Chrome DevTools, make sure to check the
            'Memory' checkbox
          </li>
          <li>Start recording a memory profile</li>
          <li>
            Click into and out of the select several times (e.g. 5 times),
            opening and closing the menu
          </li>
          <li>Wait for about 10 seconds with the profiler still running</li>
          <li>Click into and out of select again</li>
          <li>Stop the recording</li>
          <li>
            Note that the memory consistently went up every time the menu was
            opened without going back down on close, waiting around ~10seconds
            before it goes down and goes up again upon select open
          </li>
        </ol>
      </div>

      <br />

      <Select
        options={
          // randomly generate 1000 options
          Array.from({ length: 1000 }, (_, i) => ({
            value: `option-${i}`,
            label: `Option ${i}`,
          }))
        }
      />
    </>
  );
}

export default App;
