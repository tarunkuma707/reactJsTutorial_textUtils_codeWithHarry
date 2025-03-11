import React, {useState} from 'react'

export default function TextForm(props) {
    const handleLowClick = () => {
        let lowerCaseText =  text.toLocaleLowerCase();
        setText(lowerCaseText);
    }
    const handleUpClick = () => {
        console.log("Upper Case Clicked");
        //setText("You clicked on HandleupClock");
        let upperCaseText =  text.toUpperCase();
        setText(upperCaseText);
    }
    const handleOnChange = (event) => {
        console.log("On Change Clicked");
        setText(event.target.value);
    }
    const handleClearClick = (event) => {
        setText("");
    }
    const handleReverseClick = (event) => {
        let reverseString = text.split('').reverse().join("")
        setText(reverseString);
    }
    
    const [text, setText] = useState("");
  return (  
    <div>
        <div className="container my-2" style={{color:props.mode==='dark' ? 'white' :'black' }}>
            <h1>{props.heading}</h1>
            <form className="row g-3">
                <div className="col-12">
                    <label htmlFor="myBox" className="form-label">Example Text area</label>
                    <textarea style={{ backgroundColor: props.mode==='light' ? 'white' : 'grey' , color: props.mode==='light' ? 'grey' : 'white'}} type="email" onChange={handleOnChange} className="form-control" value={text} id="myBox" rows="8"></textarea>
                </div>
                <div className="col-12">
                    <button type='button' className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button type='button' className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lower Case</button>
                    <button type='button' className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
                    <button type='button' className="btn btn-primary m-2" onClick={handleReverseClick}>Reverse Text</button>
                </div>
            </form>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark' ? 'white' :'black' }}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words, and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} Minutes to read</p>
            <p>{text.length>0 ? text : "Enter Something to preview."}</p>
        </div>
    </div>
  )
}
