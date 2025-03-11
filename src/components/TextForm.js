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
    const [text, setText] = useState("Enter text here");
  return (
    <div>
        <div className="container my-2">
            <h1>{props.heading} - {text}</h1>
            <form className="row g-3">
                <div className="col-12">
                    <label htmlFor="myBox" className="form-label">Example Text area</label>
                    <textarea type="email" onChange={handleOnChange} className="form-control" value={text} id="myBox" rows="8"></textarea>
                </div>
                <div className="col-12">
                    <button type='button' className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button type='button' className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lower Case</button>
                </div>
            </form>
        </div>
    </div>
  )
}
