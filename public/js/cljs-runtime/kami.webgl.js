goog.provide('kami.webgl');
kami.webgl.webgpu_available_QMARK_ = (function kami$webgl$webgpu_available_QMARK_(){
return cljs.core.boolean$((function (){var and__5000__auto__ = navigator;
if(cljs.core.truth_(and__5000__auto__)){
return navigator.gpu;
} else {
return and__5000__auto__;
}
})());
});

/**
 * A WebGL2 rendering context for the canvas (premultiplied alpha, antialias), or nil.
 */
kami.webgl.webgl2_context = (function kami$webgl$webgl2_context(canvas){
return canvas.getContext("webgl2",({"antialias": true, "premultipliedAlpha": true}));
});

/**
 * The best available GPU backend for this browser: :webgpu if WebGPU is present, else :webgl2.
 * Both consume the same render-IR; the caller routes to kami.webgpu or kami.webgl accordingly.
 */
kami.webgl.pick_backend = (function kami$webgl$pick_backend(){
if(kami.webgl.webgpu_available_QMARK_()){
return new cljs.core.Keyword(null,"webgpu","webgpu",-1928709720);
} else {
return new cljs.core.Keyword(null,"webgl2","webgl2",111927467);
}
});

/**
 * The kami.gpu capability tier for a running WebGL2 context (no compute / no storage, instancing
 * via ANGLE_instanced_arrays core in WebGL2).
 */
kami.webgl.caps = (function kami$webgl$caps(_gl){
return kami.gpu.caps_from_device(new cljs.core.Keyword(null,"webgl2","webgl2",111927467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compute","compute",1555393130),false,new cljs.core.Keyword(null,"storage","storage",1867247511),false,new cljs.core.Keyword(null,"instancing","instancing",1383407992),true], null));
});

kami.webgl.compile_shader = (function kami$webgl$compile_shader(gl,kind,src){
var s = gl.createShader(kind);
gl.shaderSource(s,src);

gl.compileShader(s);

if(cljs.core.truth_(gl.getShaderParameter(s,gl.COMPILE_STATUS))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["GLSL compile error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getShaderInfoLog(s))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null));
}

return s;
});

/**
 * Compile + link a GLSL ES 3.00 program from vertex/fragment source (as produced by bb gen-glsl).
 * Throws with the info log on failure.
 */
kami.webgl.program = (function kami$webgl$program(gl,vsrc,fsrc){
var p = gl.createProgram();
var vs = kami.webgl.compile_shader(gl,gl.VERTEX_SHADER,vsrc);
var fs = kami.webgl.compile_shader(gl,gl.FRAGMENT_SHADER,fsrc);
gl.attachShader(p,vs);

gl.attachShader(p,fs);

gl.linkProgram(p);

if(cljs.core.truth_(gl.getProgramParameter(p,gl.LINK_STATUS))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["GLSL link error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getProgramInfoLog(p))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

return p;
});

kami.webgl.mesh_vertex_shader = "#version 300 es\nprecision highp float;\nlayout(location=0) in vec3 a_position;\nlayout(location=1) in vec3 a_normal;\nuniform mat4 u_mvp;\nout vec3 v_normal;\nvoid main(){ gl_Position=u_mvp*vec4(a_position,1.0); v_normal=a_normal; }";

kami.webgl.mesh_fragment_shader = "#version 300 es\nprecision highp float;\nin vec3 v_normal;\nuniform vec3 u_color;\nout vec4 out_color;\nvoid main(){ float l=0.25+0.75*max(dot(normalize(v_normal),normalize(vec3(0.4,0.8,0.6))),0.0); out_color=vec4(u_color*l,1.0); }";

/**
 * Initialize the canonical arbitrary-mesh WebGL2 fallback for a canvas.
 */
kami.webgl.init_mesh_viewport_BANG_ = (function kami$webgl$init_mesh_viewport_BANG_(canvas){
var temp__5825__auto__ = kami.webgl.webgl2_context(canvas);
if(cljs.core.truth_(temp__5825__auto__)){
var gl = temp__5825__auto__;
var width = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = canvas.clientWidth;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var height = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = canvas.clientHeight;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var prog = kami.webgl.program(gl,kami.webgl.mesh_vertex_shader,kami.webgl.mesh_fragment_shader);
(canvas.width = width);

(canvas.height = height);

gl.enable(gl.DEPTH_TEST);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backend","backend",-847489124),new cljs.core.Keyword(null,"webgl2","webgl2",111927467),new cljs.core.Keyword(null,"gl","gl",-246422634),gl,new cljs.core.Keyword(null,"program","program",781564284),prog,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
} else {
return null;
}
});

/**
 * Upload {:positions :normals :indices} to a fallback viewport.
 */
kami.webgl.upload_mesh_BANG_ = (function kami$webgl$upload_mesh_BANG_(p__22110,p__22111){
var map__22112 = p__22110;
var map__22112__$1 = cljs.core.__destructure_map(map__22112);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22112__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var map__22113 = p__22111;
var map__22113__$1 = cljs.core.__destructure_map(map__22113);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22113__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22113__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var indices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22113__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var vao = gl.createVertexArray();
var vertex_buffer = gl.createBuffer();
var index_buffer = gl.createBuffer();
var vertices = (new Float32Array(cljs.core.clj__GT_js(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,positions,normals)], 0)))));
var index_data = (new Uint32Array(cljs.core.clj__GT_js(indices)));
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,vertex_buffer);

gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);

var seq__22116_22342 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(12)], null)], null));
var chunk__22117_22343 = null;
var count__22118_22344 = (0);
var i__22119_22345 = (0);
while(true){
if((i__22119_22345 < count__22118_22344)){
var vec__22128_22346 = chunk__22117_22343.cljs$core$IIndexed$_nth$arity$2(null, i__22119_22345);
var location_22347__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22128_22346,(0),null);
var offset_22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22128_22346,(1),null);
gl.enableVertexAttribArray(location_22347__$1);

