import React from 'react'
import { Link } from 'react-router-dom';

export const Maintab = () => {
  return (
    <div className='container'>
        <table class="table">
            <tbody>
                <tr>
                    <Link to={'/AllpropMenu'}><td>Premium stays</td></Link>
                    <Link to={'/tabone'}><td>Trending</td></Link>
                    <Link to={'/AllpropMenu'}><td>Offers</td></Link>
                    <Link to={'/AllpropMenu'}><td>Hand picked</td></Link>
                    <Link to={'/AllpropMenu'}><td>For you</td></Link>
                    <Link to={'/AllpropMenu'}><td>Sea facing</td></Link>
                    <Link to={'/AllpropMenu'}><td>Beauty</td></Link>
                    <Link to={'/AllpropMenu'}><td>Nature</td></Link>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
