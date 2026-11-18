// Club stadium identities. Architecture is a lightweight, stylised Canvas interpretation.
(() => {
    const grounds = [
        ['Spotify Camp Nou','Barcelona','bowl','#a82348','#284887'],
        ['Santiago Bernabéu','Madrid','ribs','#dbe4f0','#254078'],
        ['Etihad Stadium','Manchester','masts','#77bdeb','#eef4fc'],
        ['Parc des Princes','Paris','concrete','#163e7c','#e63c56'],
        ['RAMS Park','İstanbul','bowl','#b92b36','#f1ac37'],
        ['Chobani Stadyumu','İstanbul','canopy','#f3d642','#183e79'],
        ['Tüpraş Stadyumu','İstanbul','canopy','#e7e9ed','#242a37'],
        ['San Siro','Milano','towers','#cb3344','#242735'],
        ['Allianz Arena','München','diamonds','#e3374e','#e4e9f2'],
        ['Anfield','Liverpool','canopy','#c82c3f','#ed7f79'],
        ['Nu Stadium','Miami','palms','#f3a5c6','#363346'],
        ['Al-Awwal Park','Riyadh','bowl','#eacb46','#244983'],
        ['Emirates Stadium','London','masts','#d3374b','#e8e9ef'],
        ['Stamford Bridge','London','canopy','#3269c9','#dfe8fb'],
        ['San Siro','Milano','towers','#2870c3','#242735'],
        ['Riyadh Air Metropolitano','Madrid','bowl','#d9384d','#e5eaf0']
    ];
    window.ARENA_TEAMS.forEach((t,i) => {
        if (t.stadium) return;
        const [name,city,architecture,seat,trim] = grounds[i];
        t.stadium = {name,city,architecture,seat,trim};
    });
    function architecture(c, venue, day) {
        const rect=(x,y,w,h,color)=>{c.fillStyle=color;c.fillRect(x,y,w,h);};
        const line=(x,y,x2,y2,color,width=2)=>{c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.strokeStyle=color;c.lineWidth=width;c.stroke();};
        const poly=(pts,color)=>{c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fillStyle=color;c.fill();};
        const metal=day?'#b9c9d4':'#52738b';
        if (venue.architecture==='concrete') {
            // Parc des Princes' repeated concrete ribs and low, enclosed bowl.
            for(let x=-40;x<1250;x+=75)poly([[x,160],[x+19,148],[x+73,255],[x+50,272]],metal);
            rect(0,259,1200,14,venue.trim);
        } else if(venue.architecture==='towers') {
            for(const x of [48,270,930,1152]) {
                rect(x-20,153,40,151,metal);
                for(let y=160;y<292;y+=15)line(x-22,y,x+22,y+10,'#172637',4);
            }
            for(const y of [168,193])rect(0,y,1200,13,'#923246');
        } else if(venue.architecture==='diamonds') {
            for(let row=0;row<3;row++)for(let x=-40;x<1240;x+=70) {
                const px=x+(row%2)*35,py=175+row*29;
                poly([[px,py],[px+34,py-16],[px+68,py],[px+34,py+16]],row%2?venue.seat:venue.trim);
            }
        } else if(venue.architecture==='ribs') {
            for(let y=163;y<260;y+=9)line(0,y,1200,y,metal,5);
            rect(150,185,900,55,day?'#9bb8d2':'#152a4b');
        } else if(venue.architecture==='masts') {
            for(let x=80;x<1200;x+=208) {
                line(x,123,x+10,270,metal,5);
                line(x,123,x-90,264,metal,1);line(x,123,x+105,264,metal,1);
            }
            line(0,262,1200,262,venue.trim,8);
        } else if(venue.architecture==='palms') {
            rect(0,246,1200,16,venue.trim);
            for(const x of [55,135,1070,1150]) {
                line(x,265,x+12,173,'#6f6653',7);
                for(const dir of [-1,1])for(let n=0;n<3;n++)line(x+12,173,x+12+dir*(36+n*9),163+n*15,'#34785a',8);
            }
        } else if(venue.architecture==='bowl') {
            c.beginPath();c.ellipse(600,160,710,105,0,0,Math.PI);c.strokeStyle=metal;c.lineWidth=18;c.stroke();
            for(let x=0;x<1200;x+=80)line(x,211,x+12,268,metal,3);
        } else {
            poly([[0,167],[270,192],[930,192],[1200,167],[1200,225],[0,225]],metal);
            for(let x=0;x<1200;x+=60)line(x,184,x+30,230,'#3b5266',3);
        }
    }
    const coachHeads = new Map();
    for (const team of window.ARENA_TEAMS) if (team.coach.head && !coachHeads.has(team.coach.head.sheet)) {
        const image = new Image(); image.src = team.coach.head.sheet; coachHeads.set(team.coach.head.sheet, image);
    }
    function coach(c, data, x, y, side, clock, active, day, team, kick = 0) {
        c.save();c.translate(x,y);c.scale(.72,.72);
        const line=(a,b,d,e,col,w)=>{c.beginPath();c.moveTo(a,b);c.lineTo(d,e);c.strokeStyle=col;c.lineWidth=w;c.lineCap='round';c.stroke();};
        const dot=(a,b,r,col)=>{c.beginPath();c.arc(a,b,r,0,Math.PI*2);c.fillStyle=col;c.fill();};
        const shape=(points,col)=>{c.beginPath();points.forEach(([px,py],i)=>i?c.lineTo(px,py):c.moveTo(px,py));c.closePath();c.fillStyle=col;c.fill();};
        const dir=side?-1:1,gesture=active?Math.sin(clock*2+side)*12:0;
        const suit=day?'#283440':'#202a38',lapel=day?'#41505e':'#354355';
        const swing = kick > 0 ? Math.sin(Math.min(1, kick / .6) * Math.PI) * 28 * dir : 0;
        line(-9,-28,-12,0,suit,11);line(9,-28,12+swing,-Math.abs(swing)*.45,suit,11);
        line(-10,-21,-12,-2,'#536073',.8);line(10,-21,12,-2,'#536073',.8);
        line(-15,2,-5,2,'#10151e',6);line(8+swing,2-Math.abs(swing)*.45,20+swing,2-Math.abs(swing)*.45,'#10151e',6);
        line(-13,0,-7,0,'#637186',.8);line(11,0,17,0,'#637186',.8);
        line(-18,-57,-26,-28,suit,10);line(-27,-31,-25,-28,'#f0f1f5',3);dot(-26,-26,4,data.skin);
        line(18,-57,dir*43,-50+gesture,suit,10);line(dir*42,-50+gesture,dir*45,-50+gesture,'#f0f1f5',4);dot(dir*48,-50+gesture,4,data.skin);
        shape([[-19,-62],[-7,-67],[7,-67],[19,-62],[18,-24],[-18,-24]],suit);
        shape([[-8,-65],[8,-65],[0,-44]],'#f1f3f8');
        shape([[-8,-65],[0,-60],[-3,-56],[-11,-61]],'#ffffff');shape([[8,-65],[0,-60],[3,-56],[11,-61]],'#ffffff');
        const tie=team?.color||'#8d3551';shape([[-2,-60],[2,-60],[3,-57],[0,-54],[-3,-57]],tie);shape([[0,-54],[3,-44],[0,-40],[-3,-44]],tie);
        shape([[-16,-62],[-8,-65],[-5,-55],[-9,-53],[0,-40]],lapel);shape([[16,-62],[8,-65],[5,-55],[9,-53],[0,-40]],lapel);
        line(0,-40,0,-25,'#101822',.8);dot(1,-35,1.2,'#b2a789');dot(1,-29,1.2,'#b2a789');
        line(-15,-33,-7,-33,'#536073',1);line(7,-33,15,-33,'#536073',1);
        const crest=team?.crestImage;if(crest?.complete&&crest.naturalWidth){c.save();c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';c.drawImage(crest,7,-54,10,12);c.restore();}
        const head = data.head, atlas = coachHeads.get(head?.sheet);
        if (atlas?.complete && atlas.naturalWidth) {
            const [sx, sy, width, height] = head.crop;
            const sw = width * atlas.naturalWidth, sh = height * atlas.naturalHeight;
            const dw = 57 * sw / sh;
            c.imageSmoothingEnabled = true; c.imageSmoothingQuality = 'high';
            if (head.photo) { c.save(); c.beginPath(); c.ellipse(0, -89.5, dw / 2, 28.5, 0, 0, Math.PI * 2); c.clip(); }
            // Use measured alpha bounds to keep every hair/ear/chin intact.
            const drawHead=window.ArenaRenderCache ? (...args)=>window.ArenaRenderCache.drawImage(c,...args) : (...args)=>c.drawImage(...args);
            drawHead(atlas, sx * atlas.naturalWidth, sy * atlas.naturalHeight,
                sw, sh, -dw / 2, -118, dw, 57);
            if (head.photo) c.restore();
        } else {
            dot(0,-84,20,data.skin);
            if(data.hair){c.beginPath();c.arc(0,-89,20,Math.PI,Math.PI*2);c.fillStyle=data.hair;c.fill();}
            if(data.beard){c.beginPath();c.arc(0,-80,16,0,Math.PI);c.strokeStyle=data.hair||'#423b36';c.lineWidth=5;c.stroke();}
            dot(-7,-84,1.6,'#222b38');dot(7,-84,1.6,'#222b38');line(-4,-75,4,-75,'#694538',1.4);
        }
        c.restore();
    }
    window.GolbolWorld={architecture,coach};
})();