gl.vertexAttribPointer(location_22347__$1,(3),gl.FLOAT,false,(24),offset_22348);


var G__22349 = seq__22116_22342;
var G__22350 = chunk__22117_22343;
var G__22351 = count__22118_22344;
var G__22352 = (i__22119_22345 + (1));
seq__22116_22342 = G__22349;
chunk__22117_22343 = G__22350;
count__22118_22344 = G__22351;
i__22119_22345 = G__22352;
continue;
} else {
var temp__5825__auto___22353 = cljs.core.seq(seq__22116_22342);
if(temp__5825__auto___22353){
var seq__22116_22354__$1 = temp__5825__auto___22353;
if(cljs.core.chunked_seq_QMARK_(seq__22116_22354__$1)){
var c__5525__auto___22355 = cljs.core.chunk_first(seq__22116_22354__$1);
var G__22356 = cljs.core.chunk_rest(seq__22116_22354__$1);
var G__22357 = c__5525__auto___22355;
var G__22358 = cljs.core.count(c__5525__auto___22355);
var G__22359 = (0);
seq__22116_22342 = G__22356;
chunk__22117_22343 = G__22357;
count__22118_22344 = G__22358;
i__22119_22345 = G__22359;
continue;
} else {
var vec__22133_22360 = cljs.core.first(seq__22116_22354__$1);
var location_22361__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22133_22360,(0),null);
var offset_22362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22133_22360,(1),null);
gl.enableVertexAttribArray(location_22361__$1);

gl.vertexAttribPointer(location_22361__$1,(3),gl.FLOAT,false,(24),offset_22362);


var G__22363 = cljs.core.next(seq__22116_22354__$1);
var G__22364 = null;
var G__22365 = (0);
var G__22366 = (0);
seq__22116_22342 = G__22363;
chunk__22117_22343 = G__22364;
count__22118_22344 = G__22365;
i__22119_22345 = G__22366;
continue;
}
} else {
}
}
break;
}

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,index_buffer);

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,index_data,gl.STATIC_DRAW);

gl.bindVertexArray(null);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vao","vao",-896395446),vao,new cljs.core.Keyword(null,"vertex-buffer","vertex-buffer",-1711520881),vertex_buffer,new cljs.core.Keyword(null,"index-buffer","index-buffer",2003635709),index_buffer,new cljs.core.Keyword(null,"index-count","index-count",-907351532),cljs.core.count(indices)], null);
});

/**
 * Render several fallback mesh draws after one color/depth clear. Each draw
 *   is {:buffers :mvp :color}; MVP is a column-major Float32Array.
 */
kami.webgl.render_mesh_scene_BANG_ = (function kami$webgl$render_mesh_scene_BANG_(p__22137,draws){
var map__22138 = p__22137;
var map__22138__$1 = cljs.core.__destructure_map(map__22138);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22138__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22138__$1,new cljs.core.Keyword(null,"program","program",781564284));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22138__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22138__$1,new cljs.core.Keyword(null,"height","height",1025178622));
gl.viewport((0),(0),width,height);

gl.clearColor(0.035,0.055,0.1,1.0);

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.useProgram(program);

