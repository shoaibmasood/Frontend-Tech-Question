import {useState} from "react"
export default function Tabs() {
  
  const [activeTab, setActiveTab] = useState("Html")
  
  const handleActiveTab = (tab)=>{
    setActiveTab(tab)
  }
  return (
    <div>
      <div>
        <button style={{color: activeTab == "Html" ? "blue" : "black" }} onClick={()=> handleActiveTab("Html")}>
        HTML</button>
        <button style={{color: activeTab == "Css" ? "blue" : "black" }} onClick={()=> handleActiveTab("Css")}>CSS</button>
        <button style={{color: activeTab == "Js" ? "blue" : "black" }} onClick={()=> handleActiveTab("Js")}>JavaScript</button>
      </div>
      <div>
        {activeTab == "Html" && (<p>
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </p>) }

       {activeTab == "Css" && (<p>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </p>)} 
        
        {activeTab == "Js" && ( <p>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </p>)}
       
      </div>
    </div>
  );
}
