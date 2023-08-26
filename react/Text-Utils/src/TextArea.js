import React,{useState} from 'react'


export default function TextArea(props) {

const intoUpper=()=>{
let newText= text.toUpperCase();
setText(newText)// converts text into upper
props.showAlert(" Converted to Upper case", "success")
}

const intoLower=()=>{
  let newText= text.toLowerCase();
  setText(newText)// converts text into upper
  props.showAlert(" Converted to Lower case", "success")
}

  const ClearText=()=>{
    let newText= "";
    setText(newText)// converts text into upper
    props.showAlert(" Text cleared", "success")  }

    const intoSentenceCase=(str)=>{

      let lowerCase = text.toLowerCase();
    let regex = /([^.!?]+[!?.\d\s]+)/g;
    let sentences = lowerCase.match(regex);
    let newText = sentences
      .map((sentence) => {
        return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
          ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
          : sentence);
      })
      .join("");

    setText(newText);
    props.showAlert(" Converted to Sentence case", "success")
      }

    const TextToSpeech = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert(" Speaking", "success")
    }

    const CopyText = () => {
     
     navigator.clipboard.writeText(text);
     props.showAlert(" Text copied", "success")
    }

    const RemoveExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed", "success")
    }
    

const handleOnChange=(event)=>{
  setText(event.target.value);
  }


  const[text, setText]= useState("");// setText changes text

  
  return (
  <>
  
   <div className={`container p-3"${props.mode} ${props.Bluemode}`}>
   <h3 className='mt-5'>{props.heading}</h3>
 
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control border border-primary-subtle"  value={text}   onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"   ></textarea>
  

  <p className='pt-4'>Convert into: </p>
  <button disabled={text.length===0} type="button" className="btn btn-info m-1" onClick={intoUpper}>Uppercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-info m-1" onClick={intoLower}>Lowercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-info m-1" onClick={intoSentenceCase}>Sentence case</button>
  <button disabled={text.length===0} type="button" className="btn btn-info m-1" onClick={RemoveExtraSpaces}>Remove extra spaces</button>


 
  <button disabled={text.length===0} type="button" className="btn btn-warning m-1" onClick={TextToSpeech}>Speak</button>
  <button disabled={text.length===0} type="button" className="btn btn-danger m-1" onClick={ClearText}>Clear</button>
  <button disabled={text.length===0} type="button" className="btn btn-outline-info  m-1" onClick={CopyText}>Copy</button>
</div>

<div className="container my-3">
 

  
<p> {text.split(/\s+/).filter(value => value !== "").length} words and {text.length} characters</p>
<p>{0.008* text.split(/\s+/).filter(value => value !== "").length} minutes read</p> 
{/* this value= 125 words---in 1 min, 1/250=0.008 */}





{/* <button onClick={intoDarkMode} type="button" className="btn btn-dark">{btnText}</button> */}
</div>
</>  
  )
}