var seq__22140_22367 = cljs.core.seq(draws);
var chunk__22141_22368 = null;
var count__22142_22369 = (0);
var i__22143_22370 = (0);
while(true){
if((i__22143_22370 < count__22142_22369)){
var map__22155_22371 = chunk__22141_22368.cljs$core$IIndexed$_nth$arity$2(null, i__22143_22370);
var map__22155_22372__$1 = cljs.core.__destructure_map(map__22155_22371);
var buffers_22373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155_22372__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var mvp_22374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155_22372__$1,new cljs.core.Keyword(null,"mvp","mvp",-493676132));
var color_22375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155_22372__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__22157_22377 = buffers_22373;
var map__22157_22378__$1 = cljs.core.__destructure_map(map__22157_22377);
var vao_22379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22157_22378__$1,new cljs.core.Keyword(null,"vao","vao",-896395446));
var index_count_22380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22157_22378__$1,new cljs.core.Keyword(null,"index-count","index-count",-907351532));
var vec__22158_22381 = color_22375;
var r_22382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22158_22381,(0),null);
var g_22383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22158_22381,(1),null);
var b_22384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22158_22381,(2),null);
gl.uniformMatrix4fv(gl.getUniformLocation(program,"u_mvp"),false,mvp_22374);

gl.uniform3f(gl.getUniformLocation(program,"u_color"),r_22382,g_22383,b_22384);

gl.bindVertexArray(vao_22379);

gl.drawElements(gl.TRIANGLES,index_count_22380,gl.UNSIGNED_INT,(0));


var G__22385 = seq__22140_22367;
var G__22386 = chunk__22141_22368;
var G__22387 = count__22142_22369;
var G__22388 = (i__22143_22370 + (1));
seq__22140_22367 = G__22385;
chunk__22141_22368 = G__22386;
count__22142_22369 = G__22387;
i__22143_22370 = G__22388;
continue;
} else {
var temp__5825__auto___22389 = cljs.core.seq(seq__22140_22367);
if(temp__5825__auto___22389){
var seq__22140_22390__$1 = temp__5825__auto___22389;
if(cljs.core.chunked_seq_QMARK_(seq__22140_22390__$1)){
var c__5525__auto___22391 = cljs.core.chunk_first(seq__22140_22390__$1);
var G__22393 = cljs.core.chunk_rest(seq__22140_22390__$1);
var G__22394 = c__5525__auto___22391;
var G__22395 = cljs.core.count(c__5525__auto___22391);
var G__22396 = (0);
seq__22140_22367 = G__22393;
chunk__22141_22368 = G__22394;
count__22142_22369 = G__22395;
i__22143_22370 = G__22396;
continue;
} else {
var map__22162_22397 = cljs.core.first(seq__22140_22390__$1);
var map__22162_22398__$1 = cljs.core.__destructure_map(map__22162_22397);
var buffers_22399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22162_22398__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var mvp_22400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22162_22398__$1,new cljs.core.Keyword(null,"mvp","mvp",-493676132));
var color_22401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22162_22398__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__22163_22402 = buffers_22399;
var map__22163_22403__$1 = cljs.core.__destructure_map(map__22163_22402);
var vao_22404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22163_22403__$1,new cljs.core.Keyword(null,"vao","vao",-896395446));
var index_count_22405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22163_22403__$1,new cljs.core.Keyword(null,"index-count","index-count",-907351532));
var vec__22164_22406 = color_22401;
var r_22407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22164_22406,(0),null);
var g_22408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22164_22406,(1),null);
var b_22409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22164_22406,(2),null);
gl.uniformMatrix4fv(gl.getUniformLocation(program,"u_mvp"),false,mvp_22400);

gl.uniform3f(gl.getUniformLocation(program,"u_color"),r_22407,g_22408,b_22409);

gl.bindVertexArray(vao_22404);

gl.drawElements(gl.TRIANGLES,index_count_22405,gl.UNSIGNED_INT,(0));


var G__22410 = cljs.core.next(seq__22140_22390__$1);
var G__22411 = null;
var G__22412 = (0);
var G__22413 = (0);
seq__22140_22367 = G__22410;
chunk__22141_22368 = G__22411;
count__22142_22369 = G__22412;
i__22143_22370 = G__22413;
continue;
}
} else {
}
}
break;
}

return gl.bindVertexArray(null);
});

/**
 * Render one fallback mesh frame.
 */
