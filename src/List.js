import React from 'react';

function List(props) {
  //   const Names = ['bruce', 'clasrk'];

  //   const numbers = [1, 2, 3, 4, 5,6];
  // const doubled = numbers.map((number) => <li>{number * 2}</li>);
  // console.log(doubled);

  //   const Namelist = Names.map((name,index) => <h2>{name} </h2>);

  // const listItems = numbers.map((number) =>
  //   <li key={number.toString()}>
  //     {number}
  //   </li>
  // );

  const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    {
      id: 2,
      title: 'Installation',
      content: 'You can install React from npm.',
    },
    {
      id: 2,
      title: 'Installation',
      content: 'You can install React from npm.',
    },
  ];

  const postexample = posts.map((post, index) => (
    <h4 key={index.toString()}>
      {index} {post.title} {post.content}
    </h4>
  ));

  return (
    <div>
      {/* <div>{doubled}</div>
    <div>{Namelist}</div>
    <div>{listItems}</div> }
    */}
      <div> {postexample}</div>
      <button type="button" class="btn btn-primary">Primary</button>
    </div>
  );
}

export default List;
