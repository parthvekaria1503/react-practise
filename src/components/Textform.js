import React, {useState} from 'react'

export default function Textform(props) {
    
    const onup = ()=>{
        let nettext = text.toUpperCase();
        setText(nettext);
        props.showAlert("text changed","success");
    }

    const onlo = ()=>{
        let nettext = text.toLowerCase();
        setText(nettext);
    }

    const onbo = ()=>{
        let nettext = document.getElementById("mybox").style.fontWeight="bolder";
        setText(nettext);
    }

    const oncha = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
            <textarea className="form-control" placeholder='enter text here' value={text} onChange={oncha} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary m-2' onClick={onup}>Conevrt to upper case</button>
        <button className='btn btn-primary m-2' onClick={onlo}>Conevrt to lower case</button>
        <button className='btn btn-primary m-2' onClick={onbo}>Conevrt to bold</button>
    </div>
    <div className='container my-3'>
        <h1>text summary:</h1>
        <p>{text.length>0 ? text.trim().split(" ").length : 0} words and  {text.length} charcters</p>
        <p>{0.008 * text.split(" ").length} minutes reads</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