kami.webgl.render_mesh_frame_BANG_ = (function kami$webgl$render_mesh_frame_BANG_(viewport,buffers,mvp,color){
return kami.webgl.render_mesh_scene_BANG_(viewport,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffers","buffers",471409492),buffers,new cljs.core.Keyword(null,"mvp","mvp",-493676132),mvp,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
});

kami.webgl.F4 = (4);

/**
 * Build a 2D-sprite draw fn for this WebGL2 context from the generated GLSL (sprite.vert/.frag).
 * The returned `(draw! quad-instances [w h])` packs + uploads the instances and issues one
 * instanced draw — the whole 2D frame in a single call, rendering the SDF shapes on the GPU.
 */
kami.webgl.sprite_renderer = (function kami$webgl$sprite_renderer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22414 = arguments.length;
var i__5727__auto___22415 = (0);
while(true){
if((i__5727__auto___22415 < len__5726__auto___22414)){
args__5732__auto__.push((arguments[i__5727__auto___22415]));

var G__22416 = (i__5727__auto___22415 + (1));
i__5727__auto___22415 = G__22416;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return kami.webgl.sprite_renderer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(kami.webgl.sprite_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,p__22171){
var vec__22173 = p__22171;
var map__22176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22173,(0),null);
var map__22176__$1 = cljs.core.__destructure_map(map__22176);
var vert = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22176__$1,new cljs.core.Keyword(null,"vert","vert",-360932977),kami.webgl.glsl.sprite_vert);
var frag = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22176__$1,new cljs.core.Keyword(null,"frag","frag",1474317943),kami.webgl.glsl.sprite_frag);
var prog = kami.webgl.program(gl,vert,frag);
var vao = gl.createVertexArray();
var ibuf = gl.createBuffer();
var ublk = gl.getUniformBlockIndex(prog,"U_block_0Vertex");
var ubuf = gl.createBuffer();
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

var stride_22419 = (48);
var attrs_22420 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(24)], null)], null);
var seq__22177_22421 = cljs.core.seq(attrs_22420);
var chunk__22178_22422 = null;
var count__22179_22423 = (0);
var i__22180_22424 = (0);
while(true){
if((i__22180_22424 < count__22179_22423)){
var vec__22196_22425 = chunk__22178_22422.cljs$core$IIndexed$_nth$arity$2(null, i__22180_22424);
var loc_22426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22196_22425,(0),null);
var n_22427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22196_22425,(1),null);
var off_22428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22196_22425,(2),null);
gl.enableVertexAttribArray(loc_22426);

gl.vertexAttribPointer(loc_22426,n_22427,gl.FLOAT,false,stride_22419,off_22428);

gl.vertexAttribDivisor(loc_22426,(1));


var G__22429 = seq__22177_22421;
var G__22430 = chunk__22178_22422;
var G__22431 = count__22179_22423;
var G__22432 = (i__22180_22424 + (1));
seq__22177_22421 = G__22429;
chunk__22178_22422 = G__22430;
count__22179_22423 = G__22431;
i__22180_22424 = G__22432;
continue;
} else {
var temp__5825__auto___22433 = cljs.core.seq(seq__22177_22421);
if(temp__5825__auto___22433){
var seq__22177_22434__$1 = temp__5825__auto___22433;
if(cljs.core.chunked_seq_QMARK_(seq__22177_22434__$1)){
var c__5525__auto___22435 = cljs.core.chunk_first(seq__22177_22434__$1);
var G__22436 = cljs.core.chunk_rest(seq__22177_22434__$1);
var G__22437 = c__5525__auto___22435;
var G__22438 = cljs.core.count(c__5525__auto___22435);
var G__22439 = (0);
seq__22177_22421 = G__22436;
chunk__22178_22422 = G__22437;
count__22179_22423 = G__22438;
i__22180_22424 = G__22439;
continue;
} else {
var vec__22204_22440 = cljs.core.first(seq__22177_22434__$1);
var loc_22441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22204_22440,(0),null);
var n_22442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22204_22440,(1),null);
var off_22443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22204_22440,(2),null);
gl.enableVertexAttribArray(loc_22441);

gl.vertexAttribPointer(loc_22441,n_22442,gl.FLOAT,false,stride_22419,off_22443);

gl.vertexAttribDivisor(loc_22441,(1));


var G__22444 = cljs.core.next(seq__22177_22434__$1);
var G__22445 = null;
var G__22446 = (0);
var G__22447 = (0);
seq__22177_22421 = G__22444;
chunk__22178_22422 = G__22445;
count__22179_22423 = G__22446;
i__22180_22424 = G__22447;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ublk,gl.INVALID_INDEX)){
gl.uniformBlockBinding(prog,ublk,(0));
} else {
}

