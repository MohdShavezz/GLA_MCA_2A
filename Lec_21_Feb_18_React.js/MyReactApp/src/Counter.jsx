import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Mount....')

    }, [])

    useEffect(() => {
        console.log('Updation..')
        return () => {
            console.log('remove')
        }
    }, [count])





    return (
        <div>
            Counterrrrrrrrrr. :{count}
            <button onClick={() => setCount(pre => pre + 1)}>Change</button>
        </div>
    )
}

export default Counter



// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     console.log("Constructor called");
//   }

//   componentDidMount() {
//     console.log("Component Mounted");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("Component Updated");
//   }

//   componentWillUnmount() {
//     console.log("Component Will Unmount");
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Count: {this.state.count}</h2>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;
