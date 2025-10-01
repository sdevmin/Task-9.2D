import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import ReactMarkdown from "react-markdown";

export default function Post(){
  const [code, setCode] = useState("// write code here");
  const [md, setMd]   = useState("## Write Markdown here\n- **bold**\n- _italic_");

  return (
    <div className="center-screen">
      <div className="card" style={{ maxWidth:1100 }}>
        <div className="brand" style={{ marginBottom:12 }}>
          <span className="brand-badge">Create</span>
          <h2 className="brand-title" style={{ fontSize:22, margin:0 }}>Post</h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
          <div className="plan">
            <h3 style={{ marginTop:0 }}>Code</h3>
            <CodeMirror
              value={code}
              height="260px"
              extensions={[javascript({ jsx: true })]}
              onChange={(value) => setCode(value)}
              basicSetup={{ lineNumbers: true }}
            />
          </div>

          <div className="plan">
            <h3 style={{ marginTop:0 }}>Markdown</h3>
            <textarea
              value={md}
              onChange={(e)=>setMd(e.target.value)}
              className="input"
              style={{ height:180, marginBottom:12 }}
            />
            <div style={{
              padding:12, border:"1px dashed var(--black)", borderRadius:12, background:"#fafafa"
            }}>
              <ReactMarkdown>{md}</ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop:16 }}>
          <a className="btn btn-black" href="/">Back Home</a>
        </div>
      </div>
    </div>
  );
}