gl.bindVertexArray(null);

return (function kami$webgl$draw_BANG_(quad_instances,p__22208){
var vec__22209 = p__22208;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22209,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22209,(1),null);
var data = (new Float32Array(cljs.core.clj__GT_js(kami.sprite_gpu.pack_instances(quad_instances))));
var n = cljs.core.count(quad_instances);
gl.useProgram(prog);

gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

gl.bufferData(gl.ARRAY_BUFFER,data,gl.DYNAMIC_DRAW);

gl.bindBuffer(gl.UNIFORM_BUFFER,ubuf);

gl.bufferData(gl.UNIFORM_BUFFER,(new Float32Array([w,h,(0),(0)])),gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),ubuf);

gl.enable(gl.BLEND);

gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);

gl.drawArraysInstanced(gl.TRIANGLES,(0),(6),n);

return gl.bindVertexArray(null);
});
}));

(kami.webgl.sprite_renderer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kami.webgl.sprite_renderer.cljs$lang$applyTo = (function (seq22167){
var G__22168 = cljs.core.first(seq22167);
var seq22167__$1 = cljs.core.next(seq22167);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22168,seq22167__$1);
}));


/**
 * Render a 2D sprite frame on WebGL2: clear, then draw the quad instances (from
 * kami.sprite-gpu/draw-ops->quads) via the sprite pass. The :sprites pass has no kami.gpu
 * :requires, so it runs on this tier; compute passes in a richer graph are dropped by resolve.
 */
kami.webgl.render_2d_BANG_ = (function kami$webgl$render_2d_BANG_(gl,p__22215,quad_instances,p__22216){
var map__22217 = p__22215;
var map__22217__$1 = cljs.core.__destructure_map(map__22217);
var draw_sprites_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22217__$1,new cljs.core.Keyword(null,"draw-sprites!","draw-sprites!",-408140749));
var clear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22217__$1,new cljs.core.Keyword(null,"clear","clear",1877104959));
var vec__22218 = p__22216;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218,(1),null);
gl.viewport((0),(0),w,h);

var vec__22221_22452 = (function (){var or__5002__auto__ = clear;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.05,0.08,1.0], null);
}
})();
var r_22453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22221_22452,(0),null);
var g_22454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22221_22452,(1),null);
var b_22455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22221_22452,(2),null);
var a_22456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22221_22452,(3),null);
gl.clearColor(r_22453,g_22454,b_22455,a_22456);

gl.clear(gl.COLOR_BUFFER_BIT);

var G__22224 = quad_instances;
var G__22225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null);
return (draw_sprites_BANG_.cljs$core$IFn$_invoke$arity$2 ? draw_sprites_BANG_.cljs$core$IFn$_invoke$arity$2(G__22224,G__22225) : draw_sprites_BANG_.call(null, G__22224,G__22225));
});

kami.webgl.SHADOW_FS = "#version 300 es\nprecision highp float;\nvoid main() {}";

/**
 * Build a whole-2D-frame draw fn from the embedded GLSL: a sky gradient pass (fullscreen triangle)
 * then the instanced sprite/text quad pass. (render! {:sky {:zenith :ground} :quads [...]} [w h])
 * draws the full kami.scene2d frame on the GPU — the Canvas2D draw-2d! replacement.
 */
kami.webgl.scene_renderer = (function kami$webgl$scene_renderer(gl){
var sky_prog = kami.webgl.program(gl,kami.webgl.glsl.sky_vert,kami.webgl.glsl.sky_frag);
var sky_ub = gl.createBuffer();
var sky_blk = gl.getUniformBlockIndex(sky_prog,"SU_block_0Fragment");
var draw_BANG_ = kami.webgl.sprite_renderer(gl);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sky_blk,gl.INVALID_INDEX)){
gl.uniformBlockBinding(sky_prog,sky_blk,(0));
} else {
}

return (function kami$webgl$scene_renderer_$_render_frame_BANG_(p__22230,p__22231){
var map__22232 = p__22230;
var map__22232__$1 = cljs.core.__destructure_map(map__22232);
var sky = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22232__$1,new cljs.core.Keyword(null,"sky","sky",1271496862));
var quads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22232__$1,new cljs.core.Keyword(null,"quads","quads",1347497505));
var vec__22234 = p__22231;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22234,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22234,(1),null);
gl.viewport((0),(0),w,h);

gl.useProgram(sky_prog);

gl.bindBuffer(gl.UNIFORM_BUFFER,sky_ub);

