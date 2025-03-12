import React, {useState} from 'react'

export default function TextForm(props) {
    const handleLowClick = () => {
        let lowerCaseText =  text.toLocaleLowerCase();
        setText(lowerCaseText);
        props.showAlert("String Converted to Lower Case", "success");
    }
    const handleUpClick = () => {
        console.log("Upper Case Clicked");
        //setText("You clicked on HandleupClock");
        let upperCaseText =  text.toUpperCase();
        setText(upperCaseText);
        props.showAlert("String Converted to Upper Case", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = (event) => {
        setText("");
        props.showAlert("Text Box Cleared", "success");
    }
    const handleReverseClick = (event) => {
        let reverseString = text.split('').reverse().join("")
        setText(reverseString);
        props.showAlert("String Reversed", "success");
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
                    <button disabled={text.length===0} type='button' className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button disabled={text.length===0} type='button' className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lower Case</button>
                    <button disabled={text.length===0} type='button' className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length===0} type='button' className="btn btn-primary m-2" onClick={handleReverseClick}>Reverse Text</button>
                </div>
            </form>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark' ? 'white' :'black' }}>
            <h1 className='mb-3'>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, and {text.split(" ").filter((element)=>{return element.length!==0}).length} characters</p>
            <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <p>{text.length>0 ? text : "Nothing to Preview."}</p>
        </div>
    </div>
  )
}
