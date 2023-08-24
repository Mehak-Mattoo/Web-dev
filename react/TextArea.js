import React,{useState} from 'react'


export default function TextArea(props) {

  // const[darkMode, setdarkMode] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // })
  // const[btnText, setbtnText] =useState("Enable Dark mode")
   
  //  const intoDarkMode= ()=>{

  //   if( darkMode.color==="black"){
  //     setdarkMode({

  //       color: "white",
  //       backgroundColor: "#2f343a"
  //     })
  //     setbtnText("Enable Light Mode")
  //   }else{
  //     setdarkMode({

  //       color: "black",
  //       backgroundColor: "white"
  //     })
  //     setbtnText("Enable Dark mode")
  //   }
   
  //  }


  

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
      let text = document.getElementById("exampleFormControlTextarea1")
      text.select();
     navigator.clipboard.writeText(text.value);
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
  <textarea className="form-control" value={text}   onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"  style={ {backgroundColor: props.mode==="light"?"dark": "light"} } ></textarea>
  

  <p className='pt-4'>Convert into: </p>
  <button type="button" className="btn btn-info m-1" onClick={intoUpper}>Uppercase</button>
  <button type="button" className="btn btn-info m-1" onClick={intoLower}>Lowercase</button>
  <button type="button" className="btn btn-info m-1" onClick={intoSentenceCase}>Sentence case</button>
  <button type="button" className="btn btn-info m-1" onClick={RemoveExtraSpaces}>Remove extra spaces</button>


 
  <button type="button" className="btn btn-warning m-1" onClick={TextToSpeech}>Speak</button>
  <button type="button" className="btn btn-danger m-1" onClick={ClearText}>Clear</button>
  <button type="button" className="btn btn-outline-info  m-1" onClick={CopyText}>Copy</button>
</div>

<div className="container my-3">
 

  
<p> {text.split(' ').filter(value => value !== "").length} words and {text.length} characters</p>
<p>{0.008* text.split(' ').filter(value => value !== "").length} minutes read</p> 
{/* this value= 125 words---in 1 min, 1/250=0.008 */}





{/* <button onClick={intoDarkMode} type="button" className="btn btn-dark">{btnText}</button> */}
</div>
</>  
  )
}
