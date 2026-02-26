import { useState, useEffect } from "react";

const SLIDES = [
  { img: "/images/hero-circle.jpg",    label: "Talleres comunitarios" },
  { img: "/images/hero-outdoor.jpg",   label: "Educación en campo" },
  { img: "/images/hero-kids.jpg",      label: "Ciencia ciudadana" },
  { img: "/images/hero-workshop.jpg",  label: "Diagnósticos empresariales" },
];

const AUDIENCES = ["empresas", "comunidades", "instituciones", "personas"];

export default function HeroSection() {
  const [slide, setSlide]           = useState(0);
  const [audienceIdx, setAudienceIdx] = useState(0);
  const [wordFading, setWordFading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setTimeout(() => { setSlide(s => (s + 1) % SLIDES.length); }, 500);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setWordFading(true);
      setTimeout(() => { setAudienceIdx(i => (i + 1) % AUDIENCES.length); setWordFading(false); }, 300);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .sh*{box-sizing:border-box;}
        .sh{--f:#0d2218;--m:#1c3d28;--mi:#5aaa7a;--go:#b8935a;--cr:#f2ede4;font-family:'DM Sans',sans-serif;}
        .sh::before{content:'';position:absolute;inset:0;z-index:2;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");pointer-events:none;}
        .aw{display:inline-block;transition:opacity .3s,transform .3s;color:#5aaa7a;font-style:italic;}
        .aw.fd{opacity:0;transform:translateY(6px);}
        @keyframes fu{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        .f1{animation:fu .8s .1s both}.f2{animation:fu .8s .25s both}.f3{animation:fu .8s .4s both}
        .f4{animation:fu .8s .55s both}.f5{animation:fu .8s .7s both}.f6{animation:fu .8s .85s both}
        @keyframes sl{0%{transform:scaleY(0);transform-origin:top}49%{transform:scaleY(1);transform-origin:top}50%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
        .scl{animation:sl 2s ease-in-out infinite;}
        .sdot{width:6px;height:6px;border-radius:50%;background:rgba(242,237,228,.28);cursor:pointer;transition:all .3s;border:none;padding:0;}
        .sdot.act{background:#5aaa7a;width:20px;border-radius:3px;}
        .bp{display:inline-flex;align-items:center;gap:8px;padding:7px 14px;border-radius:100px;border:1px solid rgba(90,170,122,.28);background:rgba(13,34,24,.6);backdrop-filter:blur(8px);}
        .btn-p{display:inline-flex;align-items:center;gap:8px;background:#5aaa7a;color:#0d2218;padding:13px 28px;border-radius:4px;font-size:.875rem;font-weight:500;letter-spacing:.03em;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .25s;}
        .btn-p:hover{background:#f2ede4;transform:translateY(-2px);box-shadow:0 12px 28px rgba(90,170,122,.28);}
        .btn-s{display:inline-flex;align-items:center;gap:8px;color:rgba(242,237,228,.72);font-size:.875rem;font-weight:300;border:none;background:none;cursor:pointer;font-family:'DM Sans',sans-serif;border-bottom:1px solid rgba(242,237,228,.25);padding-bottom:2px;transition:all .25s;}
        .btn-s:hover{color:#f2ede4;border-color:#f2ede4;}
        @media(max-width:768px){
          .sh{padding-top:80px;}
          .hi{padding:0 20px !important;align-items:flex-start;flex-direction:column;}
          .ht{font-size:clamp(1.8rem,7vw,2.4rem) !important;}
          .hi .f3{font-size:clamp(1.8rem,7vw,2.4rem) !important;}
          .btn-p{width:auto !important;}
          .sr{flex-wrap:wrap;gap:20px;}
          .rp{display:none;}
        }

      `}</style>

      <section className="sh" style={{position:"relative",minHeight:"100vh",background:"#0d2218",display:"flex",flexDirection:"column",overflow:"hidden"}}>

        {/* orb */}
        <div style={{position:"absolute",right:"38%",top:"30%",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle,rgba(90,170,122,.1) 0%,transparent 70%)",pointerEvents:"none",zIndex:1}}/>
        {/* left line */}
        <div style={{position:"absolute",left:28,top:"50%",transform:"translateY(-50%)",width:1,height:"38%",background:"linear-gradient(to bottom,transparent,#5aaa7a,transparent)",opacity:.35,zIndex:3}}/>

 main
        {/* BODY */}
        <div className="hi" style={{flex:1,display:"flex",alignItems:"center",padding:"0 64px",position:"relative",zIndex:5}}>

          {/* LEFT */}
          <div style={{flex:1,maxWidth:640,paddingRight:48}}>

            <div className="bp f1" style={{marginBottom:32}}>
              <div style={{width:6,height:6,borderRadius:"50%",background:"#5aaa7a",flexShrink:0}}/>
              <span style={{fontSize:".72rem",color:"rgba(242,237,228,.8)",letterSpacing:".12em",textTransform:"uppercase"}}>Consultoría Ambiental · Costa Rica</span>
            </div>

            <h1 className="ht f2" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(3rem,4.8vw,4.4rem)",fontWeight:300,lineHeight:1.1,color:"#f2ede4",margin:"0 0 8px 0",letterSpacing:"-.01em"}}>
              Soluciones basadas<br/>en naturaleza, para
            </h1>

            <div className="f3" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(3rem,4.8vw,4.4rem)",fontWeight:300,lineHeight:1.1,marginBottom:28,height:"1.15em",overflow:"hidden"}}>
              <span className={`aw${wordFading?" fd":""}`}>{AUDIENCES[audienceIdx]}</span>
            </div>

            <p className="f4" style={{fontSize:"1rem",fontWeight:300,lineHeight:1.75,color:"rgba(242,237,228,.62)",maxWidth:500,margin:"0 0 40px 0",letterSpacing:".01em"}}>
              Asesoramos a personas, empresas, instituciones y comunidades en la implementación de estrategias sostenibles que generan valor ambiental, social y económico.
            </p>

            <div className="f5" style={{display:"flex",alignItems:"center",gap:28,marginBottom:56,flexWrap:"wrap"}}>
              <button className="btn-p">Conocé nuestros servicios <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
              <button className="btn-s">Ver proyectos →</button>
            </div>

            <div className="sr f6" style={{display:"flex",alignItems:"flex-start",gap:0,paddingTop:32,borderTop:"1px solid rgba(242,237,228,.1)"}}>
              {[{num:"25+",label:"Años de experiencia"},{num:"100+",label:"Proyectos realizados"},{num:"4",label:"Sectores de impacto"}].map((s,i)=>(
                <div key={i} style={{display:"flex",alignItems:"flex-start",gap:0}}>
                  {i>0&&<div style={{width:1,background:"rgba(242,237,228,.12)",alignSelf:"stretch",margin:"0 32px"}}/>}
                  <div>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"2.5rem",fontWeight:300,color:"#f2ede4",lineHeight:1}}>{s.num}</div>
                    <div style={{fontSize:".68rem",letterSpacing:".12em",color:"rgba(242,237,228,.4)",textTransform:"uppercase",marginTop:6,maxWidth:110}}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="rp" style={{width:"42%",height:"80vh",position:"relative",borderRadius:6,overflow:"hidden",flexShrink:0}}>
            {SLIDES.map((s,i)=>(
              <img key={i} src={s.img} alt={s.label} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:slide===i?1:0,transition:"opacity .6s ease"}}/>
            ))}
            {/* overlays */}
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(13,34,24,.75) 0%,rgba(13,34,24,.1) 60%,transparent 100%)",zIndex:1}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,#0d2218 0%,transparent 25%)",zIndex:1}}/>
            {/* eslogan */}
            <div style={{position:"absolute",top:24,left:24,zIndex:2,fontFamily:"'Cormorant Garamond',serif",fontSize:".72rem",fontStyle:"italic",color:"rgba(242,237,228,.4)",letterSpacing:".08em"}}>Empowering nature-wise solutions</div>
            {/* corner top right */}
            <div style={{position:"absolute",top:20,right:20,width:28,height:28,borderTop:"2px solid #b8935a",borderRight:"2px solid #b8935a",zIndex:2,opacity:.7}}/>
            {/* corner bottom left */}
            <div style={{position:"absolute",bottom:20,left:20,width:28,height:28,borderBottom:"2px solid #b8935a",borderLeft:"2px solid #b8935a",zIndex:2,opacity:.7}}/>
            {/* bottom bar */}
            <div style={{position:"absolute",bottom:24,left:24,right:24,zIndex:2,display:"flex",alignItems:"flex-end",justifyContent:"space-between"}}>
              <span style={{fontSize:".72rem",letterSpacing:".15em",color:"rgba(242,237,228,.65)",textTransform:"uppercase"}}>{SLIDES[slide].label}</span>
              <div style={{display:"flex",gap:6,alignItems:"center"}}>
                {SLIDES.map((_,i)=>(
                  <button key={i} className={`sdot${slide===i?" act":""}`} onClick={()=>setSlide(i)} aria-label={`Slide ${i+1}`}/>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL */}
        <div style={{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,zIndex:5}}>
          <div className="scl" style={{width:1,height:36,background:"linear-gradient(to bottom,#5aaa7a,transparent)"}}/>
          <span style={{fontSize:".6rem",letterSpacing:".2em",color:"rgba(242,237,228,.28)",textTransform:"uppercase"}}>Explorar</span>
        </div>

      </section>
    </>
  );
}
