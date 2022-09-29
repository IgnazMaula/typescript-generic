import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Generic Typescript Testing

  //1. Insert value in the beginning of array
  function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
  }
  const demoArray = [1,2,3];
  const updatedArray = insertAtBeginning(demoArray, 0)

  const demoArrayString = ['1','2','3'];
  const updatedArrayString = insertAtBeginning(demoArrayString, '0')
  
  console.log(updatedArray);
  console.log(updatedArrayString);

  //2. Two generics in one function
  function createArray<T, S> (a: T, b: S): [T, S] {
    return [a, b];
  }
  const array1 = createArray(24, 25);
  const array2 = createArray('a', 24);
  
  console.log(array1);
  console.log(array2);

  //3. Add Random Score to student (Arrow)
  
  // interface for extend to generic
  interface Student {
    name: string,
    class: string
  }
  // Note: need comma after T if on tsx file if on arrow function (if not extend anything)
  const addScore= <T extends Student > (student: T) => {
    let score = Math.floor(Math.random() * 100);
    return {...student, score};
  }

  let student1 = addScore({name: 'Student A', class: 'A'})
  console.log(student1);

  //4. Generic in interface
  interface Document<T> {
    id: number,
    title: string,
    data: T
  }

  const document1: Document<string[]> = { id: 1, title: 'Document A', data: ['data1', 'data2']}
  const document2: Document<object> = { id: 2, title: 'Document B', data: {dataId: 'D1', content: 'object data'}}
  console.log(document1);
  console.log(document2);
  
  return (
    <div className="App">
      <div>
          <h1>Generic Typescript</h1>
      </div>
    </div>
  );
}

export default App;
