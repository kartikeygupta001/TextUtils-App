import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("uppercase was clicked " + text);
       let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () =>{
        // console.log("uppercase was clicked " + text);
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () =>{
        // console.log("uppercase was clicked " + text);
       let newText = '';
       setText(newText)
       props.showAlert("Cleared Text!", "success");
    }
    const handleCopy = () =>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // setText("Enter the text ");

   
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'rgb(73 75 76)'}}>
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(73 75 76)':'white', color: props.mode==='dark'?'white':'rgb(73 75 76)'}}rows="8"></textarea>
</div>
<button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button  disabled={text.length===0}className=" btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button  disabled={text.length===0}className=" btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button  disabled={text.length===0}className=" btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
<button  disabled={text.length===0}className=" btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra Spaces</button>

    </div>
    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'rgb(73 75 76)'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
