import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Flame, Zap, Shield, Truck, Award, TrendingUp, Heart, ShoppingBag } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slide, setSlide] = useState(0);
  const slides = [
    { t1: 'DEFINED BY', t2: 'SIMPLICITY.', sub: 'Where premium craftsmanship meets timeless design. Curated for the modern generation.', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80' },
    { t1: 'CRAFTED FOR', t2: 'LEGENDS.', sub: 'Not fast fashion. Forever fashion. Built to last, designed to inspire.', img: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=1200&q=80' },
    { t1: 'WEAR THE', t2: 'FUTURE.', sub: 'The worlds best wardrobe, delivered to your doorstep - Bangladesh & beyond.', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80' },
  ];
  useEffect(()=>{ fetch('/api/products').then(r=>r.json()).then(d=>{ if(Array.isArray(d)) setProducts(d); }).catch(()=>{}).finally(()=>setLoading(false)); },[]);
  useEffect(()=>{ const id=setInterval(()=>setSlide(s=>(s+1)%slides.length),4300); return()=>clearInterval(id); },[]);
  useEffect(()=>{
    const obs=new IntersectionObserver((ents)=>ents.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }),{threshold:0.12});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[loading]);
  const Showcase = (newProducts=> newProducts.length? newProducts : [
    {id:1,title:'AUREON Signature Tee',price:1290,oldPrice:1890,imageUrl:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',is_sale:1},
    {id:2,title:'Midnight Oversized Hoodie',price:2490,oldPrice:3490,imageUrl:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80',is_sale:1},
    {id:3,title:'Essential Cargo Pants',price:2190,imageUrl:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80'},
    {id:4,title:'Luxe Knit Sweater',price:2790,imageUrl:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80'},
    {id:5,title:'Urban Street Jacket',price:3590,imageUrl:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80'},
    {id:6,title:'Premium Denim Shirt',price:1990,imageUrl:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80'},
    {id:7,title:'Cozy Winter Pullover',price:2290,imageUrl:'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&q=80'},
    {id:8,title:'Minimalist Polo',price:1490,imageUrl:'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&q=80'},
  ])([...products].sort((a,b)=>b.id-a.id).slice(0,8));
  return (
    <div style={{background:'#050507',color:'#fff',overflowX:'hidden'}}>
      <Header />
      <style>{` @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Exo+2:wght@800;900&display=swap'); .reveal{opacity:0;transform:translateY(28px);transition:all .8s cubic-bezier(0.4,0,0.2,1)} .reveal.visible{opacity:1;transform:translateY(0)} @keyframes floatOrb{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-30px) scale(1.06)}66%{transform:translate(-20px,20px) scale(0.96)}} @keyframes pulseDot{0%,100%{opacity:1}50%{opacity:0.4}} @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}} `}</style>
      <section style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',overflow:'hidden',background:'#050507'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(820px circle at 18% 18%, rgba(99,102,241,0.28), transparent 58%), radial-gradient(820px circle at 82% 82%, rgba(255,51,102,0.22), transparent 58%), linear-gradient(180deg,#050507 0%, #0a0a14 100%)'}} />
        <div style={{position:'absolute',width:600,height:600,borderRadius:'50%',filter:'blur(60px)',opacity:0.5,background:'radial-gradient(circle,#6366f1, transparent 70%)',top:-160,right:-90,animation:'floatOrb 12s ease-in-out infinite'}} />
        <div style={{position:'absolute',width:520,height:520,borderRadius:'50%',filter:'blur(60px)',opacity:0.45,background:'radial-gradient(circle,#ff3366, transparent 70%)',bottom:-140,left:-90,animation:'floatOrb 12s infinite -4s'}} />
        <div style={{position:'relative',zIndex:2,width:'100%',maxWidth:1400,margin:'0 auto',padding:'130px 24px 60px',display:'grid',gridTemplateColumns:'1.15fr 0.85fr',gap:56,alignItems:'center'}}>
          <motion.div initial={{opacity:0,y:26}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 16px',background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',backdropFilter:'blur(12px)',borderRadius:999,fontSize:11,fontWeight:800,letterSpacing:'1.6px',marginBottom:20}}>
              <span style={{width:8,height:8,borderRadius:'50%',background:'#22c55e',boxShadow:'0 0 12px #22c55e',animation:'pulseDot 2s infinite',display:'inline-block'}} /> WORLD\'S BEST WEBSITE - LIVE ON LOCALHOST
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={slide} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:0.45}}>
                <h1 style={{fontFamily:'Exo 2, sans-serif',fontSize:'clamp(42px,6vw,76px)',fontWeight:900,lineHeight:0.9,letterSpacing:'-3px',marginBottom:14}}>
                  <span style={{display:'block',color:'transparent',WebkitTextStroke:'1.2px rgba(255,255,255,0.32)'}}>{slides[slide].t1}</span>
                  <span style={{display:'block',background:'linear-gradient(100deg,#fff 18%,#a5b4fc 56%,#f472b6 82%,#fff 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{slides[slide].t2}</span>
                </h1>
                <p style={{fontSize:18,lineHeight:1.6,color:'rgba(255,255,255,0.68)',maxWidth:520,marginBottom:30}}>{slides[slide].sub}</p>
              </motion.div>
            </AnimatePresence>
            <div style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:28}}>
              <Link to="/shop" style={{display:'inline-flex',alignItems:'center',gap:10,padding:'17px 28px',background:'#fff',color:'#050507',fontWeight:900,fontSize:13,letterSpacing:'1px',borderRadius:999,textDecoration:'none'}}>EXPLORE COLLECTION <ArrowRight size={16} strokeWidth={2.5} /></Link>
              <Link to="/shop?sort=newest" style={{display:'inline-flex',alignItems:'center',gap:10,padding:'17px 28px',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.14)',backdropFilter:'blur(12px)',color:'#fff',fontWeight:800,fontSize:13,borderRadius:999,textDecoration:'none'}}><Sparkles size={16} /> NEW DROPS</Link>
            </div>
            <div style={{display:'flex',gap:16,alignItems:'center',flexWrap:'wrap',marginBottom:20}}>
              <div style={{display:'flex'}}>{[1,2,3,4].map(i=><img key={i} src={`https://i.pravatar.cc/100?img=${12+i}`} alt="" style={{width:36,height:36,borderRadius:'50%',border:'2.5px solid #050507',marginLeft:i===1?0:-8,objectFit:'cover'}} />)}</div>
              <div><div style={{display:'flex',gap:3,color:'#fbbf24'}}>{[1,2,3,4,5].map(i=><Star key={i} size={14} fill="#fbbf24" />)}</div><div style={{fontSize:11,fontWeight:800,letterSpacing:'1px',marginTop:4,color:'rgba(255,255,255,0.88)'}}>Trusted by 50,000+ - 4.9/5</div></div>
            </div>
            <div style={{display:'flex',gap:8}}>{slides.map((_,i)=><button key={i} onClick={()=>setSlide(i)} aria-label={`slide ${i+1}`} style={{width:slide===i?28:11,height:11,borderRadius:999,border:'none',background:slide===i?'#fff':'rgba(255,255,255,0.32)',cursor:'pointer',transition:'all .3s'}} />)}</div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} transition={{duration:0.9,delay:0.18}} style={{position:'relative',height:560,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{position:'absolute',width:380,height:480,borderRadius:24,background:'rgba(255,255,255,0.07)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,0.14)',overflow:'hidden',boxShadow:'0 30px 60px rgba(0,0,0,0.45)',transform:'rotate(-1.6deg)',zIndex:3}}>
              <AnimatePresence mode="wait"><motion.img key={slide} initial={{opacity:0,scale:1.06}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:0.5}} src={slides[slide].img} alt="Hero" style={{width:'100%',height:'100%',objectFit:'cover'}} /></AnimatePresence>
              <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'20px',background:'linear-gradient(transparent, rgba(0,0,0,0.78))'}}><div style={{fontWeight:900,fontSize:13,letterSpacing:'1px'}}>AUREON 2026 COLLECTION</div><div style={{fontSize:12,opacity:0.74,marginTop:4}}>Premium - Minimal - Forever</div></div>
            </div>
            <div style={{position:'absolute',width:360,height:460,borderRadius:24,background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',transform:'rotate(4deg) translate(18px,14px)',zIndex:2,opacity:0.7,overflow:'hidden'}}><img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=600&q=80" alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.9}} /></div>
            <div style={{position:'absolute',width:340,height:440,borderRadius:24,background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',transform:'rotate(-5deg) translate(-16px,18px)',zIndex:1,opacity:0.5}} />
            <div style={{position:'absolute',top:18,right:-6,zIndex:5,background:'#fff',color:'#111',padding:'11px 16px',borderRadius:999,fontWeight:900,fontSize:11,letterSpacing:'1px',display:'flex',alignItems:'center',gap:8,boxShadow:'0 12px 32px rgba(0,0,0,0.35)'}}><Flame size={14} color="#ff3366" /> TRENDING #1 IN BD</div>
            <div style={{position:'absolute',bottom:28,left:-10,zIndex:5,background:'#111',color:'#fff',padding:'12px 16px',borderRadius:16,display:'flex',alignItems:'center',gap:12,boxShadow:'0 12px 32px rgba(0,0,0,0.35)',border:'1px solid rgba(255,255,255,0.1)'}}><div style={{width:38,height:38,borderRadius:'50%',background:'linear-gradient(135deg,#22c55e,#16a34a)',display:'grid',placeItems:'center'}}><TrendingUp size={18} color="#fff" /></div><div><div style={{fontWeight:900,fontSize:13}}>+2,840 sold today</div><div style={{fontSize:11,opacity:0.7}}>Cash on Delivery - Free Shipping</div></div></div>
          </motion.div>
        </div>
      </section>
      {/* STATS */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1px',background:'rgba(255,255,255,0.08)',borderTop:'1px solid rgba(255,255,255,0.08)',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
        {[['50K+','Happy Customers'],['4.9','Average Rating'],['2.8K+','Sold Today'],['24H','Fast Delivery']].map(e=>(
          <div key={e[1]} style={{background:'#050507',padding:'26px 16px',textAlign:'center'}}>
            <div style={{fontFamily:'Exo 2, sans-serif',fontSize:32,fontWeight:900}}>{e[0]}</div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'1.5px',color:'rgba(255,255,255,0.45)',marginTop:6}}>{e[1]}</div>
          </div>
        ))}
      </div>
      <div style={{background:'#fff',color:'#050507',padding:'15px 0',overflow:'hidden',whiteSpace:'nowrap'}}>
        <div style={{display:'inline-flex',animation:'marquee 28s linear infinite'}}>
          {[...Array(2)].map((_,r)=><span key={r} style={{display:'inline-flex'}}>{['FREE SHIPPING ON COD','LIMITED EDITION DROPS','PREMIUM FABRIC - FOREVER FIT','WORLD BEST WEBSITE FOREVER'].map(t=><span key={t} style={{display:'inline-flex',alignItems:'center',gap:14,padding:'0 26px',fontWeight:900,fontSize:13,letterSpacing:'2px'}}><span style={{width:6,height:6,borderRadius:'50%',background:'#ff3366',display:'inline-block'}} />{t}</span>)}</span>)}
        </div>
      </div>
      <section className="reveal" style={{padding:'80px 24px',maxWidth:1400,margin:'0 auto'}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:'3px',color:'#6366f1',display:'flex',alignItems:'center',gap:12,marginBottom:12}}>WHY AUREON IS LEGENDARY <span style={{width:40,height:2,background:'#6366f1',display:'inline-block'}} /></div>
        <h2 style={{fontFamily:'Exo 2, sans-serif',fontSize:'clamp(32px,5vw,54px)',fontWeight:900,lineHeight:0.95,letterSpacing:'-2px',marginBottom:12}}>BUILT TO BE <span style={{background:'linear-gradient(90deg,#6366f1,#ec4899)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>FOREVER.</span></h2>
        <p style={{color:'rgba(255,255,255,0.58)',fontSize:17,maxWidth:620,lineHeight:1.6,marginBottom:42}}>Not just clothes. A culture. Every stitch engineered for comfort, durability, and that unmistakable AUREON minimalism.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(12,1fr)',gap:18}}>
          <div style={{gridColumn:'span 7',background:'linear-gradient(135deg, rgba(99,102,241,0.14), rgba(139,92,246,0.14))',border:'1px solid rgba(255,255,255,0.08)',borderRadius:24,padding:28,minHeight:280,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div><div style={{width:50,height:50,borderRadius:14,background:'#6366f1',display:'grid',placeItems:'center',marginBottom:16}}><Zap size={20} color="#fff" /></div><h3 style={{fontSize:20,fontWeight:800}}>Lightning Fast. Premium Quality.</h3><p style={{color:'rgba(255,255,255,0.62)',fontSize:14,lineHeight:1.6,marginTop:8}}>Orders dispatched within 24 hours. Cash on Delivery nationwide.</p></div>
            <Link to="/shop" style={{display:'inline-flex',alignItems:'center',gap:8,fontWeight:800,fontSize:12,letterSpacing:'1px',color:'#fff',textDecoration:'none',marginTop:16}}>SHOP NOW <ArrowRight size={14} /></Link>
          </div>
          <div style={{gridColumn:'span 5',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:24,padding:28,minHeight:280,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div><div style={{width:50,height:50,borderRadius:14,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)',display:'grid',placeItems:'center',marginBottom:16}}><Shield size={20} color="#fff" /></div><h3 style={{fontSize:20,fontWeight:800}}>Secure and Trusted</h3><p style={{color:'rgba(255,255,255,0.62)',fontSize:14,lineHeight:1.6,marginTop:8}}>Firebase Auth, encrypted checkout, 7-day easy returns.</p></div>
            <Link to="/about" style={{display:'inline-flex',alignItems:'center',gap:8,fontWeight:800,fontSize:12,letterSpacing:'1px',color:'#fff',textDecoration:'none',marginTop:16}}>LEARN MORE <ArrowRight size={14} /></Link>
          </div>
          <div style={{gridColumn:'span 5',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:24,padding:28,minHeight:280,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div><div style={{width:50,height:50,borderRadius:14,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)',display:'grid',placeItems:'center',marginBottom:16}}><Truck size={20} color="#fff" /></div><h3 style={{fontSize:20,fontWeight:800}}>Delivery at Warp Speed</h3><p style={{color:'rgba(255,255,255,0.62)',fontSize:14,lineHeight:1.6,marginTop:8}}>Dhaka 1-2 days, Outside 2-4 days. Real-time tracking.</p></div>
            <Link to="/track-order" style={{display:'inline-flex',alignItems:'center',gap:8,fontWeight:800,fontSize:12,letterSpacing:'1px',color:'#fff',textDecoration:'none',marginTop:16}}>TRACK ORDER <ArrowRight size={14} /></Link>
          </div>
          <div style={{gridColumn:'span 7',background:'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(255,51,102,0.12))',border:'1px solid rgba(255,255,255,0.08)',borderRadius:24,padding:28,minHeight:280,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div><div style={{width:50,height:50,borderRadius:14,background:'#ff3366',display:'grid',placeItems:'center',marginBottom:16}}><Award size={20} color="#fff" /></div><h3 style={{fontSize:20,fontWeight:800}}>Award-Winning Minimalism</h3><p style={{color:'rgba(255,255,255,0.62)',fontSize:14,lineHeight:1.6,marginTop:8}}>Monochrome, precision-cut, forever minimal. Designed in Bangladesh.</p></div>
            <Link to="/shop?sort=newest" style={{display:'inline-flex',alignItems:'center',gap:8,fontWeight:800,fontSize:12,letterSpacing:'1px',color:'#fff',textDecoration:'none',marginTop:16}}>SEE NEW DROPS <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <section className="reveal" style={{background:'#0a0a0f',padding:'80px 24px',borderTop:'1px solid rgba(255,255,255,0.06)'}}>
        <div style={{maxWidth:1400,margin:'0 auto'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',flexWrap:'wrap',gap:16}}>
            <div><div style={{fontSize:11,fontWeight:800,letterSpacing:'3px',color:'#ec4899',marginBottom:10}}>NEW ARRIVALS</div><h2 style={{fontFamily:'Exo 2, sans-serif',fontSize:'clamp(28px,4vw,44px)',fontWeight:900,letterSpacing:'-1.5px',lineHeight:1}}>FOREVER <span style={{color:'#ec4899'}}>COLLECTION.</span></h2></div>
            <Link to="/shop" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'14px 22px',background:'#fff',color:'#111',fontWeight:800,fontSize:12,letterSpacing:'1px',borderRadius:999,textDecoration:'none'}}>VIEW ALL <ArrowRight size={14} /></Link>
          </div>
          {loading ? <div style={{padding:60,textAlign:'center',color:'rgba(255,255,255,0.5)'}}>Loading the best products on earth...</div> : (
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:20,marginTop:32}}>
              {Showcase.map(pr=>{
                const slug = (pr.title||'product').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
                const disc = pr.oldPrice && pr.price && parseFloat(pr.oldPrice)>parseFloat(pr.price) ? Math.round((parseFloat(pr.oldPrice)-parseFloat(pr.price))/parseFloat(pr.oldPrice)*100) : 0;
                return (
                <div key={pr.id} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:20,overflow:'hidden',transition:'transform .35s'}} onMouseEnter={e=>e.currentTarget.style.transform='translateY(-6px)'} onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
                  <Link to={`/product/${pr.id}-${slug}`} style={{textDecoration:'none',color:'inherit'}}>
                    <div style={{aspectRatio:'4/5',background:'#111',position:'relative',overflow:'hidden'}}>
                      <img src={pr.imageUrl} alt={pr.title} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                      {pr.is_sale ? <span style={{position:'absolute',top:12,left:12,padding:'6px 10px',borderRadius:999,fontSize:11,fontWeight:800,background:'#fff',color:'#111'}}>SALE</span>:null}
                      {disc>0 ? <span style={{position:'absolute',top:12,right:12,padding:'6px 10px',borderRadius:999,fontSize:11,fontWeight:800,background:'#ff3366',color:'#fff'}}>-{disc}%</span>:null}
                    </div>
                    <div style={{padding:16}}>
                      <div style={{fontWeight:700,fontSize:13,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',color:'#fff'}}>{pr.title}</div>
                      <div style={{display:'flex',gap:10,alignItems:'center',marginTop:8}}><span style={{fontWeight:900,fontSize:16,color:'#fff'}}>৳{pr.price}</span>{pr.oldPrice ? <span style={{fontSize:12,color:'rgba(255,255,255,0.4)',textDecoration:'line-through'}}>৳{pr.oldPrice}</span>:null}</div>
                    </div>
                  </Link>
                </div>
              )})}
            </div>
          )}
        </div>
      </section>
      <section className="reveal" style={{padding:'80px 24px',maxWidth:1400,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:44}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:'3px',color:'#22c55e',marginBottom:12}}>LOVED BY LEGENDS</div>
          <h2 style={{fontFamily:'Exo 2, sans-serif',fontSize:'clamp(28px,4vw,44px)',fontWeight:900,letterSpacing:'-1px'}}>WHAT PEOPLE SAY</h2>
          <p style={{color:'rgba(255,255,255,0.5)',marginTop:10}}>50,000+ happy customers cannot be wrong.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20}}>
          {[
            {n:'Rahman K.',r:'Verified Buyer',t:'AUREON changed how I dress. Fabric is insane, fit is perfect. WORLD BEST for real!',a:'RK'},
            {n:'Nabila S.',r:'Fashion Blogger',t:'Minimal, premium, forever. I live in my hoodie. 10/10 would recommend.',a:'NS'},
            {n:'Arif H.',r:'Entrepreneur',t:'Fast delivery, COD, premium packaging. How e-commerce should feel.',a:'AH'},
          ].map(c=>(
            <div key={c.n} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:20,padding:26}}>
              <div style={{display:'flex',gap:4,color:'#fbbf24',marginBottom:14}}>{[1,2,3,4,5].map(i=><Star key={i} size={14} fill="#fbbf24" />)}</div>
              <p style={{color:'rgba(255,255,255,0.82)',lineHeight:1.6,fontSize:14,marginBottom:18}}>"{c.t}"</p>
              <div style={{display:'flex',gap:12,alignItems:'center'}}><div style={{width:42,height:42,borderRadius:'50%',background:'linear-gradient(135deg,#6366f1,#ec4899)',display:'grid',placeItems:'center',fontWeight:800,fontSize:13}}>{c.a}</div><div><div style={{fontWeight:700,fontSize:14}}>{c.n}</div><div style={{fontSize:12,color:'rgba(255,255,255,0.5)'}}>{c.r}</div></div></div>
            </div>
          ))}
        </div>
      </section>
      <div className="reveal" style={{margin:'20px 24px 60px',maxWidth:1400,marginLeft:'auto',marginRight:'auto',background:'linear-gradient(135deg,#6366f1 0%, #8b5cf6 30%, #ec4899 70%, #ff3366 100%)',borderRadius:28,padding:'70px 28px',textAlign:'center'}}>
        <h2 style={{fontFamily:'Exo 2, sans-serif',fontSize:'clamp(32px,5vw,52px)',fontWeight:900,lineHeight:0.9,letterSpacing:'-2px',color:'#fff'}}>READY TO BE<br/>LEGENDARY?</h2>
        <p style={{color:'rgba(255,255,255,0.88)',fontSize:17,maxWidth:560,margin:'16px auto 32px',lineHeight:1.6}}>Join 50,000+ legends. Free shipping. Cash on Delivery. 7-day returns.</p>
        <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
          <Link to="/shop" style={{display:'inline-flex',alignItems:'center',gap:10,padding:'18px 30px',background:'#fff',color:'#111',fontWeight:900,fontSize:13,letterSpacing:'1px',borderRadius:999,textDecoration:'none'}}>START SHOPPING <ArrowRight size={16} /></Link>
          <Link to="/contact" style={{display:'inline-flex',alignItems:'center',gap:10,padding:'18px 30px',background:'rgba(255,255,255,0.14)',border:'1px solid rgba(255,255,255,0.22)',backdropFilter:'blur(10px)',color:'#fff',fontWeight:800,fontSize:13,borderRadius:999,textDecoration:'none'}}>CONTACT US</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
