import { calculate } from './utilities';

function App() {
  const calc = () => {
    const res = calculate('25.12.1987');
    console.log('res:', res);
  };

  return (
    <main>
      <div class="input">
        <h1>
          Enter date
        </h1>
        <div>
          Datepicker
        </div>
        <div>
        <button onClick={calc} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
      </div>
      <div class="matrix">
        <div class="info">
          <div>
            current date
          </div>
          <div>
          additional number
          </div>
        </div>
        <div class="matrix">
          matrix grid
        </div>
      </div>
    </main>
  );
}

export default App;
