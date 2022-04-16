import React from 'react';
import "./main.css"
import { Link } from 'react-router-dom'
const Button = () => {
  return (
    <div>
      <Link to='/'><button >Home </button></Link>
      <Link to='/books'><button>Book</button></Link>
      <Link to='/computer'><button>Computer</button></Link>
      <Link to='/page3'><button>page 3</button></Link>
      <Link to='/notmatch'><button>more</button></Link>
    </div>
  )
}

export default Button;