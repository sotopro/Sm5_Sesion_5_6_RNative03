import React, { useEffect, useState } from 'react';
import './App.css';
import FormSignUp from './shared/components/form';
// import Progress from './shared/components/progress/style';
// import Product from './shared/components/Product';
// import styled from 'styled-components';

// const Title = styled.h1`
//   font-size: 20px;
//   text-align: center;
//   color: palevioletred;
// `;

// const style = {
//   h1: {
//     fontSize: '20px',
//     textAlign: 'center',
//     color: 'palevioletred',
//   }
// };

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    )
  }
  let calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight
    const docHeight = getDocHeight();

    const totalDocScrollLenght = docHeight - windowHeight;
    const scrollPosition = Math.floor(scrollTop / totalDocScrollLenght * 100)
    setScrollPosition(scrollPosition)
  }
  const listenScrollEvent = () => {
    requestAnimationFrame(() => {
      calculateScrollDistance();
    })
  }

  useEffect(() => {
    document.addEventListener("scroll", () => listenScrollEvent());
    return () => {
      document.removeEventListener('scroll', () => listenScrollEvent());
    }
  })

  return (
    <main>
      <div className="container">
        <FormSignUp />
      </div>
      <div className="container dark">
        <FormSignUp dark />
      </div>
    </main>
      /* <Progress scroll={`${scrollPosition}%`} />
      <header></header>
      <main>
        <h1>Lorem Ipsum</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <h1>Lorem Ipsum</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <h1>Lorem Ipsum</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <h1>Lorem Ipsum</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <h1>Lorem Ipsum</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <h1>Lorem Ipsum</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <h1>Lorem Ipsum</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <h1>Lorem Ipsum</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <h1>Lorem Ipsum</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </main> */
      /* <Title>Hello</Title>
      <Product /> */
    
  );
}

export default App;
