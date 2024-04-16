import { useState } from 'react';
import React from 'react';
import '../Components/vending.css';

const Machine = () => {


    // const [data, setData] = useState( [
    //     { id :1 ,Name: "Product 1",  Shelf: "A", Slot: 1, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-dasani.svg" },
    //     { id :2 ,Name: "Product 2", Shelf: "A", Slot: 2, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    //     { id :3 ,Name: "Product 3", Shelf: "A", Slot: 3, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    //     { id :4 ,Name: "Product 4", Shelf: "A", Slot: 4, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    //     { id :5 ,Name: "Product 5", Shelf: "A", Slot: 5, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    //     { id :6 , Name: "Product 6", Shelf: "A", Slot: 6, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
    // ]);

    // const [data2 , setdata2] = useState( [
    //     { id : 1,  Name: "Product 7", Shelf: "B", Slot: 1, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
    //     { id : 2,  Name: "Product 7", Shelf: "B", Slot: 2, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
    //     { id : 3,  Name: "Product 7", Shelf: "B", Slot: 3, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
    //     { id : 4,  Name: "Product 7", Shelf: "B", Slot: 4, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
    //     { id : 5,  Name: "Product 7", Shelf: "B", Slot: 5, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
    //     { id : 6,  Name: "Product 7", Shelf: "B", Slot: 6, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
    // ]);
    
    const data = [
        { Name: "Product 1", id: 1, Shelf: "A", Slot: 1, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-dasani.svg" },
        { Name: "Product 2", id: 2, Shelf: "A", Slot: 2, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 3", id :3, Shelf: "A", Slot: 3, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 4", id :4, Shelf: "A", Slot: 4, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 5", id :5, Shelf: "A", Slot: 5, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 6", id :6, Shelf: "A", Slot: 6, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
        { Name: "Product 8", id :7, Shelf: "B", Slot: 1, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
        { Name: "Product 9", id :8, Shelf: "B", Slot: 2, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
        { Name: "Product 10", id : 9, Shelf: "B", Slot: 3, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
        { Name: "Product 11", id :10, Shelf: "B", Slot: 4, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
        { Name: "Product 12", id :11, Shelf: "B", Slot: 5, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
        { Name: "Product 13", id :12, Shelf: "B", Slot: 6, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
        { Name: "Product 14", id:13 , Shelf: "c", Slot: 1, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 15", id:14 , Shelf: "c", Slot: 2, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 16", id:15 , Shelf: "c", Slot: 3, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 17", id:16 , Shelf: "c", Slot: 4, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 18", id:17 , Shelf: "c", Slot: 5, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 19", id:18 , Shelf: "c", Slot: 6, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 20", id:19 , Shelf: "c", Slot: 1, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 21", id:20 , Shelf: "D", Slot: 2, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 22", id:21 , Shelf: "D", Slot: 3, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 23", id:22 , Shelf: "D", Slot: 4, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 24", id:23 , Shelf: "D", Slot: 5, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        { Name: "Product 25", id:24 , Shelf: "D", Slot: 6, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
        ];

       
        
        const chunk = [];
        let rowIndex = 0;
        
        for (let i = 0; i < data.length; i += 6) {
          const row = [];
        
          for (let j = 0; j < 6; j++) {
            row.push(data[i + j]);
          }
        
          chunk.push(row);
          rowIndex++;
        }
        
        // Pad the last row if needed
        while (chunk[rowIndex - 1].length < 6) {
          chunk[rowIndex - 1].push(null); // or any default value
        }
        
        console.log(chunk);
        
        

    return (
        <div className="machine-container">
          {/* Machine Top */}
          <div className="machine-top-perspective">
            <div className="machine-top"></div>
          </div>
          
          {/* Machine Frame */}
          <div className="machine-frame-container">
            <div className="machine-frame">
              
              {/* Machine View */}
              <div className="machine-view">
  <div className="machine-window-container">
    <div className="machine-window-row">
      {/* Render Shelves */}
      {chunk.map((row, index) => (
        <div className="machine-shelf-container" key={index}>
          <div className="machine-shelf">
            <div className="shelf-row" key={index}>
              {row.map((product) => (
                <div className="shelf-block" key={product.id}>
                  <div className="shelf-bottles">
                    <img src={product.ImageURL} alt={product.Name} />
                  </div>
                  <span className="shelf-hack"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      
            </div>
          </div>

                
                {/* Machine Pole Wrapper */}
                <div className="machine-pole-wrapper">
                  <div className="machine-pole-container">
                    <div className="machine-pole">
                      {/* <div className="pole"></div> ---> pole will be updated later */}

                      {/* Machine Claw Wrapper */}
                      <div className="machine-claw-wrapper">
                        <div className="machine-claw">
                          <img src="http://giovanni.io/coke/graphics/logos/logo-coke.svg" alt="coke-logo" />
                        </div>
                        
                        {/* Claw Bottles */}
                        {/* <div className="claw-bottles">
                          <img className="claw-coke" src="http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" alt="" />
                          <img className="claw-sprite" src="http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" alt="" />
                          <img className="claw-diet" src="http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" alt="" />
                          <img className="claw-dasani" src="http://giovanni.io/coke/graphics/bottles/bottle-dasani.svg" alt="" />
                        </div> */}
                      </div>
                      {/* End Machine Claw Wrapper */}
                    </div>
                  </div>
                </div>
                {/* End Machine Pole */}

                {/* Machine Bottom */}
                <div className="machine-bottom">
                <img className='logo-bottom' src="https://imgs.search.brave.com/5FrxFE4GmodHF4ZA7uPyOytIqDjRm9_52dDT6Sm3ALs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L0NvbG9ycy1Db2Nh/LUNvbGEtTG9nby01/MDB4MjY2LmpwZw" alt="" />
                </div>
                <div className='machine-bottom-line' ></div>
                <div className='machine-bottom-line2' ></div>
                <div className='machine-bottom-line3' ></div>
                <div className='machine-bottom-line4' ></div>

          {/* End Machine View */}
      

      {/* Machine Side */}
  <div className="machine-side">
        <div className="machine-side-top">
          <img src="https://i.imgur.com/YUT4mxY.png" alt="Side Top" />
        </div>

        <div className="display-screen-container">
  <div className="mirror"></div>
  <div className="display-screen">
    {/* Display screen content here */}
   
    <p> Name: </p>
    <p>Price: </p>
    {/* Add more details as needed */}
  </div>
</div>



        {/* Machine Controls */}
        <div className="machine-controls">
          {/* <span className="tooltip choose-drink">
            <span className="tooltip-text">Choose<br />your<br />drink</span>
          </span> */}
          
          {/* <span className="tooltip drink-me">
            <span className="tooltip-text">Drink<br />me</span>
          </span> */}
          
          {/* Machine Buttons */}
        <div className="machine-buttons">
  {/* First Row */}
  <div className="machine-button-row">
    <a href="..." className="activator-coke">A</a>
    <a href="..." className="activator-sprite">B</a>
    <a href="..." className="activator-diet">C</a>
  </div>

  {/* Second Row */}
  <div className="machine-button-row">
    <a href="..." className="activator-coke">D</a>
    <a href="..." className="activator-sprite">E</a>
    <a href="..." className="activator-diet">F</a>
  </div>

  {/* Third Row */}
  <div className="machine-button-row">
    <a href="..." className="activator-coke">1</a>
    <a href="..." className="activator-sprite">2</a>
    <a href="..." className="activator-diet">3</a>
  </div>

  {/* Fourth Row */}
  <div className="machine-button-row">
    <a href="..." className="activator-coke">4</a>
    <a href="..." className="activator-sprite">5</a>
    <a href="..." className="activator-diet">6</a>
  </div>
</div>


          {/* Glass View */} */
           {/* <div className="machine-glassview"> */}
            {/* Glass Container Depth */}
             {/* <div className="glass-container-holder">
              <div className="depth-container">
                <div className="top-depth"></div>
                <div className="bottom-depth"></div>
              </div>
            </div>  */}

            {/* Bottles Container */}
            {/* <div className="bottles-container">
              <img className="bottle-coke" src="http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" alt="Coke Bottle" />
              <img className="bottle-sprite" src="http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" alt="Sprite Bottle" />
              <img className="bottle-diet" src="http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" alt="Diet Bottle" />
              <img className="bottle-dasani" src="http://giovanni.io/coke/graphics/bottles/bottle-dasani.svg" alt="Dasani Bottle" />
            </div> */}

            {/* Glass Cover */}
            {/* <div className="glass-cover"></div> */}
          {/* </div> */}
          {/* End Glass View */}
        </div>

        <div className="machine-side-bottom">
  <button className="change-pocket-button">
    <img src="http://giovanni.io/coke/graphics/change-pocket.svg" alt="Change is Good" />
  </button>
  <span className="machine-bottom-text">confirm<br />your<br />order</span>
</div>

        </div>
        </div>
        
        
  );
};

export default Machine;