gl.bufferData(gl.UNIFORM_BUFFER,(new Float32Array(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zenith","zenith",1165769957).cljs$core$IFn$_invoke$arity$1(sky),new cljs.core.Keyword(null,"ground","ground",1193572934).cljs$core$IFn$_invoke$arity$1(sky))))),gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),sky_ub);

gl.disable(gl.BLEND);

gl.drawArrays(gl.TRIANGLES,(0),(3));

return draw_BANG_(quads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
});
});

kami.webgl.mesh_vao = (function kami$webgl$mesh_vao(gl,vbuf,ibuf,inst){
var vao = gl.createVertexArray();
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,vbuf);

var seq__22240_22473 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(12)], null)], null));
var chunk__22241_22474 = null;
var count__22242_22475 = (0);
var i__22243_22476 = (0);
while(true){
if((i__22243_22476 < count__22242_22475)){
var vec__22253_22477 = chunk__22241_22474.cljs$core$IIndexed$_nth$arity$2(null, i__22243_22476);
var loc_22478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22253_22477,(0),null);
var off_22480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22253_22477,(1),null);
gl.enableVertexAttribArray(loc_22478);

gl.vertexAttribPointer(loc_22478,(3),gl.FLOAT,false,(24),off_22480);


var G__22482 = seq__22240_22473;
var G__22483 = chunk__22241_22474;
var G__22484 = count__22242_22475;
var G__22485 = (i__22243_22476 + (1));
seq__22240_22473 = G__22482;
chunk__22241_22474 = G__22483;
count__22242_22475 = G__22484;
i__22243_22476 = G__22485;
continue;
} else {
var temp__5825__auto___22486 = cljs.core.seq(seq__22240_22473);
if(temp__5825__auto___22486){
var seq__22240_22487__$1 = temp__5825__auto___22486;
if(cljs.core.chunked_seq_QMARK_(seq__22240_22487__$1)){
var c__5525__auto___22488 = cljs.core.chunk_first(seq__22240_22487__$1);
var G__22489 = cljs.core.chunk_rest(seq__22240_22487__$1);
var G__22490 = c__5525__auto___22488;
var G__22491 = cljs.core.count(c__5525__auto___22488);
var G__22492 = (0);
seq__22240_22473 = G__22489;
chunk__22241_22474 = G__22490;
count__22242_22475 = G__22491;
i__22243_22476 = G__22492;
continue;
} else {
var vec__22256_22493 = cljs.core.first(seq__22240_22487__$1);
var loc_22494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22256_22493,(0),null);
var off_22495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22256_22493,(1),null);
gl.enableVertexAttribArray(loc_22494);

gl.vertexAttribPointer(loc_22494,(3),gl.FLOAT,false,(24),off_22495);


var G__22496 = cljs.core.next(seq__22240_22487__$1);
var G__22497 = null;
var G__22498 = (0);
var G__22499 = (0);
seq__22240_22473 = G__22496;
chunk__22241_22474 = G__22497;
count__22242_22475 = G__22498;
i__22243_22476 = G__22499;
continue;
}
} else {
}
}
break;
}

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ibuf);

gl.bindBuffer(gl.ARRAY_BUFFER,inst);

var seq__22259_22501 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(48)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(64)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(80)], null)], null));
var chunk__22260_22502 = null;
var count__22261_22503 = (0);
var i__22262_22504 = (0);
while(true){
if((i__22262_22504 < count__22261_22503)){
var vec__22273_22506 = chunk__22260_22502.cljs$core$IIndexed$_nth$arity$2(null, i__22262_22504);
var loc_22507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22273_22506,(0),null);
var off_22508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22273_22506,(1),null);
gl.enableVertexAttribArray(loc_22507);

gl.vertexAttribPointer(loc_22507,(4),gl.FLOAT,false,(96),off_22508);

gl.vertexAttribDivisor(loc_22507,(1));


