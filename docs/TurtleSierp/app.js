!function(t){var n={};function r(u){if(n[u])return n[u].exports;var e=n[u]={i:u,l:!1,exports:{}};return t[u].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,n,u){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:u})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var u=Object.create(null);if(r.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(u,e,function(n){return t[n]}.bind(null,e));return u},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/",r(r.s=77)}({0:function(t,n,r){"use strict";var u={};r.r(u),r.d(u,"create",function(){return h}),r.d(u,"clone",function(){return s}),r.d(u,"copy",function(){return d}),r.d(u,"fromValues",function(){return M}),r.d(u,"set",function(){return l}),r.d(u,"identity",function(){return v}),r.d(u,"transpose",function(){return m}),r.d(u,"invert",function(){return b}),r.d(u,"adjoint",function(){return p}),r.d(u,"determinant",function(){return g}),r.d(u,"multiply",function(){return y}),r.d(u,"translate",function(){return w}),r.d(u,"scale",function(){return x}),r.d(u,"rotate",function(){return q}),r.d(u,"rotateX",function(){return A}),r.d(u,"rotateY",function(){return _}),r.d(u,"rotateZ",function(){return S}),r.d(u,"fromTranslation",function(){return P}),r.d(u,"fromScaling",function(){return T}),r.d(u,"fromRotation",function(){return I}),r.d(u,"fromXRotation",function(){return F}),r.d(u,"fromYRotation",function(){return R}),r.d(u,"fromZRotation",function(){return E}),r.d(u,"fromRotationTranslation",function(){return L}),r.d(u,"fromQuat2",function(){return O}),r.d(u,"getTranslation",function(){return k}),r.d(u,"getScaling",function(){return D}),r.d(u,"getRotation",function(){return V}),r.d(u,"fromRotationTranslationScale",function(){return j}),r.d(u,"fromRotationTranslationScaleOrigin",function(){return C}),r.d(u,"fromQuat",function(){return z}),r.d(u,"frustum",function(){return U}),r.d(u,"perspective",function(){return B}),r.d(u,"perspectiveFromFieldOfView",function(){return G}),r.d(u,"ortho",function(){return W}),r.d(u,"lookAt",function(){return Y}),r.d(u,"targetTo",function(){return N}),r.d(u,"str",function(){return Q}),r.d(u,"frob",function(){return X}),r.d(u,"add",function(){return H}),r.d(u,"subtract",function(){return Z}),r.d(u,"multiplyScalar",function(){return K}),r.d(u,"multiplyScalarAndAdd",function(){return J}),r.d(u,"exactEquals",function(){return $}),r.d(u,"equals",function(){return tt}),r.d(u,"mul",function(){return nt}),r.d(u,"sub",function(){return rt});var e={};r.r(e),r.d(e,"create",function(){return ut}),r.d(e,"clone",function(){return et}),r.d(e,"fromValues",function(){return at}),r.d(e,"copy",function(){return ot}),r.d(e,"set",function(){return it}),r.d(e,"add",function(){return ct}),r.d(e,"subtract",function(){return ft}),r.d(e,"multiply",function(){return ht}),r.d(e,"divide",function(){return st}),r.d(e,"ceil",function(){return dt}),r.d(e,"floor",function(){return Mt}),r.d(e,"min",function(){return lt}),r.d(e,"max",function(){return vt}),r.d(e,"round",function(){return mt}),r.d(e,"scale",function(){return bt}),r.d(e,"scaleAndAdd",function(){return pt}),r.d(e,"distance",function(){return gt}),r.d(e,"squaredDistance",function(){return yt}),r.d(e,"length",function(){return wt}),r.d(e,"squaredLength",function(){return xt}),r.d(e,"negate",function(){return qt}),r.d(e,"inverse",function(){return At}),r.d(e,"normalize",function(){return _t}),r.d(e,"dot",function(){return St}),r.d(e,"cross",function(){return Pt}),r.d(e,"lerp",function(){return Tt}),r.d(e,"random",function(){return It}),r.d(e,"transformMat2",function(){return Ft}),r.d(e,"transformMat2d",function(){return Rt}),r.d(e,"transformMat3",function(){return Et}),r.d(e,"transformMat4",function(){return Lt}),r.d(e,"rotate",function(){return Ot}),r.d(e,"angle",function(){return kt}),r.d(e,"zero",function(){return Dt}),r.d(e,"str",function(){return Vt}),r.d(e,"exactEquals",function(){return jt}),r.d(e,"equals",function(){return Ct}),r.d(e,"len",function(){return Ut}),r.d(e,"sub",function(){return Bt}),r.d(e,"mul",function(){return Gt}),r.d(e,"div",function(){return Wt}),r.d(e,"dist",function(){return Yt}),r.d(e,"sqrDist",function(){return Nt}),r.d(e,"sqrLen",function(){return Qt}),r.d(e,"forEach",function(){return Xt});var a={};r.r(a),r.d(a,"create",function(){return Ht}),r.d(a,"clone",function(){return Zt}),r.d(a,"length",function(){return Kt}),r.d(a,"fromValues",function(){return Jt}),r.d(a,"copy",function(){return $t}),r.d(a,"set",function(){return tn}),r.d(a,"add",function(){return nn}),r.d(a,"subtract",function(){return rn}),r.d(a,"multiply",function(){return un}),r.d(a,"divide",function(){return en}),r.d(a,"ceil",function(){return an}),r.d(a,"floor",function(){return on}),r.d(a,"min",function(){return cn}),r.d(a,"max",function(){return fn}),r.d(a,"round",function(){return hn}),r.d(a,"scale",function(){return sn}),r.d(a,"scaleAndAdd",function(){return dn}),r.d(a,"distance",function(){return Mn}),r.d(a,"squaredDistance",function(){return ln}),r.d(a,"squaredLength",function(){return vn}),r.d(a,"negate",function(){return mn}),r.d(a,"inverse",function(){return bn}),r.d(a,"normalize",function(){return pn}),r.d(a,"dot",function(){return gn}),r.d(a,"cross",function(){return yn}),r.d(a,"lerp",function(){return wn}),r.d(a,"hermite",function(){return xn}),r.d(a,"bezier",function(){return qn}),r.d(a,"random",function(){return An}),r.d(a,"transformMat4",function(){return _n}),r.d(a,"transformMat3",function(){return Sn}),r.d(a,"transformQuat",function(){return Pn}),r.d(a,"rotateX",function(){return Tn}),r.d(a,"rotateY",function(){return In}),r.d(a,"rotateZ",function(){return Fn}),r.d(a,"angle",function(){return Rn}),r.d(a,"zero",function(){return En}),r.d(a,"str",function(){return Ln}),r.d(a,"exactEquals",function(){return On}),r.d(a,"equals",function(){return kn}),r.d(a,"sub",function(){return Dn}),r.d(a,"mul",function(){return Vn}),r.d(a,"div",function(){return jn}),r.d(a,"dist",function(){return Cn}),r.d(a,"sqrDist",function(){return zn}),r.d(a,"len",function(){return Un}),r.d(a,"sqrLen",function(){return Bn}),r.d(a,"forEach",function(){return Gn});var o={};r.r(o),r.d(o,"create",function(){return Wn}),r.d(o,"clone",function(){return Yn}),r.d(o,"fromValues",function(){return Nn}),r.d(o,"copy",function(){return Qn}),r.d(o,"set",function(){return Xn}),r.d(o,"add",function(){return Hn}),r.d(o,"subtract",function(){return Zn}),r.d(o,"multiply",function(){return Kn}),r.d(o,"divide",function(){return Jn}),r.d(o,"ceil",function(){return $n}),r.d(o,"floor",function(){return tr}),r.d(o,"min",function(){return nr}),r.d(o,"max",function(){return rr}),r.d(o,"round",function(){return ur}),r.d(o,"scale",function(){return er}),r.d(o,"scaleAndAdd",function(){return ar}),r.d(o,"distance",function(){return or}),r.d(o,"squaredDistance",function(){return ir}),r.d(o,"length",function(){return cr}),r.d(o,"squaredLength",function(){return fr}),r.d(o,"negate",function(){return hr}),r.d(o,"inverse",function(){return sr}),r.d(o,"normalize",function(){return dr}),r.d(o,"dot",function(){return Mr}),r.d(o,"cross",function(){return lr}),r.d(o,"lerp",function(){return vr}),r.d(o,"random",function(){return mr}),r.d(o,"transformMat4",function(){return br}),r.d(o,"transformQuat",function(){return pr}),r.d(o,"zero",function(){return gr}),r.d(o,"str",function(){return yr}),r.d(o,"exactEquals",function(){return wr}),r.d(o,"equals",function(){return xr}),r.d(o,"sub",function(){return qr}),r.d(o,"mul",function(){return Ar}),r.d(o,"div",function(){return _r}),r.d(o,"dist",function(){return Sr}),r.d(o,"sqrDist",function(){return Pr}),r.d(o,"len",function(){return Tr}),r.d(o,"sqrLen",function(){return Ir}),r.d(o,"forEach",function(){return Fr});var i=1e-6,c="undefined"!=typeof Float32Array?Float32Array:Array,f=Math.random;Math.PI;function h(){var t=new c(16);return c!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function s(t){var n=new c(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function d(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function M(t,n,r,u,e,a,o,i,f,h,s,d,M,l,v,m){var b=new c(16);return b[0]=t,b[1]=n,b[2]=r,b[3]=u,b[4]=e,b[5]=a,b[6]=o,b[7]=i,b[8]=f,b[9]=h,b[10]=s,b[11]=d,b[12]=M,b[13]=l,b[14]=v,b[15]=m,b}function l(t,n,r,u,e,a,o,i,c,f,h,s,d,M,l,v,m){return t[0]=n,t[1]=r,t[2]=u,t[3]=e,t[4]=a,t[5]=o,t[6]=i,t[7]=c,t[8]=f,t[9]=h,t[10]=s,t[11]=d,t[12]=M,t[13]=l,t[14]=v,t[15]=m,t}function v(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function m(t,n){if(t===n){var r=n[1],u=n[2],e=n[3],a=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=u,t[9]=a,t[11]=n[14],t[12]=e,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function b(t,n){var r=n[0],u=n[1],e=n[2],a=n[3],o=n[4],i=n[5],c=n[6],f=n[7],h=n[8],s=n[9],d=n[10],M=n[11],l=n[12],v=n[13],m=n[14],b=n[15],p=r*i-u*o,g=r*c-e*o,y=r*f-a*o,w=u*c-e*i,x=u*f-a*i,q=e*f-a*c,A=h*v-s*l,_=h*m-d*l,S=h*b-M*l,P=s*m-d*v,T=s*b-M*v,I=d*b-M*m,F=p*I-g*T+y*P+w*S-x*_+q*A;return F?(F=1/F,t[0]=(i*I-c*T+f*P)*F,t[1]=(e*T-u*I-a*P)*F,t[2]=(v*q-m*x+b*w)*F,t[3]=(d*x-s*q-M*w)*F,t[4]=(c*S-o*I-f*_)*F,t[5]=(r*I-e*S+a*_)*F,t[6]=(m*y-l*q-b*g)*F,t[7]=(h*q-d*y+M*g)*F,t[8]=(o*T-i*S+f*A)*F,t[9]=(u*S-r*T-a*A)*F,t[10]=(l*x-v*y+b*p)*F,t[11]=(s*y-h*x-M*p)*F,t[12]=(i*_-o*P-c*A)*F,t[13]=(r*P-u*_+e*A)*F,t[14]=(v*g-l*w-m*p)*F,t[15]=(h*w-s*g+d*p)*F,t):null}function p(t,n){var r=n[0],u=n[1],e=n[2],a=n[3],o=n[4],i=n[5],c=n[6],f=n[7],h=n[8],s=n[9],d=n[10],M=n[11],l=n[12],v=n[13],m=n[14],b=n[15];return t[0]=i*(d*b-M*m)-s*(c*b-f*m)+v*(c*M-f*d),t[1]=-(u*(d*b-M*m)-s*(e*b-a*m)+v*(e*M-a*d)),t[2]=u*(c*b-f*m)-i*(e*b-a*m)+v*(e*f-a*c),t[3]=-(u*(c*M-f*d)-i*(e*M-a*d)+s*(e*f-a*c)),t[4]=-(o*(d*b-M*m)-h*(c*b-f*m)+l*(c*M-f*d)),t[5]=r*(d*b-M*m)-h*(e*b-a*m)+l*(e*M-a*d),t[6]=-(r*(c*b-f*m)-o*(e*b-a*m)+l*(e*f-a*c)),t[7]=r*(c*M-f*d)-o*(e*M-a*d)+h*(e*f-a*c),t[8]=o*(s*b-M*v)-h*(i*b-f*v)+l*(i*M-f*s),t[9]=-(r*(s*b-M*v)-h*(u*b-a*v)+l*(u*M-a*s)),t[10]=r*(i*b-f*v)-o*(u*b-a*v)+l*(u*f-a*i),t[11]=-(r*(i*M-f*s)-o*(u*M-a*s)+h*(u*f-a*i)),t[12]=-(o*(s*m-d*v)-h*(i*m-c*v)+l*(i*d-c*s)),t[13]=r*(s*m-d*v)-h*(u*m-e*v)+l*(u*d-e*s),t[14]=-(r*(i*m-c*v)-o*(u*m-e*v)+l*(u*c-e*i)),t[15]=r*(i*d-c*s)-o*(u*d-e*s)+h*(u*c-e*i),t}function g(t){var n=t[0],r=t[1],u=t[2],e=t[3],a=t[4],o=t[5],i=t[6],c=t[7],f=t[8],h=t[9],s=t[10],d=t[11],M=t[12],l=t[13],v=t[14],m=t[15];return(n*o-r*a)*(s*m-d*v)-(n*i-u*a)*(h*m-d*l)+(n*c-e*a)*(h*v-s*l)+(r*i-u*o)*(f*m-d*M)-(r*c-e*o)*(f*v-s*M)+(u*c-e*i)*(f*l-h*M)}function y(t,n,r){var u=n[0],e=n[1],a=n[2],o=n[3],i=n[4],c=n[5],f=n[6],h=n[7],s=n[8],d=n[9],M=n[10],l=n[11],v=n[12],m=n[13],b=n[14],p=n[15],g=r[0],y=r[1],w=r[2],x=r[3];return t[0]=g*u+y*i+w*s+x*v,t[1]=g*e+y*c+w*d+x*m,t[2]=g*a+y*f+w*M+x*b,t[3]=g*o+y*h+w*l+x*p,g=r[4],y=r[5],w=r[6],x=r[7],t[4]=g*u+y*i+w*s+x*v,t[5]=g*e+y*c+w*d+x*m,t[6]=g*a+y*f+w*M+x*b,t[7]=g*o+y*h+w*l+x*p,g=r[8],y=r[9],w=r[10],x=r[11],t[8]=g*u+y*i+w*s+x*v,t[9]=g*e+y*c+w*d+x*m,t[10]=g*a+y*f+w*M+x*b,t[11]=g*o+y*h+w*l+x*p,g=r[12],y=r[13],w=r[14],x=r[15],t[12]=g*u+y*i+w*s+x*v,t[13]=g*e+y*c+w*d+x*m,t[14]=g*a+y*f+w*M+x*b,t[15]=g*o+y*h+w*l+x*p,t}function w(t,n,r){var u,e,a,o,i,c,f,h,s,d,M,l,v=r[0],m=r[1],b=r[2];return n===t?(t[12]=n[0]*v+n[4]*m+n[8]*b+n[12],t[13]=n[1]*v+n[5]*m+n[9]*b+n[13],t[14]=n[2]*v+n[6]*m+n[10]*b+n[14],t[15]=n[3]*v+n[7]*m+n[11]*b+n[15]):(u=n[0],e=n[1],a=n[2],o=n[3],i=n[4],c=n[5],f=n[6],h=n[7],s=n[8],d=n[9],M=n[10],l=n[11],t[0]=u,t[1]=e,t[2]=a,t[3]=o,t[4]=i,t[5]=c,t[6]=f,t[7]=h,t[8]=s,t[9]=d,t[10]=M,t[11]=l,t[12]=u*v+i*m+s*b+n[12],t[13]=e*v+c*m+d*b+n[13],t[14]=a*v+f*m+M*b+n[14],t[15]=o*v+h*m+l*b+n[15]),t}function x(t,n,r){var u=r[0],e=r[1],a=r[2];return t[0]=n[0]*u,t[1]=n[1]*u,t[2]=n[2]*u,t[3]=n[3]*u,t[4]=n[4]*e,t[5]=n[5]*e,t[6]=n[6]*e,t[7]=n[7]*e,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function q(t,n,r,u){var e,a,o,c,f,h,s,d,M,l,v,m,b,p,g,y,w,x,q,A,_,S,P,T,I=u[0],F=u[1],R=u[2],E=Math.sqrt(I*I+F*F+R*R);return E<i?null:(I*=E=1/E,F*=E,R*=E,e=Math.sin(r),o=1-(a=Math.cos(r)),c=n[0],f=n[1],h=n[2],s=n[3],d=n[4],M=n[5],l=n[6],v=n[7],m=n[8],b=n[9],p=n[10],g=n[11],y=I*I*o+a,w=F*I*o+R*e,x=R*I*o-F*e,q=I*F*o-R*e,A=F*F*o+a,_=R*F*o+I*e,S=I*R*o+F*e,P=F*R*o-I*e,T=R*R*o+a,t[0]=c*y+d*w+m*x,t[1]=f*y+M*w+b*x,t[2]=h*y+l*w+p*x,t[3]=s*y+v*w+g*x,t[4]=c*q+d*A+m*_,t[5]=f*q+M*A+b*_,t[6]=h*q+l*A+p*_,t[7]=s*q+v*A+g*_,t[8]=c*S+d*P+m*T,t[9]=f*S+M*P+b*T,t[10]=h*S+l*P+p*T,t[11]=s*S+v*P+g*T,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function A(t,n,r){var u=Math.sin(r),e=Math.cos(r),a=n[4],o=n[5],i=n[6],c=n[7],f=n[8],h=n[9],s=n[10],d=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=a*e+f*u,t[5]=o*e+h*u,t[6]=i*e+s*u,t[7]=c*e+d*u,t[8]=f*e-a*u,t[9]=h*e-o*u,t[10]=s*e-i*u,t[11]=d*e-c*u,t}function _(t,n,r){var u=Math.sin(r),e=Math.cos(r),a=n[0],o=n[1],i=n[2],c=n[3],f=n[8],h=n[9],s=n[10],d=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=a*e-f*u,t[1]=o*e-h*u,t[2]=i*e-s*u,t[3]=c*e-d*u,t[8]=a*u+f*e,t[9]=o*u+h*e,t[10]=i*u+s*e,t[11]=c*u+d*e,t}function S(t,n,r){var u=Math.sin(r),e=Math.cos(r),a=n[0],o=n[1],i=n[2],c=n[3],f=n[4],h=n[5],s=n[6],d=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=a*e+f*u,t[1]=o*e+h*u,t[2]=i*e+s*u,t[3]=c*e+d*u,t[4]=f*e-a*u,t[5]=h*e-o*u,t[6]=s*e-i*u,t[7]=d*e-c*u,t}function P(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function T(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function I(t,n,r){var u,e,a,o=r[0],c=r[1],f=r[2],h=Math.sqrt(o*o+c*c+f*f);return h<i?null:(o*=h=1/h,c*=h,f*=h,u=Math.sin(n),a=1-(e=Math.cos(n)),t[0]=o*o*a+e,t[1]=c*o*a+f*u,t[2]=f*o*a-c*u,t[3]=0,t[4]=o*c*a-f*u,t[5]=c*c*a+e,t[6]=f*c*a+o*u,t[7]=0,t[8]=o*f*a+c*u,t[9]=c*f*a-o*u,t[10]=f*f*a+e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function F(t,n){var r=Math.sin(n),u=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R(t,n){var r=Math.sin(n),u=Math.cos(n);return t[0]=u,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function E(t,n){var r=Math.sin(n),u=Math.cos(n);return t[0]=u,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function L(t,n,r){var u=n[0],e=n[1],a=n[2],o=n[3],i=u+u,c=e+e,f=a+a,h=u*i,s=u*c,d=u*f,M=e*c,l=e*f,v=a*f,m=o*i,b=o*c,p=o*f;return t[0]=1-(M+v),t[1]=s+p,t[2]=d-b,t[3]=0,t[4]=s-p,t[5]=1-(h+v),t[6]=l+m,t[7]=0,t[8]=d+b,t[9]=l-m,t[10]=1-(h+M),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function O(t,n){var r=new c(3),u=-n[0],e=-n[1],a=-n[2],o=n[3],i=n[4],f=n[5],h=n[6],s=n[7],d=u*u+e*e+a*a+o*o;return d>0?(r[0]=2*(i*o+s*u+f*a-h*e)/d,r[1]=2*(f*o+s*e+h*u-i*a)/d,r[2]=2*(h*o+s*a+i*e-f*u)/d):(r[0]=2*(i*o+s*u+f*a-h*e),r[1]=2*(f*o+s*e+h*u-i*a),r[2]=2*(h*o+s*a+i*e-f*u)),L(t,n,r),t}function k(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function D(t,n){var r=n[0],u=n[1],e=n[2],a=n[4],o=n[5],i=n[6],c=n[8],f=n[9],h=n[10];return t[0]=Math.sqrt(r*r+u*u+e*e),t[1]=Math.sqrt(a*a+o*o+i*i),t[2]=Math.sqrt(c*c+f*f+h*h),t}function V(t,n){var r=n[0]+n[5]+n[10],u=0;return r>0?(u=2*Math.sqrt(r+1),t[3]=.25*u,t[0]=(n[6]-n[9])/u,t[1]=(n[8]-n[2])/u,t[2]=(n[1]-n[4])/u):n[0]>n[5]&&n[0]>n[10]?(u=2*Math.sqrt(1+n[0]-n[5]-n[10]),t[3]=(n[6]-n[9])/u,t[0]=.25*u,t[1]=(n[1]+n[4])/u,t[2]=(n[8]+n[2])/u):n[5]>n[10]?(u=2*Math.sqrt(1+n[5]-n[0]-n[10]),t[3]=(n[8]-n[2])/u,t[0]=(n[1]+n[4])/u,t[1]=.25*u,t[2]=(n[6]+n[9])/u):(u=2*Math.sqrt(1+n[10]-n[0]-n[5]),t[3]=(n[1]-n[4])/u,t[0]=(n[8]+n[2])/u,t[1]=(n[6]+n[9])/u,t[2]=.25*u),t}function j(t,n,r,u){var e=n[0],a=n[1],o=n[2],i=n[3],c=e+e,f=a+a,h=o+o,s=e*c,d=e*f,M=e*h,l=a*f,v=a*h,m=o*h,b=i*c,p=i*f,g=i*h,y=u[0],w=u[1],x=u[2];return t[0]=(1-(l+m))*y,t[1]=(d+g)*y,t[2]=(M-p)*y,t[3]=0,t[4]=(d-g)*w,t[5]=(1-(s+m))*w,t[6]=(v+b)*w,t[7]=0,t[8]=(M+p)*x,t[9]=(v-b)*x,t[10]=(1-(s+l))*x,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function C(t,n,r,u,e){var a=n[0],o=n[1],i=n[2],c=n[3],f=a+a,h=o+o,s=i+i,d=a*f,M=a*h,l=a*s,v=o*h,m=o*s,b=i*s,p=c*f,g=c*h,y=c*s,w=u[0],x=u[1],q=u[2],A=e[0],_=e[1],S=e[2],P=(1-(v+b))*w,T=(M+y)*w,I=(l-g)*w,F=(M-y)*x,R=(1-(d+b))*x,E=(m+p)*x,L=(l+g)*q,O=(m-p)*q,k=(1-(d+v))*q;return t[0]=P,t[1]=T,t[2]=I,t[3]=0,t[4]=F,t[5]=R,t[6]=E,t[7]=0,t[8]=L,t[9]=O,t[10]=k,t[11]=0,t[12]=r[0]+A-(P*A+F*_+L*S),t[13]=r[1]+_-(T*A+R*_+O*S),t[14]=r[2]+S-(I*A+E*_+k*S),t[15]=1,t}function z(t,n){var r=n[0],u=n[1],e=n[2],a=n[3],o=r+r,i=u+u,c=e+e,f=r*o,h=u*o,s=u*i,d=e*o,M=e*i,l=e*c,v=a*o,m=a*i,b=a*c;return t[0]=1-s-l,t[1]=h+b,t[2]=d-m,t[3]=0,t[4]=h-b,t[5]=1-f-l,t[6]=M+v,t[7]=0,t[8]=d+m,t[9]=M-v,t[10]=1-f-s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function U(t,n,r,u,e,a,o){var i=1/(r-n),c=1/(e-u),f=1/(a-o);return t[0]=2*a*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*a*c,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(e+u)*c,t[10]=(o+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*a*2*f,t[15]=0,t}function B(t,n,r,u,e){var a,o=1/Math.tan(n/2);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=e&&e!==1/0?(a=1/(u-e),t[10]=(e+u)*a,t[14]=2*e*u*a):(t[10]=-1,t[14]=-2*u),t}function G(t,n,r,u){var e=Math.tan(n.upDegrees*Math.PI/180),a=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),c=2/(o+i),f=2/(e+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-(o-i)*c*.5,t[9]=(e-a)*f*.5,t[10]=u/(r-u),t[11]=-1,t[12]=0,t[13]=0,t[14]=u*r/(r-u),t[15]=0,t}function W(t,n,r,u,e,a,o){var i=1/(n-r),c=1/(u-e),f=1/(a-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(n+r)*i,t[13]=(e+u)*c,t[14]=(o+a)*f,t[15]=1,t}function Y(t,n,r,u){var e,a,o,c,f,h,s,d,M,l,m=n[0],b=n[1],p=n[2],g=u[0],y=u[1],w=u[2],x=r[0],q=r[1],A=r[2];return Math.abs(m-x)<i&&Math.abs(b-q)<i&&Math.abs(p-A)<i?v(t):(s=m-x,d=b-q,M=p-A,e=y*(M*=l=1/Math.sqrt(s*s+d*d+M*M))-w*(d*=l),a=w*(s*=l)-g*M,o=g*d-y*s,(l=Math.sqrt(e*e+a*a+o*o))?(e*=l=1/l,a*=l,o*=l):(e=0,a=0,o=0),c=d*o-M*a,f=M*e-s*o,h=s*a-d*e,(l=Math.sqrt(c*c+f*f+h*h))?(c*=l=1/l,f*=l,h*=l):(c=0,f=0,h=0),t[0]=e,t[1]=c,t[2]=s,t[3]=0,t[4]=a,t[5]=f,t[6]=d,t[7]=0,t[8]=o,t[9]=h,t[10]=M,t[11]=0,t[12]=-(e*m+a*b+o*p),t[13]=-(c*m+f*b+h*p),t[14]=-(s*m+d*b+M*p),t[15]=1,t)}function N(t,n,r,u){var e=n[0],a=n[1],o=n[2],i=u[0],c=u[1],f=u[2],h=e-r[0],s=a-r[1],d=o-r[2],M=h*h+s*s+d*d;M>0&&(h*=M=1/Math.sqrt(M),s*=M,d*=M);var l=c*d-f*s,v=f*h-i*d,m=i*s-c*h;return(M=l*l+v*v+m*m)>0&&(l*=M=1/Math.sqrt(M),v*=M,m*=M),t[0]=l,t[1]=v,t[2]=m,t[3]=0,t[4]=s*m-d*v,t[5]=d*l-h*m,t[6]=h*v-s*l,t[7]=0,t[8]=h,t[9]=s,t[10]=d,t[11]=0,t[12]=e,t[13]=a,t[14]=o,t[15]=1,t}function Q(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function X(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))}function H(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t}function Z(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}function K(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t}function J(t,n,r,u){return t[0]=n[0]+r[0]*u,t[1]=n[1]+r[1]*u,t[2]=n[2]+r[2]*u,t[3]=n[3]+r[3]*u,t[4]=n[4]+r[4]*u,t[5]=n[5]+r[5]*u,t[6]=n[6]+r[6]*u,t[7]=n[7]+r[7]*u,t[8]=n[8]+r[8]*u,t[9]=n[9]+r[9]*u,t[10]=n[10]+r[10]*u,t[11]=n[11]+r[11]*u,t[12]=n[12]+r[12]*u,t[13]=n[13]+r[13]*u,t[14]=n[14]+r[14]*u,t[15]=n[15]+r[15]*u,t}function $(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function tt(t,n){var r=t[0],u=t[1],e=t[2],a=t[3],o=t[4],c=t[5],f=t[6],h=t[7],s=t[8],d=t[9],M=t[10],l=t[11],v=t[12],m=t[13],b=t[14],p=t[15],g=n[0],y=n[1],w=n[2],x=n[3],q=n[4],A=n[5],_=n[6],S=n[7],P=n[8],T=n[9],I=n[10],F=n[11],R=n[12],E=n[13],L=n[14],O=n[15];return Math.abs(r-g)<=i*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(u-y)<=i*Math.max(1,Math.abs(u),Math.abs(y))&&Math.abs(e-w)<=i*Math.max(1,Math.abs(e),Math.abs(w))&&Math.abs(a-x)<=i*Math.max(1,Math.abs(a),Math.abs(x))&&Math.abs(o-q)<=i*Math.max(1,Math.abs(o),Math.abs(q))&&Math.abs(c-A)<=i*Math.max(1,Math.abs(c),Math.abs(A))&&Math.abs(f-_)<=i*Math.max(1,Math.abs(f),Math.abs(_))&&Math.abs(h-S)<=i*Math.max(1,Math.abs(h),Math.abs(S))&&Math.abs(s-P)<=i*Math.max(1,Math.abs(s),Math.abs(P))&&Math.abs(d-T)<=i*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(M-I)<=i*Math.max(1,Math.abs(M),Math.abs(I))&&Math.abs(l-F)<=i*Math.max(1,Math.abs(l),Math.abs(F))&&Math.abs(v-R)<=i*Math.max(1,Math.abs(v),Math.abs(R))&&Math.abs(m-E)<=i*Math.max(1,Math.abs(m),Math.abs(E))&&Math.abs(b-L)<=i*Math.max(1,Math.abs(b),Math.abs(L))&&Math.abs(p-O)<=i*Math.max(1,Math.abs(p),Math.abs(O))}var nt=y,rt=Z;function ut(){var t=new c(2);return c!=Float32Array&&(t[0]=0,t[1]=0),t}function et(t){var n=new c(2);return n[0]=t[0],n[1]=t[1],n}function at(t,n){var r=new c(2);return r[0]=t,r[1]=n,r}function ot(t,n){return t[0]=n[0],t[1]=n[1],t}function it(t,n,r){return t[0]=n,t[1]=r,t}function ct(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t}function ft(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function ht(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t}function st(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t}function dt(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function Mt(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function lt(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t}function vt(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t}function mt(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function bt(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t}function pt(t,n,r,u){return t[0]=n[0]+r[0]*u,t[1]=n[1]+r[1]*u,t}function gt(t,n){var r=n[0]-t[0],u=n[1]-t[1];return Math.sqrt(r*r+u*u)}function yt(t,n){var r=n[0]-t[0],u=n[1]-t[1];return r*r+u*u}function wt(t){var n=t[0],r=t[1];return Math.sqrt(n*n+r*r)}function xt(t){var n=t[0],r=t[1];return n*n+r*r}function qt(t,n){return t[0]=-n[0],t[1]=-n[1],t}function At(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function _t(t,n){var r=n[0],u=n[1],e=r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),t[0]=n[0]*e,t[1]=n[1]*e,t}function St(t,n){return t[0]*n[0]+t[1]*n[1]}function Pt(t,n,r){var u=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=u,t}function Tt(t,n,r,u){var e=n[0],a=n[1];return t[0]=e+u*(r[0]-e),t[1]=a+u*(r[1]-a),t}function It(t,n){n=n||1;var r=2*f()*Math.PI;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t}function Ft(t,n,r){var u=n[0],e=n[1];return t[0]=r[0]*u+r[2]*e,t[1]=r[1]*u+r[3]*e,t}function Rt(t,n,r){var u=n[0],e=n[1];return t[0]=r[0]*u+r[2]*e+r[4],t[1]=r[1]*u+r[3]*e+r[5],t}function Et(t,n,r){var u=n[0],e=n[1];return t[0]=r[0]*u+r[3]*e+r[6],t[1]=r[1]*u+r[4]*e+r[7],t}function Lt(t,n,r){var u=n[0],e=n[1];return t[0]=r[0]*u+r[4]*e+r[12],t[1]=r[1]*u+r[5]*e+r[13],t}function Ot(t,n,r,u){var e=n[0]-r[0],a=n[1]-r[1],o=Math.sin(u),i=Math.cos(u);return t[0]=e*i-a*o+r[0],t[1]=e*o+a*i+r[1],t}function kt(t,n){var r=t[0],u=t[1],e=n[0],a=n[1],o=r*r+u*u;o>0&&(o=1/Math.sqrt(o));var i=e*e+a*a;i>0&&(i=1/Math.sqrt(i));var c=(r*e+u*a)*o*i;return c>1?0:c<-1?Math.PI:Math.acos(c)}function Dt(t){return t[0]=0,t[1]=0,t}function Vt(t){return"vec2("+t[0]+", "+t[1]+")"}function jt(t,n){return t[0]===n[0]&&t[1]===n[1]}function Ct(t,n){var r=t[0],u=t[1],e=n[0],a=n[1];return Math.abs(r-e)<=i*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(u-a)<=i*Math.max(1,Math.abs(u),Math.abs(a))}var zt,Ut=wt,Bt=ft,Gt=ht,Wt=st,Yt=gt,Nt=yt,Qt=xt,Xt=(zt=ut(),function(t,n,r,u,e,a){var o,i;for(n||(n=2),r||(r=0),i=u?Math.min(u*n+r,t.length):t.length,o=r;o<i;o+=n)zt[0]=t[o],zt[1]=t[o+1],e(zt,zt,a),t[o]=zt[0],t[o+1]=zt[1];return t});function Ht(){var t=new c(3);return c!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function Zt(t){var n=new c(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function Kt(t){var n=t[0],r=t[1],u=t[2];return Math.sqrt(n*n+r*r+u*u)}function Jt(t,n,r){var u=new c(3);return u[0]=t,u[1]=n,u[2]=r,u}function $t(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function tn(t,n,r,u){return t[0]=n,t[1]=r,t[2]=u,t}function nn(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t}function rn(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}function un(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t}function en(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t}function an(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function on(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function cn(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t}function fn(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t}function hn(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function sn(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t}function dn(t,n,r,u){return t[0]=n[0]+r[0]*u,t[1]=n[1]+r[1]*u,t[2]=n[2]+r[2]*u,t}function Mn(t,n){var r=n[0]-t[0],u=n[1]-t[1],e=n[2]-t[2];return Math.sqrt(r*r+u*u+e*e)}function ln(t,n){var r=n[0]-t[0],u=n[1]-t[1],e=n[2]-t[2];return r*r+u*u+e*e}function vn(t){var n=t[0],r=t[1],u=t[2];return n*n+r*r+u*u}function mn(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function bn(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function pn(t,n){var r=n[0],u=n[1],e=n[2],a=r*r+u*u+e*e;return a>0&&(a=1/Math.sqrt(a)),t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function gn(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function yn(t,n,r){var u=n[0],e=n[1],a=n[2],o=r[0],i=r[1],c=r[2];return t[0]=e*c-a*i,t[1]=a*o-u*c,t[2]=u*i-e*o,t}function wn(t,n,r,u){var e=n[0],a=n[1],o=n[2];return t[0]=e+u*(r[0]-e),t[1]=a+u*(r[1]-a),t[2]=o+u*(r[2]-o),t}function xn(t,n,r,u,e,a){var o=a*a,i=o*(2*a-3)+1,c=o*(a-2)+a,f=o*(a-1),h=o*(3-2*a);return t[0]=n[0]*i+r[0]*c+u[0]*f+e[0]*h,t[1]=n[1]*i+r[1]*c+u[1]*f+e[1]*h,t[2]=n[2]*i+r[2]*c+u[2]*f+e[2]*h,t}function qn(t,n,r,u,e,a){var o=1-a,i=o*o,c=a*a,f=i*o,h=3*a*i,s=3*c*o,d=c*a;return t[0]=n[0]*f+r[0]*h+u[0]*s+e[0]*d,t[1]=n[1]*f+r[1]*h+u[1]*s+e[1]*d,t[2]=n[2]*f+r[2]*h+u[2]*s+e[2]*d,t}function An(t,n){n=n||1;var r=2*f()*Math.PI,u=2*f()-1,e=Math.sqrt(1-u*u)*n;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t[2]=u*n,t}function _n(t,n,r){var u=n[0],e=n[1],a=n[2],o=r[3]*u+r[7]*e+r[11]*a+r[15];return o=o||1,t[0]=(r[0]*u+r[4]*e+r[8]*a+r[12])/o,t[1]=(r[1]*u+r[5]*e+r[9]*a+r[13])/o,t[2]=(r[2]*u+r[6]*e+r[10]*a+r[14])/o,t}function Sn(t,n,r){var u=n[0],e=n[1],a=n[2];return t[0]=u*r[0]+e*r[3]+a*r[6],t[1]=u*r[1]+e*r[4]+a*r[7],t[2]=u*r[2]+e*r[5]+a*r[8],t}function Pn(t,n,r){var u=r[0],e=r[1],a=r[2],o=r[3],i=n[0],c=n[1],f=n[2],h=e*f-a*c,s=a*i-u*f,d=u*c-e*i,M=e*d-a*s,l=a*h-u*d,v=u*s-e*h,m=2*o;return h*=m,s*=m,d*=m,M*=2,l*=2,v*=2,t[0]=i+h+M,t[1]=c+s+l,t[2]=f+d+v,t}function Tn(t,n,r,u){var e=[],a=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],a[0]=e[0],a[1]=e[1]*Math.cos(u)-e[2]*Math.sin(u),a[2]=e[1]*Math.sin(u)+e[2]*Math.cos(u),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t}function In(t,n,r,u){var e=[],a=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],a[0]=e[2]*Math.sin(u)+e[0]*Math.cos(u),a[1]=e[1],a[2]=e[2]*Math.cos(u)-e[0]*Math.sin(u),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t}function Fn(t,n,r,u){var e=[],a=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],a[0]=e[0]*Math.cos(u)-e[1]*Math.sin(u),a[1]=e[0]*Math.sin(u)+e[1]*Math.cos(u),a[2]=e[2],t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t}function Rn(t,n){var r=Jt(t[0],t[1],t[2]),u=Jt(n[0],n[1],n[2]);pn(r,r),pn(u,u);var e=gn(r,u);return e>1?0:e<-1?Math.PI:Math.acos(e)}function En(t){return t[0]=0,t[1]=0,t[2]=0,t}function Ln(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function On(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function kn(t,n){var r=t[0],u=t[1],e=t[2],a=n[0],o=n[1],c=n[2];return Math.abs(r-a)<=i*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(u-o)<=i*Math.max(1,Math.abs(u),Math.abs(o))&&Math.abs(e-c)<=i*Math.max(1,Math.abs(e),Math.abs(c))}var Dn=rn,Vn=un,jn=en,Cn=Mn,zn=ln,Un=Kt,Bn=vn,Gn=function(){var t=Ht();return function(n,r,u,e,a,o){var i,c;for(r||(r=3),u||(u=0),c=e?Math.min(e*r+u,n.length):n.length,i=u;i<c;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],a(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2];return n}}();function Wn(){var t=new c(4);return c!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Yn(t){var n=new c(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function Nn(t,n,r,u){var e=new c(4);return e[0]=t,e[1]=n,e[2]=r,e[3]=u,e}function Qn(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Xn(t,n,r,u,e){return t[0]=n,t[1]=r,t[2]=u,t[3]=e,t}function Hn(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t}function Zn(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}function Kn(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t}function Jn(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t}function $n(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function tr(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function nr(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t}function rr(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t}function ur(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function er(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t}function ar(t,n,r,u){return t[0]=n[0]+r[0]*u,t[1]=n[1]+r[1]*u,t[2]=n[2]+r[2]*u,t[3]=n[3]+r[3]*u,t}function or(t,n){var r=n[0]-t[0],u=n[1]-t[1],e=n[2]-t[2],a=n[3]-t[3];return Math.sqrt(r*r+u*u+e*e+a*a)}function ir(t,n){var r=n[0]-t[0],u=n[1]-t[1],e=n[2]-t[2],a=n[3]-t[3];return r*r+u*u+e*e+a*a}function cr(t){var n=t[0],r=t[1],u=t[2],e=t[3];return Math.sqrt(n*n+r*r+u*u+e*e)}function fr(t){var n=t[0],r=t[1],u=t[2],e=t[3];return n*n+r*r+u*u+e*e}function hr(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function sr(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function dr(t,n){var r=n[0],u=n[1],e=n[2],a=n[3],o=r*r+u*u+e*e+a*a;return o>0&&(o=1/Math.sqrt(o)),t[0]=r*o,t[1]=u*o,t[2]=e*o,t[3]=a*o,t}function Mr(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function lr(t,n,r,u){var e=r[0]*u[1]-r[1]*u[0],a=r[0]*u[2]-r[2]*u[0],o=r[0]*u[3]-r[3]*u[0],i=r[1]*u[2]-r[2]*u[1],c=r[1]*u[3]-r[3]*u[1],f=r[2]*u[3]-r[3]*u[2],h=n[0],s=n[1],d=n[2],M=n[3];return t[0]=s*f-d*c+M*i,t[1]=-h*f+d*o-M*a,t[2]=h*c-s*o+M*e,t[3]=-h*i+s*a-d*e,t}function vr(t,n,r,u){var e=n[0],a=n[1],o=n[2],i=n[3];return t[0]=e+u*(r[0]-e),t[1]=a+u*(r[1]-a),t[2]=o+u*(r[2]-o),t[3]=i+u*(r[3]-i),t}function mr(t,n){var r,u,e,a,o,i;n=n||1;do{o=(r=2*f()-1)*r+(u=2*f()-1)*u}while(o>=1);do{i=(e=2*f()-1)*e+(a=2*f()-1)*a}while(i>=1);var c=Math.sqrt((1-o)/i);return t[0]=n*r,t[1]=n*u,t[2]=n*e*c,t[3]=n*a*c,t}function br(t,n,r){var u=n[0],e=n[1],a=n[2],o=n[3];return t[0]=r[0]*u+r[4]*e+r[8]*a+r[12]*o,t[1]=r[1]*u+r[5]*e+r[9]*a+r[13]*o,t[2]=r[2]*u+r[6]*e+r[10]*a+r[14]*o,t[3]=r[3]*u+r[7]*e+r[11]*a+r[15]*o,t}function pr(t,n,r){var u=n[0],e=n[1],a=n[2],o=r[0],i=r[1],c=r[2],f=r[3],h=f*u+i*a-c*e,s=f*e+c*u-o*a,d=f*a+o*e-i*u,M=-o*u-i*e-c*a;return t[0]=h*f+M*-o+s*-c-d*-i,t[1]=s*f+M*-i+d*-o-h*-c,t[2]=d*f+M*-c+h*-i-s*-o,t[3]=n[3],t}function gr(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function yr(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function wr(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function xr(t,n){var r=t[0],u=t[1],e=t[2],a=t[3],o=n[0],c=n[1],f=n[2],h=n[3];return Math.abs(r-o)<=i*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-c)<=i*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(e-f)<=i*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(a-h)<=i*Math.max(1,Math.abs(a),Math.abs(h))}var qr=Zn,Ar=Kn,_r=Jn,Sr=or,Pr=ir,Tr=cr,Ir=fr,Fr=function(){var t=Wn();return function(n,r,u,e,a,o){var i,c;for(r||(r=4),u||(u=0),c=e?Math.min(e*r+u,n.length):n.length,i=u;i<c;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],a(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}();r.d(n,"a",function(){return u}),r.d(n,"b",function(){return e}),r.d(n,"c",function(){return a}),r.d(n,"d",function(){return o})},1:function(t,n,r){"use strict";r.d(n,"d",function(){return o}),r.d(n,"a",function(){return i}),r.d(n,"c",function(){return c}),r.d(n,"b",function(){return h});var u=r(0);"undefined"!=typeof Float32Array?Float32Array:Array;var e='This page requires a browser that supports WebGL.<br/>\n<a href="http://get.webgl.org">Click here to upgrade your browser.</a>',a='It doesn\'t appear your computer can support WebGL.<br/>\n<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';function o(t,n){function r(n){var r=t.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n    <td align="center">\n    <div style="display: table-cell; vertical-align: middle;">\n    <div>'.concat(n,"</div>\n    </div>\n    </td></tr></table>"))}if(!window.WebGLRenderingContext)return r(e),null;var u=function(t,n){for(var r=["webgl","experimental-webgl","webkit-3d","moz-webgl"],u=null,e=0;e<r.length;++e){try{u=t.getContext(r[e],n)}catch(t){}if(u)break}return u}(t,n);return u||r(a),u}function i(t,n,r){var u=t.createShader(t.VERTEX_SHADER);if(t.shaderSource(u,n),t.compileShader(u),!t.getShaderParameter(u,t.COMPILE_STATUS)){var e="Vertex shader failed to compile.  The error log is:".concat(t.getShaderInfoLog(u));return console.error(e),-1}var a=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(a,r),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){var o="Fragment shader failed to compile.  The error log is:".concat(t.getShaderInfoLog(a));return console.error(o),-1}var i=t.createProgram();if(t.attachShader(i,u),t.attachShader(i,a),t.linkProgram(i),!t.getProgramParameter(i,t.LINK_STATUS)){var c="Shader program failed to link.  The error log is:".concat(t.getProgramInfoLog(i));return console.error(c),-1}return i}function c(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Float32Array,r=t[0].length,u=t.length,e=new n(r*u),a=0,o=0;o<u;o++)for(var i=0;i<r;i++)e[a++]=t[o][i];return e}var f={fv3:{},fv4:{},uv3:{},uv4:{}};function h(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fv4";if(f[n][t])return f[n][t];var r,e=parseInt(t.charAt(1)+t.charAt(2),16),a=parseInt(t.charAt(3)+t.charAt(4),16),o=parseInt(t.charAt(5)+t.charAt(6),16);return r="fv3"===n?u.c.fromValues(e/255,a/255,o/255):"fv4"===n?u.d.fromValues(e/255,a/255,o/255,1):"uv3"===n?new Uint8Array([e,a,o]):new Uint8Array([e,a,o,255]),f[n][t]=r,f[n][t]}},13:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},14:function(t,n){function r(t,n){for(var r=0;r<n.length;r++){var u=n[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}t.exports=function(t,n,u){return n&&r(t.prototype,n),u&&r(t,u),t}},34:function(t,n){t.exports="attribute vec4 vPosition;\nvoid main() {\n\tgl_PointSize = 1.0;\n\tgl_Position = vPosition;\n}\n"},35:function(t,n){t.exports="precision mediump float;\nvoid main() {\n\tgl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n}\n"},77:function(t,n,r){"use strict";r.r(n);var u=r(13),e=r.n(u),a=r(14),o=r.n(a),i=r(1),c=r(0),f=r(34),h=r.n(f),s=r(35),d=r.n(s),M=("undefined"!=typeof Float32Array?Float32Array:Array,5),l=2;!function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:M;if(u<=0)for(var e=0;e<3;e++)n.forward(r),n.left(120);else t(n,r/2,u-1),n.forward(r/2),t(n,r/2,u-1),n.forward(-r/2),n.left(60),n.forward(r/2),n.right(60),t(n,r/2,u-1),n.left(60),n.forward(-r/2),n.right(60)}(new(function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e()(this,t),this.theta=u,this.x=n,this.y=r,this._penStatus="down",this._points=[[c.b.fromValues(n,r)]],this._initGl(),this._timer=null}return o()(t,[{key:"forward",value:function(t){var n=this;if(this.x+=t*Math.cos(Math.PI*this.theta/180),this.y+=t*Math.sin(Math.PI*this.theta/180),"down"===this._penStatus){var r=this._points;r[r.length-1].push(c.b.fromValues(this.x,this.y)),clearTimeout(this._timer),this._timer=setTimeout(function(){n._render()})}}},{key:"right",value:function(t){this.theta+=-1*t}},{key:"left",value:function(t){this.theta+=t}},{key:"pen",value:function(t){if(this._penStatus=t,"up"===t&&0!==this._points[this._points.length-1].length)this._points.push([]);else if("down"===t){this._points[this._points.length-1][0]=c.b.fromValues(this.x,this.y)}}},{key:"_initGl",value:function(){var t=document.getElementById("gl-canvas"),n=Object(i.d)(t);n||console.error("WebGL isn't available"),n.viewport(0,0,t.width,t.height),n.clearColor(1,1,1,1);var r=Object(i.a)(n,h.a,d.a);n.useProgram(r),this._gl=n,this._program=r}},{key:"_render",value:function(){var t=this._gl;t.clear(t.COLOR_BUFFER_BIT);for(var n=t.getAttribLocation(this._program,"vPosition"),r=0;r<this._points.length;r++){var u=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,Object(i.c)(this._points[r]),t.STATIC_DRAW),t.vertexAttribPointer(n,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(n),t.drawArrays(t.LINE_STRIP,0,this._points[r].length)}}}]),t}())(-1,-1,0))}});