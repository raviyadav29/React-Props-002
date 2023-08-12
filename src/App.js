import logo from './logo.svg';
import './App.css';
import ImageText from './Component/ImageText';

function App() {

  const imageTextData = [
    {
      imageUrl: 'https://img.freepik.com/premium-photo/portrait-beautiful-woman-street-with-her-arms-crossed-her-chest_668450-121.jpg',
      text: 'Props are arguments passed ',
      para: 'This function is a valid React component because it accepts a single “props” (which stands for',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3756681.jpg&fm=jpg',
      text: 'Function and Class Components',
      para: 'properties) object argument with data and returns a React element. We call such components',
    },
    {
      imageUrl: 'https://st.depositphotos.com/1011643/2348/i/450/depositphotos_23483051-stock-photo-modern-businesswoman-holding-tablet-computer.jpg',
      text: 'Rendering a Component',
      para: 'When React sees an element representing a user-defined component, it passes JSX attributes',
    },
    {
      imageUrl: 'https://as1.ftcdn.net/v2/jpg/04/95/18/38/1000_F_495183838_iWht0tSc2IYUIcxUMWAsF5fHQ4WiLcny.jpg',
      text: 'Composing Components',
      para: 'component abstraction for any level of detail. A button, a form, a dialog, a screen: in React',
    },

  ];

  return (
    <div className="App">
      {
        imageTextData.map((data, index) => (
          <ImageText key={index}
            imageUrl={data.imageUrl}
            text={data.text}
            para={data.para}
          />
        ))
      }
    </div>
  );
}

export default App;