var G__22512 = seq__22259_22501;
var G__22513 = chunk__22260_22502;
var G__22514 = count__22261_22503;
var G__22515 = (i__22262_22504 + (1));
seq__22259_22501 = G__22512;
chunk__22260_22502 = G__22513;
count__22261_22503 = G__22514;
i__22262_22504 = G__22515;
continue;
} else {
var temp__5825__auto___22516 = cljs.core.seq(seq__22259_22501);
if(temp__5825__auto___22516){
var seq__22259_22517__$1 = temp__5825__auto___22516;
if(cljs.core.chunked_seq_QMARK_(seq__22259_22517__$1)){
var c__5525__auto___22518 = cljs.core.chunk_first(seq__22259_22517__$1);
var G__22519 = cljs.core.chunk_rest(seq__22259_22517__$1);
var G__22520 = c__5525__auto___22518;
var G__22521 = cljs.core.count(c__5525__auto___22518);
var G__22522 = (0);
seq__22259_22501 = G__22519;
chunk__22260_22502 = G__22520;
count__22261_22503 = G__22521;
i__22262_22504 = G__22522;
continue;
} else {
var vec__22276_22524 = cljs.core.first(seq__22259_22517__$1);
var loc_22525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22276_22524,(0),null);
var off_22526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22276_22524,(1),null);
gl.enableVertexAttribArray(loc_22525);

gl.vertexAttribPointer(loc_22525,(4),gl.FLOAT,false,(96),off_22526);

gl.vertexAttribDivisor(loc_22525,(1));


var G__22527 = cljs.core.next(seq__22259_22517__$1);
var G__22528 = null;
var G__22529 = (0);
var G__22530 = (0);
seq__22259_22501 = G__22527;
chunk__22260_22502 = G__22528;
count__22261_22503 = G__22529;
i__22262_22504 = G__22530;
continue;
}
} else {
}
}
break;
}

gl.bindVertexArray(null);

return vao;
});

kami.webgl.depth_fbo = (function kami$webgl$depth_fbo(gl,size){
var tex = gl.createTexture();
var fbo = gl.createFramebuffer();
gl.bindTexture(gl.TEXTURE_2D,tex);

gl.texImage2D(gl.TEXTURE_2D,(0),gl.DEPTH_COMPONENT32F,size,size,(0),gl.DEPTH_COMPONENT,gl.FLOAT,null);

var seq__22280_22531 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_MIN_FILTER,gl.LINEAR], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_MAG_FILTER,gl.LINEAR], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_COMPARE_MODE,gl.COMPARE_REF_TO_TEXTURE], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_COMPARE_FUNC,gl.LEQUAL], null)], null));
var chunk__22281_22532 = null;
var count__22282_22533 = (0);
var i__22283_22534 = (0);
while(true){
if((i__22283_22534 < count__22282_22533)){
var vec__22295_22535 = chunk__22281_22532.cljs$core$IIndexed$_nth$arity$2(null, i__22283_22534);
var k_22536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22295_22535,(0),null);
var v_22537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22295_22535,(1),null);
gl.texParameteri(gl.TEXTURE_2D,k_22536,v_22537);


var G__22538 = seq__22280_22531;
var G__22539 = chunk__22281_22532;
var G__22540 = count__22282_22533;
var G__22541 = (i__22283_22534 + (1));
seq__22280_22531 = G__22538;
chunk__22281_22532 = G__22539;
count__22282_22533 = G__22540;
i__22283_22534 = G__22541;
continue;
} else {
var temp__5825__auto___22542 = cljs.core.seq(seq__22280_22531);
if(temp__5825__auto___22542){
var seq__22280_22543__$1 = temp__5825__auto___22542;
if(cljs.core.chunked_seq_QMARK_(seq__22280_22543__$1)){
var c__5525__auto___22544 = cljs.core.chunk_first(seq__22280_22543__$1);
var G__22545 = cljs.core.chunk_rest(seq__22280_22543__$1);
var G__22546 = c__5525__auto___22544;
var G__22547 = cljs.core.count(c__5525__auto___22544);
var G__22548 = (0);
seq__22280_22531 = G__22545;
chunk__22281_22532 = G__22546;
count__22282_22533 = G__22547;
i__22283_22534 = G__22548;
continue;
} else {
var vec__22302_22549 = cljs.core.first(seq__22280_22543__$1);
var k_22550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22302_22549,(0),null);
var v_22551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22302_22549,(1),null);
gl.texParameteri(gl.TEXTURE_2D,k_22550,v_22551);


var G__22552 = cljs.core.next(seq__22280_22543__$1);
var G__22553 = null;
var G__22554 = (0);
var G__22555 = (0);
seq__22280_22531 = G__22552;
chunk__22281_22532 = G__22553;
count__22282_22533 = G__22554;
i__22283_22534 = G__22555;
continue;
}
} else {
}
}
break;
}

gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);

gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.TEXTURE_2D,tex,(0));

gl.bindFramebuffer(gl.FRAMEBUFFER,null);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tex","tex",1307057959),tex,new cljs.core.Keyword(null,"fbo","fbo",265702356),fbo,new cljs.core.Keyword(null,"size","size",1098693007),size], null);
});

