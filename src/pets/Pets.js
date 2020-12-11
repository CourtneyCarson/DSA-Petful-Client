// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import fetchPets from '../services';


// class Pets extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cat: {},
//       dog: {}
//     };
//   }


//   componentDidMount(response) {

//      fetch(`${config.API_BASE_URL}/pets`)
//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     });

//       .then((data) => {
//         console.log(data);
//         this.setState({ data });
//       });
//   }

//   render() {


//     return (
//       <main className='landing-fullpage'>
//         <div className='landing-page'>
//           <h1> Pets Information </h1>
//           <div>
//             {/* <img src={this.cat.img} alt='cat'></img>
//             <p>{this.state.cat.name}</p>
//             <p>{this.cat.gender}</p>
//             <p>{this.cat.age}</p>
//             <p>{this.cat.breed}</p>
//             <p>{this.cat.description}</p> */}
//             <p>{this.state.cat.story}</p>
//           </div>
//           {/* <img src='https://live.staticflickr.com/65535/50706435078_86090a76a4_w.jpg' alt='salem-kitty'></img>
//           <ul>
//             <li> Name: Salem Saberhagen</li>
//             <li> Age: 500 </li>
//             <li> Gender: Male </li>
//             <li> Breed: Shorthair</li>
//             <li> Description: He's a little black kitty </li>
//             <li> Story: sentenced to spend 100 years as a cat by the Witches
//             Council as punishment for attempting to take over the world.</li>
//           </ul> */}
//           <Link to='/adopt'>
//             <button> Start Adoption Process  </button>
//           </Link>
//         </div>
//       </main>
//     );
//   }
// }
// export default Pets;