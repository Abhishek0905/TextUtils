import React,{useState} from 'react'

export default function TextForm(props) { 
  const handelUpClick = ()=>{
    // console.log("Upper case clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case", "success")
  }
  const handelLowClick = ()=>{
    // console.log("Upper case clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case", "success")
  }
  const handleOnChange = (event)=>{
    //  console.log("Handle on chnage")
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary " onClick={handelLowClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length } minutes </p>
      <h2>Perview</h2>
      <p>{text.length>0?text:"Enter your text to perview"}</p>
    </div>
    </>
  )
}
