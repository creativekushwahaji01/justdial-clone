import React, { useState } from 'react'
import "../modules css/Searchbar.css"

function Searchbar() {
    const [location, setlocation] = useState("");
    return (
        <div>
            <div className='searchbar'>
                <div className='searchhead'>
                    <h1>Search across <ol class="words">
                        <li>'4 Crore +'<span> Business</span></li>
                        <li>'3.3 Crore +'<span> Product & Service</span></li>
                    </ol></h1>
                </div>
                <div className='searchbar_main_box'>
                    <div className='search_main'>
                        <div className='location_search'>
                            <form>
                                <label >
                                    <input className='location' type="text"
                                        value={location}
                                        placeholder='Select Location'
                                        onChange={(e) => setlocation(e.target.value)}
                                    />
                                </label>
                            </form>
                            <div className='locimg'></div>
                        </div>
                        <div className='product_serch'>
                            <form>
                                <label >
                                    <input className='product' type='text'
                                        placeholder='Search for product and services' />
                                </label>
                            </form>
                            <div className='search_but'>
                                <div className=' search_but1'></div>
                            </div>
                        </div>
                    </div>
                    <div className='app'>
                        <div className='app_down_but' >Download App</div>
                        <div className='app_down_but1'>
                            <p>-</p>
                            <div className='icon'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