/**
 * Build the 3D lit+shadow draw for this WebGL2 context. `shaders` {:lit {:vert :frag} :shadow {:vert}}
 * are the GLSL ES 3.00 from bb gen-glsl. Returns (draw! packed-G mesh instances [w h]) where mesh is
 * {:vbuf :ibuf :count}, instances a Float32Array (24 f32/instance) with metadata :count on the map
 * passed as the 3rd-arg wrapper {:buf :count}.
 */
kami.webgl.lit_renderer = (function kami$webgl$lit_renderer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22558 = arguments.length;
var i__5727__auto___22559 = (0);
while(true){
if((i__5727__auto___22559 < len__5726__auto___22558)){
args__5732__auto__.push((arguments[i__5727__auto___22559]));

var G__22562 = (i__5727__auto___22559 + (1));
i__5727__auto___22559 = G__22562;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return kami.webgl.lit_renderer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(kami.webgl.lit_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,shaders,p__22310){
var vec__22311 = p__22310;
var map__22314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22311,(0),null);
var map__22314__$1 = cljs.core.__destructure_map(map__22314);
var shadow_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22314__$1,new cljs.core.Keyword(null,"shadow-size","shadow-size",-1197814709),(2048));
var lit_p = kami.webgl.program(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lit","lit",-561435380),new cljs.core.Keyword(null,"vert","vert",-360932977)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lit","lit",-561435380),new cljs.core.Keyword(null,"frag","frag",1474317943)], null)));
var shd_p = kami.webgl.program(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"vert","vert",-360932977)], null)),kami.webgl.SHADOW_FS);
var sm = kami.webgl.depth_fbo(gl,shadow_size);
var gbuf = gl.createBuffer();
var ibuf = gl.createBuffer();
var bind_g = (function (prog,n){
var i = gl.getUniformBlockIndex(prog,n);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,gl.INVALID_INDEX)){
return gl.uniformBlockBinding(prog,i,(0));
} else {
return null;
}
});
bind_g(lit_p,"G_block_0Vertex");

bind_g(lit_p,"G_block_0Fragment");

bind_g(shd_p,"G_block_0Vertex");

return (function kami$webgl$draw_BANG_(packed_G,mesh,instances,p__22315){
var vec__22317 = p__22315;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22317,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22317,(1),null);
gl.bindBuffer(gl.UNIFORM_BUFFER,gbuf);

gl.bufferData(gl.UNIFORM_BUFFER,packed_G,gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),gbuf);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

gl.bufferData(gl.ARRAY_BUFFER,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(instances),gl.DYNAMIC_DRAW);

var vao = kami.webgl.mesh_vao(gl,new cljs.core.Keyword(null,"vbuf","vbuf",303950747).cljs$core$IFn$_invoke$arity$1(mesh),new cljs.core.Keyword(null,"ibuf","ibuf",801056512).cljs$core$IFn$_invoke$arity$1(mesh),ibuf);
var n = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(instances);
gl.enable(gl.DEPTH_TEST);

gl.bindFramebuffer(gl.FRAMEBUFFER,new cljs.core.Keyword(null,"fbo","fbo",265702356).cljs$core$IFn$_invoke$arity$1(sm));

gl.viewport((0),(0),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(sm),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(sm));

gl.clear(gl.DEPTH_BUFFER_BIT);

gl.useProgram(shd_p);

gl.bindVertexArray(vao);

gl.drawElementsInstanced(gl.TRIANGLES,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(mesh),gl.UNSIGNED_SHORT,(0),n);

gl.bindFramebuffer(gl.FRAMEBUFFER,null);

gl.viewport((0),(0),w,h);

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.useProgram(lit_p);

gl.activeTexture(gl.TEXTURE0);

gl.bindTexture(gl.TEXTURE_2D,new cljs.core.Keyword(null,"tex","tex",1307057959).cljs$core$IFn$_invoke$arity$1(sm));

gl.uniform1i(gl.getUniformLocation(lit_p,"_group_0_binding_1_fs"),(0));

gl.drawElementsInstanced(gl.TRIANGLES,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(mesh),gl.UNSIGNED_SHORT,(0),n);

return gl.bindVertexArray(null);
});
}));

(kami.webgl.lit_renderer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(kami.webgl.lit_renderer.cljs$lang$applyTo = (function (seq22305){
var G__22306 = cljs.core.first(seq22305);
var seq22305__$1 = cljs.core.next(seq22305);
var G__22307 = cljs.core.first(seq22305__$1);
var seq22305__$2 = cljs.core.next(seq22305__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22306,G__22307,seq22305__$2);
}));


//# sourceMappingURL=kami.webgl.js.map
