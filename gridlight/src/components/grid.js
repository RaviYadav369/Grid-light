import { useEffect, useState } from 'react';
// GridLight.jsx
const GridLights = ({n = 5}) => {

  
  const [arr, setArr] = useState([]);

  const handleCellClick = (x,y) => {
    console.log(x, y)
    
    const updatedArr = arr.map(row => ({
      ...row,
      col: row.col.map(cell => 
        (cell.Xcord === x && cell.Ycord === y) ||
          (cell.Xcord === x - 1 && cell.Ycord === y) ||
          (cell.Xcord === x + 1 && cell.Ycord === y) ||
          (cell.Xcord === x && cell.Ycord === y - 1) ||
          (cell.Xcord === x && cell.Ycord === y + 1)
          ?
          { ...cell, value: !cell.value }
          : cell
      
      )
    }));
    setArr(updatedArr)
  
  }

  useEffect(() => {
    let matrix = [];
    function fetch() {
      
      for (let i = 0; i <n; i++) {
        let ymatrix =[]
        for (let y=0; y < n; y++) {
          ymatrix.push({ Xcord: i, Ycord: y, value: false })
        }
        matrix.push({col:ymatrix})
      }
    }
    setArr(matrix)
  fetch()
  }, [])
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      
      <div style={{  }}>
        {
          arr.map((item) => {
            return (
              <div style={{display:'flex'}}>
                {item.col.map((cell,index) => (
                <div key={index} style={{ backgroundColor: `${cell.value ? 'red': 'grey'}`, padding: '20px', margin: '2px' }} onClick={() => handleCellClick(cell.Xcord, cell.Ycord)}></div>
              ))}
            </div>
            )
          }
           
       )}
        </div>
 
    </div>
  )
}
export default GridLights