// Prepare small reusable portrait surfaces instead of resampling full-size atlases each frame.
(()=>{
    const portraits=new Map();
    function drawImage(context,image,sx,sy,sw,sh,dx,dy,dw,dh){
        if(!image?.complete||!image.naturalWidth)return;
        const width=Math.max(1,Math.min(256,Math.ceil(Math.abs(dw)*2)));
        const height=Math.max(1,Math.min(320,Math.ceil(Math.abs(dh)*2)));
        const key=[image.src,sx,sy,sw,sh,width,height].join(':');
        let surface=portraits.get(key);
        if(!surface){
            surface=document.createElement('canvas');surface.width=width;surface.height=height;
            const brush=surface.getContext('2d');brush.imageSmoothingEnabled=true;brush.imageSmoothingQuality='high';
            brush.drawImage(image,sx,sy,sw,sh,0,0,width,height);
            if(portraits.size>=64)portraits.delete(portraits.keys().next().value);
            portraits.set(key,surface);
        }
        context.drawImage(surface,dx,dy,dw,dh);
    }
    window.ArenaRenderCache={drawImage};
})();
